import React from 'react'

class Timer extends React.Component{
    constructor(){
        super();
        this.state = {time: 0, intervalId: null, val: 0, convertedTime: 0}
    }


    start = (e) =>{
        e.preventDefault();

        if(this.state.intervalId){
            clearInterval(this.state.intervalId)
        }

        if(this.state.time <= 0){
            return
        }

        let intervalId = setInterval(() =>{
            let time = this.state.time - 1;
            this.setState({time})
            let convertedTime = this.props.convertTime(this.state.time)
            this.setState({convertedTime})
        }, 1000)
        this.setState({intervalId})
    }
    stop = (e) =>{
        e.preventDefault();
        clearInterval(this.state.intervalId);

    }
    reset = (e) =>{
        e.preventDefault();
        this.setState({time: 0})
    }

    handleChange= (e) =>{
        e.preventDefault();
        let val = e.target.value
        this.setState({val})
        let convertedTime = this.props.convertTime(val)
        this.setState({convertedTime})
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        let time = this.state.val
        this.setState({time})
        
    }






    render(){
        return (
            <div>
                <h1>
                    {this.state.time}
                    <br/>
                    {this.state.convertedTime}
                </h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                            onChange={this.handleChange}
                            value ={this.state.val}
                    >
                    </input>
                    <button>Set</button>
                </form>
                
                <button onClick={this.start}>start</button>
                <button onClick={this.stop}>stop</button>
                <button onClick={this.reset}>reset</button>
            </div>
        )
    }
}

export default Timer