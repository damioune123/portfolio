import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomePage from '../../components/Home/HomePage';

import {
  getMetaDataAction,
  getHomesAction,
  getGalleryItemsAction,
  getRealtorsAction
} from '../../actions';


class PageHome extends Component {

  componentDidMount() {
    this.props.getGalleryItemsAction();
    this.props.getHomesAction();
    this.props.getMetaDataAction();
    this.props.getRealtorsAction();
  }

  render() {
    return (<HomePage />);
  }
}

const mapStateToProps = (state) => ({...state.metaData});

const mapDispatchToProps = dispatch => ({
  getMetaDataAction: payload => dispatch(getMetaDataAction(payload)),
  getHomesAction: payload => dispatch(getHomesAction(payload)),
  getRealtorsAction: payload => dispatch(getRealtorsAction(payload)),
  getGalleryItemsAction: payload => dispatch(getGalleryItemsAction(payload)),

});
export default connect(mapStateToProps, mapDispatchToProps)(PageHome);
