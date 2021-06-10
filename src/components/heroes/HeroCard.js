import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const HeroCard = ({id, superhero, publisher, alter_ego, first_appearance, characters}) => {
  return (
    <div className="card col-md-6" style={{maxWidth: 540}}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={`./assets/heroes/${id}.jpg`} className="card-img" alt="superhero" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{superhero}</h5>
            <p className="card-text">{alter_ego}</p>
            <p className="card-text">
              <small className="text-muted">{first_appearance}</small>
            </p>
            <Link to={`/heroe/${id}`}>
              Mas..
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

HeroCard.propTypes = {

}

export default HeroCard
