import React from 'react'
import Timer from './timer'


class App extends React.Component{
    constructor(){
        super();
        this.state = { }
    }

    convertTime = () =>{

    }


    render(){
        return(
            <div>

                <Timer convertTime={this.convertTime}/>

            </div>
        )
    }
}



export default App