import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TreeNode from './component/TreeNode'
import AccordionSection from './component/AccordionSection'
import Tab from './component/Tab'
import './styles.css';

export class TreeView extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };


  constructor(props) {
    super(props);
    const nodes = this.props.data;
    this.state = {nodes};
  }

  closeIfEmpty = node => {
    if (node.children.length === 0) {
      node.isOpen = false;
    }
  };

  searchTree = (nodes, item) => {
    nodes.forEach(node => {
      if (node.id === item.id) {
        node.isOpen = !node.isOpen;
      } else {
        this.searchTree(node.children, item);
      }
    });
  };

  onToggle = node => {
    const { nodes } = this.state;
    this.searchTree(nodes, node);
    this.setState({ nodes });
  };

  listTreeNode = () => {
    return this.state.nodes.map(node => (
      <li key={node.id} className="Node">
        {this.closeIfEmpty(node)}
        <TreeNode
          data={node}
          level={1}
          onToggle={this.onToggle}
          closeIfEmpty={node => this.closeIfEmpty(node)}
          onSelecte={node.onSelecte}
        />
      </li>
    ));
  };

  render() {
    return (
      <div style={{border: "2px solid #008f68" , width : "250px"}}>
        <ul>
          <this.listTreeNode />
        </ul>
      </div>

    );
  }
}
export default TreeView;
export class Dialog extends Component {
  static propTypes = {
    children :PropTypes.instanceOf(Object).isRequired,
    onClose: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    result: PropTypes.func,
    typeof : PropTypes.string.isRequired

  }

  

  render() {
    const styleDialog = { position: "absolute",
                          display: "block",
                          width: "400px",
                          minHeight: "200px",
                          verticalAlign: "top",
                          backgroundColor: "#333",
                          boxShadow: "0 12px 15px 0 rgba(0, 0, 0, 0.24)",
                          top : "calc(50% - 90px)",
                          left : "calc(50% - 150px)",
                          boxSizing: "border-box",
                          padding: "16px",
                          borderRadius: "10px",
                          zIndex : "101"};
    const backgroundDialog = {position : "absolute",
                              top: "0",
                              left : "0",
                              width : "100%",
                              height : "100%",
                              backgroundColor : "rgba(0,0,0,0.1)",
                              zIndex : "100"}
    const contentStyle = {
                        padding : "15px",
                        paddingBottom : "100px",
                      color : "#1abc9c"};
    const buttonStyle = { display: "inline-block",
                          position: "relative",
                          width: "100px",
                          height: '32px',
                          lineHeight: '32px',
                          borderRadius: "2px",
                          fontSize: "0.9em",
                          backgroundColor: "#1abc9c",
                          float: "right",
                          bottom: "10px",
                          color : "#333",
                        marginLeft: "10px",
                      border : "0"};
    const closeStyle = {position: "relative",
                        display: "inline-block",
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        color: "#fff",
                        overflow: "hidden",
                        transition: "box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                        transitionDelay: "0.2s",
                        boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.26)",
                        backgroundColor : "#d23f31",
                        right : "calc(-100% + 30px)",
                        top: "5px",
                        cursor : "pointer"
                        };

    let dialog = (
      <React.Fragment>
      <div style={styleDialog}>
        <div style={closeStyle} onClick={this.props.onClose}></div>
        <div style={contentStyle}>{this.props.children}</div>
       <button onClick={this.props.onClose} style={buttonStyle}>OK</button>
       
      </div>
      <div style={backgroundDialog}></div>
      </React.Fragment>
    );

    let Confirmdialog = (
      <React.Fragment>
      <div style={styleDialog}>
        <div style={closeStyle} onClick={this.props.onClose}></div>
        <div style={contentStyle}>{this.props.children}</div>
       <button onClick={() => {this.props.onClose() ; this.props.result(true)}} style={buttonStyle}>Yes</button>
       <button onClick={() => {this.props.onClose() ; this.props.result(false)}} style={buttonStyle}>No</button>
       
      </div>
      <div style={backgroundDialog}></div>
      </React.Fragment>
    );

    let Optionsdialog = (
      <React.Fragment>
      <div style={styleDialog}>
        <div style={closeStyle} onClick={this.props.onClose}></div>
        <div style={contentStyle}>{this.props.children}</div>
       <button onClick={() => {this.props.onClose() ; this.props.result(true)}} style={buttonStyle}>OK</button>
       <button onClick={this.props.onClose} style={buttonStyle}>Cancel</button>
       
      </div>
      <div style={backgroundDialog}></div>
      </React.Fragment>
    );

    if (!this.props.isOpen) {
      dialog = null;
    }
    if (!this.props.isOpen) {
      Confirmdialog = null;
    }
    if (!this.props.isOpen) {
      Optionsdialog = null;
    }

    if (this.props.typeof === "notify") {
      return <div>{dialog}</div>;
    } else if (this.props.typeof === "confirm") {
      return <div>{Confirmdialog}</div>;
    } else if (this.props.typeof === "option") {
      return <div>{Optionsdialog}</div>;
    }
  }
}

export class Accordion extends Component {
  static propTypes = {
    allowMultipleOpen: PropTypes.bool,
    children: PropTypes.instanceOf(Object).isRequired
  };

  constructor(props) {
    super(props);

    const sectionIsOpen = {};

    this.props.children.forEach(child => {
      if (child.props.isOpen) {
        sectionIsOpen[child.props.label] = true;
      }
    });

    this.state = { sectionIsOpen };
  }

  onClick = label => {
    const {
      props: { allowMultipleOpen },
      state: { sectionIsOpen }
    } = this;

    const isOpen = sectionIsOpen[label];

    if (allowMultipleOpen) {
      this.setState({
        sectionIsOpen: {
          ...sectionIsOpen,
          [label]: !isOpen
        }
      });
    } else {
      this.setState({
        sectionIsOpen: {
          [label]: !isOpen
        }
      });
    }
  };

  render() {
    const {
      onClick,
      props: { children },
      state: { sectionIsOpen }
    } = this;

    return (
      <div style={{ borderRadius: "10px 10px 10px 10px", overflow : "hidden" }}>
        {children.map(child => (
          <AccordionSection
            isOpen={!!sectionIsOpen[child.props.label]}
            label={child.props.label}
            onClick={onClick}
          >
            {child.props.children}
          </AccordionSection>
        ))}
      </div>
    );
  }
}

export class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  }

  render() {
    const {
      onClickTabItem,
      props: {
        children,
      },
      state: {
        activeTab,
      }
    } = this;

    return (
      <div className="tabs">
        <ol style={{  borderBottom: "1px solid #ccc",paddingLeft: "0",margin: " 0 10px"}}>
          {children.map((child) => {
            const { label } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </ol>
        <div style={{backgroundColor : "#333", borderRadius : "0 0 10px 10px ",padding: "30px 5px",color : "white"}}>
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

export class ProgressBar extends Component {
  static propTypes = {
    percente: PropTypes.number
  };

  render() {
    const percente = this.props.percente + "%";
    return (
      <div style={{  position: "relative",
                                              height: "15px",
                                              width: "calc(100%-3px)",
                                              borderRadius: "50px",
                                              border:"3px solid #333",
                                              overflow:"hidden"}}>
        <div style={{   background: "#1da598",
                                                height: "100%",
                                                borderRadius: "inherit",
                                                transition: "width .2s ease-in",
                                                width: percente }} >

        </div>
      </div>
    );
  }
}


