import * as React from 'react';
import dynamic from 'next/dynamic';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Section from 'docs/src/layouts/Section';
import {
  CORE_CUSTOMERS,
  ADVANCED_CUSTOMERS,
  DESIGNKITS_CUSTOMERS,
  TEMPLATES_CUSTOMERS,
} from 'docs/src/components/home/CompaniesGrid';

export { CORE_CUSTOMERS, ADVANCED_CUSTOMERS, DESIGNKITS_CUSTOMERS, TEMPLATES_CUSTOMERS };

const CompaniesGrid = dynamic(() => import('./CompaniesGrid'));

export default function References({
  companies,
}: {
  companies:
    | typeof CORE_CUSTOMERS
    | typeof ADVANCED_CUSTOMERS
    | typeof DESIGNKITS_CUSTOMERS
    | typeof TEMPLATES_CUSTOMERS;
}) {
  return (
<<<<<<< HEAD
    <Container ref={ref} sx={{ py: { xs: 4, sm: 6, md: 10 } }}>
=======
    <Section cozy>
      <Box sx={{ minHeight: { xs: 236, sm: 144, md: 52 } }}>
        <CompaniesGrid data={companies} />
      </Box>
>>>>>>> 5cbe910ddcef8a39a7318378ef779c12aecc0bbc
      <Typography
        textAlign="center"
        variant="body2"
        color="text.secondary"
        sx={{
          mt: 4,
          mx: 'auto',
          maxWidth: 400,
          minHeight: 42, // hard-coded to reduce CLS (layout shift)
        }}
      >
        本工具由中科院软件所软件发展研究部精准计算小组研发和维护
      </Typography>
    </Section>
  );
}
