import './App.css';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Outlet } from 'react-router-dom';

import ResponsiveAppBar from './components/ResponsiveAppBar';
import { getMovies, getEvents } from './actions';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies('all latest recommended upcoming'));
    dispatch(getEvents());
  }, [dispatch]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <React.Fragment>
        <ResponsiveAppBar />
        <Outlet />
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
