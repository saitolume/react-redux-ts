import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { CountState, AppState } from '../../types';
import { countActions } from '../../actions';
import { Home } from '../../components/pages/Home';
import { CountAction } from '../../actionTypes';

export type StateProps = CountState;
export type DispatchProps = typeof countActions;

const mapStateToProps = (state: AppState): StateProps => ({
  value: state.count.value,
});

const mapDispatchToProps = (dispatch: Dispatch<CountAction>) =>
  bindActionCreators(countActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
