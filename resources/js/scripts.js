const fullname_output = document.getElementById("fullname-output");
const card_number_output = document.getElementById("card-number-output");
const month_expiry_output = document.getElementById("month-expiry-output");
const year_expiry_output = document.getElementById("year-expiry-output");
const cvc_number_output = document.getElementById("cvc-number-output");
const fullname_input = document.getElementById("fullname-input");
const fullname_alert = document.getElementById("fullname-alert");
const card_number_input = document.getElementById("card-number-input");
const card_number_alert = document.getElementById("card-number-alert");
const month_input = document.getElementById("mm-input");
const year_input = document.getElementById("yy-input");
const month_year_alert = document.getElementById("mm-yy-alert");
const cvc_input = document.getElementById("cvc-input");
const cvc_alert = document.getElementById("cvc-alert");
const form_container = document.getElementById("form-container");
const thank_you_container = document.getElementById("thank-you-container");
const confirm_button = document.getElementById("confirm-button");
const continue_button = document.getElementById("continue-button");

confirm_button.addEventListener("click", (event) => {
	event.preventDefault();
	if (fullname_input.value == "") {
		fullname_input.style.border = "1px solid hsl(0, 100%, 66%)";
		fullname_alert.style.display = "block";
	} else {
		fullname_input.style.border = "1px solid hsl(270, 3%, 87%)";
		fullname_alert.style.display = "none";
		fullname_output.textContent = fullname_input.value;
	}

	if (card_number_input.value == "") {
		card_number_input.style.border = "1px solid hsl(0, 100%, 66%)";
		card_number_alert.style.display = "block";
	} else {
		card_number_input.style.border = "1px solid hsl(270, 3%, 87%)";
		card_number_alert.style.display = "none";
		// Format card number: insert a space after every 4 digits
		const formattedCardNumber = card_number_input.value
			.replace(/\D/g, "")
			.replace(/(.{4})/g, "$1 ")
			.trim();
		card_number_output.textContent = formattedCardNumber;
	}

	let month_value = parseInt(month_input.value);
	if (isNaN(month_value) || month_value < 1 || month_value > 12) {
		month_input.style.border = "1px solid hsl(0, 100%, 66%)";
		month_year_alert.style.display = "block";
	} else {
		month_input.style.border = "1px solid hsl(270, 3%, 87%)";
		month_year_alert.style.display = "none";
		month_expiry_output.textContent = month_input.value;
	}

	if (year_input.value == "") {
		year_input.style.border = "1px solid hsl(0, 100%, 66%)";
		month_year_alert.style.display = "block";
	} else {
		year_input.style.border = "1px solid hsl(270, 3%, 87%)";
		month_year_alert.style.display = "none";
		year_expiry_output.textContent = year_input.value;
	}

	if (cvc_input.value == "") {
		cvc_input.style.border = "1px solid hsl(0, 100%, 66%)";
		cvc_alert.style.display = "block";
	} else {
		cvc_input.style.border = "1px solid hsl(270, 3%, 87%)";
		cvc_alert.style.display = "none";
		cvc_number_output.textContent = cvc_input.value;
	}

	if (
		fullname_input.value != "" &&
		card_number_input.value != "" &&
		!isNaN(month_value) &&
		month_value >= 1 &&
		month_value <= 12 &&
		year_input.value != "" &&
		cvc_input.value != ""
	) {
		form_container.style.display = "none";
		thank_you_container.style.display = "flex";
	}
});

continue_button.addEventListener("click", (event) => {
	event.preventDefault();
	location.reload();
});
