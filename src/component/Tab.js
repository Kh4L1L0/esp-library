import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    const { 
      onClick,
      props: {
        activeTab,
        label,
      },
    } = this;


    const styleNormal = {   display: "inline-block",
                            listStyle: "none",
                            marginBottom: "-1px",
                            padding: "15px 8px",
                            backgroundColor: "#1da598",color : "#333",
                            transition : "all .3s ease"};
    const styleActive = {   display: "inline-block",
                          listStyle: "none",
                          marginBottom: "-1px",
                          padding: "15px 8px",
                          backgroundColor: "#333",
                          color : "#1da598",
                          transition : "all .3s ease",
                          borderRadius: "10px 10px 0 0"};

    let styleTab = styleNormal;

    if (activeTab === label) {
      styleTab = styleActive;
    }

    return (
      <li 
        style={styleTab}
        onClick={onClick}
      >
        {label}
      </li>
    );
  }
}


export default Tab;