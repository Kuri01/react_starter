import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

const Card = (props) => {
  const { title } = props;
  return (
    <div className={styles.component}>
      <h3>{title}</h3>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
};

export default Card;
