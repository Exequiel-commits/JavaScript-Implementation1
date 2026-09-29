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

function displayTransactions() {

    console.log("==========================================");
    console.log("           TRANSACTION HISTORY");
    console.log("==========================================");

    for (let i = 0; i < transactions.length; i++) {

        console.log("");
        console.log("Receipt #: " + transactions[i].receiptNo);
        console.log("Date:      " + transactions[i].date);
        console.log("Time:      " + transactions[i].time);
        console.log("Items:     " + transactions[i].items);
        console.log("Payment:   " + transactions[i].payment);
        console.log("Total:     ₱" + transactions[i].total + ".00");

        console.log("------------------------------------------");
    }
}

function searchByDate(selectedDate) {

    console.log("");
    console.log("==========================================");
    console.log("Transactions for: " + selectedDate);
    console.log("==========================================");

    let found = false;

    for (let i = 0; i < transactions.length; i++) {

        if (transactions[i].date === selectedDate) {

            console.log("");
            console.log("Receipt #: " + transactions[i].receiptNo);
            console.log("Date:      " + transactions[i].date);
            console.log("Time:      " + transactions[i].time);
            console.log("Items:     " + transactions[i].items);
            console.log("Payment:   " + transactions[i].payment);
            console.log("Total:     ₱" + transactions[i].total + ".00");

            console.log("------------------------------------------");

            found = true;
        }
    }

    if (found === false) {

        console.log("No transactions found for this date.");
    }
}

displayTransactions();

searchByDate("2026-09-16");
