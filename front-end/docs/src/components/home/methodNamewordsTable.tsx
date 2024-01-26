import React, { useState } from "react";
import axios from 'axios'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import EditableCell from "./Cell";
import { StatTable } from "./table";
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';

const useStyles = makeStyles({
  root: {
    "&: table": {
      borderCollapse: "collapse",
      width: "100%"
    }
  }
});

interface MethodNameWordField {
  sampleStatTable: {};
  sampleMethodField: string;
}
export default function BasicTable(props: MethodNameWordField) {
  const { sampleStatTable, sampleMethodField } = props;
  // console.log("sampleStatTable",sampleStatTable)
  // console.log("methodField",methodField)
  const classes = useStyles();
  const [statTable, setStatTable] = useState<StatTable>(sampleStatTable);
  const [methodField, setMethodField] = useState(sampleMethodField);
  console.log("statTable",statTable)
  

  function postMethodWords(statTable,methodField){
    const wordsInfo=JSON.stringify({'words':statTable.rows});
    console.log('wordsInfo!!!',wordsInfo);
    axios.post('http://localhost:5000/words',wordsInfo)
      .then((response)=>{
        console.log(response.data);
      });
  };

  return (
    <TableContainer component={Paper} className={classes.root}>
      <Button 
        endIcon={<SendIcon />} 
        variant="contained"
        size="large"
        onClick={() => {
          postMethodWords(statTable);
          alert("词根表已上传！")
        }}
      >
        {methodField}
      </Button>
      <Table aria-label="simple table">
        <TableBody>
          {statTable.rows.map((cell, cellIndex) => (
            <TableRow>
              <EditableCell
                cell={cell}
                setCell={(newCellValue) =>
                  setStatTable({
                    ...statTable,
                    rows: statTable.rows.map((c, index) =>
                      index === cellIndex ? newCellValue : c
                    )
                  })
                }
                deleteCell={() =>
                  setStatTable({
                    ...statTable,
                    rows: statTable.rows.filter(
                      (r, index) => index !== cellIndex
                    )
                  })
                }
              />
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Button 
        color="primary" 
        startIcon={<AddIcon />} 
        variant="h6"
        onClick={() =>
          setStatTable({
            ...statTable,
            rows: [...statTable.rows, { label: "New Words" }]
          })
        }
      >
        添加新词
      </Button>
    </TableContainer>
   
  );
}



