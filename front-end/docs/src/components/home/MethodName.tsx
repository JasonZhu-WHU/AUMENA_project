import * as React from 'react';
import dynamic from 'next/dynamic';
import { useInView } from 'react-intersection-observer';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box, { BoxProps } from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import GradientText from 'docs/src/components/typography/GradientText';
import ProductsSwitcher from 'docs/src/components/home/ProductsSwitcher';
import { PrefetchStoreTemplateImages } from 'docs/src/components/home/StoreTemplatesBanner';
import { PrefetchDesignKitImages } from 'docs/src/components/home/DesignKits';
import SectionHeadline from 'docs/src/components/typography/SectionHeadline';
import MethodNameStepTimeline from '../showcase/MethodNameStepTimeline';
// import MethodNameRunButton from '../showcase/MethodNameRunButton'
import MethodNameUploadButton from '../showcase/MethodNameUploadButton'
import MethodNameTable from './MethodNameTable';
import MethodNameWords from './MethodNameWords';

import Table from 'rc-table';

import BasicTable from "./methodNameWordsTable";
import { sampleStatTable1 } from "./sampleDataField1";
import { sampleStatTable2 } from "./sampleDataField2";
import { sampleStatTable3 } from "./sampleDataField3";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';

function createLoading(sx: BoxProps['sx']) {
  return () => (
    <Box
      sx={{
        borderRadius: 1,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? 'primaryDark.800' : 'grey.100'),
        ...sx,
      }}
    />
  );
}

const MethodNameInput = dynamic(() => import('./MethodNameInput'), {
  loading: createLoading({ height: 723, mt: { md: 2 } }),
});

const MethodName = () => {
  // const [productIndex, setProductIndex] = React.useState(0);
  // const { ref, inView } = useInView({
  //   triggerOnce: true,
  //   threshold: 0,
  //   rootMargin: '200px',
  // });

  return (
    <Box
      // ref={ref}
      sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? 'primaryDark.900' : 'grey.50'),
        py: { xs: 4, sm: 6, md: 8 },
        overflow: 'hidden',
      }}
    >
      <Container>
        <Grid container spacing={2}>
          <Box sx={{width:1200, textAlign: { xs: 'center', md: 'center' } }}>
            <Typography variant="h1" sx={{ my: 2}}>
              <GradientText>Method命名</GradientText>精准推荐和审查
            </Typography>   
            <Typography variant="h2" sx={{ my: 2}}>
              ———基于词根表和样本程序
            </Typography>          
          </Box>

          <Grid item md={6}>
            <Box sx={{ mt: 2 }} />
            <MethodNameStepTimeline/>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{ minHeight: { xs: 777, sm: 757, md: 'unset' } }}
          >
            <React.Fragment>
              <MethodNameInput />
            </React.Fragment>
          </Grid>

          <Grid
            item
            xs={12}
            md={12}
            sx={{mt:5, minHeight: { xs: 777, sm: 757, md: 'unset' } }}
          >
            <React.Fragment>
              <Typography
                sx={{ flex: '1 1 100%' }}
                variant="h2"
                fontWeight="bold"
                textAlign="center"
              >
                词根表管理
              </Typography>
            </React.Fragment>
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            sx={{ minHeight: { xs: 777, sm: 757, md: 'unset' } }}
          >
            <React.Fragment>
              {/*<Stack  direction="row" spacing={2}>
                <Typography
                  variant="body1"
                  fontWeight="bold"
                >
                  <GradientText>保险领域</GradientText>
                </Typography>

                <Typography >
                <FormGroup>
                  <FormControlLabel 
                    control={<Switch color="primary" />}
                  />
                </FormGroup>
                </Typography>
              </Stack>*/}
              <BasicTable sampleStatTable={sampleStatTable1} sampleMethodField="保险领域"/>
            </React.Fragment>
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            sx={{ minHeight: { xs: 777, sm: 757, md: 'unset' } }}
          >
            <React.Fragment>
              {/*<Stack  direction="row" spacing={2}>
                <Typography
                  variant="body1"
                  fontWeight="bold"
                >
                  <GradientText>卫生领域</GradientText>
                </Typography>
                <Typography >
                <FormGroup>
                  <FormControlLabel 
                    control={<Switch color="primary" />}
                  />
                </FormGroup>
                </Typography>
              </Stack>*/}
              <BasicTable sampleStatTable={sampleStatTable2} sampleMethodField="卫生领域"/>
            </React.Fragment>
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            sx={{ minHeight: { xs: 777, sm: 757, md: 'unset' } }}
          >
            <React.Fragment>
              {/*<Stack  direction="row" spacing={2}>
                <Typography
                  variant="body1"
                  fontWeight="bold"
                >
                  <GradientText>自定义领域</GradientText>
                </Typography>
                <Typography >
                <FormGroup>
                  <FormControlLabel 
                    control={<Switch color="primary" />}
                  />
                </FormGroup>
                </Typography>
              </Stack>*/}
              <BasicTable sampleStatTable={sampleStatTable3} sampleMethodField="自定义领域"/>
            </React.Fragment>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MethodName;
