import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, TextField, IconButton, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import "./ForgetpasswordComponent.scss";
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const ForgetpasswordComponent = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const initialValues = {
        password: '',
        newPassword: '',
        ConfirmPassword: '',
    };

    const validationSchema = Yup.object({
        password: Yup.string().required('يرجى إدخال كلمة المرور'),
        newPassword: Yup.string().required('يرجى إدخال كلمة المرور الجديدة'),
        ConfirmPassword: Yup.string()
            .oneOf([Yup.ref('newPassword'), null], 'كلمة المرور غير متطابقة')
            .required('يرجى إدخال تأكيد كلمة المرور'),
    });

    const handleSubmit = (values) => {
        // Handle form submission logic here
        console.log(values);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div className="ForgetpasswordComponentWrapper">
            <h5>تغيير كلمة المرور</h5>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                <Form className='formContainer'>
                    <div className="fieldContainer">
                        <span>كلمة المرور الحالية</span>
                        <Field
                            as={TextField}
                            type="password"
                            name="password"
                            variant="outlined"
                            fullWidth
                            sx={{
                                borderRadius:3,
                                '& input': {
                                    direction: 'rtl',
                                    textAlign: 'right',
                                },
                            }}
                        />
                        <ErrorMessage name="password" component="div" />
                    </div>
                    <div className="fieldContainer">
                        <span>كلمة المرور الجديدة</span>
                        <Field
                            className={"input"}
                            as={TextField}
                            type={showPassword ? 'text' : 'password'}
                            name="newPassword"
                            variant="outlined"
                            fullWidth
                            sx={{
                                backgroundColor: '#fff',
                                borderRadius:3,

                                '& input': {
                                    direction: 'rtl',
                                    textAlign: 'right',
                                },
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <IconButton
                                            onClick={togglePasswordVisibility}
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <ErrorMessage name="newPassword" component="div" />
                    </div>
                    <div className="fieldContainer">
                        <span>تأكيد كلمة المرور الجديدة</span>
                        <Field
                            className={"input"}
                            as={TextField}
                            type={showConfirmPassword ? 'text' : 'password'}
                            name="ConfirmPassword"
                            variant="outlined"
                            fullWidth
                            sx={{
                                backgroundColor: '#fff',
                                borderRadius:3,
                                '& input': {
                                    direction: 'rtl',
                                    textAlign: 'right',
                                },
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <IconButton
                                            onClick={toggleConfirmPasswordVisibility}
                                        >
                                            {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <ErrorMessage name="ConfirmPassword" component="div" />
                    </div>
                    <Button variant="contained" sx={{
                        width: "100%",
                        background: "#5DBB67",
                        borderRadius: 3,
                        fontFamily: "inherit",
                        marginTop: "20px",
                    }} type="submit">حفظ</Button>
                </Form>
            </Formik>
        </div>
    );
};

export default ForgetpasswordComponent;
