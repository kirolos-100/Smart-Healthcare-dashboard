import { useCallback, useMemo, useState } from 'react';
import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import { useSelection } from 'src/hooks/use-selection';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { DoctorsTable } from 'src/sections/doctors/doctors-table';
import { DoctorsSearch } from 'src/sections/doctors/doctors-search';
import { applyPagination } from 'src/utils/apply-pagination';
import { MedicationSearch } from 'src/sections/medications/medications-search';
import { MedicationsTable } from 'src/sections/medications/medications-table';

const now = new Date();





const data = [
  {
    id: '5e887ac47eed253091be10cb',
    
    avatar: '/assets/products/product 1.png',
    createdAt: subDays(subHours(now, 7), 1).getTime(),
    name: 'Ibuprofen',
    quantity: '500',
    company: 'Pfizer',
  },
  {
    id: '5e887b209c28ac3dd97f6db5',
    
    avatar: '/assets/products/product 2.png',
    createdAt: subDays(subHours(now, 1), 2).getTime(),
    name: 'Levothyroxine',
    quantity: '100',
    company: 'J&J',
  },
  {
    id: '5e887b7602bdbc4dbb234b27',
    
    avatar: '/assets/products/product 3.png',
    createdAt: subDays(subHours(now, 4), 2).getTime(),

    name: 'Atorvastatin',
    quantity: '450',
    company: 'GSP',
  },
  {
    id: '5e86809283e28b96d2d38537',
    
    avatar: '/assets/products/product 4.png',
    createdAt: subDays(subHours(now, 11), 2).getTime(),
    name: 'Panadol',
    quantity: '300',
    company: 'Bayer',
  },
  {
    id: '5e86805e2bafd54f66cc95c3',
    
    avatar: '/assets/products/product 5.png',
    createdAt: subDays(subHours(now, 7), 3).getTime(),
    name: 'Metformins',
    quantity: '200',
    company: 'Pfizer',
  },
  
];


// Fetching medication data from localhost by using json-server
/* 
async function getmedication(){
  const data = await fetch('http://localhost:4000/medication');

  return data.json()

}
const data = await getmedication() */

const  useMedications = (page, rowsPerPage) => {
  return useMemo(
    () => {
      return applyPagination(data , page, rowsPerPage);
    },
    [page, rowsPerPage]
  );
};

const useMedicationIDs = (medications) => {
  return useMemo(
    () => {
      return medications.map((medication) => medication.id);
    },
    [medications]
  );
};

const Page = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const medications = useMedications(page, rowsPerPage);
  const medicationsIds = useMedicationIDs(medications);
  const medicationsSelection = useSelection(medicationsIds);

  const handlePageChange = useCallback(
    (event, value) => {
      setPage(value);
    },
    []
  );

  const handleRowsPerPageChange = useCallback(
    (event) => {
      setRowsPerPage(event.target.value);
    },
    []
  );

  return (
    <>
      <Head>
        <title>
          Medications 
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
                  Medications
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
            <MedicationSearch />
            <MedicationsTable
              count={data.length}
              items={medications}
              onDeselectAll={medicationsSelection.handleDeselectAll}
              onDeselectOne={medicationsSelection.handleDeselectOne}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
              onSelectAll={medicationsSelection.handleSelectAll}
              onSelectOne={medicationsSelection.handleSelectOne}
              page={page}
              rowsPerPage={rowsPerPage}
              selected={medicationsSelection.selected}
            />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
