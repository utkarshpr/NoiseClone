import React from 'react';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
const GridSystem = (props) => {
  return (
    <>
      <div className="outer">
        <div className="MainDiv">
          <b>{props.title}</b>
        </div>
        <div className="SubDiv">{props.subtitle}</div>
        <a href="" className="link">
          know more <KeyboardArrowRightIcon />{' '}
        </a>
        <div>
          <img className="image" src={props.link} alt="" />
        </div>
      </div>
    </>
  );
};
export default GridSystem;
