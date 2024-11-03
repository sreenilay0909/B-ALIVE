/*
function sendOTP() {
	const email = document.getElementById('email');
	const otpverify = document.getElementsByClassName('otpverify')[0];
  
	// Generate a 5-digit OTP
	let otp_val = Math.floor(10000 + Math.random() * 90000);
  
	// Email body with OTP
	let emailbody = `<h2>Your OTP is </h2>${otp_val}`;
  
	email.send({
	  SecureToken: "8047ff97-a54f-4fcd-89be-022e8177f07f ", // Replace with your actual Secure Token
	  To: email.value,
	  From: "sreenilay0909@gmail.com", // Replace with your verified sender email
	  Subject: "Email OTP using JavaScript",
	  Body: emailbody,
	}).then((message) => {
	  if (message === "OK") {
		alert("OTP sent to your email " + email.value);
		otpverify.style.display = "flex";
  
		// OTP verification
		const otp_inp = document.getElementById('otp_inp');
		const otp_btn = document.getElementById('otp-btn');
  
		otp_btn.addEventListener('click', () => {
		  if (otp_inp.value == otp_val) {
			alert("Email address verified...");
		  } else {
			alert("Invalid OTP");
		  }
		});
	  } else {
		alert("Failed to send OTP. Please try again.");
	  }
	});
  }
  */
  function sendOTP() {
	const email = document.getElementById('email');
	const otpverify = document.getElementsByClassName('otpverify')[0];
  
	// Generate a 5-digit OTP
	let otp_val = Math.floor(10000 + Math.random() * 90000);
  
	// Email body with OTP
	let emailbody = `<h2>Your OTP is </h2>${otp_val}`;
  
	Email.send({
	  SecureToken: "8047ff97-a54f-4fcd-89be-022e8177f07f", // Ensure no extra spaces
	  To: email.value,
	  From: "sreenilay0909@gmail.com", // Replace with your verified sender email
	  Subject: "Email OTP using JavaScript",
	  Body: emailbody,
	}).then((message) => {
	  if (message === "OK") {
		alert("OTP sent to your email " + email.value);
		otpverify.style.display = "flex";
  
		// OTP verification
		const otp_inp = document.getElementById('otp_inp');
		const otp_btn = document.getElementById('otp-btn');
  
		otp_btn.addEventListener('click', () => {
		  if (otp_inp.value == otp_val) {
			alert("Email address verified...");
		  } else {
			alert("Invalid OTP");
		  }
		});
	  } else {
		alert("Failed to send OTP. Please try again.");
	  }
	});
  }
  