
function validateFormbtn() {
    let name = document.forms["validateForm"]["yName"].value;
    let email = document.forms["validateForm"]["yEmail"].value;
    let phone = document.forms["validateForm"]["yPhone"].value;
    let textA = document.forms["validateForm"]["yText"].value;

    if (name == "") {
        alert("Name must be filled out!");
        return false;
    }
    else
    if (email == "" || !email.includes('@')) {
        alert("Please enter a valid e-mail address!");
        return false;
    }
    else
    if (phone == ""  || phone.length  < 10) {
        alert("Please enter a valid phone number!");
        return false;
    }
    else
    if (textA == "" ) {
        alert("Please enter a your message here!");
        return false;
    }
    else
    alert("Your message has been received")

}