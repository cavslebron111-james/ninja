import React,{Component} from 'react';
import Ninjas from './Ninjas';
import Addninja from './Addninja';


class App extends React.Component {
 state = { ninjas : [ {name: 'ruel', age: 40, id: 1 },
         { name: 'john', age: 42, id: 2 },
         { name: 'kikoss', age: 46, id: 3 },
         { name: 'hugo', age: 35, id: 4 } ] }
 
 addMe = (ninja) => {
ninja.id = Math.random();
let ninja1 = [...this.state.ninjas,ninja]
this.setState({
  ninjas: ninja1
})
 }

 deleteNinja = (id) =>{
 
  let ninjas = this.state.ninjas.filter(ninja =>{
   return ninja.id !== id
 })
 this.setState({
   ninjas:ninjas
 
  })

}
 componentDidMount(){
console.log('component mounted');
 }
 componentDidUpdate(prevProps,prevState){
console.log('component update');
console.log(prevProps,prevState);
 }



 render(){
  return (
    <div className ='App'>
     <h1>WELCOME</h1>
     <Ninjas deleteNinja= {this.deleteNinja} ninjas = {this.state.ninjas} />
    
     <Addninja addMe = {this.addMe} /> 
    
    </div>
   
  );
}
}

export default App;
