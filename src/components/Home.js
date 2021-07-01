import NavBar from './Navbar'
import './Home.css'

const Home = () => {
    return (

        <>
            <NavBar />
            <section className="container-fluid px-0">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div id="headingGroup" className="text-black text-center d-none d-lg-block mt-5">
                            <h1 className='desc'>...I found my dream job</h1>
                            <h3>Lebron James</h3>
                            <footer>Software Engineer</footer>
                        </div>
                    </div>
                    <div className="col-lg-6" id="lebronpic">
                        <img className="img-fluid" src="https://jobs.viktre.com/wp-content/uploads/2016/10/Lebron-James-suit.jpg" alt="">
                        </img>
                    </div>
                </div>
            </section>
            <br />

            <br />
            <section className="container-fluid px-0">
                <div className="row align-items-center content">
                    <div className="col-md-6 order-2 order-md-1">
                        <img src="https://media.gq-magazine.co.uk/photos/5d13a9fd976fa38faff3b089/master/pass/3tyson-fury-02-gq-28feb19_b.jpg" alt="" className="img-fluid"></img>
                    </div>
                    <div className="col-md-6 order-1 order-md-2">
                        <div className="row justify-content-center">
                            <div className="col-10 col-lg-8 blurb mb-5 mb-md-0">
                                <h1 className='desc'>Wouldn't be here without Career Builder</h1>
                                <h3>Tyson Fury</h3>
                                <footer>Doctor</footer>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <br />
            <br />

            <div class="footer-dark">
                <footer>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6 col-md-3 item">
                                <h3>Services</h3>
                                <ul>
                                    <li><a href="#">Employer Plan</a></li>
                                    <li><a href="#">Students</a></li>
                                    <li><a href="#">Companies</a></li>
                                </ul>
                            </div>
                            <div class="col-sm-6 col-md-3 item">
                                <h3>About</h3>
                                <ul>
                                    <li><a href="#">Company</a></li>
                                    <li><a href="#">Team</a></li>
                                    <li><a href="#">Careers</a></li>
                                </ul>
                            </div>
                            <div class="col-md-6 item text">
                                <h3>Career Builder</h3>
                                <p>Founded by Gino Tasis</p>
                            </div>
                            <div class="col item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a></div>
                        </div>
                        <p class="copyright">Company Name © 2021</p>
                    </div>
                </footer>
            </div>
        </>

    )
}

export default Home