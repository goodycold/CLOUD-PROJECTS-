const recordForm = document.getElementById("recordForm");
const message = document.getElementById("message");
const recordsList = document.getElementById("recordsList");

recordForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const description = document.getElementById("description").value.trim();

    if (!description) {
        message.textContent = "Please enter a record.";
        return;
    }

    try {
        const response = await fetch("/api/records", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ description })
        });

        if (!response.ok) {
            throw new Error("Unable to save record.");
        }

        message.textContent = "Record saved successfully.";
        recordForm.reset();

        loadRecords();

    } catch (error) {
        message.textContent = "Could not connect to the application server.";
    }
});

async function loadRecords() {
    try {
        const response = await fetch("/api/records");

        if (!response.ok) {
            throw new Error("Unable to retrieve records.");
        }

        const records = await response.json();

        recordsList.replaceChildren();

        if (records.length === 0) {
            recordsList.textContent = "No records available yet.";
            return;
        }

        records.forEach(record => {
            const item = document.createElement("p");
            item.textContent = record.description;
            recordsList.appendChild(item);
        });

    } catch (error) {
        recordsList.textContent = "Unable to retrieve records.";
    }
}

loadRecords();
