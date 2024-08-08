function one() {
    const username = "Nikhil"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}

// one()

if (true) {
    const username = "Nikhil"
    if (username === "Nikhil") {
        const website = " youtube"
        console.log(username + website);

    }
    // console.log(website);
    // console.log(username);
}


// ++++++++++++ Interesting +++++++++++
console.log(addone(5));

function addone(num) {
    return num + 1
}

addone(5)

addTwo(5)

const addTwo = function (num) {
    return num + 2
}

