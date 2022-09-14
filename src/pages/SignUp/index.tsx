import React from 'react';
import { Footer } from '../../components/Footer';
import NavBar, { Header } from '../../components/Header';
import { useRedux } from '../../hooks';
import { CreateUser } from './CreateUser';
import { SignIn } from './SignIn';
import { Timeline } from './Timeline';

export const SignUp = () => {
    const { dispatch, useAppSelector } = useRedux();
    const { activeState } = useAppSelector((state) => ({
      activeState:state.Pages.activeState,
  }))
    return(<>
    <Timeline/>
    {
      activeState === "sign_up" &&
      <CreateUser/>
    }
    {
      activeState === "sign_in" &&
      <SignIn/>
    }
    </>)
}