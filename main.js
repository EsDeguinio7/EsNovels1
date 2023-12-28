$(document).ready(function() {

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

         const dataResponse = data;

         let updateData = dataResponse.filter(item => item.newUpdate === "yes");
         if (updateData.length > 0) {
            updateData.forEach(item => {
               const itemsDisplay = "<div class='content'><img class='content-image' src='" + item.cover + "' alt='Cover' loading='lazy'/><h5 id='title' class='content-title'><a href=''>" + item.title + "</a></h5><div class='topType'><span>" + item.type + "</span></div></div>";
               $('#new-container').append(itemsDisplay);
            });

         } else {
            const errorDisplay = "<div class='errorCon'>No data found!</div>";
            $('#new-container').append(errorDisplay);

         }

         let recommend = dataResponse.filter(item => item.recommended === "yes");
         if (recommend.length > 0) {
            recommend.forEach(item => {
               const itemsDisplay = "<div class='content'><img class='content-image' src='" + recommend.cover + "' alt='Cover' loading='lazy'/><h5 id='title' class='content-title'><a href=''>" + recommend.title + "</a></h5><div class='topType'><span>" + recommend.type + "</span></div></div>";
               $('#recommend-container').append(itemsDisplay);
            })

         } else {
            const errorDisplay = "<div class='errorCon'>No data found!</div>";
            $('#recommend-container').append(errorDisplay);

         }

         let addToFav = dataResponse.find(item => item.addToFav === "yes");
         if (addToFav.length > 0) {
            addToFav.forEach(item => {
               const itemsDisplay = "<div class='content'><img class='content-image' src='" + addToFav.cover + "' alt='Cover' loading='lazy'/><h5 id='title' class='content-title'><a href=''>" + addToFav.title + "</a></h5><div class='topType'><span>" + addToFav.type + "</span></div></div>";
               $('#favourite-container').append(itemsDisplay);
            })

         } else {
            const errorDisplay = "<div class='errorCon'>No data found!</div>";
            $('#favourite-container').append(errorDisplay);

         }


      })
      .catch(error => {
         const errorDisplay = "<div class='errorCon'>" + error + "</div>";
         $('#new-container').append(errorDisplay);
         $('#recommend-container').append(errorDisplay);
         $('#favourite-container').append(errorDisplay);
      });


});