function debouncePopulateDiv() {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
        populateDiv();
    }, 100);
}




async function populateDiv() {
    const a = document.getElementById("firstNumber").value;
    const b = document.getElementById("secondNumber").value;

    //using fetch function to hit the backend and give us the sum

    const response = await fetch("https://sum-server.100xdevs.com/sum?a=" + a + "&b=" + b)
    const ans = await response.text();
    document.getElementById("finalSum").innerHTML = ans;
    //const element = document.getElementById("finalSum")
    //element.innerHTML = parseInt(a) + parseInt(b);
    // string=>number..

}




//you can also access element by calss name..

//document.getElementByClassname..
//or yu can do document.querySelector..
