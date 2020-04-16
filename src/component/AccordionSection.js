import React, { Component } from 'react'
import PropTypes from 'prop-types';
import '../styles.css';

class AccordionSection extends Component {
    static propTypes = {
      isOpen: PropTypes.bool.isRequired,
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired
    };
  
    onClick = () => {
      this.props.onClick(this.props.label);
    };
  
    render() {
      const {
        onClick,
        props: { isOpen, label }
      } = this;
      let show = isOpen ? "100px" : "0";
      return (
        <React.Fragment>

          <div onClick={onClick} style={{background: "#333",
            padding: "10px 20px", cursor: "pointer", height: "20px" ,color : "#1abc9c",borderBottom: "1px dotted #1abc9c"}}>
            <span style={{fontFamily: "60px"}}><strong>{label}</strong></span>
  
            <div style={{ float: "right" }}>
              {!isOpen && <span>&#9650;</span>}
              {isOpen && <span>&#9660;</span>}
            </div>
          </div>
        <div
            className="container"
            style={{
              background: "#1abc9c",
              maxHeight: isOpen ? "100px" : "0",
              transition: "all .3s ease",
              overflow: "hidden",
              padding: isOpen ? "10px 0" :  " 0",
            }}
          >
            {this.props.children}
          </div>
        </React.Fragment>
      );
    }
  }
  
  export default AccordionSection;
