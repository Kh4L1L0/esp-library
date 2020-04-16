import React, { Component } from 'react';
import propTypes from 'prop-types';
import '../styles.css';



export default class TreeNode extends Component {
  static propTypes = {
    data: propTypes.object.isRequired,
    level: propTypes.number.isRequired,
    onToggle: propTypes.func.isRequired,
    closeIfEmpty: propTypes.func.isRequired
  };

  listTreeNode = () => {
    if (this.props.data.isOpen) {
      return (
        <ul>
          {this.props.data.children.map(node => (
            <li key={node.id}>
              {this.props.closeIfEmpty(node)}
              <TreeNode
                data={node}
                level={this.props.level + 1}
                onToggle={this.props.onToggle}
                closeIfEmpty={this.props.closeIfEmpty}
              />{" "}
            </li>
          ))}
        </ul>
      );
    }
  };


  setIcon = (data) => {
    if(data.icon !== "" && data.icon !== undefined){
      return ( 
      <img
        alt="icon"
        src={data.icon}
        style={{
          width: "25px",
          height: "25px",
          display: "inline-block",
          marginRight: "10px",
          float: "left",
          marginLeft: "10px",
          paddingBottom : "2px"
        }}
      />);
    }
  }

  onClickHundler = (isFile, data, onToggle) => {
    if (!isFile) {
      onToggle(data);
    }

    if(data.onSelect !== undefined){
      data.onSelect(data);
    }
  };

  render() {
    const { data, level, onToggle } = this.props;

    let margin = (level-1) * 25 + "px";
    return (
      <React.Fragment>
        <div
        
          style={{
            marginLeft: margin,
            borderBottom: "2px solid"+(!data.isOpen ? "#333" : "#1abc9c"),
            borderLeft: "2px solid"+(!data.isOpen ? "#333" : "#1abc9c"),
            width: "calc(100% - "+margin+" -2px)",
            position : "relative",
            height: "20px",
            padding: "5px 0px",
            background: data.isOpen ? "#333" : "#1abc9c",
            cursor: "pointer",
            paddingTop: "10px",
            transition: "all .3s ease "
          }}
          onClick={() => {
            this.onClickHundler(data.children.length === 0, data, onToggle);
          }}
        >
          {this.setIcon(data)}

          <span style={{ fontSize: "20px", color: !data.isOpen ? "#333" : "#1abc9c" , marginLeft : "5px"}}>{data.label}</span>
          <div style={{ float: "right" ,marginRight:"3px"}}>
            {data.children.length !== 0 &&!data.isOpen && <span style={{color : "#333",}}>&#9654;</span>}
            {data.children.length !== 0 && data.isOpen && <span style={{color : "#1abc9c"}}>&#9660;</span>}
          </div>
        </div>
        {this.listTreeNode()}
      </React.Fragment>
    );
  }
}
  


