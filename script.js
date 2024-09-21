//Fetch news data from Flask server and display it on the webpage
$(document).ready(function () {
    function fetchNewsAndDisplay() {
        $.ajax({
            url: '/get_data_from_flask',  // Endpoint to fetch data
            method: 'GET',
            success: function (response) {
                displayNews(response);
            },
            error: function (xhr, status, error) {
                console.error(error);
            }
        });

    }
    displayNews(newsData);
    setInterval(fetchNewsAndDisplay, 8000);
});

//Standard news data
//Comment the code below to hide the standard news data


newsData = [{

    "title": "Title 1",
    "summary": "In the heart of the bustling city, amidst the cacophony of honking horns and hurried footsteps, there lies a serene oasis, hidden from the chaos. It's a quaint café, where time seems to slow down, and the aroma of freshly brewed coffee dances in the air. Patrons sit in cozy corners, lost in their thoughts or engaged in animated conversations. The soft murmur of voices mingles with the gentle melody playing in the background, creating a symphony of tranquility. Outside, the world rushes by, but here, in this little haven, there's only peace and warmth.",
    "url": "https://www.google.com"
},
{
    "title": "Title 2",
    "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin, odio et pulvinar ultricies, enim odio vehicula elit, at fermentum lacus diam ut metus. Vivamus sit amet felis vel sem convallis interdum eu at mauris. Quisque ut accumsan nunc. Aliquam ac lacinia ipsum. Integer posuere tincidunt est, id condimentum nisi fermentum nec. Vestibulum gravida purus nec sapien tincidunt, vel tincidunt mi auctor. Nullam sed elit ac ipsum feugiat lacinia. Nam quis ipsum non arcu fringilla fermentum",
    "url": "https://www.google.com"
},
{
    "title": "Title 3",
    "summary": "Summary 3",
    "url": "https://www.google.com"
},
{
    "title": "Title 2",
    "summary": "Summary 2",
    "url": "https://www.google.com"
},
{
    "title": "Title 3",
    "summary": "Summary 3",
    "url": "https://www.google.com"
},
{
    "title": "Title 2",
    "summary": "Summary 2",
    "url": "https://www.google.com"
},
{
    "title": "Title 3",
    "summary": "Summary 3",
    "url": "https://www.google.com"
},
{
    "title": "Title 3",
    "summary": "Summary 3",
    "url": "https://www.google.com"
}]


// Function to display news data
function displayNews(newsData) {
    console.log("inDisplay");
    var newsContainer = $('#news-container');
    newsData.forEach(function (news) {
        console.log("HEERE");
        var newsBox = $('<div class="news-box"></div>');

        newsBox.append('<h2>' + news.title + '</h2>');
        newsBox.append('<p>' + news.summary + '</p>');
        newsBox.append('<a href="' + news.url + '">Read More</a>');

        newsContainer.append(newsBox);
    });
}

// Function to filter news based on search input
$(document).ready(function () {
    function filterNews(searchTerm) {
        var newsBoxes = $('.news-box');
        newsBoxes.each(function () {
            var title = $(this).find('h2').text().toLowerCase();
            var summary = $(this).find('p').text().toLowerCase();
            var url = $(this).find('a').text().toLowerCase();
            if (title.includes(searchTerm.toLowerCase()) || summary.includes(searchTerm.toLowerCase()) || url.includes(searchTerm.toLowerCase())) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    }

    // Event listener for search input
    $('#search-input').on('input', function () {
        var searchTerm = $(this).val();
        filterNews(searchTerm);
    });
});

//Nav bar button for small resolution
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#check').addEventListener('change', function () {
        var nav = document.querySelector('nav ul');
        if (this.checked) {
            nav.style.left = '0';
        } else {
            nav.style.left = '-100%';
        }
    });
});

//Search bar Icon clicked
document.addEventListener("DOMContentLoaded", function () {
    var searchIcon = document.getElementById("searchIcon");
    var searchBar = document.getElementById("searchBar");

    searchIcon.addEventListener("click", function () {
        if (searchBar.style.display === "none" || searchBar.style.display === "") {
            searchBar.style.display = "block";
        } else {
            searchBar.style.display = "none";
        }
    });
});
