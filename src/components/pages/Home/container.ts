import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import Home from '.';
import { AppState, CountState } from '../../../types';
import {
  CountAction,
  increment,
  decrement,
  setCount,
} from '../../../modules/count';

const homeActions = {
  increment,
  decrement,
  setCount,
};

export type StateProps = CountState;
export type DispatchProps = typeof homeActions;

const mapStateToProps = (state: AppState): StateProps => ({
  value: state.count.value,
});

const mapDispatchToProps = (dispatch: Dispatch<CountAction>): DispatchProps =>
  bindActionCreators(homeActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
