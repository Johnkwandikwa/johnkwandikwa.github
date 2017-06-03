function validationcheck() {
  		var firstname=document.getElementById('firstname').value;
  		var lastname=document.getElementById('lastname').value;
  		


  		if(firstname==""  || lastname=="" ){
  			alert('Please fill in all fields');

  			//return false;
  		} 

  		/*else{
  			return true;
  		}*/

  		return false;
  	}




    document.cookie="username=john"