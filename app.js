console.log('This is my index js file ');

// Initialize the news api  parameter  

let apiKey = '79b918d95bbe7549652e985ba6a4df5e';

// Grap the news container
newsAccordion = document.getElementById('newsAccordion');

// Create a Ajax GET request 
const xhr = new XMLHttpRequest();

xhr.open('GET', `https://gnews.io/api/v4/top-headlines?token=${apiKey}&lang=en`, true);

// What to do when response is ready 
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            let news =`<div class="card">
            <div class="card-header" id="heading${index}">
                <h2 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                    aria-expanded="false" aria-controls="collapse${index}">
                   <b>Breaking News ${index+1}:</b> ${element["title"]}
                </button>
                </h2>
            </div>

            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
            </div>
        </div>`;

            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }

    else {
        console.log('Some error occured')
    }

}

xhr.send();








