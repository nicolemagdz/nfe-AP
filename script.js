function fetchData() {
    fetch('https://https://node-api-server-ap-fagsgte7fsdqhyct.centralus-01.azurewebsites.net/api/data')
    .then(response => response.json())
    .then(data => {
        document.getElementById('output').textContent = JSON.stringify(data);
    })
    .catch(error => console.error('Error:', error));
}