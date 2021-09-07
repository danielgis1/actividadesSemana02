const showSign = () => {
    let response;
    // Check if param is a number
    let param = prompt("Please enter a number:");
    if (param === null) {
        return
    }
    param = Number(param);
    if (isNaN(param)) {
        showSign();
        return;
    }
    // Check if the number is positive or negative
    if (param > 0) {
        response = 1
    } else if (param < 0) {
        response = -1
    } else {
        response = 0
    };
    alert(response)
}

// Test
showSign();