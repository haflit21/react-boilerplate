import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super();

    this.props = props;
  }

  render() {
    return (
      <div className="header">Mon header {this.props.id}</div>
    );
  }
}

export default Header;