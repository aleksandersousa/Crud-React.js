import React from 'react'
import './Main.css'
import Header from './Header'

export default function Main (props) {
    return <React.Fragment>
        <Header {...props}/>
        <main className="content container-fluid">
            <div className="pt-3 mt-3">
                {props.children}
            </div>
        </main>
    </React.Fragment>
}