import { useCallback, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Unstable_Grid2 as Grid
} from '@mui/material';

const states = [
  {
    value: 'cairo',
    label: 'Cairo'
  },
  {
    value: 'alexandria',
    label: 'Alexandria'
  },
  {
    value: 'giza',
    label: 'Giza'
  },
  {
    value: 'bani-swaif',
    label: 'Bani Swaif'
  }
];

const genders =[
  {value: 'male', label: 'Male'},
  {value: 'female', label: 'Female'},

];

export const AccountProfileDetails = () => {
  const [values, setValues] = useState({
    firstName: 'Rana',
    lastName: 'Ahmed',
    email: 'rana@gmail.com',
    phone: '+20122548962',
    gender: 'Male',
    dateOfBirth: '4-2-2000',
    state: 'Giza',
    country: 'Egypt',
    medicalCondition:'Diabetes',
    allergies:'Penicillin',
    chronicDiseases: 'Asthma',
    familyMedicalHistory: '',
    perviousMedication: 'Panadol , Ibuprofen',
    currentMedication: 'Levothyroxine , Atorvastatin',
    vaccinationRecords: 'flu shots, childhood vaccinations',
    bloodPressure: '',
    heartRate: '',
    respiratoryRate: '',
    bloodTests: 'CBC, cholesterol, glucose',
    urineTests: '',
    imagingReports : 'X-rays, MRIs, CT scans',
  });

  const handleChange = useCallback(
    (event) => {
      setValues((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value
      }));
    },
    []
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
    },
    []
  );

  return (
    <form
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit}
    >
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Profile"
        />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid
              container
              spacing={3}
            >
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  helperText="Please specify the first name"
                  label="First name"
                  name="firstName"
                  onChange={handleChange}
                  required
                  value={values.firstName}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Last name"
                  name="lastName"
                  onChange={handleChange}
                  required
                  value={values.lastName}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  onChange={handleChange}
                  required
                  value={values.email}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  onChange={handleChange}
                  type="number"
                  value={values.phone}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Select Gender"
                  name="gender"
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={values.genders}
                >
                  {genders.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Date Of Birth"
                  name="Date Of Birth"
                  onChange={handleChange}
                  type="date"
                  value={values.dateOfBirth}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Country"
                  name="country"
                  onChange={handleChange}
                  required
                  value={values.country}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Select State"
                  name="state"
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={values.state}
                >
                  {states.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>






            </Grid>
          </Box>
        </CardContent>



        
        <CardHeader
          subheader="The information can be edited"
          title="Medical History"
        />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid
              container
              spacing={3}
            >
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  
                  label="Medical Condition"
                  name="medicalCondition"
                  onChange={handleChange}
                  required
                  value={values.medicalCondition}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Allergies"
                  name="allergies"
                  onChange={handleChange}
                  required
                  value={values.allergies}
                />
              </Grid>
              <Grid
                xs={12}
                md={12}
              >
                <TextField
                  fullWidth
                  label="Chronic Diseases"
                  name="chronicDiseases"
                  onChange={handleChange}
                  required
                  value={values.chronicDiseases}
                />
              </Grid>
              <Grid
                xs={12}
                md={12}
              >
                <TextField
                  fullWidth
                  label="Family Medical History"
                  name="Family Medical History"
                  multiline
                  rows={4}
                  maxRows={4}
                  onChange={handleChange}
                  
                  value={values.FamilyMedicalHistory}
                />
              </Grid>
              
            </Grid>
          </Box>
        </CardContent>


        <CardHeader
          subheader="The information can be edited"
          title="Medications"
        />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid
              container
              spacing={3}
            >
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  
                  label="Pervious Medication"
                  name="perviousMedication"
                  onChange={handleChange}
                  required
                  value={values.perviousMedication}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Current Medication"
                  name="currentMedication"
                  onChange={handleChange}
                  required
                  value={values.currentMedication}
                />
              </Grid>
              
              
            </Grid>
          </Box>
        </CardContent>


        <CardHeader
          subheader="The information can be edited"
          title="Immunization History"
        />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid
              container
              spacing={3}
            >
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  
                  label="Vaccination Records"
                  name="vaccinationRecords"
                  onChange={handleChange}
                  required
                  value={values.vaccinationRecords}
                />
              </Grid>
              
              
            </Grid>
          </Box>
        </CardContent>


        <CardHeader
          subheader="The information can be edited"
          title="Vital Signs"
        />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid
              container
              spacing={3}
            >
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  
                  label="Blood Pressure"
                  name="bloodPressure"
                  onChange={handleChange}
                  required
                  value={values.bloodPressure}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Heart Rate"
                  name="heartRate"
                  onChange={handleChange}
                  required
                  value={values.heartRate}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Respiratory Rate"
                  name="respiresatoryRate"
                  onChange={handleChange}
                  required
                  value={values.respiresatoryRate}
                />
              </Grid>
              
            </Grid>
          </Box>
        </CardContent>


        <CardHeader
          subheader="The information can be edited"
          title="Laboratory Results"
        />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid
              container
              spacing={3}
            >
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  
                  label="Blood Tests"
                  name="bloodTests"
                  onChange={handleChange}
                  required
                  value={values.bloodTests}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Urine Tests"
                  name="urineTests"
                  onChange={handleChange}
                  required
                  value={values.urineTests}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Imaging Reports"
                  name="imagingReports"
                  onChange={handleChange}
                  required
                  value={values.imagingReports}
                />
              </Grid>
              
            </Grid>
          </Box>
        </CardContent>









        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button variant="contained">
            Save details
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};
