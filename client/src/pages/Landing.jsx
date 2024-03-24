import React from 'react'
import Wrapper from '../assets/wrappers/LandingPage'
import main from '../assets/images/main.svg'
import { Link } from 'react-router-dom'
import { Logo } from '../components'

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className="container page">
                <div className="info">
                    <h1>job <span>tracking</span> app</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod facere, debitis error architecto minus rerum ipsam eos minima, iusto nam praesentium quia assumenda, quisquam perspiciatis at libero eligendi ut provident.</p>
                    <Link to='/register' className='btn register-link'>
                        register
                    </Link>
                    <Link to='login' className='btn'>
                        login / demo
                    </Link>
                </div>
                <img src={main} alt='job hunt' className='img main-img'></img>
            </div>
        </Wrapper>
    )
}


export default Landing
