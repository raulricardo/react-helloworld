import React from 'react';

import './character_list.scss';


class CharacterList extends React.Component {
  constructor() {
    super();
    this.state = {items: []}
  }
  /*componentWillMount(){
    fetch('http://swapi.co/api/people/?format=json')
      .then( response => response.json() )
      .then( ({results: items}) => this.setState({items}))
  }*/
  render() {
    let items = this.state.items;

    return (
      <ul className="list">
        <h3 className="list__title">Star Wars Characters</h3>

        {items.map(item =>
          <li key={item.name}> {item.name} </li>)}
      </ul>
    )
  }
}

export default CharacterList;