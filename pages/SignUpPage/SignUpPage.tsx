import React, { FC, useCallback, useEffect } from "react";
import { useHistory } from "react-router";
import SignUpForm from "../../components/SignUpForm";
import { useTSelector } from "../../hooks";
import { useActions } from "../../hooks/useActions";
import "./SignUpPage.scss"

const SignUpPage: FC = () => {
  const history = useHistory()
  const { user, error, loading } = useTSelector(state => state.user)
  const { signUp } = useActions()
  useEffect(() => {
    if (user) history.push('/users/' + user.id)
  }, [user])

  if (error) console.log(error)

  return (
    <div className="sign-up-page">
      {loading ? 
        <p>loading</p> : 
        <SignUpForm onFormSubmit={signUp} />}
    </div>
  )
}

export default SignUpPage
