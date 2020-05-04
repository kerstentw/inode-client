import React from 'react';
import loader_img from '../../static/Box-Loading-1.gif';
import { FaExternalLinkAlt } from 'react-icons/fa';

function PrimaryTokenView(props) {
  console.log("Primary:: ", props)
  return (
    <div className="primary_token_view">
    <h3>Primary Token</h3>
    <tbody>
    <tr>
      <th>
        Icon
      </th>
      <td>
        <img className="primary_token_img" src={`https://assets.coingecko.com${props.data.thumb}`}/>
      </td>
    </tr>
    <tr>
      <th>
        Name
      </th>
      <td>
        {props.data.name}
      </td>
    </tr>

    <tr>
      <th>
        Market Rank
      </th>
      <td>
      {props.data.market_cap_rank}
      </td>
    </tr>
    <tr>
      <th>
        Symbol
      </th>
      <td>
        {props.data.symbol}
      </td>
    </tr>
    </tbody>
    </div>
  )
}

function TokenListEntry(props) {
  let rev_name = props.data.name.slice(0,10);
  return (
      <tr>
        <td>
          {rev_name < props.data.name? `${rev_name}...` : props.data.name}
        </td>
        <td>
          {props.data.symbol}
        </td>
        <td>
          {props.data.market_cap_rank}
        </td>

        <td>
          <a target="_blank" href={`https://www.coingecko.com/en/coins/${props.data.id}`}>
            <FaExternalLinkAlt className="extLink"/>
          </a>
        </td>
      </tr>
  )
}

function TokenList(props) {
  return (
    <div>
      <h3> Token List </h3>
      <div className="token_list">
      <table>
        <thead>
          <tr>
            <th>
              Name
            </th>
            <th>
              Symbol
            </th>
            <th>
              Rank
            </th>
            <th>
              Details
            </th>
          </tr>
        </thead>
        <tbody className="token_list">
          {props.data.slice(0,7000).map((itm)=>{return <TokenListEntry data={itm}/>})}
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default function MarketInfo(props) {
  console.log("MarketInfo Props :: ", props.data)

  return (
    <div className="market_info_container">
    { props.data.is_loading?
    <img className="coin_thumb" src={loader_img}/>
    :
     <div>
      <PrimaryTokenView data={props.data.primary_token}/>
      <TokenList data={props.data.coin_list}/>
     </div>
    }
    </div>

  )
}
