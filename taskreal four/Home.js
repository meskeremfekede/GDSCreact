import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/about');
    };

    return (
        <div>
            <h2>Home Page</h2>
            <button onClick={handleNavigate}>Go to About Page</button>
        </div>
    );
};

export default Home;
