import React from 'react';
import { connect } from 'react-redux';
import { grabNetworkNews } from '../../../actions/homeActions';
import NewsCard from '../../idiot_components/NewsCard';

class Home extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.props.grabNetworkNews();
  }

  render () {
    const { news_data } = this.props;
    const placeholder = {title: "No Articles Loaded", url: "http://www.google.com"}
    //let articles = this.createListOfArticles();
    //console.log("A", articles)

    return (
      <div>
      <h1> HOME </h1>
      <div>
      <h3> News & Announcements </h3>
      <div className="cardList">
        <div> { news_data?
          news_data.slice(2).map((itm)=><NewsCard article={itm.data}/>)
          :
          <NewsCard article={placeholder} />
         } </div>
        </div>
      </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    news_data: state.home.news_data
  }
}

const mapDispatchToProps = dispatch => ({
  grabNetworkNews: () => {
      dispatch(grabNetworkNews());
  }
})

const ConnectedHome = connect(mapStateToProps, mapDispatchToProps)(Home);

export default ConnectedHome;
