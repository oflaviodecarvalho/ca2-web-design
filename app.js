//JS Helio Santana
function paymentValidate() {
    var FirstName = document.travleform.FirstName;
    var PlastName = document.travleform.PlastName;
    var depart = document.travleform.depart;
	var dreturn = document.travleform.dreturn;
    var address = document.travleform.address;
    var phone = document.travleform.phone;
    var email = document.travleform.email;


    if (FirstName.value.length <= 0) {
        alert("First name is required");
        FirstName.focus();
        return false;
    }

   
    if (PlastName.value.length <= 0) {
        alert("Last Name is required");
        PlastName.focus();
        return false;
    }
   

    if (depart.value.length <= 0) {
        alert("Date of Depart");
        depart.focus();
        return false;
    }


    if (dreturn.value.length <= 0) {
        alert("Date of Return");
        dreturn.focus();
        return false;
    }

    if (address.value.length <= 0) {
        alert("Address is required");
        address.focus();
        return false;
    }


    if (phone.value.length <= 0) {
        alert("Phone number is required");
        phone.focus();
        return false;
    }
    if (email.value.length <= 0) {
        alert("Email is required");
        email.focus();
        return false;
    }
   

    var checked_payment = document.querySelector('input[name = "payment"]:');

    if (checked_payment == null) {  
        alert('Payment needs to be selected '); 
        return false;
    }
  
}
