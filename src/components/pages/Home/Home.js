import React from 'react';
import { connect } from 'react-redux';
import {
  grabNetworkNews,
  grabLastBlocks,
  grabProposersSummary
 } from '../../../actions/homeActions';
import NewsCard from '../../idiot_components/NewsCard';
import BlockList from '../../idiot_components/BlockList';
import ProposersSummary from '../../idiot_components/ProposersSummary';

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
    this.props.grabProposersSummary();
    this.props.grabLastBlocks();
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render () {
    const { news_data } = this.props;
    const { blocks } = this.props;
    const { block_headers } = this.props;
    const { proposers_summary } = this.props;
    console.log("ND\n\n\n\n", proposers_summary)

    //let articles = this.createListOfArticles();
    //console.log("A", articles)

    return (
      <div>
      <div className="home_wrapper">
        <div className="props_wrap">
          <ProposersSummary data={proposers_summary}/>
        </div>

        <div className="news_ann_wrap">
          <h2> News & Announcements </h2>
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

        <div className="block_list_wrap">
          <h2> Last Blocks </h2>

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
    block_headers: state.home.block_list_headers,
    proposers_summary: state.home.proposers_summary
  }
}

const mapDispatchToProps = dispatch => ({
  grabNetworkNews: () => {
    dispatch(grabNetworkNews());
  },
  grabLastBlocks: (_local_state) => {
    dispatch(grabLastBlocks());
  },
  grabProposersSummary: () => {
    dispatch(grabProposersSummary());
  }
})

const ConnectedHome = connect(mapStateToProps, mapDispatchToProps)(Home);

export default ConnectedHome;
