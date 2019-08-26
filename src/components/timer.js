import React from 'react'

class Timer extends React.Component{
    constructor(){
        super();
        this.state = {time: 0, intervalId: null}
    }


    start = (e) =>{
        e.preventDefault();
    }
    stop = (e) =>{
        e.preventDefault();
    }
    reset = (e) =>{
        e.preventDefault();
    }

    



    render(){
        return (
            <div>
                <h1>
                    {this.state.time}
                </h1>
                <input type="text"></input>
                <button onClick={this.start}>start</button>
                <button onClick={this.stop}>stop</button>
                <button onClick={this.reset}>reset</button>
            </div>
        )
    }
}

export default Timer