import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Sector, Cell, ResponsiveContainer
} from 'recharts';
import { ROUTE_ENDPOINTS } from '../../constants/endpoints';
import { Link } from 'react-router-dom';


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


function renderActiveShape(props) {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;

  //calculates center coords
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;

  const textAnchor = cos >= 0 ? 'start' : 'end';
  return (
  <g>

    <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
      {payload.of_total} Proposers
    </text>
    <Sector
      cx={cx}
      cy={cy}
      innerRadius={innerRadius}
      outerRadius={outerRadius}
      startAngle={startAngle}
      endAngle={endAngle}
      fill={fill}
    />
    <Sector
      cx={cx}
      cy={cy}
      startAngle={startAngle}
      endAngle={endAngle}
      innerRadius={outerRadius + 6}
      outerRadius={outerRadius + 10}
      fill={fill}
    />
    <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/>
    <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"/>
    <text className="pie_static_text" x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill={fill}>
      {`${payload.name.slice(0,5)}...`}
    </text>
    <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
      {`(${(percent * 100).toFixed(2)}%)`}
    </text>
  </g>
);
}

function DataView(props) {
  return (
    <div>
      <table>
        <tr>
          <th>Address</th>
          <td>{props.data.address}</td>
        </tr>
        <tr>
          <th>Balance</th>
          <td>{props.data.balance * 10**-18}</td>
        </tr>
        <tr>
          <th>Total Transactions</th>
          <td>{props.data.totalTx}</td>
        </tr>
        <tr>
          <th>Type</th>
          <td>Proposer</td>
        </tr>
        <tr>
          <th>Total Proposed </th>
          <td> {props.data.totalProposedBlocks}</td>
        </tr>
      </table>
      <a href={`https://scope.klaytn.com/account/${props.data.address}`} target="_blank">
        <text className="linkText" fill="#fff">view details</text>
      </a>
      <div>
        <Link to={ROUTE_ENDPOINTS.NETWORKS} className="misc-link">
          More Network Info
        </Link>
      </div>
    </div>
  )
}

export default class HomePie extends PureComponent {

  getInitialState(_base_data) {
    let activeIndex = 0

    return {
      activeIndex: activeIndex,
      current_selected: _base_data[activeIndex]
    }
  }

  constructor(props) {
    super(props);
    this.state = this.getInitialState(this.props.data);
  }

  onPieEnter = (data, index) => {
    this.setState(
      {
        ...this.state,
        activeIndex: index
      }
    )

  }

  onPieClick = () => {

    this.setState(
      {
        ...this.state,
        current_selected: this.props.data[this.state.activeIndex]
      }
    )
  }

  render() {
  //console.log("HP::: ", this.props)

    return (
      <div className="prop_container">


      <div className="chart_container">
      <h3> Proposer Block Proportions </h3>
      <PieChart width={520} height={310} cursor="crosshair">
        <Pie
          onMouseEnter={this.onPieEnter}
          data = {this.props.data} //<Array {value,name}>
          innerRadius = {60}
          outerRadius = {80}
          paddingAngle = {3}
          activeIndex = {this.state.activeIndex}
          activeShape = {renderActiveShape}
          onClick = {this.onPieClick}
        >

        </Pie>
      </PieChart>
      </div>

      <div className="dataview_container">
        <DataView data={this.state.current_selected}/>
      </div>

      </div>
    )
  }
}
