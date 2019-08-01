import React, { useEffect } from 'react';

const Home = ({ history }) => {
    useEffect(() => {
        history.push('/sales');
    }, [history])
    return <div>Home</div>
}

export default Home;