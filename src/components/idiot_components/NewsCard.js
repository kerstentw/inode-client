import React from 'react';
import { FaReddit } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import loader_img from '../../static/Box-Loading-1.gif';

export default function NewsCard(props) {

  let article = props.article;
  console.log(article.preview)

  return (
    <div className="news_card">

     <div>
      <a target="_blank" href={article.url}>
        <IconContext.Provider value={{size: "3em", className:"news-logo"}}>
          {article.is_loading? <img src={loader_img} className="news_loader"/> : <FaReddit />}
        </IconContext.Provider>
        <div>
        {article.title}
        </div>
      </a>
     </div>
    </div>
  )
}
