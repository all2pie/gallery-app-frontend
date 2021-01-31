import React from 'react';
// import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './Header.scss';

export function Header() {
  return (
    <div>
      <AppBar position='static' className='header'>
        <Toolbar>
          <Button color='inherit' style={{ marginRight: 'auto' }}>
            <Link to='/'>Gallery</Link>
          </Button>

          <Button color='inherit'>
            <Link to='/image/add'>Add</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
