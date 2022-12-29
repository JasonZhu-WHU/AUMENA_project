# import sys
import os
# import io
import json
import torch
import psycopg2
from flask import Flask,render_template,jsonify,send_from_directory,request
from flask_cors import CORS
from openprompt import PromptDataLoader, PromptForGeneration
from openprompt.data_utils import InputExample
from openprompt.plms import T5TokenizerWrapper
from openprompt.prompts import PrefixTuningTemplate,SoftTemplate
from tqdm import tqdm
from transformers import (AdamW, get_linear_schedule_with_warmup,
						  RobertaConfig, RobertaModel, RobertaTokenizer, T5Config, T5ForConditionalGeneration, AutoTokenizer, AutoModel)



app=Flask(__name__)
CORS(app)


# read model codet5-base RobertaTokenizer
model_config = T5Config.from_pretrained("Salesforce/codet5-base")
tokenizer = RobertaTokenizer.from_pretrained("Salesforce/codet5-base")
plm = T5ForConditionalGeneration.from_pretrained("Salesforce/codet5-base", config=model_config)
WrapperClass = T5TokenizerWrapper

# define template
promptTemplate = SoftTemplate(model=plm, tokenizer=tokenizer, text='Java Code: {"placeholder":"text_a"} Class Name: {"placeholder":"text_b"} ; Method Name: {"mask"} ', initialize_from_vocab=True, num_tokens=50)

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model = PromptForGeneration(plm=plm, template=promptTemplate, freeze_plm=False, tokenizer=tokenizer, plm_eval_mode=False)
model.to(device)
model.eval()

load_model_path = 'AUMENA/Models/gtnm.bin'
model.load_state_dict(torch.load(load_model_path))

@app.route('/',methods=['GET','POST'])
def index():
	# return{'INPUT CODE':1000}
	print('flask!!!!!!!!!!')
	# codeInfo=json.loads(request.get_data(as_text=True))
	# print(codeInfo)
	result_dict={}
	keystr='methodName'
	for i in range(5):
		result_dict[keystr+str(i+1)]=keystr+str(i+1)
	# print('input_code:',result_dict)
	return result_dict

# 根据输入code，输出方法命名
@app.route('/input_code',methods=['GET','POST'])
def input_code_result():
	codeInfo=json.loads(request.get_data(as_text=True))
	print(codeInfo)
	# preprocess input code
	method_body = codeInfo['code']
	# method_body = method_body.replaceAll ("\t ", " ")
	# method_body = method_body.replaceAll ("\n ", " ")
	# method_body = method_body.replaceAll (" + ", " ")
	data_examples = [InputExample(
		guid = 0,
		text_a = method_body,
		text_b = '',
		tgt_text = 'Method Name',
	)]
	print(data_examples)
	dataloader = PromptDataLoader(
		dataset=data_examples,
		tokenizer=tokenizer,
		template=promptTemplate,
		tokenizer_wrapper_class=WrapperClass,
		max_seq_length=512,
		decoder_max_length=16,
		shuffle=False,
		teacher_forcing=False,
		predict_eos_token=True,
		batch_size=16
	)
	generated_texts = []
	print('predicting.....')
	for batch in tqdm(dataloader, total=len(dataloader)):
		batch = batch.to(device)
		with torch.no_grad():
			_, output_sentence = model.generate(batch)

			generated_texts.extend(output_sentence)
	predicted_tokens = generated_texts[0].split(' ')
	for i in range(len(predicted_tokens)):
		if i >= 1:
			predicted_tokens[i] = predicted_tokens[i][0].upper() + predicted_tokens[i][1:]
	predicted_name = ''.join(predicted_tokens)
	result_dict = {}
	result_dict['methodName'] = predicted_name
	print('/input_code:',result_dict)
	return result_dict

# 词根表
@app.route('/words',methods=['GET','POST'])
def get_word_field():
	# print('/words!!!!')
	wordsInfo=json.loads(request.get_data(as_text=True))
	word_list=[]
	for word_i in wordsInfo['words']:
		word_list.append(word_i['label'])
	# print(word_list)
	result_dict={'file_path': "xxxxx"}
	# print('/words:',result_dict)
	return result_dict


if __name__=='__main__':
	app.run('127.0.0.1', port=3000, debug=True)