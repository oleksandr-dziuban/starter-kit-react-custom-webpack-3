import { compose } from 'redux';
import { connect } from 'react-redux';

import { showTime } from './actions';
import ExampleRedux from './component';


const mapStateToProps = ({ date }) => ({
  date: date.value,
});

const mapDispatchToProps = {
  showTime,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(ExampleRedux);
