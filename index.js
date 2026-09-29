const transactions = [

    {
        receiptNo: "RCPT-1001",
        date: "2026-09-16",
        time: "04:29 PM",
        items: 1,
        payment: "Card",
        total: 150
    },

    {
        receiptNo: "RCPT-1002",
        date: "2026-09-16",
        time: "05:15 PM",
        items: 3,
        payment: "Cash",
        total: 450
    },

    {
        receiptNo: "RCPT-1003",
        date: "2026-09-17",
        time: "10:20 AM",
        items: 2,
        payment: "Card",
        total: 300
    },

    {
        receiptNo: "RCPT-1004",
        date: "2026-09-18",
        time: "02:40 PM",
        items: 4,
        payment: "Cash",
        total: 800
    }

];


function displayTransactions(selectedDate) {

    const tableBody =
        document.getElementById("transactionTableBody");

    tableBody.innerHTML = "";

    let found = false;


    for (let i = 0; i < transactions.length; i++) {


        if (
            selectedDate === "" ||
            transactions[i].date === selectedDate
        ) {

            const row = document.createElement("tr");



            const receiptCell = document.createElement("td");

            receiptCell.textContent =
                transactions[i].receiptNo;



            const dateCell = document.createElement("td");

            dateCell.textContent =
                transactions[i].date +
                ", " +
                transactions[i].time;



            const itemsCell = document.createElement("td");

            itemsCell.textContent =
                transactions[i].items + " item(s)";



            const paymentCell = document.createElement("td");

            paymentCell.textContent =
                transactions[i].payment;



            const totalCell = document.createElement("td");

            totalCell.textContent =
                "₱" + transactions[i].total + ".00";



            const actionCell = document.createElement("td");

            const viewButton =
                document.createElement("button");

            viewButton.textContent = "View";

            viewButton.className = "view-button";


            viewButton.dataset.transactionIndex = i;


            viewButton.onclick = function () {

                viewTransaction(
                    this.dataset.transactionIndex
                );

            };



            actionCell.appendChild(viewButton);


            row.appendChild(receiptCell);
            row.appendChild(dateCell);
            row.appendChild(itemsCell);
            row.appendChild(paymentCell);
            row.appendChild(totalCell);
            row.appendChild(actionCell);


            // Add row to table

            tableBody.appendChild(row);


            found = true;
        }
    }

    if (found === false) {

        const row = document.createElement("tr");

        const cell = document.createElement("td");

        cell.textContent =
            "No transactions found.";

        cell.colSpan = 6;

        cell.className = "no-results";

        row.appendChild(cell);

        tableBody.appendChild(row);
    }

}

function searchTransactions() {

    const dateInput =
        document.getElementById("transactionDate");

    displayTransactions(dateInput.value);

}

function viewTransaction(index) {

    const transaction =
        transactions[index];


    alert(
        "Receipt #: " +
        transaction.receiptNo +

        "\nDate: " +
        transaction.date +

        "\nTime: " +
        transaction.time +

        "\nItems: " +
        transaction.items +

        "\nPayment: " +
        transaction.payment +

        "\nTotal: ₱" +
        transaction.total +
        ".00"
    );

}

displayTransactions("");
