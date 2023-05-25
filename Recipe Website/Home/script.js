// JavaScript for toggling the sidenav
function toggleNav() {
    var sidenav = document.getElementById("sidenav");
    var toggleBtn = document.getElementById("toggle-btn");
    if (sidenav.classList.contains("sidenav-opened")) {
        sidenav.classList.remove("sidenav-opened");
    } else {
        sidenav.classList.add("sidenav-opened");
    }
}
// JavaScript for search functionality
document.addEventListener("DOMContentLoaded", function() {
    var searchInput = document.getElementById("search-input");
    var searchButton = document.getElementById("search-button");
    var searchResults = document.getElementById("search-results");
    var recipes = [{
            name: "Pasta",
            link: "pasta.html"
        },
        {
            name: "Pizza",
            link: "pizza.html"
        },
        {
            name: "Salad",
            link: "salad.html"
        },
        {
            name: "Soup",
            link: "soup.html"
        },
        {
            name: "Cake",
            link: "cake.html"
        },
        {
            name: "Burger",
            link: "burger.html"
        },
        {
            name: "Sushi",
            link: "sushi.html"
        }
    ];

    function performSearch() {
        var searchTerm = searchInput.value.trim().toLowerCase();
        searchResults.innerHTML = ""; // Clear previous results

        if (searchTerm !== "") {
            var matchingRecipes = recipes.filter(function(recipe) {
                return recipe.name.toLowerCase().includes(searchTerm);
            });

            if (matchingRecipes.length > 0) {
                matchingRecipes.forEach(function(recipe) {
                    var resultItem = document.createElement("li");
                    var resultLink = document.createElement("a");
                    resultLink.textContent = recipe.name;
                    resultLink.href = recipe.link;
                    resultItem.appendChild(resultLink);
                    searchResults.appendChild(resultItem);
                });
            } else {
                var noResults = document.createElement("li");
                noResults.textContent = "No results found.";
                searchResults.appendChild(noResults);
            }
        }
    }

    searchButton.addEventListener("click", performSearch);
    searchInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            performSearch();
        }
    });
});