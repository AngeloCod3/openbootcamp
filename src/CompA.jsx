import PropTypes from 'prop-types'
import React, { Component } from 'react'
import CompB from './CompB'


export default class CompA extends Component {

  render() {
    return (
      <div>
        
        <CompB name='Oliver' lastname='Meier' email='ang@gmail.com' IsConnected={true}/>
        <CompB name='Diego' lastname='Meier' email='anasdg@gmail.com' IsConnected={true}/>
      </div>
    )
  }
}

CompA.propTypes = {name: PropTypes.string,
  lastname: PropTypes.string,
  email: PropTypes.string,
  IsConnected: PropTypes.bool}