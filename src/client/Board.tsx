import React from 'react'
import Row from './Row'

export default () => {
  return (
    <table>
      <tbody>
        <Row number="8" className="row" />
        <Row number="7" className="row" />
        <Row number="6" className="row" />
        <Row number="5" className="row" />
        <Row number="4" className="row" />
        <Row number="3" className="row" />
        <Row number="2" className="row" />
        <Row number="1" className="row" />
      </tbody>
    </table>
  )
}
