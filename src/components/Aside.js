import React from 'react'

export default function Aside(props) {
    return (
        <aside className={`col-2 ${props.cls} h-100 tbdr`} > {props.children}</aside >
    )
}
