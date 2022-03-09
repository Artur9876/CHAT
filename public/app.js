var socket;

let outputVal;


socket = io.connect('http://localhost:3000');



function getInputValue(){
    // Selecting the input element and get its value 
    
    let inputVal = document.getElementById("text").value;
    // Displaying the value
    
    socket.emit('message', inputVal);
    const tbodyEl = document.querySelector("tbody");
      
      
        
        tbodyEl.innerHTML += `
            
          
            <tr>
                <td bgcolor="yellow">&nbsp;&nbsp;&nbsp;&nbsp;${inputVal}</td>
                
            </tr>
          
          
        `;
        
}

socket.on('sendMessage', function(inputVal) {
  
  let outputVal = inputVal;

  const tbodyEl = document.querySelector("tbody");
      
      
        
        tbodyEl.innerHTML += `
            <tr>
                <td bgcolor="green">${outputVal}</td>
                
            </tr>

            
            
        `;
  
  
});





 

      
      

      

     




