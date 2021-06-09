import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { getHeroesByPublisher } from '../selectores/getHeroesByPublisher'
import HeroCard from './HeroCard';

const HeroList = ({publisher}) => {


  const heroesList = useMemo(() => getHeroesByPublisher(publisher), [ publisher ]) ;

  return (
    <div className='card-columns'>
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
