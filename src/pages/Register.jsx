import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import { FormRow, Logo } from '../components'

const Register = () => {
    return (
        <Wrapper>
            <form className='form'>
                <Logo />
                <h4>register</h4>
                <FormRow type='text' name='name' defaultValue='andy' />
                <FormRow type='text' name='lastName' defaultValue='smith' labelText='last name' />
                <FormRow type='text' name='location' defaultValue='earth' />
                <FormRow type='email' name='name' defaultValue='andy@gmail.com' />
                <FormRow type='password' name='password' defaultValue='secret' />

                <button type='submit' className='btn btn-block'>submit</button>
                <p>Already a member?
                    <Link to='/login' className='member-btn'> Login</Link>
                </p>
            </form>
        </Wrapper>
    )
}

export default Register
