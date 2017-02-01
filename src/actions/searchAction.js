import {SEARCH_PENDING, SEARCH_DONE, IDLE, LOADING, LOADED}
  from '../constants/SearchActionTypes';
import {universal, connect_apiai}
  from '../api/news';
import {insider_uk, sky_sports, engadget, ign, four_four_two, hacker_news_latest,
  reddit_top, theVerge_top, lad, nat}
  from '../components/utility';

// ----------- Action creators -----------
let searchNews = (source, dispatch) => {
  if (source !== '' && source !== undefined) {
    dispatch({
      type: SEARCH_PENDING
    });
  } else {
    dispatch({
      type: IDLE
    });
  }
  universal(source, (data) => {
    dispatch({
      type: SEARCH_DONE,
      heads: data["articles"],
      api_source: source
    });
  })
}

let botStarter = (term, dispatch) => {
  if (term !== '' && term !== undefined) {
    dispatch({
      type: LOADING
    });
  } else {
    dispatch({
      type: IDLE
    });
  }
  connect_apiai(term, (response) => {
    dispatch({
      type: LOADED,
      msg: response["result"]["fulfillment"]["speech"],
      intent: response["result"]["metadata"]["intentName"],
      qry: response["result"]["resolvedQuery"],
      src: response["result"]["source"]
    });
  })
}

// ----------- Common Fetcher ---------------
let fetcher = (new_source, intent_name) => {
  return (dispatch, getState) => {
    const intent = getState().chat.intentName;
    if (intent === intent_name) {
      return searchNews(new_source, dispatch);
    }
  }
}

// ------------Async creators------------------
export let startBot = (term) => {
  return (dispatch) => {
    return botStarter(term, dispatch);
  };
}

export let getNews = (source) => {
  return (dispatch) => {
    return searchNews(source, dispatch);
  };
}

// ------------ Component fetcher -----------
export let fetchBusiness = () => {
  return fetcher(insider_uk, 'Business news');
}

export let fetchGaming = () => {
  return fetcher(ign, 'gaming');
}

export let fetchFootball = () => {
  return fetcher(four_four_two, 'football news');
}

export let fetchLatest = () => {
  return fetcher(hacker_news_latest, 'News');
}

export let fetchSports = () => {
  return fetcher(sky_sports, 'Sports news');
}

export let fetchTech = () => {
  return fetcher(engadget, 'Tech news');
}

export let topReddits = () => {
  return fetcher(reddit_top, 'Reddit');
}

export let vergeTop = () => {
  return fetcher(theVerge_top, 'verge');
}

export let fetchEntertainment = () => {
  return fetcher(lad, 'Entertainment');
}

export let fetchPictures = () => {
  return fetcher(nat, 'Pictures');
}
