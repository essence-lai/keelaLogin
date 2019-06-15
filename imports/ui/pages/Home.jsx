import React from 'react';

function Home() {
    return (
        <div className={"container"}>
            <div className={"content center-align"}>
               <h1> Welcome to Keela</h1>
            </div>
            <div className="row">
                <div className="home-padding">
                    <div className="row-xs-12 row-sm-6 row-md-5">
                        <div className="col s3 offset-s3 ">
                            <a href='/login'className="btn-large btn-block btn-primary" type="submit">Login</a>
                        </div>
                        <div className="col s3 offset-l1">
                            <a href='https://www.keela.co/'className="btn-large btn-block btn-amethyst ">Visit Keela</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
