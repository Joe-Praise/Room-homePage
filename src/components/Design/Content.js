import React from 'react'
import Card from '../UI/Card'

const Content = ({header, message, className}) => {
  return (
    <Card className={className}>
      <div className="content">
        <h3>{header}</h3>
        <p>{message}</p>
      </div>
    </Card>
  )
}

export default Content