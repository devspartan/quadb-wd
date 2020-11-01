import React from "react";

function MiniDesc(props) {
  return (
    <div className='mini-desc' style={props.MiniDescStyle}>
        <a href="#" >{props.description}</a>
     
    </div>
  );
}

export default MiniDesc;
