const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
	       for(let k in sampleObject ){
		   if(k===key){
			   return true;
		   }
	   }
	  return false;
  //   write your code here
	
	
}

// Do not change the code below
//const key = prompt("Enter Key.");
//alert(hasKey(key));
