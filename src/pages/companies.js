import Head from 'next/head';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import {
  Box,
  Button,
  Container,
  Pagination,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { CompanyCard } from 'src/sections/companies/company-card';
import { CompaniesSearch } from 'src/sections/companies/companies-search';

const companies = [
  {
    id: '2569ce0d517a7f06d3ea1f24',
    createdAt: '27/03/2019',
    description: 'Pfizer is a leading global pharmaceutical company known for a wide range of medications, including vaccines, oncology, and cardiovascular drugs.',
    logo: '/assets/logos/Pfizer.png',
    title: 'Pfizer',
    medications: '594'
  },
  {
    id: 'ed2b900870ceba72d203ec15',
    createdAt: '31/03/2019',
    description: 'Johnson & Johnson is a multinational pharmaceutical and consumer goods company. They are involved in pharmaceuticals, medical devices, and consumer healthcare products.',
    logo: '/assets/logos/J&J.png',
    title: 'Johnson & Johnson',
    medications: '625'
  },
  {
    id: 'a033e38768c82fca90df3db7',
    createdAt: '03/04/2019',
    description: 'Novartis is a Swiss multinational pharmaceutical company with a focus on research, development, and manufacturing of a diverse range of healthcare products.',
    logo: '/assets/logos/Novartis.png',
    title: 'Novartis',
    medications: '857'
  },
  {
    id: '1efecb2bf6a51def9869ab0f',
    createdAt: '04/04/2019',
    description: 'GSK is a British multinational pharmaceutical company with a focus on pharmaceuticals, vaccines, and consumer healthcare products.',
    logo: '/assets/logos/gsk.png',
    title: 'GlaxoSmithKline (GSK)',
    medications: '406'
  },
  {
    id: '1ed68149f65fbc6089b5fd07',
    createdAt: '04/04/2019',
    description: 'Merck, known as MSD outside the United States and Canada, is a global healthcare company that provides prescription medicines, vaccines, and other health products.',
    logo: '/assets/logos/Merck.png',
    title: 'Merck & Co.',
    medications: '835'
  },
  {
    id: '5dab321376eff6177407e887',
    createdAt: '04/04/2019',
    description: 'Bayer is a global life science company with core competencies in the areas of health care and agriculture. They are known for producing pharmaceuticals, consumer health products, and agricultural chemicals.',
    logo: '/assets/logos/Bayer.png',
    title: 'Bayer',
    medications: '835'
  }
];

const Page = () => (
  <>
    <Head>
      <title>
        Companies 
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={3}>
          <Stack
            direction="row"
            justifyContent="space-between"
            spacing={4}
          >
            <Stack spacing={1}>
              <Typography variant="h4">
                Companies
              </Typography>
              <Stack
                alignItems="center"
                direction="row"
                spacing={1}
              >
                <Button
                  color="inherit"
                  startIcon={(
                    <SvgIcon fontSize="small">
                      <ArrowUpOnSquareIcon />
                    </SvgIcon>
                  )}
                >
                  Import
                </Button>
                <Button
                  color="inherit"
                  startIcon={(
                    <SvgIcon fontSize="small">
                      <ArrowDownOnSquareIcon />
                    </SvgIcon>
                  )}
                >
                  Export
                </Button>
              </Stack>
            </Stack>
            <div>
              <Button
                startIcon={(
                  <SvgIcon fontSize="small">
                    <PlusIcon />
                  </SvgIcon>
                )}
                variant="contained"
              >
                Add
              </Button>
            </div>
          </Stack>
          <CompaniesSearch />
          <Grid
            container
            spacing={3}
          >
            {companies.map((company) => (
              <Grid
                xs={12}
                md={6}
                lg={4}
                key={company.id}
              >
                <CompanyCard company={company} />
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Pagination
              count={3}
              size="small"
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
