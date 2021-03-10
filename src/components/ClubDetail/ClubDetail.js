import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag, faHistory, faFutbol, faMars, faHome } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useParams } from 'react-router';
import './ClubDetail.css';
import maleTeamImg from './../../Photo/male.png';
import femaleTeamImg from './../../Photo/female.png';


const ClubDetail = () => {
    const { clubId } = useParams();
    const [club, setClub] = useState([]);
    const { strStadiumThumb, strTeamBadge, strTeam, intFormedYear, strCountry, strGender, strDescriptionEN, strStadiumDescription } = club;

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${clubId}`)
            .then(res => res.json())
            .then(data => setClub(data.teams[0]))
    }, [clubId])
    
    const clubDetailTopImg = {
        backgroundImage: `linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.4)), url(${strStadiumThumb})`,
        width: '100%',
        height: '300px',
        backgroundPosition: 'center',
        backgroundRepeat: 'noRepeat',
        backgroundSize: 'cover',
        backgroundBlendMode: 'darken'
    }

    return (
        <div className="bg-info">

            <div style={clubDetailTopImg} className="d-flex align-items-center justify-content-center">
                <img className="detail-top-batch" src={strTeamBadge} alt="" />
            </div>
            <div className="container bg-info" >
                <div className="bg-warning rounded mt-4 mb-4 p-3 d-md-flex justify-content-between">
                    <div>
                        <h2>{strTeam}</h2>
                        <p><FontAwesomeIcon icon={faHistory} /> Founded: {intFormedYear}</p>
                        <p><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</p>
                        <p><FontAwesomeIcon icon={faFutbol} /> Sport Type: Football</p>
                        <p><FontAwesomeIcon icon={faMars} /> Gender: {strGender}</p>
                    </div>
                    <div className="text-center ">
                        
                        {
                            strGender === 'Male' ?
                            <img className="team-img" src={maleTeamImg} alt="" /> :
                            <img className="team-img" src={femaleTeamImg} alt="" />
                        }
            
                    </div>
                </div>
                <div className="p-1">
                    <p>{strDescriptionEN}</p>
                    <p>{strStadiumDescription}</p>
                </div>
                <div className="d-flex justify-content-center font-weight-bold pb-5 text-font">
                    <a href="/home"><span className="p-2 home-icon"><FontAwesomeIcon icon={faHome} size="2x" /></span></a>
                    <a href="https://www.facebook.com"><span className="p-2 facebook-icon"><FontAwesomeIcon icon={faFacebook} size="2x" /></span></a>
                    <a href="https://www.twitter.com"><span className="p-2 twitter-icon"><FontAwesomeIcon icon={faTwitter} size="2x" /></span></a>
                    <a href="https://www.youtube.com"><span className="p-2 youTube-icon"><FontAwesomeIcon icon={faYoutube} size="2x" /></span></a>
                </div>
            </div>

        </div>
    );
};

export default ClubDetail;