$(document).ready(function() {

   const newNovelContainer = $('#new-container');

   async function getNovels() {
      // Get json response
      const response = await fetch('data.json');

      // Check response if OK
      if (!response.ok) {
         throw new Error('Failed to fetch data. Please try again!');
      }

      const data = await response.json();
      return data;

   }

   // Get novels on response
   getNovels()
      .then(data => {
         
         const dataResponse = data.data;
         
         dataResponse.forEach((items) => {
            
            
            const itemsDisplay = "<div class='new1'><img src='" + items.cover + "' alt='Cover' loading='lazy'/><h3 id='title'>" + items.title + "</h3><div class='item-info'><span>" + items.type + "</span></div></div>";
            newNovelContainer.append(itemsDisplay);

         });


      })
      .catch(error => console.log(error));


});