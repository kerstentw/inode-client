import React from 'react';
import { FaReddit } from 'react-icons/fa';
import { IconContext } from 'react-icons';

export default function NewsCard(props) {

  let article = props.article;
  console.log(article.preview)

  return (
    <div className="news_card">

     <div>
      <a target="_blank" href={article.url}>
        <IconContext.Provider value={{size: "3em", className:"news-logo"}}>
          <FaReddit />
        </IconContext.Provider>
        <div>
        {article.title}
        </div>
      </a>
     </div>
    </div>
  )
}
