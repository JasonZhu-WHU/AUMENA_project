import * as React from 'react';
import Button from '@mui/material/Button';

export default function MethodNameUploadButton() {
  return (
    <React.Fragment>
      <Button variant="outlined" component="label" size="large" sx={{top: 60,left:'20%'}}>
        上传词根表
        <input hidden accept="image/*" multiple type="file" />
      </Button>

      <Button variant="outlined" component="label" size="large" sx={{top: 60,left:'40%'}}>
        上传文件
        <input hidden accept="image/*" multiple type="file" />
      </Button>
    </React.Fragment>
  );
}
