document.addEventListener('DOMContentLoaded', function(){
   
   $('#bars').on('click', function() {
     if (document.getElementById('navbar').style.left === '-150px') {
        document.getElementById('navbar').style.left = '0';
     } else {
        document.getElementById('navbar').style.left = '-150px';
     }
  });
   
   $('#new-container').on('click','.content', function(){
      
      
      window.location.href = "page/page-info.html?id="+$(this).index();
   });
   
});