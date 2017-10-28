import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

class RectangleLayer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      layer: props.layer,
      layerScaleStyles: props.layerScaleStyles
    }
    this.handleFocus = this.handleFocus.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  shouldComponentUpdate(nextProps) {
    return !_.isEqual(nextProps,this.props)
  }

  componentWillMount() {
    this.setState({
      layer: this.props.layer,
      layerScaleStyles: this.props.layerScaleStyles
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      layer: nextProps.layer,
      layerScaleStyles: nextProps.layerScaleStyles
    })
  }

  handleKeyPress(e) {
    console.log(e.key)
  }

  handleFocus(e) {
    e.target.click()
  }

  render() {

    const { layerScaleStyles } = this.state

    const { fill, dimensions } = this.state.layer.adjustments

    const wrapperStyles = {
      width: '100%',
      height: '100%'
    }
    const rectangleStyles = {
      transform: `rotate(${dimensions.rotation}deg)`,
      transformOrigin: '50% 50%'
    }

    return (
      <div style={layerScaleStyles}>
        <svg
          fill={fill.backgroundColor}
          style={wrapperStyles}
          width={dimensions.width}
          height={dimensions.height}
          viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
          <rect
            x='0'
            y='0'
            width={dimensions.width}
            height={dimensions.height}
            style={rectangleStyles}/>
        </svg>
      </div>
    )
  }
}

RectangleLayer.propTypes = {
  layer : PropTypes.object.isRequired,
  layerScaleStyles: PropTypes.object.isRequired
}

export default RectangleLayer