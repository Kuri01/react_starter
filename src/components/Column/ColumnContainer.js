import { connect } from 'react-redux';
import Column from './Column';
import {
  createActionAddCard,
  getCardsForColumn,
} from '../../../redux/cardsRedux';

const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: (title) =>
    dispatch(
      createActionAddCard({
        columnId: props.id,
        title,
      })
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);

// import { connect } from 'react-redux';
// import List from './List';
// import { getColumnsForList } from '../../../redux/columnsRedux';

// const mapStateToProps = (state, props) => ({
//   columns: getColumnsForList(state, props.id),
// });

// const mapDispatchToProps = (dispatch, props) => ({
//   addColumn: (title) =>
//     dispatch(
//       createActionAddColumn({
//         listId: props.id,
//         title,
//       })
//     ),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(List);

// import { connect } from 'react-redux';
// import Column from './Column';

// export const getCardsForColumn = ({ cards }, columnId) =>
//   cards.filter((card) => card.columnId == columnId);

// const mapStateToProps = (state, props) => ({
//   cards: getCardsForColumn(state, props.id),
// });

// export default connect(mapStateToProps)(Column);
