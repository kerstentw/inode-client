import React from 'react';
import { connect } from 'react-redux';
import {
  grabNetworkNews,
  grabLastBlocks
 } from '../../../actions/homeActions';
import NewsCard from '../../idiot_components/NewsCard';

class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      news_data: [{title: "No Articles Loaded", url:"/"}]
    };
  }

  componentDidMount() {
    this.props.grabNetworkNews();
    this.props.grabLastBlocks();
  }

  render () {
    const { news_data } = this.props;
    const { blocks } = this.props;
    console.log("ND\n\n\n\n", blocks)

    //let articles = this.createListOfArticles();
    //console.log("A", articles)

    return (
      <div>
      <h1> HOME </h1>
      <div>
      <h3> News & Announcements </h3>
      <div className="cardList">
        <div> {news_data && news_data.length > 3?
          news_data.slice(2).map((itm)=><NewsCard article={itm.data}/>)
          :
          news_data.map((itm)=><NewsCard article={itm.data}/>)
         }
         </div>
        </div>
      </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    news_data: state.home.news_data,
    blocks: state.home.blocks
  }
}

const mapDispatchToProps = dispatch => ({
  grabNetworkNews: () => {
    dispatch(grabNetworkNews());
  },
  grabLastBlocks: () => {
    dispatch(grabLastBlocks());
  }
})

const ConnectedHome = connect(mapStateToProps, mapDispatchToProps)(Home);

export default ConnectedHome;
