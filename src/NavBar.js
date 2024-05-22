import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    const [loginStatus, changeLoginStatus] = useState('Log In');

    return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>Assignment #1</Navbar.Brand>
        <Navbar.Toggle/>
            <Button onClick={() => {
                loginStatus === 'Log In' ? changeLoginStatus('Log Out') : changeLoginStatus('Log In'); 
            }}>{loginStatus}</Button>
      </Container>
    </Navbar>
    );
  }

  export default NavBar;