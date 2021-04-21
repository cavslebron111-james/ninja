import React,{Component} from 'react'

class Addninja extends Component {
    state = {
        name: null,
        age: null
    }
    handleChange = (e) => {
        
        this.setState({ 
        [e.target.id]: e.target.value 
    })
}
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addMe(this.state)
    }
    
    
    
    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" onChange={this.handleChange}></input>
            <label htmlFor="age">Age:</label>
            <input type="text" id="age" onChange={this.handleChange}></input>
            <button>submit</button>
            
            
            </form>
            </div>
     



        );
    }
}

export default Addninja;