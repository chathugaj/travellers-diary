import React from 'react';
import appStyles from '../App.module.css';

const NotFoundPage = () => {
    return (
        <div className="container mt-5 mb-5">
            <section className="py-4 py-xl-5">
                <div className="container h-100">
                    <div className="row h-100">
                        <div
                            className="col-md-10 col-xl-8 text-center d-flex d-sm-flex d-md-flex justify-content-center align-items-center mx-auto justify-content-md-start align-items-md-center justify-content-xl-center">
                            <i className={`bi bi-exclamation-octagone ${appStyles.ErrorIcon}`}></i>
                            <div className="text-start">
                                <h1 className="display-1 text-uppercase fw-bold mb-3">404</h1>
                                <p className="mb-4">The page you are looking for does not exist</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default NotFoundPage;