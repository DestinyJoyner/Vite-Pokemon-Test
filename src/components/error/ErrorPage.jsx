import React from 'react';
import { Link } from 'react-router-dom';
import "./ErrorPage.css"

function ErrorPage(props) {
    return (
        <div className='error'>
        <h1>Error</h1>
        <span>Something went wrong</span>
        <Link to="/">Back to Home</Link>
    </div>
    );
}

export default ErrorPage;