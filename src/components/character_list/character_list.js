import React from 'react';

import './character_list.scss';


class CharacterList extends React.Component {
  render() {
    return (
      <ul className="list">
        <h3 className="list__title">Star Wars Characters</h3>
        <li className="list__item">
          list item
        </li>
        <li className="list__item">
          list item
        </li>
        <li className="list__item">
          list item
        </li>
      </ul>
    )
  }
}

export default CharacterList;