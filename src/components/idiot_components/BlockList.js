import React from 'react';
import loader_img from '../../static/Box-Loading-1.gif';

function BlockEntryRow(props) {

  let frameData = (_data) => {
    return (
      <td>
        {_data}
      </td>
    )
  }

  let mapHeadersToData = (_key, _data)=> {
    // to-do: switch/case

    //console.log("HEAD DATA::: ",_data)
    if (_data.hash == "No Blocks Loaded") {
      return (
        <td>
          {_data[_key]}
        </td>
      )
    }
    //console.log("CUR_KEY:: ", _key)

    switch(_key){
      case "timestamp":
        return frameData(parseInt(_data[_key]));
      case "number":
        return frameData(parseInt(_data[_key]));
      case "reward":
        return frameData(parseInt(_data[_key]) * (10**-18) );
      case "transaction_number":
        return frameData(_data["transactions"].length);
      default:
    }

    return (
      <td>
        {_data[_key]}
      </td>
    )
  }

  return (
      <tr key={props.idx}>
        { props.headers.map((_key, _idx)=>{return mapHeadersToData(_key, props.data)}) }
      </tr>
  )

}

export default function BlockList(props) {

  let block_list = props.data;
  let headers = props.headers.map((_elem)=>{return <th>{_elem}</th>});

  return (

        (!props.is_loading && block_list && headers)?

        <table>
          <thead>
            <tr>
            { headers }
            </tr>
          </thead>
        <tbody>
          { block_list.map((_elem,_idx)=> {
            return  <BlockEntryRow data={_elem} idx={_idx} headers={props.headers}/>})
          }
        </tbody>
        </table>
        :
        <img src={loader_img} className="news_loader"/>



  )

}
