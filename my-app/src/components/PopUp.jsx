import { useEffect, useState } from "react";
import "./PopUp.css";
import PropTypes from "prop-types";

const PopUp = (props) => {
  const [show, setShow] = useState(false);
 
  const closeHandler = (e) => {
    setShow(false);
    props.onClose(false);
  };
 
  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '15px';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    };
  }, [show]);

  return (
    <div
      style={{
        visibility: show ? "visible" : "hidden",
        opacity: show ? "1" : "0"
      }}
      className={"overlay"}
    >
      <div className={"popup"}>
        <p className="text">{props.title}</p>
        <span className={"close"} onClick={closeHandler}>
          &times;
        </span>
        <div className={"content"}>{props.children}</div>
      </div>
    </div>
  );
};
 
PopUp.propTypes = {
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default PopUp;
 
