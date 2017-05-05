import React from 'react';
import { number, string } from 'prop-types';

const styles = {
  content: {
    textAlign: 'center',
    fontSize: '35px'
  }
};

export default class Loading extends React.Component {
  originalText = this.props.text;
  state = {
    text: this.originalText,
  };

  componentDidMount() {
    const stopper = `${this.originalText}...`
    return this.interval = setInterval(() => {
      if (this.state.text === stopper) {
        return this.setState({ text: this.originalText });
      }

      return this.setState(function (prevState) {
        return { text: prevState.text + '.' }
      })

    }, this.props.speed)
  }

  componentWillUnmount() {
    return clearInterval(this.interval)
  }
  render() {
    return (
      <p style={styles.content} >
        {this.state.text}
      </p>
    )
  }
}

Loading.propTypes = {
  text: string,
  speed: number
};

Loading.defaultProps = {
  text: 'Loading',
  speed: 300
};