$(document).ready(function () {
    async function getNovels() {
        // Get json response
        const response = await fetch("data.json");

        // Check response if OK
        if (!response.ok) {
          $('.loader1').hide();
            throw new Error("Failed to fetch data. Please try again!");
        }

        const data = await response.json();
        return data;
    }

    // Get novels on response
    getNovels()
        .then(data => {
            const dataResponse = data;
            $('.loader1').hide();
            let updateData = dataResponse.filter(
                item => item.newUpdate === "yes"
            );
            if (updateData.length > 0) {
                updateData.forEach(item => {
                    const itemsDisplay =
                        "<div class='content' data-src='page/page-info.html?id=" +
                        item.id +
                        "'><img class='content-image' src='" +
                        item.cover +
                        "' alt='Cover' loading='lazy'/><h5 id='title' class='content-title'>" +
                        item.title +
                        "</h5><div class='topType'><span>" +
                        item.type +
                        "</span></div></div>";
                    $("#new-container").append(itemsDisplay);
                });
            } else {
                const errorDisplay =
                    "<div class='errorCon'>No data found!</div>";
                $("#new-container").append(errorDisplay);
            }

            let recommend = dataResponse.filter(
                item => item.recommended === "yes"
            );
            if (recommend.length > 0) {
                recommend.forEach(item => {
                    const itemsDisplay =
                        "<div class='content' data-src='page/page-info.html?id=" +
                        item.id +
                        "'><img class='content-image' src='" +
                        item.cover +
                        "' alt='Cover' loading='lazy'/><h5 id='title' class='content-title'>" +
                        item.title +
                        "</h5><div class='topType'><span>" +
                        item.type +
                        "</span></div></div>";
                    $("#recommend-container").append(itemsDisplay);
                });
            } else {
                const errorDisplay =
                    "<div class='errorCon'>No data found!</div>";
                $("#recommend-container").append(errorDisplay);
            }

            let addTo = dataResponse.filter(item => item.addToFav === "yes");
            if (addTo.length > 0) {
                addTo.forEach(item => {
                    const itemsDisplay =
                        "<div class='content' data-src='page/page-info.html?id=" +
                        item.id +
                        "'><img class='content-image' src='" +
                        item.cover +
                        "' alt='Cover' loading='lazy'/><h5 id='title' class='content-title'>" +
                        item.title +
                        "</h5><div class='topType'><span>" +
                        item.type +
                        "</span></div></div>";
                    $("#favourite-container").append(itemsDisplay);
                });
            } else {
                const errorDisplay =
                    "<div class='errorCon'>No data found!</div>";
                $("#favourite-container").append(errorDisplay);
            }
            
            dataResponse.forEach(items => {
            	
            	const listItems = "<li><a href='page/page-info.html?id="+items.id+"'>"+items.title+"</a></li>";
                $('#listnovels').append(listItems);
                
			});
            
        })
        .catch(error => {
            const errorDisplay = "<div class='errorCon'>" + error + "</div>";
            $("#new-container").append(errorDisplay);
            $("#recommend-container").append(errorDisplay);
            $("#favourite-container").append(errorDisplay);
        });
});
