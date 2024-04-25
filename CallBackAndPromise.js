function fetchData(url, callback) {
    fetch(url)
        .then(response => response.json()) // if url is working fine, it will return a promise
        .then(data => callback(null, data)) // if url is working fine, it will return data
        .catch(error => callback(error, null)); // if url is not working fine, it will return error
}

// URL to fetch data from
const url = 'https://jsonplaceholder.typicode.com/posts/1';

// Calling fetchData with a callback function to handle the response
fetchData(url, function(error, data) {
    if (error) {
        console.error('Error fetching data:', error);
    } else {
        console.log('Data fetched successfully:', data);
    }
});
