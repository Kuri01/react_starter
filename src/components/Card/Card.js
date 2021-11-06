import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

const Card = (props) => (
  <div className={styles.component}>
    <h3>{props.title}</h3>
  </div>
);

Card.propTypes = {
  title: PropTypes.string,
};

export default Card;
