import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Club.css'
import { useHistory } from 'react-router';

const Club = (props) => {
    const { strTeam, strTeamBadge, idTeam} = props.club;
    const history = useHistory();
    const handleClick = (id) => {
        history.push(`/club/${id}`);
    }
    return (
        <div className="card col-md-3 col-sm-5 m-3 text-center">
            <img src={strTeamBadge} className="batch-size" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{strTeam}</h5>
                <p className="card-text">Sports Type: Football</p>
            </div>
            <div className="card-footer bg-white text-center border-0 pb-3">
                <button onClick={()=>handleClick(idTeam)} className="btn btn-primary btn-sm btn-block"> Explore <FontAwesomeIcon icon={faArrowRight}/> </button>
            </div>
        </div>
    );
};

export default Club;