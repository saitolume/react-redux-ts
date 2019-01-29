import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import Home from '.';
import { AppState, CountState } from '../../../types';
import { countActions, CountAction } from '../../../ducks/count';

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
