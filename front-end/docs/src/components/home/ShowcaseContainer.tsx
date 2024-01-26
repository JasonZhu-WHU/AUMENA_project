import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import NoSsr from '@mui/material/NoSsr';
import Paper, { PaperProps } from '@mui/material/Paper';

export default function ShowcaseContainer({
  preview,
  previewSx,
  code,
  codeSx,
  sx,
}: {
  preview?: React.ReactNode;
  previewSx?: PaperProps['sx'];
  code?: React.ReactNode;
  codeSx?: BoxProps['sx'];
  sx?: BoxProps['sx'];
}) {
  return (
    <Fade in timeout={700}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          ...sx,
        }}
      >
        <Paper
          variant="outlined"
<<<<<<< HEAD
          sx={{
            display: 'flex',
            position: 'relative',
            height: 180,
            justifyContent: 'center',
            alignItems: 'center',
            p: 2,
            borderColor: (theme) =>
              theme.palette.mode === 'dark' ? 'primaryDark.700' : 'primaryDark.900',
            bgcolor: 'primaryDark.800',
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            ...previewSx,
          }}
=======
          sx={[
            {
              display: 'flex',
              position: 'relative',
              minHeight: 220,
              justifyContent: 'center',
              alignItems: 'center',
              p: 2,
              bgcolor: 'grey.50',
              borderColor: 'divider',
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
            },
            (theme) =>
              theme.applyDarkStyles({
                bgcolor: alpha(theme.palette.primaryDark[800], 0.5),
                borderColor: 'divider',
              }),
            ...(Array.isArray(previewSx) ? previewSx : [previewSx]),
          ]}
>>>>>>> 5cbe910ddcef8a39a7318378ef779c12aecc0bbc
        >
          {preview}
        </Paper>
        <Box
<<<<<<< HEAD
          sx={{
            flexGrow: 0,
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '100%',
            position: 'relative',
            height: 500,
            borderWidth: '0 1px 1px 1px',
            borderStyle: 'solid',
            borderColor: (theme) =>
              theme.palette.mode === 'dark' ? 'primaryDark.700' : 'primaryDark.900',
            bgcolor: 'primaryDark.800',
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            ...codeSx,
          }}
=======
          sx={[
            {
              flexGrow: 0,
              display: 'flex',
              flexDirection: 'column',
              maxWidth: '100%',
              position: 'relative',
              minHeight: 200,
              borderWidth: '0 1px 1px 1px',
              borderStyle: 'solid',
              borderColor: 'divider',
              bgcolor: 'common.black',
              borderBottomLeftRadius: 12,
              borderBottomRightRadius: 12,
            },
            ...(Array.isArray(codeSx) ? codeSx : [codeSx]),
          ]}
>>>>>>> 5cbe910ddcef8a39a7318378ef779c12aecc0bbc
        >
          <NoSsr>{code}</NoSsr>
        </Box>


        
      </Box>
    </Fade>
  );
}
