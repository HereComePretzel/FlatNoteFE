import React from 'react'
import Navbar from './Navbar'

class NoMatch extends React.Component{

    render(){
        return (
            <div>
                <Navbar />
                Path does not exist.
            </div>
        )
    }
}

export default NoMatch