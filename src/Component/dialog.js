import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Step1Form from './AllForms/Step1Form';
import Step2Form from './AllForms/Step2Form';
import Step3Form from './AllForms/Step3Form';
import Step4Form from './AllForms/Step4Form';
import Step5Form from './AllForms/Step5Form';
import Step6Form from './AllForms/Step6Form';
import Step7Form from './AllForms/Step7Form';
import Step8Form from './AllForms/Step8Form';
import Step9Form from './AllForms/Step9Form';
import Step10Form from './AllForms/Step10Form';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const Step1FormValidationSchema = Yup.object().shape({
  businessName: Yup.string().required('Business Name is required'),
  businessDescription: Yup.string().required('Business Description is required'),
  businessCategory: Yup.string().required('Business Category is required'),
 
});

const Step2FormValidationSchema = Yup.object().shape({
  businessAddress: Yup.string().required('Business Address is required'),
  businessPhoneNumber: Yup.string()
    .required('Business Phone Number is required')
    .matches(/^[0-9]+$/, 'Business Phone Number must contain only numbers')
    .max(10, 'Business Phone Number must be 10 digits or less'),
  businessEmailAddress: Yup.string()
    .required('Business Email is required')
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email address'), // Regex for valid email address
  businessWebsite: Yup.string()
    .required('Business Website is required')
    .matches(/^https?:\/\/(?:www\.)?[^\s/$.?#].[^\s]*$/, 'Invalid website URL. It should start with http:// or https://'),
});



const Step3FormValidationSchema = Yup.object().shape({
  openingHour: Yup.string().required('Business openHour is required'),
  closingHour: Yup.string().required('Business closingHour is required'),
  weekOffDays: Yup.string().required('Business weekDayOff is required'),
});

const Step4FormValidationSchema = Yup.object().shape({
  taxID: Yup.string()
    .required('Business Tax ID/EIN is required')
    .matches(/^[0-9]{9}$/, 'Tax ID/EIN must be 9 digits'), // Example regex for 9-digit tax ID/EIN
  numberOfEmployees: Yup.number().required('Number of Employees is required'),
  establishmentDate: Yup.string().required('Date of Business Establishment is required'),
  bankAccountInfo: Yup.string()
    .required('Business Bank Account Information is required')
    .matches(/^[0-9]{10,12}$/, 'Bank Account Information must be 10 to 12 digits'), // Example regex for 10-12 digit account info
});


const Step5FormValidationSchema = Yup.object().shape({
  gallery: Yup.string().required('Gallery (Images/Photos) is required'),
  uploadedFiles: Yup.string().required('Uploaded Files is required'),
  youtubeLinks: Yup.string().required('YouTube Video Links is required'),
});

const Step6FormValidationSchema = Yup.object().shape({
  ownerFullName: Yup.string().required("Owner/Founder's Full Name is required"),
  ownerAddress: Yup.string().required("Owner/Founder's Address is required"),
  ownerPhoneNumber: Yup.string()
    .required("Owner/Founder's Phone Number is required")
    .matches(/^[0-9]{10}$/, 'Phone Number must contain exactly 10 digits'),
  ownerEmailAddress: Yup.string()
    .required("Owner/Founder's Email Address is required")
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email address'), // Regex for valid email address
    // Ensure it's a valid email format
});


const Step7FormValidationSchema = Yup.object().shape({
  servicesOffered: Yup.string().required('Services Offered is required'),
});

const Step8FormValidationSchema = Yup.object().shape({
  facebookURL: Yup.string().required('Facebook URL is required'),
  twitterURL: Yup.string().required('Twitter URL is required'),
  instagramURL: Yup.string().required('Instagram URL is required'),
  linkdinURL: Yup.string().required('Linkdin URL is required'),
  githubURL: Yup.string().required('Github URL is required'),
});

const Step9FormValidationSchema = Yup.object().shape({
  ProductImage: Yup.string().required('Product Image is required'),
  productName: Yup.string().required(' Product Name is required'),
  productPrice: Yup.string().required(' Product Price is required'),

});




const steps = [
  'Basic ',
  'Contact ',
  'Operational ',
  'Business ',
  'Gallery',
  'Owner Information',
  'Services ',
  'Social Media ',
  'Products',
  'Settings'
];

const CustomDialog = ({ handleCloseDialog, }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [dataAdded, setDataAdded] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
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
    instagramURL: '',
    linkdinURL:'',
    githubURL:'',
    images: '',
    title: '',
    price: '',

    // Add more fields for other steps
  });

  const isStepOptional = (step) => {
    return false; // All steps are required
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
   
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    

    setFormData((prevFormData) => ({
      ...prevFormData,
  
    }));
  
    // Log the updated formData
    console.log(formData);

    // Validate Step 1 form before proceeding
    if (activeStep === 0) {
      const step1Form = document.getElementById('step1Form'); // Get step 1 form element
      if (!step1Form.checkValidity()) { // Check for form validity using HTML5 validation
        return; // Stay on Step 1 if validation fails
      }
    }


    // Validate Step 2 form before proceeding
    if (activeStep === 1) {
      const step2Form = document.getElementById('step2Form');
      if (!step2Form.checkValidity()) {
        return; // Stay on Step 2 if validation fails
      }
    }

    if (activeStep === 2) {
      const step3Form = document.getElementById('step3Form');
      if (!step3Form.checkValidity()) {
        return; // Stay on Step 2 if validation fails
      }
    }

    if (activeStep === 3) {
      const step4Form = document.getElementById('step4Form');
      if (!step4Form.checkValidity()) {
        return; // Stay on Step 2 if validation fails
      }
    }

    if (activeStep === 4) {
      const step5Form = document.getElementById('step5Form');
      if (!step5Form.checkValidity()) {
        return; // Stay on Step 2 if validation fails
      }
    }

    if (activeStep === 5) {
      const step6Form = document.getElementById('step6Form');
      if (!step6Form.checkValidity()) {
        return; // Stay on Step 2 if validation fails
      }
    }

    if (activeStep === 6) {
      const step7Form = document.getElementById('step7Form');
      if (!step7Form.checkValidity()) {
        return; // Stay on Step 2 if validation fails
      }
    }

    if (activeStep === 7) {
      const step8Form = document.getElementById('step8Form');
      if (!step8Form.checkValidity()) {
        return; // Stay on Step 2 if validation fails
      }
    }



    if (activeStep === 8) {
      const step9Form = document.getElementById('step9Form');
      if (!step9Form.checkValidity()) {
        return; // Stay on Step 2 if validation fails
      }
    }



    if (activeStep === 9) {
      const Step10Form = document.getElementById('step10Form');
      if (!Step10Form.checkValidity()) {
        return; // Stay on Step 2 if validation fails
      }
    }


    if (activeStep === steps.length - 1) {
      handleCloseDialog();
      console.log(formData); // Log form data on completion
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  }









  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleFormSubmit = (values) => {
    setFormData((formData) => ({
      ...formData,
      ...values,
    }));
    console.log(formData);
    setDataAdded(true);
    setTimeout(() => {
      setDataAdded(false);
      handleNext();
      // Pass form data to parent component
      handleFormSubmit(formData); // Callback to parent component
    }, 500);
  };






  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Formik
            initialValues={formData}
            
            validationSchema={Step1FormValidationSchema}
            onSubmit={(values, { setSubmitting }) => {
              handleFormSubmit(values);
              setSubmitting(false);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Step1Form
                  formData={formData}
                  setFormData={setFormData}
                  errors={errors}
                  touched={touched}
                />
              </Form>
            )}
          </Formik>
        );
      case 1:
        return (
          <Formik
            initialValues={formData}
            validationSchema={Step2FormValidationSchema}
            onSubmit={(values, { setSubmitting }) => {
              handleFormSubmit(values);
              setSubmitting(false);
            }}
          >
            {({ errors, touched, }) => (
              <Form>
                <Step2Form
                  formData={formData}
                  setFormData={setFormData}
                  errors={errors}
                  touched={touched}

                />
              </Form>
            )}
          </Formik>
        );
      case 2:
        return (
          <Formik
            initialValues={formData}
            validationSchema={Step3FormValidationSchema}
            onSubmit={(values, { setSubmitting }) => {
              handleFormSubmit(values);
              setSubmitting(false);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Step3Form
                  formData={formData}
                  setFormData={setFormData}
                  errors={errors}
                  touched={touched}
                />
              </Form>
            )}
          </Formik>
        );
      case 3:
        return (
          <Formik
            initialValues={formData}
            validationSchema={Step4FormValidationSchema}
            onSubmit={(values, { setSubmitting }) => {
              handleFormSubmit(values);
              setSubmitting(false);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Step4Form
                  formData={formData}
                  setFormData={setFormData}
                  errors={errors}
                  touched={touched}
                />
              </Form>
            )}
          </Formik>
        );
      case 4:
        return (
          <Formik
            initialValues={formData}
            validationSchema={Step5FormValidationSchema}
            onSubmit={(values, { setSubmitting }) => {
              handleFormSubmit(values);
              setSubmitting(false);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Step5Form
                  formData={formData}
                  setFormData={setFormData}
                  errors={errors}
                  touched={touched}
                />
              </Form>
            )}
          </Formik>
        );
      case 5:
        return (
          <Formik
            initialValues={formData}
            validationSchema={Step6FormValidationSchema}
            onSubmit={(values, { setSubmitting }) => {
              handleFormSubmit(values);
              setSubmitting(false);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Step6Form
                  formData={formData}
                  setFormData={setFormData}
                  errors={errors}
                  touched={touched}
                />
              </Form>
            )}
          </Formik>
        );
      case 6:
        return (
          <Formik
            initialValues={formData}
            validationSchema={Step7FormValidationSchema}
            onSubmit={(values, { setSubmitting }) => {
              handleFormSubmit(values);
              setSubmitting(false);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Step7Form
                  formData={formData}
                  setFormData={setFormData}
                  errors={errors}
                  touched={touched}
                />
              </Form>
            )}
          </Formik>
        );
      case 7:
        return (
          <Formik
            initialValues={formData}
            validationSchema={Step8FormValidationSchema}
            onSubmit={(values, { setSubmitting }) => {
              handleFormSubmit(values);
              setSubmitting(false);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Step8Form
                  formData={formData}
                  setFormData={setFormData}
                  errors={errors}
                  touched={touched}
                />
              </Form>
            )}
          </Formik>
        );


      case 8:

        return (
          <Formik
            initialValues={formData}
            validationSchema={Step9FormValidationSchema}
            onSubmit={(values, { setSubmitting }) => {
              handleFormSubmit(values);
              setSubmitting(false);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Step9Form
                  formData={formData}
                  setFormData={setFormData}
                  errors={errors}
                  touched={touched}
                />
              </Form>
            )}
          </Formik>
        );
      

        case 9:

        return (
          <Formik
            initialValues={formData}
            validationSchema={Step9FormValidationSchema}
            onSubmit={(values, { setSubmitting }) => {
              handleFormSubmit(values);
              setSubmitting(false);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Step10Form
                  formData={formData}
                  setFormData={setFormData}
                  errors={errors}
                  touched={touched}
                />
              </Form>
            )}
          </Formik>
        );
      
      
      
        default:
        return 'Unknown step';
    }
  };

  // Check if the first form fields are filled to enable/disable the "Next" button
  const isNextDisabled = activeStep === 0 && (!formData.businessName || !formData.businessDescription || !formData.businessCategory);

  return (
    <Dialog onClose={handleCloseDialog}
      aria-labelledby="customized-dialog-title"
      open={true}
      maxWidth="xl" >
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        Product Details
        <IconButton aria-label="close" onClick={handleCloseDialog} sx={{ ml: 'auto' }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = <Typography variant="caption">Optional</Typography>;
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {getStepContent(activeStep)}
        <Stack sx={{ width: '100%' }} spacing={2}>
          {dataAdded && (
            <Alert severity="success">Data added successfully.</Alert>
          )}
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 , color:'white',
        
          backgroundColor: '#ff983f', '&:hover': { backgroundColor: '#ff983f', 
        }
        }}>
          Back
        </Button>
        {isStepOptional(activeStep) && (
          <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 , color:'white',
          
            backgroundColor: '#ff983f', '&:hover': { backgroundColor: '#ff983f', 
          }
          
          }}>
            Skip
          </Button>
        )}
        <Button
          variant="contained"
          onClick={handleNext}
          sx={{ backgroundColor: '#ff983f', '&:hover': { backgroundColor: '#ff983f', 
        }}}
        >
          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialog;
