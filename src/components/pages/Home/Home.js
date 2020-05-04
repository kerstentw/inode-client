import React from 'react';
import { connect } from 'react-redux';
import {
  grabNetworkNews,
  grabLastBlocks
 } from '../../../actions/homeActions';
import NewsCard from '../../idiot_components/NewsCard';
import BlockList from '../../idiot_components/BlockList';


class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      news_data: [{title: "No Articles Loaded", url:"/"}],
      block_headers: [],
      interval: false,
    };
  }

  componentDidMount() {
    this.props.grabNetworkNews();

    this.state.interval = setInterval(()=> {
      this.props.grabLastBlocks();
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render () {
    const { news_data } = this.props;
    const { blocks } = this.props;
    const { block_headers } = this.props;
    console.log("ND\n\n\n\n", block_headers)

    //let articles = this.createListOfArticles();
    //console.log("A", articles)

    return (
      <div>
      <h1> HOME </h1>



      <div className="news_ann_wrapper">
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

        <h3> Last Blocks </h3>
        <div className="block_list_wrap">
            <BlockList is_loading={blocks[0].is_loading} headers={block_headers} data={blocks} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    news_data: state.home.news_data,
    blocks: state.home.blocks,
    block_headers: state.home.block_list_headers
  }
}

const mapDispatchToProps = dispatch => ({
  grabNetworkNews: () => {
    dispatch(grabNetworkNews());
  },
  grabLastBlocks: (_local_state) => {
    dispatch(grabLastBlocks());
  }
})

const ConnectedHome = connect(mapStateToProps, mapDispatchToProps)(Home);

export default ConnectedHome;
