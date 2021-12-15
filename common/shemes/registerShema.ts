import * as Yup from 'yup'

export const registerShema = Yup.object({
  name: Yup.string().min(2).required('Email is required'),
  email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
  password: Yup.string().min(8).required('Password is required'),
  password2: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match').required("Confirm password")
})