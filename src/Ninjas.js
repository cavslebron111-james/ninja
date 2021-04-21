import React from 'react';
const Ninjas = ({ninjas,deleteNinja}) =>  {

 
 const ninjalist = ninjas.map(ninja => {
      return(
           <div className ="ninja" key={ninja.id}>
           <div> Name: { ninja.name}</div>
           <div> Age: {ninja.age}</div>
           <div> Id: {ninja.id}</div>
           <button onClick = { () => {deleteNinja(ninja.id)}}> delete</button> 
           </div>
      )
          }
)
    
    
 

 


  return (
    <div className = 'ninja-list'> { ninjalist }
    </div>
  );
  }   

export default Ninjas;
