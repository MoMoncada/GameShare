import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import avatar1 from '../assets/images/avatar1.png';
import avatar2 from '../assets/images/avatar2.png';


//--- Renders Inbox Page ---//
const Inbox = () => {
    
    const handleAccept = () => {
        console.log('New feature coming soon...');
    };

    const handleReject = () => {
        console.log('New feature coming soon...');
    };

    return (
        <AnimatedPage>
            <br></br>
            <div className="card" style={{opacity:0.85}}>
                <div className="card-body">
                    <h1 className="card-title text-center">My Game Requests</h1>
                </div>
            </div>
            <br></br><br></br>
            <section className='container'>
                <div className="row mt-2 justify-content-center">
                    <div className="card col-8 align-self-center border-secondary border border-3" >
                        <div className="row no-gutters">
                            <div className="ps-0 pe-0 col-sm-4">
                                <img className="card-img" src={avatar1} alt="User Photo"/>
                            </div>
                            <div className="col-sm-8">
                                <div className="card-body">
                                    <h5 className="card-title">William Cable</h5>
                                    <p className="card-text">Hey! My name is Will and I'd love to borrow your copy of God of War!</p>
                                    <button type="button" className="button-80 me-1" onClick={handleAccept}>Accept</button>
                                    <button type="button" className="button-80 me-1" onClick={handleReject}>Reject</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-4 justify-content-center">
                    <div className="card col-8 align-self-center border-secondary border border-3" >
                        <div className="row no-gutters">
                            <div className="ps-0 pe-0 col-sm-4">
                                <img className="card-img" src={avatar2} alt="User Photo"/>
                            </div>
                            <div className="col-sm-8">
                                <div className="card-body">
                                    <h5 className="card-title">Mauxi Moncada</h5>
                                    <p className="card-text">Hey! My name is Mauxi and I'd love to borrow your copy of Assassins Creed!</p>
                                    <button type="button" className="button-80 me-1" onClick={handleAccept}>Accept</button>
                                    <button type="button" className="button-80 me-1" onClick={handleReject}>Reject</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        <br></br>

        <div className="d-flex justify-content-center mb-4">  
            <Link to="/games">
                <button className="button-80 ms-1" role="button" type="button">Find Something to Play <i className="fa-sharp fa-solid fa-search"></i></button>
            </Link>
        </div>
        </AnimatedPage>

    );

};

export default Inbox;
