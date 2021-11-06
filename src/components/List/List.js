import React from 'react';
import Hero from '../Hero/Hero';
import styles from './List.scss';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    children: PropTypes.node,
  };
  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  };
  render() {
    return (
      <section>
        <Hero titleText={this.props.title} imageSource={this.props.image} />
        <div className={styles.description}>{this.props.children}</div>

        <div className={styles.columns}>
          <Column title={'First'} />
          <Column title={'Second'} />
          <Column title={'Third'} />
        </div>
      </section>
    );
  }
}

export default List;
