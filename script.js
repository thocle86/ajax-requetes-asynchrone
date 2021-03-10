// This function loads simpsons data from the The Simpsons Quotes API
function fetchSimpsonsJSON() {
    const url = 'https://simpsons-quotes-api.herokuapp.com/quotes';
    axios.get(url)
    .then(function(response) {
        return response.data;
    })
    .then(function(simpsons) {
        console.log('data decoded from JSON:', simpsons);

        const simpsonsHtml = `
            <h2>${simpsons[0].quote}</h2>
            <div>
                <img src="${simpsons[0].image}">
            </div>
            <h5>${simpsons[0].character}</h5>
        `;
        document.querySelector('#simpsons').innerHTML = simpsonsHtml;
    });
}

fetchSimpsonsJSON();

const myButton = document.querySelector('#myButton');

myButton.addEventListener('click', function() {
    fetchSimpsonsJSON();
});
