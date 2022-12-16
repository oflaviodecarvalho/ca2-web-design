//JS Helio Santana
function paymentValidate() {
    var FirstName = document.travleform.FirstName;
    var PlastName = document.travleform.PlastName;
    var Depart = document.travleform.Depart;
	var Dreturn = document.travleform.Dreturn;
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
   

    if (Depart.value.length <= 0) {
        alert("Date of Depart is Required");
        Depart.focus();
        return false;
    }
	
	 if (Dreturn.value.length <= 0) {
        alert("Date of Return is Required");
        Dreturn.focus();
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
   

    var checked_Paymenttype = document.querySelector('input[name = "Paymenttype"]:checked');

    if (checked_Paymenttype == null) {  
        alert('Payment method needs to be selected '); 
        return false;
    }
  
}