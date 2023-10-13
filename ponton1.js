function rejected_promise() {
    return new Promise((resolve, reject) => {
        reject(new Error(
            "This promise is Rejected..."));
    });
}

async function displayData() {
    try {
        await rejected_promise();
    } catch (e) {
        console.log("Error Message: ", e.message);
    }
}

displayData();