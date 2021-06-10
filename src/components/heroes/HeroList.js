import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { getHeroesByPublisher } from '../selectores/getHeroesByPublisher'
import HeroCard from './HeroCard';

const HeroList = ({publisher}) => {


  const heroesList = useMemo(() => getHeroesByPublisher(publisher), [ publisher ]) ;

  return (
    <div className='row row-cols-1 row-cols-md-3 g-4 animate__animated animate__fadeIn'>
      {heroesList.map(heroe => (
        <HeroCard key={heroe.id} {...heroe} />
      ))
    }
    </div>
  )
}

HeroList.propTypes = {

}

export default HeroList
