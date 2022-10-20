import React from "react";
import { Form, FormikProvider, useFormik } from "formik";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { loginUser } from "../../../Store/Auth/actions";
import Button from "../../../Shared/Button/Button";
import InputField from "../../../Shared/InputField";
import Headerauth from "../Headerauth/Headerauth";
import "./Login.scss";

export default function Login(props) {
  const dispatch = useDispatch();
  let history = useHistory();
  const loginUserSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter valid email address")
      .required("Please enter email address"),
    password: Yup.string().required("Please enter password"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    enableReinitialize: true,
    validationSchema: loginUserSchema,
    onSubmit: async (values) => {
      await dispatch(
        loginUser({
          email: values.email,
          password: values.password,
          resetForm: formik.resetForm,
          history: history,
        })
      );
    },
  });
  return (
    <div className="col-sm-12 login_height">
      <div className="col-sm-12">
        <Headerauth />
      </div>

      <div className="row">
        <div className="col-sm-3  ">
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10"></div>
            <div className="col-sm-1"></div>
          </div>
        </div>
        <div className="col-sm-6  border-scss">
          <FormikProvider value={formik}>
            <Form noValidate onSubmit={formik.handleSubmit}>
              <div className="row">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                  <div className="col-sm-12 px-4">
                    <h1 className="heading4_login m-0">Welcome back</h1>
                  </div>
                  <div className="col-sm-12 py-4 px-4">
                    <Button
                      size={"sm"}
                      className="button_login"
                      variant="outline"
                    >
                      <span className="button_linkedin">
                        {" "}
                        <i className="fab fa-linkedin-in"></i>
                        <span className="text_color_line"> | </span>{" "}
                      </span>{" "}
                      Sign in with LinkedIn
                    </Button>
                  </div>
                  <div className="col-sm-12 py-4 px-4">
                    <img
                      src="../images/or.png"
                      className="img-fluid img_width_login"
                    />
                  </div>
                  <div className="col-sm-12 px-4">
                    <label className="label_login m-0">Email</label>
                    <InputField
                      placeholder="Samantha_Nader@hotmail.com"
                      name="email"
                      value={formik.values && formik.values.email}
                      onHandleChange={formik.handleChange}
                      error={Boolean(
                        formik.touched.email && formik.errors.email
                      )}
                      helpertext={formik.errors.email}
                    />
                    <span className="join_login  ">
                      <span>
                        <img
                          src="../images/bulb.png"
                          className="img-fluid img_bulb_width"
                        />
                      </span>
                      <span className="pt-2">
                        {" "}
                        This should be an email you can access post-acquisition{" "}
                      </span>
                    </span>
                  </div>
                  <div className="col-sm-12 px-4 pt-4">
                    <label className="label_login m-0">Password</label>
                    <InputField
                      type="password"
                      placeholder="Enter your password"
                      name="password"
                      value={formik.values && formik.values.password}
                      onHandleChange={formik.handleChange}
                      error={Boolean(
                        formik.touched.password && formik.errors.password
                      )}
                      helpertext={formik.errors.password}
                    />
                    <span className="join_login">
                      Forgot your password?
                      <span className="join2_login">
                        <Link to="/forget-password" className="link_decoration">
                          {" "}
                          <b>Reset </b>
                        </Link>
                      </span>
                    </span>
                  </div>
                  <div className="col-sm-12 px-4">
                    <Button
                      size={"sm"}
                      className=" button_style_login"
                      variant="outline"
                      onHandleClick={formik.handleSubmit}
                    >
                      Log in{" "}
                      <span className="right_arrow_login">
                        {" "}
                        <i className="fas fa-arrow-right"></i>{" "}
                      </span>
                    </Button>
                  </div>
                  <div className="col-sm-12 mobile_padding_bottom px-4 py-2">
                    <span className="join_login">
                      Do not have’n account?
                      <span className="join2_login">
                        <Link to="/signup" className="link_decoration">
                          {" "}
                          <b>Sign up</b>
                        </Link>
                      </span>
                    </span>
                  </div>
                </div>
                <div className="col-sm-1"></div>
              </div>
            </Form>
          </FormikProvider>
        </div>
        <div className="col-sm-3  ">
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10"></div>
            <div className="col-sm-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
