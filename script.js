function fetchDataThen() {
    fetch('https://node-api-server-ap-fagsgte7fsdqhyct.centralus-01.azurewebsites.net/api/data')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById('output').textContent = JSON.stringify(data);
    })
    .catch(error => console.error('Error:', error));
}

async function fetchData() {
    const apiUrl = "https://node-api-server-ap-fagsgte7fsdqhyct.centralus-01.azurewebsites.net/api/date";

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        document.getElementById("output").textContent = `Current Date and Time: ${data.dateTime}`;
    } catch (error) {
        console.error("Error fetching data:", error);
        document.getElementById("output").textContent = "Failed to fetch data from the server.";
    }
}