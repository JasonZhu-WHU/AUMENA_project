import * as React from 'react';
import { useState } from 'react';
import axios from 'axios'
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import KeyboardArrowRightRounded from '@mui/icons-material/KeyboardArrowRightRounded';
import Typography from '@mui/material/Typography';
import HighlightedCode from 'docs/src/modules/components/HighlightedCode';
import { getDesignTokens, getThemedComponents } from 'docs/src/modules/brandingTheme';
import MarkdownElement from 'docs/src/components/markdown/MarkdownElement';
import MaterialDesignDemo, { componentCode } from 'docs/src/components/home/MaterialDesignDemo';
import ShowcaseContainer from 'docs/src/components/home/ShowcaseContainer';
import PointerContainer, { Data } from 'docs/src/components/home/ElementPointer';
import TouchAppRounded from '@mui/icons-material/TouchAppRounded';
import WbSunny from '@mui/icons-material/WbSunny';
import StylingInfo from 'docs/src/components/action/StylingInfo';
import FlashCode from 'docs/src/components/animation/FlashCode';
// import MethodNameStepTimeline from '../showcase/MethodNameStepTimeline';
import TextField from '@mui/material/TextField';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MethodNameRunButton from '../showcase/MethodNameRunButton'

const darkDesignTokens = getDesignTokens('dark');

let darkBrandingTheme = createTheme(darkDesignTokens);

darkBrandingTheme = createTheme(darkBrandingTheme, {
  components: {
    ...getThemedComponents(darkBrandingTheme).components,
    MuiButtonBase: {
      defaultProps: {
        disableTouchRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 40,
          padding: darkBrandingTheme.spacing('2px', 1),
        },
        sizeSmall: {
          fontSize: darkBrandingTheme.typography.pxToRem(12),
          lineHeight: 18 / 12,
        },
        text: {
          color: darkBrandingTheme.palette.grey[400],
        },
        outlined: {
          color: '#fff',
          backgroundColor: darkBrandingTheme.palette.primary[700],
          borderColor: darkBrandingTheme.palette.primary[500],
          '&:hover': {
            backgroundColor: darkBrandingTheme.palette.primary[700],
          },
        },
      },
    },
  },
});

const lineMapping: Record<string, number | number[]> = {
  avatar: 2,
  divider: 13,
  chip: 20,
  stack: 3,
  iconButton: 9,
  card: 0,
  switch: 21,
  editIcon: 10,
  typography: 4,
  typography2: 5,
  locationOnIcon: 6,
  stack2: [14, 19],
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}





