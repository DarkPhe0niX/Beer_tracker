// Initialize an array to store favor data
let favorData = [];

// Function to update the table displaying favor data
function updateTable() {
    const favorsList = document.querySelector('#favorsList tbody');
    favorsList.innerHTML = '';
    const row = document.createElement('tr');
    favorData.forEach((favor, index) => {      
        // Create table cells for each column
        const dateCell = document.createElement('td');
        // td.setAttribute("id","vivek");
        // dateCell = document.getElementById("vivek");
        dateCell.textContent = favor.date;
        row.appendChild(dateCell);

        const descriptionCell = document.createElement('td');
        descriptionCell.textContent = favor.description;
        row.appendChild(descriptionCell);

        const recipientCell = document.createElement('td');
        recipientCell.textContent = favor.recipient;
        row.appendChild(recipientCell);

        const favorDoerCell = document.createElement('td');
        favorDoerCell.textContent = favor.favorDoer;
        row.appendChild(favorDoerCell);

        const beersOwedCell = document.createElement('td');
        beersOwedCell.textContent = favor.beersOwed;
        row.appendChild(beersOwedCell);

        favorsList.appendChild(row);
    });
}

// Function to handle favor submission
function submitFavor() {
    const date = document.getElementById('date').value;
    const description = document.getElementById('description').value;
    const recipient = document.getElementById('recipient').value;
    const favorDoer = document.getElementById('favorDoer').value;
    const beersOwed = parseInt(document.getElementById('beersOwed').value);


    // Create a new favor object
    const newFavor = { date, description, recipient, favorDoer, beersOwed };

    // Add the new favor to the favorData array
    favorData.push(newFavor);

    // Clear the form
    document.getElementById('favorForm').reset();

    // Update the table
    updateTable();
}

// Function to delete a favor by index
function deleteFavor(index) {
    favorData.splice(index, 1);
    updateTable();
}

// Add event listener to the favor submission form
document.getElementById('favorForm').addEventListener('submit', (e) => {
    e.preventDefault();
    submitFavor();
});
// function fetchData() {
//     fetch('fetch_favors.php')
//         .then((response) => response.json())
//         .then((data) => {
//             favorData = data;
//             updateTable();
//         })
//         .catch((error) => console.error('Error:', error));
// }


// Initial table update
updateTable();
// Call fetchData to initially load data
// fetchData();