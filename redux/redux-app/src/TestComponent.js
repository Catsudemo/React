import React, { Component } from 'react';
import { connect } from 'react-redux';
import getState from './redux/2_actions/getStateAction';
import setState from './redux/2_actions/setStateAction';
class TestComponent extends Component {
  render() {
    const { setState, text } = this.props;
    return (
      <div>
        <div>{text}</div>
        <button onClick={() => setState('hello')} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  text: state.testComponentReducer.text,
});
const mapDispatchToProps = { getState, setState };
const _TestComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TestComponent);
export default _TestComponent;
