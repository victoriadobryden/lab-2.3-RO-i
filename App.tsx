import React, { useEffect } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom'
import MainBar from './components/MainBar';
import { useActions, useTSelector } from './hooks';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import SearchSeriesPage from './pages/SearchSeriesPage';
import SearchUserPage from './pages/SearchUserPage';
import SerialPage from './pages/SerialPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import UserPage from './pages/UserPage';

function App() {
  const { user } = useTSelector(s => s.user)
  const { setUser } = useActions()

  useEffect(() => {
    const userStr = localStorage.getItem('user')
    if (userStr) setUser( JSON.parse(userStr) )
  }, [])

  return (
    <Switch>
      <Route exact path="/sign-up" component={SignUpPage} />
      <Route exact path="/sign-in" component={SignInPage} />
      <Route exact path="/movie-tracker" component={SignInPage} />
    
      <Route path='/'>
        {!!user ? <Route path="/news" component={NewsPage} /> : null}
        <Route exact path="/users" component={SearchUserPage} />
        <Route exact path="/series" component={SearchSeriesPage} />

        <Route exact path="/series/:id" component={SerialPage} />
        <Route exact path="/users/:id" component={UserPage} />

        <Route exact path="/friends/:id" component={SearchUserPage} />
        
        <MainBar /> 
      </Route>
    </Switch>
  );
}

export default App;
