const scrol = document.querySelector(".scrol");
scrol.addEventListener("click",function(){
  window.scrollTo({
      top:0,
       left:0,
      behavior:"smooth",


});


})

const   menuIcon = document.querySelector('.burger-menu');

const navbar = document.querySelector('#navbar');

menuIcon.addEventListener('click',  () => {
navbar.classList.toggle("change");
})
    





document.querySelector(".iphone-btn2").onclick = function(){

  const icons1 = document.querySelector(".icon-a");
  const icons2 = document.querySelector(".icon-b");
  const icons3 = document.querySelector(".icon-c");
  const icons4 = document.querySelector(".icon-d");

  console.log (icons1.style);
  icons1.style.display = "unset"
var value = '20px'
var transitionDuration = '.3s'
var timing = 'linear'
var delay = '0s'

icons1.style.filter = `blur(${value})`;

requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    icons1.style.transition = `-webkit-filter ${transitionDuration} ${timing} ${delay}`;
    icons1.style.filter = 'none';  
  })
})


  console.log (icons2.style);
  icons2.style.display = "unset"
 

  var value = '20px'
  var transitionDuration = '.3s'
  var timing = 'linear'
  var delay = '0s'
  
  icons2.style.filter = `blur(${value})`;
  
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      icons2.style.transition = `-webkit-filter ${transitionDuration} ${timing} ${delay}`;
      icons2.style.filter = 'none';  
    })
  })
  
  
  

  

  console.log (icons3.style);
  icons3.style.display = "unset"

  var value = '20px'
  var transitionDuration = '.3s'
  var timing = 'linear'
  var delay = '0s'
  
  icons3.style.filter = `blur(${value})`;
  
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      icons3.style.transition = `-webkit-filter ${transitionDuration} ${timing} ${delay}`;
      icons3.style.filter = 'none';  
    })
  })








  console.log (icons4.style);
  icons4.style.display = "unset"

  var value = '20px'
  var transitionDuration = '.3s'
  var timing = 'linear'
  var delay = '0s'
  
  icons4.style.filter = `blur(${value})`;
  
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      icons4.style.transition = `-webkit-filter ${transitionDuration} ${timing} ${delay}`;
      icons4.style.filter = 'none';  
    })
  })


}

