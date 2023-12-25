document.addEventListener('DOMContentLoaded', function(){
   
   $('#bars').on('click', function() {
     if (document.getElementById('navbar').style.left === '-150px') {
        document.getElementById('navbar').style.left = '0';
     } else {
        document.getElementById('navbar').style.left = '-150px';
     }
  });
   
   
});