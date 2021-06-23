import React from 'react';
const ButtonFetchUsers = props => {
    return ( 
      
        <button 
        style = {{
             border: 'solid 2px black',
             backgroundColor: 'white',
             padding: 20,
             margin: '30px auto',
             fontWeight: 'bold',
             cursor: 'pointer',
             display: 'block'  
        }} 
        onClick={props.click}>Dodaj użytkownika</button> 
     );
}
 
export default ButtonFetchUsers;