import React from 'react'

const Lights = (props) => {
    const { type } = props
    const Light = type;

    return <Light {...props} />
}

export default Lights