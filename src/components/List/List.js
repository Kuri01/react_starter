import React from 'react';
import Hero from '../Hero/Hero';
import styles from './List.scss';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';
import { settings } from '../../data/dataStore';
import Creator from '../Creator/Creator';

class List extends React.Component {
  state = {
    columns: this.props.columns || [],
  };
  static propTypes = {
    title: PropTypes.node,
    description: PropTypes.node,
    columns: PropTypes.array,
  };
  static defaultProps = {
    description: settings.defaultListDescription,
  };
  addColumn(title) {
    this.setState((state) => ({
      columns: [
        ...state.columns,
        {
          key: state.columns.length
            ? state.columns[state.columns.length - 1].key + 1
            : 0,
          title,
          icon: 'list-alt',
          cards: [],
        },
      ],
    }));
  }
  render() {
    return (
      <section>
        <Hero titleText={this.props.title} imageSource={this.props.image} />
        <div className={styles.description}>{this.props.description}</div>

        <div className={styles.columns}>
          {this.state.columns.map(({ key, ...columnProps }) => (
            <Column key={key} {...columnProps} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator
            text={settings.columnCreatorText}
            action={(title) => this.addColumn(title)}
          />
        </div>
      </section>
    );
  }
}

export default List;
