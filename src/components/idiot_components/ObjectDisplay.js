
import React from 'react';
import obj_display_styles from './idiotComps.css';

class ObjectDisplay extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  createRow = (_label, _value, _idx) => {
    return (
      <tr key={_idx}>
        <th>
          {_label}
        </th>
        <td>
          {String(_value)}
        </td>
      </tr>
    )
  }

  placeDataIntoTable = () => {
    const { data_obj } = this.props;
    console.log("DO PROPS:: ", data_obj)

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
        <table>
        { this.placeDataIntoTable() }
        </table>
      </div>
    );

  }
}


export default ObjectDisplay;
