import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, TextField } from '@mui/material';
import "./LoginComponent.scss"
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { LoginUrl, MainUrl } from "../../Constance/ApiConstance"
const LoginComponent = () => {
    const [errorText, setErrorText] = useState("")
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
        HandleLogIn(values.username , values.password)
    };


    const HandleLogIn = async (username, password) => {
        const url = MainUrl+LoginUrl;
        setErrorText("")
        axios
            .post(url)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                setErrorText(err.response.data.error);
            });
    };
    return (
        <div className="LoginComponentWrapper">
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
                        <Link to={"/forgetpassword"}>
                            اعادة تعيين / تغيير كلمة المرور
                        </Link>
                    </div>
                    <Button variant="contained" sx={{
                        width: "100%",
                        background: "#5DBB67",
                        borderRadius: 3,
                        fontFamily: "inherit",
                        marginTop: "20px",
                    }} type="submit">دخول</Button>
                    {
                        errorText && (
                            <p>
                                {errorText}
                            </p>
                        )
                    }
                </Form>
            </Formik>
        </div>
    )
}

export default LoginComponent