function confirmReset() {
  if(confirm("Are you sure you want to reset the form?")) {
    // If user clicks OK, reset the form
    document.getElementById("myForm").reset();
  } else {
    // If user clicks Cancel, do nothing
    return false;
  }
}



  function changeDropdown()
  {
    var nationality=document.getElementById("nationality").value;
    if(nationality=="MU")
    {
        document.getElementById("specifify_Nationality").style.visibility='hidden';
    }
    else
    {
        document.getElementById("specifify_Nationality").style.visibility='visible'; 
    }
  }

function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
    // Get the output text
    var text = document.getElementById("text");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

  var mobile_contact_numberInput = document.getElementById("mobile_contact_number");

  mobile_contact_numberInput.addEventListener("input", function() {
    if (!/^[5][0-9]{7}$/.test(this.value)) {
      this.setCustomValidity("mobile_contact_number should only have numerical values and it should contain 8 digits starting with number 5");
    } else {
      this.setCustomValidity("");
    }
  });


    /*validate DOB*/
     var dobInput = document.getElementById("dob");

		dobInput.addEventListener("input", function() {
			var dob = new Date(this.value);
			var age = calculateAge(dob);

			if (!isValidDate(dob) || age > 18) {
				this.setCustomValidity("Please enter a valid date of birth");
			} else {
				this.setCustomValidity("");
			}
		});

		function isValidDate(date) {
			return date instanceof Date && !isNaN(date);
		}

		function calculateAge(DOB) {
			var now = new Date();
			var age = now.getFullYear() - DOB.getFullYear();
			var monthDiff = now.getMonth() - DOB.getMonth();

			if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < DOB.getDate())) {
				age--;
			}

			return age;
		}

    /*Password field should match the Confirm password field*/
    var myInput = document.getElementById("psw");
    var letter = document.getElementById("letter");
    var capital = document.getElementById("capital");
    var number = document.getElementById("number");
    var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}
	
// Valid email address
const emailInput = document.getElementById("email");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(emailInput.value)) {
  alert("Please enter a valid email address.");
}








 