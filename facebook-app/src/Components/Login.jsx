import React from 'react';
import "./Login.css"

const Login = () => {
    return (
        <div id='login-con'>


            <div className="left">
                <img src="https://logohistory.net/wp-content/uploads/2022/10/Facebook-Logo.png" />
                <p>Facebook helps you connect and share</p>
                <p>with the people in your life.</p>
            </div>

            <div className="right">
                <div className="right-con">
                    <input className='creds' type="email" placeholder='Email address or phone number' /><br />
                    <input className='creds' type="password" placeholder='Password' /><br />
                    <input className='log-in' type="submit" value="Log in" /><br />
                    <p>Forgotten password?</p>
                    <hr />
                    {/* <!-- Button trigger modal --> */}
                    <button type="button" className='create-acc'  data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Create new account
                    </button>

                    {/* <!-- Modal --> */}
                    <div class="modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div className='reg-header'>
                                    <div>
                                        <h1 >Sign Up</h1>
                                        <h6>It's quick and easy</h6>
                                    </div>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <hr />
                                <form className='reg-form'>
                                    <div className="rf-1">
                                        <input type="text" placeholder='First name' />
                                        <input type="text" placeholder='Surname' />
                                    </div>
                                    <input className='rf-2' type="email" placeholder='Mobile number or email address' /><br />
                                    <input className='rf-2' type="password" placeholder='New Password' />
                                    <h6>Date of birth ?</h6>

                                    <div className="date">
                                        <div className='date-1'>
                                            <h6>14</h6>
                                            <i className="fa-solid fa-chevron-down" style={{ color: '#292929' }}></i>
                                        </div>
                                        <div className='date-1'>
                                            <h6>Aug</h6>
                                            <i className="fa-solid fa-chevron-down" style={{ color: '#292929' }}></i>
                                        </div>
                                        <div className='date-1'>
                                            <h6>2023</h6>
                                            <i className="fa-solid fa-chevron-down" style={{ color: '#292929' }}></i>
                                        </div>
                                    </div>

                                    <h6>Gender ?</h6>

                                    <div className="gender">
                                        <div className="gender-1">
                                            <h6>Female</h6>
                                            <input type="radio" />
                                        </div>
                                        <div className="gender-1">
                                            <h6>Male</h6>
                                            <input type="radio" />
                                        </div>
                                        <div className="gender-1">
                                            <h6>Custom</h6>
                                            <input type="radio" />
                                        </div>
                                    </div>

                                    <div className='terms'>
                                        <span>People who use our service may have uploaded your contact information to</span><br />
                                        <span>Facebook. Learn more.</span><br />
                                        <br />
                                        <span>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy.</span><br />
                                        <span>You may receive SMS notifications from us and can opt out at any time.</span><br />
                                    </div>

                                    <input className='signup' type="submit" value="Sign Up" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <p><b>Create a Page</b> for a celebrity, brand or buissness</p>
            </div>


        </div>
    )
}

export default Login