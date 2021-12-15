import * as Yup from 'yup'

export const loginShema = Yup.object({
  email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
  password: Yup.string().min(8).required('Password is required')
})