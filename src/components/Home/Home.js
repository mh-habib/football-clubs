import React, { useEffect, useState } from 'react';
import Club from '../Club/Club';
import './Home.css'

const Home = () => {
    const [clubs, setClubs] = useState([]);

    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
            .then(res => res.json())
            .then(data => setClubs(data.teams))
    }, [])
    return (
        <div className="bg-info">
            <div className="background-image d-flex align-items-center justify-content-center">
                <h1 className="text-white font-weight-bold text-center">Football Clubs</h1>
            </div>
            <div className="row justify-content-center pt-3 pb-5 px-5">
                {
                    clubs.map(cl => <Club club={cl}  key={cl.strTeamBadge}></Club>)
                }
            </div>
        </div>
    );
};

export default Home;