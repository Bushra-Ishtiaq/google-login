
function nextpage() {
    let email = "bushraishtiaq@gmail.com";

    let emailInput = document.getElementById('mail').value;

    if (email === emailInput) {
        window.location = "index2.html";
    } else {
        document.querySelector('.error-text').style.display = "block";
    }
}



function welcome() {
    let password = "123456789";
    let lock = document.getElementById('pass').value;
    if (password === lock) {
        window.location = "index3.html";
    } else {
        document.querySelector('.error').style.display = "block";
    }

}
