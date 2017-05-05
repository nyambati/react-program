import React from 'react';
import { string } from 'prop-types';

export default function Avatar(props) {
  return (
    <img
      src={props.img}
      alt={props.alt}
      className='avatar'
    />
  );
}

Avatar.propTypes = {
  img: string.isRequired,
  alt: string.isRequired,
};
