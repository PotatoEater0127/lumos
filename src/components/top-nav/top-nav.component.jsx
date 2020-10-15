import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function TopNav() {
  return (
    <AppBar>
    <Toolbar>
      <Typography variant="h6">協勤簽到表</Typography>
    </Toolbar>
  </AppBar>
  )
}
