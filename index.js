
function moveDodgerLeft() {  
    
    const currentLeftPosition = dodger.style.left;  
    
     
    const left = parseInt(currentLeftPosition, 10);  
  
    if (left > 40) {  
     
      dodger.style.left = (left - 1) + 'px';  
    }  
  }


  function moveDodgerRight() {  
  
    const leftNumbers = dodger.style.left.replace("px", "");  
    const left = parseInt(leftNumbers, 10); 
   
    if (left < 360) { 
      dodger.style.left = `${left + 1}px`;  
    }  
  }


