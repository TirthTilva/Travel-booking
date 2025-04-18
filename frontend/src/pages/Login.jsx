import React, { useState, useContext } from 'react'
import { Container, Col, Row, Form, FormGroup, Button } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/login.css'

import loginImg from '../assets/images/login.png'
import userIcon from '../assets/images/user.png'
import { AuthContext } from '../context/AuthContext'
import { BASE_URL } from '../utils/config'

const Login = () => {

  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const { dispatch } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleChange = e => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async e => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
  
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(credentials)
      });
  
      const result = await res.json();
      if (!res.ok) {
        alert(result.message);
        return;
      }
  
      // Hardcoded admin check
      if (credentials.email === 'admin@gmail.com' && credentials.password === '12345') {
        dispatch({ type: 'LOGIN_SUCCESS', payload: result.data });
        navigate("/admin");
      } else {
        dispatch({ type: 'LOGIN_SUCCESS', payload: result.data });
        navigate("/");
      }
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE', payload: err.message });
    }
  };
  
  
  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={loginImg} alt='login-img' />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt='user' />
                </div>
                <h2>Login</h2>

                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input type='email' placeholder='Email' required id='email' onChange={handleChange} />

                  </FormGroup>

                  <FormGroup>
                    <input type='password' placeholder='Password' required id='password' onChange={handleChange} />

                  </FormGroup>
                  <Button className='btn secondry__btn auth__btn' type='submit'>Login</Button>
                </Form>

                <p>Don't have account ? <Link to='/register'>Create</Link></p>

              </div>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Login;