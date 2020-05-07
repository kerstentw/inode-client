import React from 'react';

function ManagementButton(props) {
  return (
    <button className={ props.classname } onclick={ props.onclick }>
      { props.label }
    </button>
  )
}
