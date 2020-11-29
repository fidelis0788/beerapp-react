import React from 'react';
import BeerComponent from './BeerCompmonent';

const ListBeer = (props) => {
  return (
    props.beers.map((beer) => {
      return <BeerComponent key={beer.id} beer={beer} />
    })
  )
}

export default ListBeer;
