
import React from 'react';
import obj_display_styles from './idiotComps.css';

function PeerInfo(props) {
  return (
    <tr>
      <th>
        Peer Info
      </th>
      <td>
        <div>
          Connected to {props.data.total} Nodes
        </div>

        <div>
          Endpoint Nodes: {props.data.en}
        </div>

        <div>
          Proposer Nodes: {props.data.pn}
        </div>
      </td>
    </tr>
  )

}


function ActiveModules(props) {
  return (
    <tr>
      <th>
        Active Modules
      </th>
      <td>
        {props.data.map((item)=>{
          return (<div> {item} </div>);
          }
        )}
      </td>
    </tr>
  )


}

class ObjectDisplay extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  formatLabel = (_label) => {
    let words = _label.split("_")
    let uppered = words.map((i)=>{return (i[0].toUpperCase() + i.slice(1))});
    return uppered.join(" ")
  }

  createRow = (_label, _value, _idx) => {
    switch (_label) {
      case "active_modules":
        return (
          <ActiveModules data={_value} idx={_idx}/>
        )
      case "peer_info":
        return <PeerInfo data={_value} idx={_idx}/>
      default:
        return (
          <tr key={_idx}>
            <th>
              { this.formatLabel(_label) }
            </th>
            <td>
              {String(_value)}
            </td>
          </tr>
        )

    }


  }

  placeDataIntoTable = () => {
    const { data_obj } = this.props;

    let keys = Object.keys(data_obj);

    return (
      <tbody>
        {
          keys.map((item, idx) => {
            return this.createRow(item, data_obj[item], idx);
          })
        }
      </tbody>
    )
  }

  render() {


    return (
      <div className="display_container">
        <table className="displayTable">
        { this.placeDataIntoTable() }
        </table>
      </div>
    );

  }
}


export default ObjectDisplay;
