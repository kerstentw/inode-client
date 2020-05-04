import React from 'react';
import HomePie from './HomePie';
import loader_img from '../../static/Box-Loading-1.gif';


export default function ProposersSummary (props) {

  let packageData = (_proposer_data_array)=> {
    let totalBlocks = 0;
    let data = new Array();
    let props_num = _proposer_data_array.length;

    for (let i = 0; i < _proposer_data_array.length; i++) {
      let prop_data = _proposer_data_array[i];

      totalBlocks += parseInt(prop_data.totalProposedBlocks);

      data.push({...prop_data,
                 name: prop_data['address'],
                 value: prop_data['totalProposedBlocks'],
                 of_total: props_num
               });
    }

    return {
      data: data,
      totalBlocks: totalBlocks
    }
  }


  let props_data = packageData(props.data);
  console.log("props_data", props_data)


  return (
    <div>
      <h2>Proposers</h2>
      {
      !props_data.data[0].is_loading ?
        <HomePie data={ props_data.data }/>
      :
        <img src={loader_img} className="news_loader"/>
      }
    </div>
  )
}
