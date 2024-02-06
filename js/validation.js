const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const telRegex = /^\+995\d{9}$/
function validateForm() {
    let name = document.forms["call-back"]["fname"].value;
    if (name == "") {
        document.forms["call-back"]["fname"].classList.add('red');
        alert("Name must be filled out");
        return false;
    } else {
        document.forms["call-back"]["fname"].classList.remove('red');

    }
    let email = document.forms["call-back"]["email"].value;
    if (!email.match(emailRegex)) {
        document.forms["call-back"]["email"].classList.add('red');
        alert("Enter valid email.");
        return false;
      } else {
        document.forms["call-back"]["email"].classList.remove('red');

      }
    let number = document.forms["call-back"]["tel"].value;
    if (!number.match(telRegex)) {
        alert("Enter phone number in correct format.");
        document.forms["call-back"]["tel"].classList.add('red');
        return false;
      } else {
        document.forms["call-back"]["tel"].classList.remove('red');

      }
    let subject = document.forms["call-back"]["subject"].value;
    if (subject.length<5) {
        alert("Enter more than 5 symbols.");
        document.forms["call-back"]["subject"].classList.add('red');
        return false;
      } else {
        document.forms["call-back"]["subject"].classList.remove('red');

      }
    
  }