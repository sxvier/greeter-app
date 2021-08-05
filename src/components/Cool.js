import React from 'react'
import VreactComponent from './VreactCompenent'

class Cool extends VreactComponent {
    constructor() {
        super()
        this.state = {
            name: 'Cars!'
        }
    }
    
    render() {
        return (
            <div>
                Cool! {this.state.name}
            </div>
        )
    }
}

export default Cool