import React from 'react';

export default class Copyright extends React.Component {
  constructor( props ) {
    super ( props );

    this.state = {
      year: 2017
    }
  }

  componentDidMount() {
    this.setState({year: new Date().getFullYear()});  
  }

  render() {
    return (
      <p className="copyright">
        &copy; {this.state.year}, {this.props.co}.
      <style jsx>{`
        .copyright {
          position: absolute;
          right: 10px;
          bottom: 0px;
        }
      `}</style>
      </p>
    );
  }
}
