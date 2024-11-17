function fetchData() {
    fetch('https://your-node-app.azurewebsites.net/api/data')
    .then(response => response.json())
    .then(data => {
        document.getElementById('output').textContent = JSON.stringify(data);
    })
    .catch(error => console.error('Error:', error));
}