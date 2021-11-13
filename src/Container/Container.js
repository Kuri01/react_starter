import React from 'react';
import styles from './Container.scss';

class Container extends React.Component {
  render() {
    const { children } = this.props;

    return <div className={styles.component}>{children}</div>;
  }
}

export default Container;
