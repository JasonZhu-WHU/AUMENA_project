import * as React from 'react';
import Button from '@mui/material/Button';
import KeyboardArrowRightRounded from '@mui/icons-material/KeyboardArrowRightRounded';

export default function MethodNameRunButton() {
  return (
    <React.Fragment>
      <Button
        onClick={() => {
          alert('running...');
        }}
        noLinkStyle
        size="large"
        variant="contained"
        endIcon={<KeyboardArrowRightRounded />}
        sx={{top: -30, left:'0%', width:200,}}
      >
        开始审查和推荐
      </Button>
    </React.Fragment>
  );
}
