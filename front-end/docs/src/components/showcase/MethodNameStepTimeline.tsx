import * as React from 'react';
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import WbSunny from '@mui/icons-material/WbSunny';
import Button from '@mui/material/Button';
import GradientText from 'docs/src/components/typography/GradientText';

const primary = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#80BFFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
  1000: '#132F4C',
};
const primaryDark = {
  50: '#E2EDF8',
  100: '#CEE0F3',
  200: '#91B9E3',
  300: '#5090D3',
  400: '#265D97',
  500: '#1E4976',
  600: '#173A5E',
  700: '#132F4C',
  800: '#001E3C',
  900: '#0A1929',
};
const grey = {
  50: '#F3F6F9',
  100: '#EAEEF3',
  200: '#E5E8EC',
  300: '#D7DCE1',
  400: '#BFC7CF',
  500: '#AAB4BE',
  600: '#96A3B0',
  700: '#8796A5',
  800: '#5A6978',
  900: '#3D4752',
};

export default function BasicTimeline() {
  /*
   * Note: this demo use `theme.palette.mode` from `useTheme` to make dark mode works in the documentation only.
   *
   * Normally, you would implement dark mode via internal state and/or system preference at the root of the application.
   * For more detail about toggling dark mode: https://mui.com/customization/palette/#toggling-color-mode
   */
  const globalTheme = useTheme();
  const mode = globalTheme.palette.mode;
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary,
          ...(mode === 'light' && {
            text: {
              primary: grey[900],
              secondary: grey[800],
            },
          }),
          ...(mode === 'dark' && {
            text: {
              primary: '#fff',
              secondary: grey[500],
            },
          }),
          divider: mode === 'dark' ? primaryDark[500] : grey[200],
          background: {
            paper: mode === 'dark' ? primaryDark[800] : '#fff',
          },
        },
        shape: {
          borderRadius: 10,
        },
        spacing: 10,
        typography: {
          fontFamily: ['-apple-system', 'BlinkMacSystemFont', 'sans-serif'].join(','),
          fontWeightRegular: 500,
        },
        components: {
          // @ts-ignore
          MuiTimelineItem: {
            styleOverrides: {
              root: {
                minHeight: 36,
              },
            },
          },
          MuiTimelineDot: {
            styleOverrides: {
              root: {
                zIndex: 1,
                padding: 3,
                boxShadow: 'none',
                margin: '15px 0',
                border: 'none',
                backgroundColor: primary[500],
              },
            },
          },
          MuiTimelineConnector: {
            styleOverrides: {
              root: {
                margin: '-15px 0',
                backgroundColor: mode === 'dark' ? primaryDark[700] : primary[50],
              },
            },
          },
          MuiTimelineContent: {
            styleOverrides: {
              root: {
                fontSize: '0.875rem',
                color: mode === 'dark' ? grey[100] : grey[800],
              },
            },
          },
        },
      }),
    [mode],
  );
  return (
    <ThemeProvider theme={theme}>
        <Card  variant="solid" sx={{ p: 2}}>  
          <Typography
            component="span"
            color="text.primary"
            variant="body3"
            fontWeight="bold"
            display="block"
            textAlign="center"
            sx={{ my: 5 }}
          > 
             基于词根表和样本程序的Method命名精准推荐和审查工具能够根据Method功能自动生成与之相匹配的命名方法，
             并支持对已有程序中不符合词根表规范和样本程序的Method命名自动审查，提高程序的可读性和可理解性。
             用户可通过词根表管理功能上传和修改词根表，此外，本工具支持文本输入和文件上传两种方式，
             具体操作可参考下方使用说明。

          </Typography>

          <Typography
            component="span"
            color="text.primary"
            variant="h6"
            fontWeight="bold"
            display="block"
           
            sx={{ my: 0 ,mt:9, mb:-2}}
          > 
            <GradientText>Method命名精准推荐和审查工具使用方法说明</GradientText>          
          </Typography>
        </Card>


        <Card variant="solid" sx={{ my:0, p: 2, display: 'flex', alignItems: 'flex-start' }}>  
          <Box sx={{ ml: 2, flex: 1 }}>            
            <Box sx={{ display: 'flex' }}>
              <Typography
                variant="body2"
                sx={{
                  p: 0.5,
                  borderRadius: 0.5,
                  minWidth: 28,
                  textAlign: 'center',
                  bgcolor: mode === 'dark' ? 'primary.700' : 'primary.50',
                  color: mode === 'dark' ? '#fff' : 'primary.main',
                  typography: 'body2',
                }}
              >
                词根表管理
              </Typography>
            </Box>
            <Timeline
              sx={{
                pl: 0,
                py: 0,
                my: 2,
                '& .MuiTimelineItem-root:before': { display: 'none' },
              }}
            > 
            
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  选择词相应的根表领域，同时支持自定义词根领域
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>对词根表进行增加、删除和修改操作</TimelineContent>
              </TimelineItem>
              
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                </TimelineSeparator>
                <TimelineContent>完成词根表编辑后点击领域按钮提交结果</TimelineContent>
              </TimelineItem>
            </Timeline>
          </Box>

          <Box sx={{ ml: 2, flex: 1 }}>            
            <Box sx={{ display: 'flex' }}>
              <Typography
                variant="body2"
                sx={{
                  p: 0.5,
                  borderRadius: 0.5,
                  minWidth: 28,
                  textAlign: 'center',
                  bgcolor: mode === 'dark' ? 'primary.700' : 'primary.50',
                  color: mode === 'dark' ? '#fff' : 'primary.main',
                  typography: 'body2',
                }}
              >
                文本输入方式
              </Typography>
            </Box>
            <Timeline
              sx={{
                pl: 0,
                py: 0,
                my: 2,
                '& .MuiTimelineItem-root:before': { display: 'none' },
              }}
            > 

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>在输入框内输入代码段（支持多段代码输入）</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>点击输入框下方“开始审查和推荐”</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                </TimelineSeparator>
                <TimelineContent>输入框上方获取代码段的审查和推荐结果 </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Box>

          <Box sx={{ ml: 2, flex: 1 }}>
            <Box sx={{ display: 'flex' }}>
              <Typography
                color={mode === 'dark' ? 'grey.400' : 'text.secondary'}
                variant="body2"
                sx={{
                  p: 0.5,
                  borderRadius: 0.5,
                  minWidth: 28,
                  textAlign: 'center',
                  bgcolor: mode === 'dark' ? 'primary.700' : 'primary.50',
                  color: mode === 'dark' ? '#fff' : 'primary.main',
                  typography: 'body2',
                }}
              >
                文件上传方式
              </Typography>
              <InfoOutlined fontSize="small" sx={{ ml: 'auto', color: 'grey.500' }} />
            </Box>

            <Timeline
              sx={{
                pl: 0,
                py: 0,
                my: 2,
                '& .MuiTimelineItem-root:before': { display: 'none' },
              }}
            >

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  点击“上传文件”选取本地代码文件（支持多文本和压缩包上传）
                  <Button variant="outlined" component="label" sx={{top: 0,left:'0%', width:100}}>
                    上传文件
                    <input hidden accept="image/*" multiple type="file" />
                  </Button>
                </TimelineContent>

              </TimelineItem>
              
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                </TimelineSeparator>
                <TimelineContent>在浏览器中获得代码审查和推荐下载链接 </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Box>

          

        </Card>




      

    </ThemeProvider>
  );
}
