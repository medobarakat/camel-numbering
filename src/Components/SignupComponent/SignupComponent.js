import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, TextField } from '@mui/material';
import "./SignupComponent.scss"
import * as Yup from 'yup'; 
import { Link } from 'react-router-dom';
const SignupComponent = () => {
    const initialValues = {
        username: '',
        password: '',
    };
    const validationSchema = Yup.object({
        username: Yup.string().required('يرجى إدخال الهوية الوطنية'),
        password: Yup.string().required('يرجى إدخال كلمة المرور'),
      });
    const handleSubmit = (values) => {
        // Handle form submission logic here
        console.log(values);
    };
    return (
        <div className="SignupComponentWrapper">
            <h5>
                تسجيل الدخول
            </h5>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                <Form className='formContainer'>
                    <div className="fieldContainer">
                        <span>الهويه الوطنيه</span>
                        <Field
                            className={"input"}
                            as={TextField}
                            type="text"
                            name="username"
                            variant="outlined"
                            fullWidth
                        />
                        <ErrorMessage name="username" component="div" />
                    </div>
                    <div className="fieldContainer">
                        <span>كلمه المرور</span>
                        <Field
                            className={"input"}
                            as={TextField}
                            type="password"
                            name="password"
                            variant="outlined"
                            fullWidth
                        />
                        <ErrorMessage name="password" component="div" />
                    </div>
                    <div className='passReset'>
                        <Link>
                        اعادة تعيين / تغيير كلمة المرور
                        </Link>
                    </div>
                    <Button variant="contained" sx={{
                        width:"100%",
                        background:"#5DBB67",
                        borderRadius:3,
                        fontFamily:"inherit",
                        marginTop:"20px",
                    }} type="submit">دخول</Button>
                    {/* <button type="submit">Login</button> */}
                </Form>
            </Formik>
        </div>
    )
}

export default SignupComponent