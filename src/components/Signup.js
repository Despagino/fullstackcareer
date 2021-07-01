import NavBar from './Navbar';
import './Signup.css';

const Signup = () => {
    return (
        <div>
            <NavBar />
            <section className='signupbody'>
                <div className='signcontainer'>
                    <div className='signtitle'>
                        Registration
                    </div>
                    <form action="#">
                        <div className='user-details'>
                            <div className='input-box'>
                                <span className='details'>Full Name</span>
                                <input type="text" placeholder='Enter your name' required />
                            </div>
                            <div className='input-box'>
                                <span className='details'>Username</span>
                                <input type="text" placeholder='Enter your username' required />
                            </div>
                            <div className='input-box'>
                                <span className='details'>Email</span>
                                <input type="text" placeholder='Enter your email' required />
                            </div>
                            <div className='input-box'>
                                <span className='details'>Phone Number</span>
                                <input type="text" placeholder='Enter your phone number' required />
                            </div>
                            <div className='input-box'>
                                <span className='details'>Password</span>
                                <input type="passwird" placeholder='Enter your password' required />
                            </div>
                            <div className='input-box'>
                                <span className='details'>Confirm Password</span>
                                <input type="password" placeholder='Password Confirm' required />
                            </div>
                            <div className='gender-details'>
                                <span className='gender-title'>Gender</span>
                                <div className='category'>
                                    <label htmlFor="">
                                        <span className='dot one'></span>
                                        <span className='gender'>Male</span>
                                    </label>
                                    <label htmlFor="">
                                        <span className='dot one'></span>
                                        <span className='gender'>Female</span>
                                    </label>
                                    <label htmlFor="">
                                        <span className='dot one'></span>
                                        <span className='gender'>Prefer not to say</span>
                                    </label>
                                </div>
                            </div>
                            <div className='button'>
                                <input type="submit" value='Register' />
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>

    )
}

export default Signup;