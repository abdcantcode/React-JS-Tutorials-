document.querySelector('form').addEventListener('submit',function(e){
  e.preventDefault();
 console.log("Submitted");
})
  
//Forms tend to make the page reload upon their submission, to prevent this we target the form element and use the preventDefault() thingy.
