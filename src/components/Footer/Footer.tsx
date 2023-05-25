import React, {Component} from 'react';
import {Container, Typography, Link} from '@material-ui/core';

class Footer extends Component {
  render() {
    return (
      <div style={{backgroundColor: 'white', padding: '20px'}}>
        <Container maxWidth='md'>
          <Typography variant='h6' align='center'>
            Copyright &copy; 2023, Angel Garces
            <br />
            <Link href='https://www.linkedin.com/in/angelgarces1248'>
              LinkedIn
            </Link>
            <br />
            <Link href='https://github.com/AngelVzla99'>GitHub</Link>
          </Typography>
        </Container>
      </div>
    );
  }
}

export default Footer;
