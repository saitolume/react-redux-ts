import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import Home from '.';
import { AppState, CountState, QiitaState } from '../../../types';
import {
  CountAction,
  increment,
  decrement,
  setCount,
} from '../../../modules/count';
import { fetchUser } from '../../../modules/qiita';

const homeActions = {
  increment,
  decrement,
  setCount,
  fetchUser,
};

export type StateProps = CountState & QiitaState;
export type DispatchProps = typeof homeActions;

const mapStateToProps = (state: AppState): StateProps => ({
  value: state.count.value,
  id: state.qiita.id,
  name: state.qiita.name,
  description: state.qiita.description,
});

const mapDispatchToProps = (dispatch: Dispatch<CountAction>): DispatchProps =>
  bindActionCreators(homeActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
