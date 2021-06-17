import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { Redirect, useParams } from 'react-router'
import { getHeroeById } from '../selectores/getHeroByID';

const HeroScreen = ({history}) => {

  const {heroId} = useParams();

  const heroe =  useMemo(() => getHeroeById(heroId), [heroId]) ;

  if ( !heroe ) {
    return <Redirect to="/marvel" />
  }

  const {superhero, publisher, alter_ego, first_appearance, characters} = heroe[0];

  const handleBack  = () => {
    history.goBack();
  }

  return (
    <div className="row mt-5">
      <div className="col-4 animate__animated animate__fadeIn">
        <img src={`../assets/heroes/${heroId}.jpg`} alt={heroId} className="img-thumbnail" />
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b>Altrer ego:</b> {alter_ego} </li>
          <li className="list-group-item"> <b>Publisher:</b> {publisher} </li>
          <li className="list-group-item"> <b>First appearance:</b> {first_appearance} </li>
          <button className="btn btn-primary" onClick={handleBack} >Volver</button>
        </ul>
      </div>
    </div>
  )
}

HeroScreen.propTypes = {
  history: PropTypes.object.isRequired
}

export default HeroScreen
