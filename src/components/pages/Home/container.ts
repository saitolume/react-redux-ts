import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import Home from '.';
import { CountState, AppState } from '../../../types';
import { countActions } from '../../../actions';
import { CountAction } from '../../../actions/actionTypes';

export type StateProps = CountState;
export type DispatchProps = typeof countActions;

const mapStateToProps = (state: AppState): StateProps => ({
  value: state.count.value,
});

const mapDispatchToProps = (dispatch: Dispatch<CountAction>): DispatchProps =>
  bindActionCreators(countActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
