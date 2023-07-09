"use client";
import React, { useEffect } from "react";
import { useField, Form, FormikProps, Formik } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  // contactNumber: Yup.string().test({
  //   name: "is-sku",
  //   skipAbsent: true,
  //   test(value, ctx) {
  //     if (value.startsWith("09"))
  //       return ctx.createError({ message: "SKU missing correct prefix" });
  //   },
  // }),
  email: Yup.string().email("Invalid email").required("Required"),
});

const MyTextField = ({ label, ...props }: any) => {
  const [field, meta, helpers] = useField(props);
  return (
    <>
      <label>
        {label}
        <input {...field} {...props} />
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};
interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

export default function page() {
  const sampleObj = {
    email: "nana@mail.com",
    firstName: "red",
    lastName: "rose",
  };

  return (
    <div>
      <h1>My Form</h1>
      <Formik
        initialValues={sampleObj}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {(props: FormikProps<Values>) => (
          <Form>
            <MyTextField name="firstName" type="text" label="First Name" />
            <MyTextField name="lastName" type="text" label="Last Name" />
            <MyTextField name="email" type="email" label="Email" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
