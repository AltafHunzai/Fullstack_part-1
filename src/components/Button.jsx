import React from 'react'

export const Button = ({ onClick, title }) => {
    return (
        <button style={{margin: '5px', fontSize: '16px'}} onClick={onClick} >{title}</button>
    )
}