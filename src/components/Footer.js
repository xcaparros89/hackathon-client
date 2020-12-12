import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './Footer.css'

export class Footer extends Component {
    render() {
        return (
            <div className='red-background'>
              <button><img src="..//../public/pngegg.png" alt=""/></button>
            <Link to={"/"}>
            <button>The networks</button>
            </Link>
            <Link to={'/'}>
            <button>Contact the Zar</button>
            </Link>
            <Link to={"/"}>
            <button>Others</button>
            </Link>
            </div>
        )
    }
}

export default Footer
