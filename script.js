document.addEventListener("DOMContentLoaded", function () {
    $("#bars").on("click", function () {
        if (document.getElementById("navbar").style.left === "-150px") {
            document.getElementById("navbar").style.left = "0";
        } else {
            document.getElementById("navbar").style.left = "-150px";
        }
    });

    $("#new-container").on("click", ".content", function () {
        window.location.href = $(this).attr("data-src");
    });
    $("#recommend-container").on("click", ".content", function () {
        window.location.href = $(this).attr("data-src");
    });
    $("#favourite-container").on("click", ".content", function () {
        window.location.href = $(this).attr("data-src");
    });

    $("#search").click(function () {
        const searchValue = $("#search-input").val().toLowerCase();
        const param = "page/search-result.html?search=" + searchValue;
        window.location.href = param;
        console.log(param);
    });
});
