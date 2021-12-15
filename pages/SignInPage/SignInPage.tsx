import React, { FC, useEffect } from "react";
import { useHistory } from "react-router";
import SignInForm from "../../components/SignInForm";
import { useTSelector } from "../../hooks";
import { useActions } from "../../hooks/useActions";
import "./SignInPage.scss"

const SignInPage:FC = () => {
  const history = useHistory()
  const { user, loading, error } = useTSelector(state => state.user)
  const { signIn } = useActions()
  useEffect(() => {
    if (user) history.push('/users/' + user.id)
  }, [user])
  
  if (error) console.log(error)

  return (
    <div className="sign-in-page">
     
        <SignInForm onFormSubmit={signIn} /> 
    </div>
  )
}

export default SignInPage
