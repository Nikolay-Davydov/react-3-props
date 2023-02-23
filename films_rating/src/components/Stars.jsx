import React from 'react'
import propTypes, { element, number } from 'prop-types'
import Star from './Star';

export default function Stars(props) {
    const {count} = props;
    const rating = new Array(count).fill().map((_, idx) => <li key={idx}><Star /></li>)

    if (!Number.isInteger(count) || count < 0 || count > 5) {
        return null
    }

  return (
    <ul className="card-body-stars u-clearfix">{rating}</ul>
  );
}

Stars.propTypes = {
    count:propTypes.number.isRequired
}

Stars.defaultProps = {
    count:0
}