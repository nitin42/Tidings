import React from 'react';
import Halogen from 'halogen';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions/searchAction';

import News from '../components/News/News';
import Sports from '../components/News/Sports';
import Business from '../components/News/Business';
import Techcrunch from '../components/News/Techcrunch';
import Football from '../components/News/Football';
import Reddit from '../components/News/Reddits';
import Gaming from '../components/News/Gaming';
import TheVerge from '../components/News/TheVerge';
import Entertainment from '../components/News/Entertainment';
import Picture from '../components/Picture';

import Head from '../Header';

import Message from '../BotMsg';

import Sharing from '../Social';

import {Title, Main, Loader} from '../styled_components';

class Smart extends React.Component {
  render() {
    const color = "pink";
    return (
      <div>
        <Sharing />
        <hr/>
        <Main>
          <Title>Tidings</Title>
          <Head actions={this.props.actions.startBot}/>

          {
            this.props.loader ? (
              <Loader>
                <Halogen.ScaleLoader color={color}/>
              </Loader>
            ) : null
          }

          <br/>
          <Message
            show={this.props.show}
            botMsg={this.props.botMsg}
            initMsg={this.props.initMsg}
          />

          {
            this.props.intentName === "News"?
            <News
              collector={this.props.actions.getNews}
              headlines={this.props.headlines}
              status={this.props.status}
              check={this.props.actions.fetchLatest}
            /> : null
          }

          {
            this.props.intentName === "Sports news"?
            <Sports
              collector={this.props.actions.getNews}
              headlines={this.props.headlines}
              status={this.props.status}
              check={this.props.actions.fetchSports}
            /> : null
          }

          {
            this.props.intentName === "Entertainment"?
            <Entertainment
              collector={this.props.actions.getNews}
              headlines={this.props.headlines}
              status={this.props.status}
              check={this.props.actions.fetchEntertainment}
            /> : null
          }

          {
            this.props.intentName === "Pictures"?
            <Picture
              headlines={this.props.headlines}
              status={this.props.status}
              FETCH={this.props.actions.fetchPictures}
            /> : null
          }

          {
            this.props.intentName === "Reddit"?
            <Reddit
              collector={this.props.actions.getNews}
              headlines={this.props.headlines}
              status={this.props.status}
              check={this.props.actions.topReddits}
            /> : null
          }

          {
            this.props.intentName === "Tech news"?
            <Techcrunch
              collector={this.props.actions.getNews}
              headlines={this.props.headlines}
              status={this.props.status}
              check={this.props.actions.fetchTech}
            /> : null
          }

          {
            this.props.intentName === "verge"?
            <TheVerge
              collector={this.props.actions.getNews}
              headlines={this.props.headlines}
              status={this.props.status}
              check={this.props.actions.vergeTop}
            /> : null
          }

          {
            this.props.intentName === "gaming"?
            <Gaming
              collector={this.props.actions.getNews}
              headlines={this.props.headlines}
              status={this.props.status}
              check={this.props.actions.fetchGaming}
            /> : null
          }

          {
            this.props.intentName === "Business news"?
            <Business
              collector={this.props.actions.getNews}
              headlines={this.props.headlines}
              status={this.props.status}
              check={this.props.actions.fetchBusiness}
            /> : null
          }

          {
            this.props.intentName === "football news"?
            <Football
              collector={this.props.actions.getNews}
              headlines={this.props.headlines}
              status={this.props.status}
              check={this.props.actions.fetchFootball}
            /> : null
          }

          </Main>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
	return {
    headlines: state.articles.headlines,
    status: state.articles.status,
    botMsg: state.chat.botMsg,
    intentName: state.chat.intentName,
    query: state.chat.query,
    source: state.chat.source,
    loader: state.chat.loader,
    show: state.chat.show,
    initMsg: state.chat.initMsg,
    picture: state.chat.picture
	};
}

let mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(Actions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Smart);
