import React from 'react';
// logo
import ContactUsLogo from '../../Assets/Logo/ContactUsLogo';
// styles
import './ContactUs.scss';
import { Button, Container, TextField } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required('الاسم بالكامل مطلوب'),
  email: Yup.string().email('البريد الإلكتروني غير صالح').required('البريد الإلكتروني مطلوب'),
  phoneNumber: Yup.string().required('رقم الجوال مطلوب'),
  message: Yup.string().required('رسالتك مطلوبة'),
});

const ContactUs = () => {
  return (
    <div className='ContactUsWrapper'>
      <div className='title'>
        <Container>
          <h5>تواصل معنا</h5>
        </Container>
      </div>
      <Container>
        <Formik
          initialValues={{
            fullName: '',
            email: '',
            phoneNumber: '',
            message: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            // Handle form submission logic here
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className='lowerContent'>
                <div className='rightContent'>
                  <div className='inputWithText'>
                    <span>الاسم بالكامل</span>
                    <Field name='fullName' as={TextField} fullWidth variant='outlined' />
                    {errors.fullName && touched.fullName ? (
                      <div className='error'>{errors.fullName}</div>
                    ) : null}
                  </div>
                  <div className='twoInputContainer'>
                    <div className='inputWithText'>
                      <span>البريد الالكترونى</span>
                      <Field name='email' as={TextField} fullWidth variant='outlined' />
                      {errors.email && touched.email ? (
                        <div className='error'>{errors.email}</div>
                      ) : null}
                    </div>
                    <div className='inputWithText'>
                      <span>رقم الجوال</span>
                      <Field name='phoneNumber' as={TextField} fullWidth variant='outlined' />
                      {errors.phoneNumber && touched.phoneNumber ? (
                        <div className='error'>{errors.phoneNumber}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className='inputWithText'>
                    <span>رسالتك</span>
                    <Field
                      name='message'
                      as={TextField}
                      fullWidth
                      multiline
                      sx={{
                        width: '100%',
                        background: '#FAFAF',
                      }}
                    />
                    {errors.message && touched.message ? (
                      <div className='error'>{errors.message}</div>
                    ) : null}
                  </div>
                  <Button
                    type='submit'
                    sx={{
                      borderRadius: 3,
                      background: '#5DBB67',
                      fontSize: 16,
                      width: '320px',
                      fontFamily: 'inherit',
                      marginTop: 4,
                    }}
                    variant='contained'
                    color='success'
                  >
                    ارسال
                  </Button>
                </div>
                <div className='LeftContent'>
                  <ContactUsLogo />
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
};

export default ContactUs;
