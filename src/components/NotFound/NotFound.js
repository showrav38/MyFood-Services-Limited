import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
    return (
        <div className=" mx-auto">
            <img className="imagN" src="https://assets.materialup.com/uploads/06bd5e15-6377-4e38-bcc3-d716dba148ae/preview.jpg"></img><br />
            <Button variant="danger"><Link style={{ margin: '10px', textDecoration: 'none', color: 'white' }} to="/">Back to Home</Link></Button>{' '}
        </div>
    );
};

export default NotFound;