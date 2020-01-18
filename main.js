  var counter = 0

    var llp = document.getElementsByTagName('li')
  for(var i = 0; i < llp.length; i++){
  llp[i].addEventListener('click',info)
   }

   function info(){
    var counter = 0   
   counter++;


   this.innerHTML = parseInt(this.innerHTML)+1

   if(this.innerHTML == 3){
  
    	 this.style.background = 'green'
  	}else{
 this.style.background = 'cadetblue'

 	}
   	 if(this.innerHTML == 5){
 	
  this.style.background = 'yellow'
  }
  if(this.innerHTML == 7){
  this.style.background = 'red'
 }

 }
