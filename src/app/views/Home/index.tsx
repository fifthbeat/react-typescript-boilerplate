import * as React from 'react';
import {connect} from 'react-redux';
import {GlobalState} from '../../store/rootReducer';

import {Wrap} from './styles';

type Props = {}

type State = {}

class Home extends React.Component<Props, State> {
  public readonly state: State = {};

  componentDidMount() {
  // API calls goes here
  }

  render() {
  return (
  <Wrap>
    <article>
      <h1>Hello there!</h1>
      <hr />
      <p>This is your new Home view.</p>
    </article>
  </Wrap>
  );
  }
  }


  function mapStateToProps(state: GlobalState) {
  return {};
  }

  // function mapDispatchToProps(dispatch) {
  // return {
  // homeInit: () => dispatch(homeInit()),
  // };
  // }

  export default connect(
  mapStateToProps,
  // mapDispatchToProps
  )(Home);
