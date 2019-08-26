import React from 'react'
import Timer from './timer'


class App extends React.Component{
    constructor(){
        super();
        this.state = { }
    }

    convertTime = (val) =>{
        let dateTime = new Date(null)
        dateTime.setSeconds(val)
        let newTime = dateTime.toISOString().substr(11,8);

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