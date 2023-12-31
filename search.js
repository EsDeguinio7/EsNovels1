function getQueryParam(key) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(key);
}
const novelId = getQueryParam("search");

fetch("../data.json")
    .then(response => {
        if (!response.ok) {
            $(".loader1").hide();
            throw new Error("Failed to get response from server");
        }
        return response.json();
    })
    .then(data => {
        const result = data;
        $(".loader1").hide();
        var searchResults = searchInJson(result, novelId);
        displayResults(searchResults);
    })
    .catch(error => {
        console.log(error);
    });

function searchInJson(data, term) {
    return data.filter(function (item) {
        // Check if the search term exists in any property of the item
        for (let key in item) {
            if (
                item.hasOwnProperty(key) &&
                String(item[key]).toLowerCase().includes(term)
            ) {
                return true;
            }
        }
        return false;
    });
}
function displayResults(results) {
    var resultsList = $(".result-container");
    resultsList.empty(); // Clear previous results

    if (results.length > 0) {
        results.forEach(function (item) {
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
            resultsList.append(itemsDisplay);
        });
    } else {
        resultsList.append("<div class='content'>No results found</div>");
    }
}
