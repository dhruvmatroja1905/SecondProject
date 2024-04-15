import React,{useState} from 'react';
import { Box, TextField , Grid, Typography } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import api from '../Component/API/jsonapi'
import card2 from '../assets/card2.jpg'
import { Timelapse } from '@mui/icons-material';

{/* 
const initialname= { businessName: '',
businessDescription: '',
businessCategory: '',
businessAddress: '',
businessPhoneNumber: '',
businessEmailAddress: '',
businessWebsite: '',
mapEmbed: '',
openingHour: '',
closingHour: '',
weekDayOff: '',
taxID: '',
numberOfEmployees: '',
establishmentDate: '',
bankAccountInfo: '',
gallery: "",
uploadedFiles: '',
youtubeLinks: '',
ownerFullName: '',
ownerAddress: '',
ownerPhoneNumber: '',
ownerEmailAddress: '',
servicesOffered: '',
facebookURL: '',
twitterURL: '',
instagramURL: '',}

const [formData, setFormData] = useState({initialname})


const handleInputChange = (e) => {



  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    console.warn(formData);
    const response = await api.post('/users', formData);
    console.log('Product created:', response.data);

  } catch (error) {
    console.error('Error creating product:', error);
  }
};


*/}

{/* 
export  const Step1Form = ({ errors, touched,}) => (
  

  
    <Form id="step1Form">
      <Box>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={4}>
            <img src={card2} alt="Business Logo" style={{ width: '100%', marginTop: '40px' }} />
          </Grid>
          <Grid item xs={12} md={8} style={{ marginBottom: '160px' }}>
            <Typography variant="h6" gutterBottom>
              Business Information
            </Typography>
           

            <Field
              name="businessDescription"
              as={TextField}
              required
              label="Business Description/Overview"
              fullWidth
              margin="normal"
              error={errors.businessDescription && touched.businessDescription}
              helperText={touched.businessDescription && errors.businessDescription}
              
            />

            <Field
              name="businessCategory"
              as={TextField}
              required
              label="Business Industry/Category"
              fullWidth
              margin="normal"
              error={errors.businessCategory && touched.businessCategory}
              helperText={touched.businessCategory && errors.businessCategory}
            />

          </Grid>
        </Grid>
      </Box>
    </Form>
);

*/}


