import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Box, Button, TextField } from '@mui/material';
import "./LoginComponent.scss"
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { LoginUrl, MainUrl } from "../../Constance/ApiConstance"
import { useDispatch } from 'react-redux';
import { setToken } from '../../Features/user/authSlice';
const LoginComponent = () => {
    const dispatch = useDispatch()
    const [errorText, setErrorText] = useState("")
    const [loading, setLoading] = useState(false)
    const [sucess, setSucess] = useState(false)
    const initialValues = {
        username: '',
        password: '',
    };
    const validationSchema = Yup.object({
        username: Yup.string().required('يرجى إدخال الهوية الوطنية'),
        password: Yup.string().required('يرجى إدخال كلمة المرور'),
    });
    const handleSubmit = (values) => {
        HandleLogIn(values.username, values.password)
    };


    const HandleLogIn = async (username, password) => {
        setSucess(false)
        setLoading(true)
        const url = MainUrl + LoginUrl;
        setErrorText("")
        axios
            .post(url, { username, password })
            .then((res) => {
                // console.log(res.data.token);
                setLoading(false)
                setSucess(true)
                dispatch(setToken(res.data.token))
            })
            .catch((err) => {
                setErrorText(err.response.data.error);
                setLoading(false)
                setSucess(false)
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
                    }} type="submit">
                        {
                            loading ? " ... جاري التحميل" : "دخول"
                        }
                    </Button>
                    {
                        errorText && (
                            <p>
                                {errorText}
                            </p>
                        )
                    }
                    {
                        sucess && (
                            <Box sx={{ textAlign: "center" , color:"white" }}>
                                <p>
                                    تم تسجيل الدخول بنجاح
                                </p>
                            </Box>
                        )
                    }
                </Form>
            </Formik>
        </div>
    )
}

export default LoginComponent