function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function CoreShowcase() {
  const globalTheme = useTheme();
  const mode = globalTheme.palette.mode;
  const [element, setElement] = React.useState<Data>({ id: null, name: null, target: null });
  const [customized, setCustomized] = React.useState(false);
  const theme = React.useMemo(
    () =>
      customized
        ? createTheme(globalTheme, {
            palette: {
              background: {
                default:
                  mode === 'dark'
                    ? globalTheme.palette.primaryDark[900]
                    : globalTheme.palette.grey[50],
              },
            },
            shape: {
              borderRadius: 10,
            },
            shadows: ['none', '0px 4px 20px 0px hsla(210, 14%, 28%, 0.2)'],
            components: {
              MuiCard: {
                styleOverrides: {
                  root: {
                    boxShadow:
                      mode === 'dark'
                        ? '0px 4px 30px rgba(29, 29, 29, 0.6)'
                        : '0px 4px 20px rgba(61, 71, 82, 0.2)',
                    backgroundColor:
                      mode === 'dark' ? globalTheme.palette.primaryDark[800] : '#fff',
                    border: '1px solid',
                    borderColor:
                      mode === 'dark'
                        ? globalTheme.palette.primaryDark[500]
                        : globalTheme.palette.grey[200],
                  },
                },
              },
              MuiAvatar: {
                styleOverrides: {
                  root: {
                    width: 60,
                    height: 60,
                  },
                },
              },
              MuiIconButton: {
                styleOverrides: {
                  root: {
                    border: '1px solid',
                    borderColor:
                      mode === 'dark'
                        ? globalTheme.palette.primaryDark[500]
                        : globalTheme.palette.grey[200],
                    color:
                      mode === 'dark'
                        ? globalTheme.palette.grey[200]
                        : globalTheme.palette.grey[800],
                    borderRadius: 10,
                    '&:hover, &.Mui-focusVisible': {
                      borderColor: globalTheme.palette.primary.main,
                      color: globalTheme.palette.primary.main,
                    },
                  },
                },
              },
              MuiSwich: globalTheme.components?.MuiSwitch,
              MuiChip: {
                styleOverrides: {
                  filled: {
                    fontWeight: 700,
                    '&.MuiChip-colorSuccess': {
                      backgroundColor:
                        mode === 'dark'
                          ? globalTheme.palette.success[900]
                          : globalTheme.palette.success[100],
                      color:
                        mode === 'dark'
                          ? globalTheme.palette.success[100]
                          : globalTheme.palette.success[900],
                    },
                    '&.MuiChip-colorDefault': {
                      backgroundColor:
                        mode === 'dark'
                          ? globalTheme.palette.grey[900]
                          : globalTheme.palette.grey[200],
                      color:
                        mode === 'dark'
                          ? globalTheme.palette.grey[200]
                          : globalTheme.palette.grey[800],
                    },
                  },
                },
              },
            },
          })
        : createTheme({ palette: { mode: globalTheme.palette.mode } }),
    [customized, globalTheme, mode],
  );
  const highlightedLines = element.id ? lineMapping[element.id] : null;
  let startLine;
  let endLine;
  if (highlightedLines !== null) {
    startLine = Array.isArray(highlightedLines) ? highlightedLines[0] : highlightedLines;
    endLine = Array.isArray(highlightedLines) ? highlightedLines[1] : startLine;
  }
  const caseDemo1=`public void f(Name oldName, Name newName) throws NamingException
{
    Object value = lookup(oldName);
    bind(newName, value);
    unbind(oldName);
}`;
  const caseDemo2=`public boolean f(int index, Collection <? extends E > c)
{
    ArrayList < E > list = getClone();
    list.addAll(index, c);
    store(list);
    return true;
}`;
  const caseDemo3=`public void f(MessageSendHandler messageInHandler)
{
    try
    {
        lock.lock();
        this.messageSendHandler = messageInHandler;
        handlerStatus.signal();
    }
    finally
    {
        lock.unlock();
    }
}`;
  const [inputDemo0, setInputDemo0] = React.useState('please input code...');
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [methodname, setMethodname]=React.useState('');

  function GetMethodName(inputCode){
    const codeInfo=JSON.stringify({'code':inputCode});
    axios.post('http://localhost:5000/input_code',codeInfo)
      .then((response)=>{
        setMethodname(response.data.methodName);
      });
  };
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
    const [codeDemo, setCodeDemo] = useState(children);
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <TextField
              multiline
              value={codeDemo}
              rows={16}
              fullWidth 
              InputLabelProps={{
                shrink: true,
              }}

              onChange={(e) => {
                setCodeDemo(e.target.value);
              }}
            >
            </TextField>
            <Button
              onClick={() => {

                GetMethodName(codeDemo);
                setInputDemo0(codeDemo);

              }}
              
              size="large"
              variant="outlined"
              color="primary"
              endIcon={<KeyboardArrowRightRounded />}
              sx={{top: -18, left:'30%', width:200,}}
            >
              开始审查和推荐
            </Button>
          </Box>
        )}
      </div>
    );
  }
  
  return (
    <ShowcaseContainer
      sx={{ mt: { md: 2 } }}
      previewSx={{
        minHeight: 150,
        pb: 4,
      }}
      preview={
        <ThemeProvider theme={darkBrandingTheme}>
          <Box
            textAlign="center"
            sx={{
              py: 0.5,
              ml: 'auto',
              position: 'absolute',
              left: '50%',
              transform: 'translate(-50%)',
              width: '90%',
            }}
          >           
            <Typography
              variant="h2"
              fontWeight={500}
              color="text.primary"
              noWrap              
            >
               {methodname}
            </Typography>
          </Box>
        </ThemeProvider>
      }
      code={
        <ThemeProvider theme={darkBrandingTheme}>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="输入框" {...a11yProps(0)} />
                <Tab label="示例 1" {...a11yProps(1)} />
                <Tab label="示例 2" {...a11yProps(2)} />
                <Tab label="示例 3" {...a11yProps(3)} />
                
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              {inputDemo0}
            </TabPanel>
            <TabPanel value={value} index={1}>
              {caseDemo1}
            </TabPanel>
            <TabPanel value={value} index={2}>
              {caseDemo2}
            </TabPanel>
            <TabPanel value={value} index={3}>
              {caseDemo3}
            </TabPanel>
          </Box>   
        </ThemeProvider>        
      }
    />
  );
}
