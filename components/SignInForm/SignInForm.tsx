import React, { FC, HTMLAttributes } from "react";
import { Field, Form, Formik } from "formik"
import Button from "../Button";
import Input from "../Input";
import { loginShema } from "../../common/shemes";
import Title from "../Title";
import Text from "../Text";
import "./SignInForm.scss"
import { SignInValues } from "../../common/intarfaces";
  
export interface SignInFormProps extends HTMLAttributes<HTMLDivElement> {
  onFormSubmit: (values: SignInValues) => void
}

export const SignInForm: FC<SignInFormProps> = ({ 
  onFormSubmit,
  className,
  ...props
 }) => {
  const initialValues: SignInValues = {
    email: '',
    password: '',
  }

  className = 'sign-in-form ' + className

  return (
    <div className={className} {...props}>
      <Formik
        initialValues={initialValues}
        validationSchema={loginShema}
        onSubmit={onFormSubmit}
      >
        <Form>
          <Title label="Sign in" className="mb-2"/>
          <Text 
            label="Use the information you entered during the registration to enter your account." 
            className="mb-4" />

          <Field 
            name="email"
            type="email"
            className="w-100 mb-2"
            as={Input} />
          <Field 
            name="password"
            type="text"
            className="w-100 mb-4"
            as={Input} />
          <Button type="submit" label="Sign Up" className="w-100" />

        </Form>
      </Formik>
    </div>
  )
}