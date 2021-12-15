import React, { FC, HTMLAttributes } from "react";
import { Field, Form, Formik } from "formik"
import Button from "../Button";
import Input from "../Input";
import { registerShema } from "../../common/shemes";
import "./SignUpForm.scss"
import Title from "../Title";
import Text from "../Text";
import { SignUpValues } from "../../common/intarfaces";

export interface SignUpFormProps extends HTMLAttributes<HTMLDivElement> {
  onFormSubmit: (values: SignUpValues) => void
}

export const SignUpForm: FC<SignUpFormProps> = ({ 
  onFormSubmit,
  className,
  ...props 
}) => {
  const initialValues: SignUpValues = {
    name: '',
    email: '',
    password: '',
    password2: '',
  }

  className = 'sign-up-form ' + className

  return (
    <div className={className} {...props}>
      <Formik
        initialValues={initialValues}
        validationSchema={registerShema}
        onSubmit={onFormSubmit} >

        <Form>
          <Title label="Sign up" className="mb-2"/>
          <Text 
            label="Fill in the fields to create your account." 
            className="mb-4" />

          <Field 
            name="name"
            type="text"
            className="w-100 mb-2"
            as={Input} />
          <Field 
            name="email"
            type="email"
            className="w-100 mb-2"
            as={Input} />
          <Field 
            name="password"
            type="text"
            className="w-100 mb-2"
            as={Input} />
          <Field 
            name="password2"
            type="text"
            className="w-100 mb-4"
            as={Input} />
          <Button type="submit" label="Sign Up" className="w-100" />

        </Form>
      </Formik>
    </div>
  )
}