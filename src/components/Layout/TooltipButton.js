import React from 'react';

import {  
  Button,
  Tooltip
} from 'reactstrap';

class TooltipButton extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    const { icon, name, classes, placement, text, id } = this.props;
    return (
      <span>
        <Button id={id} className={classes} onClick={this.props.onClickTrigger}>
          <i className={icon}></i>
          {name}
        </Button>
  
        <Tooltip placement={placement} isOpen={this.state.tooltipOpen} target={id} toggle={this.toggle}>{text}</Tooltip>
      </span>
    );
  }
}

export default TooltipButton;