{/* 
  
  export  const Step2Form = ({  errors, touched }) => (
    <Form id="step2Form">
    <Box>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={4}>
          <img src={card2} alt="Business Logo" style={{ width: '100%', marginTop: '40px' }} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h6" gutterBottom>
            Business Details
          </Typography>
          <Field
            name="businessAddress"
            as={TextField}
            required
            label="Business Address"
            fullWidth
            margin="normal"
              error={errors.businessAddress && touched.businessAddress}
            helperText={touched.businessAddress && errors.businessAddress}
          />
          <Field
            name="businessPhoneNumber"
            as={TextField}
            required
            label="Business Phone Number"
            fullWidth
            margin="normal"
            error={errors.businessPhoneNumber && touched.businessPhoneNumber}
            helperText={touched.businessPhoneNumber && errors.businessPhoneNumber}
           
          />
          <Field
            name="businessEmailAddress"
            as={TextField}
            required
            label="Business Email Address"
            fullWidth
            margin="normal"
              error={errors.businessEmailAddress && touched.businessEmailAddress}
            helperText={touched.businessEmailAddress && errors.businessEmailAddress}
          />
          <Field
            name="businessWebsite"
            as={TextField}
            required
            label="Business Website"
            fullWidth
            margin="normal"
             error={errors.businessWebsite && touched.businessWebsite}
            helperText={touched.businessWebsite && errors.businessWebsite}
          />
          <Field
            name="mapEmbed"
            as={TextField}
            
            label="Map Embed (iframe)"
            fullWidth
            margin="normal"
            />
        </Grid>
      </Grid>
    </Box>
  </Form>
  );
*/}
  
  
 {/*  export  const Step3Form = ({ errors, touched}) => (

    <Form id="step3Form">
    <Box>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={4}>
          <img src={card2} alt="Business Logo" style={{ width: '100%', marginTop:'40px' }} />
        </Grid>
        <Grid item xs={12} md={8}  style={{marginBottom:'160px' }}>
          <Typography variant="h6" gutterBottom>Business Timing</Typography>
  
          <Field
            name="openingHour"
            as={TextField}
            type="time"
            required
            label="Opening Hour"
            fullWidth
            margin="normal"
                error={errors.openingHour && touched.openingHour}
            helperText={touched.openingHour && errors.openingHour}
            InputLabelProps={{ shrink: true }}
          />
  
          <Field
            name="closingHour"
            as={TextField}
            type="time"
            required
            label="Closing Hour"
            fullWidth
            margin="normal"
             InputLabelProps={{ shrink: true }}
            error={errors.closingHour && touched.closingHour}
            helperText={touched.closingHour && errors.closingHour}
          />
  
          <Field
            name="weekOffDays"
            as={TextField}
            required
            label="Week Off Day(s)"
            fullWidth
            margin="normal"
            error={errors.weekOffDays && touched.weekOffDays}
            helperText={touched.weekOffDays && errors.weekOffDays}
              />
        </Grid>
      </Grid>
    </Box>
  </Form>
  );


  */}
  

  {/* 
  export  const Step4Form = ({ errors, touched}) => (
    <Form id="step4Form">
    <Box>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={4}>
          <img src={card2} alt="Business Logo" style={{ width: '100%', marginTop: '40px' }} />
        </Grid>
        <Grid item xs={12} md={8} style={{ marginBottom: '80px' }}>
          <Typography variant="h6" gutterBottom>
            Business Details
          </Typography>
          <Field
            name="taxID"
            as={TextField}
            required
            label="Business Tax ID/EIN"
            fullWidth
            margin="normal"
             error={errors.taxID && touched.taxID}
            helperText={touched.taxID && errors.taxID}
          />
          <Field
            name="numberOfEmployees"
            as={TextField}
            required
            label="Number of Employees"
            type="number"
            fullWidth
            margin="normal"
             error={errors.numberOfEmployees && touched.numberOfEmployees}
            helperText={touched.numberOfEmployees && errors.numberOfEmployees}
          />
          <Field
            name="establishmentDate"
            as={TextField}
            required
            label="Date of Business Establishment"
            type="date"
            fullWidth
            margin="normal"
               InputLabelProps={{ shrink: true }}
            error={errors.establishmentDate && touched.establishmentDate}
            helperText={touched.establishmentDate && errors.establishmentDate}
          />
          <Field
            name="bankAccountInfo"
            as={TextField}
            required
            label="Business Bank Account Information"
            fullWidth
            margin="normal"
              error={errors.bankAccountInfo && touched.bankAccountInfo}
            helperText={touched.bankAccountInfo && errors.bankAccountInfo}
          />
        </Grid>
      </Grid>
    </Box>
  </Form>
   );

   */}


   {/* 
  
   export  const Step5Form = ({ errors, touched}) => (
    <Form id="step5Form">
    <Box>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={4}>
          <img src={card2} alt="Business Logo" style={{ width: '100%', marginTop: '40px' }} />
        </Grid>
        <Grid item xs={12} md={8} style={{ marginBottom: '90px' }}>
          <Typography variant="h6" gutterBottom>
            Business Timing
          </Typography>
          <Field
            name="gallery"
            as={TextField}
            required
            label="Gallery (Images/Photos)"
            fullWidth
            margin="normal"
            error={errors.gallery && touched.gallery}
            helperText={touched.gallery && errors.gallery}
          />
          <Field
            name="uploadedFiles"
            as={TextField}
            required
            label="Uploaded Files"
            fullWidth
            margin="normal"
            error={errors.uploadedFiles && touched.uploadedFiles}
            helperText={touched.uploadedFiles && errors.uploadedFiles}
          />
          <Field
            name="youtubeLinks"
            as={TextField}
            required
            label="YouTube Video Links"
            fullWidth
            margin="normal"
            error={errors.youtubeLinks && touched.youtubeLinks}
            helperText={touched.youtubeLinks && errors.youtubeLinks}
          />
        </Grid>
      </Grid>
    </Box>
  </Form>
   );


   */}

   {/* 

  export const Step6Form = ({ errors, touched }) => (
    <Form id="step6Form">
    <Box>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={4}>
          <img src={card2} alt="Business Logo" style={{ width: '100%', marginTop: '40px' }} />
        </Grid>
        <Grid item xs={12} md={8} style={{ marginBottom: '80px' }}>
          <Typography variant="h6" gutterBottom>
            Business Timing
          </Typography>
          <Field
            name="ownerFullName"
            as={TextField}
            required
            label="Owner/Founder's Full Name"
            fullWidth
            margin="normal"
            error={errors.ownerFullName && touched.ownerFullName}
            helperText={touched.ownerFullName && errors.ownerFullName}
             />
          <Field
            name="ownerAddress"
            as={TextField}
            required
            label="Owner/Founder's Address"
            fullWidth
            margin="normal"
            error={errors.ownerAddress && touched.ownerAddress}
            helperText={touched.ownerAddress && errors.ownerAddress}
            />
          <Field
            name="ownerPhoneNumber"
            as={TextField}
            required
            label="Owner/Founder's Phone Number"
            fullWidth
            margin="normal"
            error={errors.ownerPhoneNumber && touched.ownerPhoneNumber}
            helperText={touched.ownerPhoneNumber && errors.ownerPhoneNumber}
              />
          <Field
            name="ownerEmailAddress"
            as={TextField}
            required
            label="Owner/Founder's Email Address"
            fullWidth
            margin="normal"
            error={errors.ownerEmailAddress && touched.ownerEmailAddress}
            helperText={touched.ownerEmailAddress && errors.ownerEmailAddress}
           
           />
        </Grid>
      </Grid>
    </Box>
  </Form>
  );

  */}

  {/* 
  export  const Step7Form = ({ errors, touched }) => (
    <Form id="step7Form">
    <Box>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={4}>
          <img src={card2} alt="Business Logo" style={{ width: '100%', marginTop: '40px' }} />
        </Grid>
        <Grid item xs={12} md={8} style={{ marginBottom: '225px' }}>
          <Typography variant="h6" gutterBottom>
            Business Timing
          </Typography>
          <Field
            name="servicesOffered"
            as={TextField}
            required
            label="Services Offered"
            fullWidth
            multiline
            rows={4}
            margin="normal"
            error={errors.ownerEmailAddress && touched.ownerEmailAddress}
            helperText={touched.ownerEmailAddress && errors.ownerEmailAddress}
           
            />
        </Grid>
      </Grid>
    </Box>
  </Form>
  );
  */}

  {/* 
  export  const Step8Form = ({ errors, touched}) => (
    <Form id="step8Form">
    <Box>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={4}>
          <img src={card2} alt="Business Logo" style={{ width: '100%', marginTop: '40px' }} />
        </Grid>
        <Grid item xs={12} md={8} style={{ marginBottom: '160px' }}>
          <Typography variant="h6" gutterBottom>
            Business Timing
          </Typography>
          <Field
            name="facebookURL"
            as={TextField}
            label="Facebook URL"
            fullWidth
            margin="normal"
            error={errors.facebookURL && touched.facebookURL}
            helperText={touched.facebookURL && errors.facebookURL}
           
           />
          <Field
            name="twitterURL"
            as={TextField}
            label="Twitter URL"
            fullWidth
            margin="normal"
            error={errors.twitterURL && touched.twitterURL}
            helperText={touched.twitterURL && errors.twitterURL}
           
            />
          <Field
            name="instagramURL"
            as={TextField}
            label="Instagram URL"
            fullWidth
            margin="normal"
            error={errors.instagramURL && touched.instagramURL}
            helperText={touched.instagramURL && errors.instagramURL}
           
            />
        </Grid>
      </Grid>
    </Box>
  </Form>
  );
  */}
  