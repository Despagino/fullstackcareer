import NavBar from './Navbar';
import './About.css';

const About = () => {
    return (
        <div>
            <NavBar />
            <div className='section'>
                <div className='container'>
                    <div className='content-section'>
                        <div className='title'>
                            <h1>Gino Tasis</h1>
                        </div>
                        <div className='content'>
                            <h4>I create websites.</h4>
                            <span>Web Development</span>
                            <span>Photography</span>
                            <span>Coding</span>
                            <div className='button'>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        <div className='image-section'>
                            <img src="me.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About