import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div>
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
