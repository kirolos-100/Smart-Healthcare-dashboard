import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { OverviewBudget } from 'src/sections/overview/overview-budget';
import { OverviewLatestPatients } from 'src/sections/overview/overview-latest-patients';
import { OverviewLatestMedication } from 'src/sections/overview/overview-latest-medication';
import { OverviewAppointmentBar } from 'src/sections/overview/overview-appointment-bar';
import { OverviewTotalAppointments } from 'src/sections/overview/overview-total-appointment';
import { OverviewTotalPatient } from 'src/sections/overview/overview-total-patient';
import { OverviewTotalDoctors } from 'src/sections/overview/overview-total-doctors';
import { OverviewAppointmentPie } from 'src/sections/overview/overview-appointment-pie';



const now = new Date();

const Page = () => (
  <>
    <Head>
      <title>
        Dashboard 
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 3
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={3}
        >
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewBudget
              difference={12}
              positive
              sx={{ height: '100%' }}
              value="$32k"
            />
          </Grid>
          
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewTotalDoctors
              sx={{ height: '100%' }}
              value="27"
            />
          </Grid>

          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewTotalPatient
              difference={2}
              positive={false}
              sx={{ height: '100%' }}
              value="160"
            />
          </Grid>




          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewTotalAppointments
              difference={6}
              positive={false}
              sx={{ height: '100%' }}
              value="80"
            />
          </Grid>



          <Grid
            xs={12}
            lg={8}
          >
            <OverviewAppointmentBar
              title="Appointment Statistics ( Num. of Appointments / month )"
              chartSeries={[
                {
                  name: 'This year',
                  data: [45, 33, 57, 45, 56, 30, 47, 16, 80, 69, 60, 20],
                },
                {
                  name: 'Last year',
                  data: [23, 70, 44, 60, 45, 71, 20, 40, 66, 77, 33, 28],
                }
              ]}
              sx={{ height: '100%' }} 
              colors={['#6366f1' , 'rgba(0, 0, 255, 0.2)' ]}
            />
          </Grid>






          {/* <Grid
            xs={12}
            md={6}
            lg={4}
          >
            <OverviewAppointmentPie
              chartSeries={[63, 15, 22]}
              labels={['Progress', 'Completed', 'Waiting']}
              sx={{ height: '100%' }}
            />
          </Grid> */}
          


          <Grid
            xs={12}
            md={6}
            lg={4}
          >
            <OverviewAppointmentPie
              title="Appointment Status"
              chartSeries={[63, 15, 22]}
              labels={['Progress', 'Completed', 'Waiting']}
              sx={{ height: '100%' }}
              colors={['#6366f1' , '#10B981' , '#F79009']}
            />
          </Grid>





          <Grid
            xs={12}
            md={6}
            lg={4}
          >
            <OverviewAppointmentPie
              title="Average Glucose Results"
              chartSeries={[54, 16, 30]}
              labels={['Normal', 'High', 'Hyper']}
              sx={{ height: '100%' }}
              colors={['#70ba6e' , '#fbb90f' , '#eb2325']}
              
            />
          </Grid>


          <Grid
            xs={12}
            lg={8}
          >
            <OverviewAppointmentBar
            title="Laboratory Tests ( Num. of heart rate & blood pressure tests / month)"
              chartSeries={[
                {
                  name: 'heart rate',
                  data: [160, 140, 130, 122, 70, 140, 112, 155, 140, 156, 140, 120],
                },
                {
                  name: 'blood pressure',
                  data: [123, 90, 144, 160, 145, 121, 120, 140, 166, 80, 133, 128],
                }
              ]}
              sx={{ height: '100%' }}
              colors={['#f04438' , 'rgba(255, 0, 0, 0.2)' ]}
            />
          </Grid>









          <Grid
            xs={12}
            md={6}
            lg={4}
            
          >
            <OverviewLatestMedication
              
              products={[
                {
                  id: '5ece2c077e39da27658aa8a9',
                  image: '/assets/products/product 1.png',
                  name: 'Ibuprofen', 
                  updatedAt: subHours(now, 6).getTime()
                },
                {
                  id: '5ece2c0d16f70bff2cf86cd8',
                  image: '/assets/products/product 2.png',
                  name: 'Levothyroxine',
                  updatedAt: subDays(subHours(now, 8), 2).getTime()
                },
                {
                  id: 'b393ce1b09c1254c3a92c827',
                  image: '/assets/products/product 3.png',
                  name: 'Atorvastatin',
                  updatedAt: subDays(subHours(now, 1), 1).getTime()
                },
                {
                  id: 'a6ede15670da63f49f752c89',
                  image: '/assets/products/product 4.png',
                  name: 'Panadol',
                  updatedAt: subDays(subHours(now, 3), 3).getTime()
                },
                {
                  id: 'bcad5524fe3a2f8f8620ceda',
                  image: '/assets/products/product 5.png',
                  name: 'Metformin',
                  updatedAt: subDays(subHours(now, 5), 6).getTime()
                }
              ]}
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid
            xs={12}
            md={12}
            lg={8}
          >
            <OverviewLatestPatients
              patients={[
                {
                  id: 'f69f88012978187a6c12897f',
                  ref: 'DEV1049',
                  amount: 30.5,
                  person: {
                    name: 'Ekaterina Tankova'
                  },
                  createdAt: 1704253019000,
                  status: 'waiting'
                },
                {
                  id: '9eaa1c7dd4433f413c308ce2',
                  ref: 'DEV1048',
                  amount: 25.1,
                  person: {
                    name: 'Cao Yu'
                  },
                  createdAt: 1704080219000,
                  status: 'completed',
                },
                {
                  id: '01a5230c811bd04996ce7c13',
                  ref: 'DEV1047',
                  amount: 10.99,
                  person: {
                    name: 'Alexa Richardson'
                  },
                  createdAt: 1704339419000,
                  status: 'progress'
                },
                {
                  id: '1f4e1bd0a87cea23cdb83d18',
                  ref: 'DEV1046',
                  amount: 96.43,
                  person: {
                    name: 'Anje Keizer'
                  },
                  createdAt: 1704512219000,
                  status: 'waiting'
                },
                {
                  id: '9f974f239d29ede969367103',
                  ref: 'DEV1045',
                  amount: 32.54,
                  person: {
                    name: 'Clarke Gillebert'
                  },
                  createdAt: 1704685019000,
                  status: 'progress'
                },
                {
                  id: 'ffc83c1560ec2f66a1c05596',
                  ref: 'DEV1044',
                  amount: 16.76,
                  person: {
                    name: 'Adam Denisov'
                  },
                  createdAt: 1704857819000,
                  status: 'progress'
                }
              ]}
              sx={{ height: '100%' }}
            />
          </Grid>
        </Grid>
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
