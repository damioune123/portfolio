import React from 'react';
import { connect } from 'react-redux';
import HomePage from "../src/components/Home/HomePage";
import '../src/assets/scss/index.scss';
import {
  getMetaDataAction,
  getHomesAction,
  getGalleryItemsAction,
  getRealtorsAction
} from '../src/actions';

class Index extends React.Component {
  static async getInitialProps(props) {
    const { store } = props.ctx;
    store.dispatch(getMetaDataAction());
    store.dispatch(getHomesAction());
    store.dispatch(getRealtorsAction());
    store.dispatch(getGalleryItemsAction());
  }
  render() {
    console.log(this.props);
    return (<HomePage />);
  }
}

const mapStateToProps = (state) => {
  return {
    placeholderData: state.getIn(['next', 'metaData'])
  }
}

export default connect(mapStateToProps)(Index);