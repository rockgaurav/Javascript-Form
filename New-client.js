function showdata()
{
	var name = document.getElementById("name").value;
	if (name=="") 
	{
		document.getElementById("name").style.borderColor = "red";
	}else{
		document.getElementById("name").style.borderColor = "";
	}
	
	//Person Validation
	
	var person = document.getElementById("person").value;
	if(person=="")
	{
		document.getElementById("person").style.borderColor = "red";
	}else{
		document.getElementById("person").style.borderColor = "";
	}
	
	//Mobile Validation
	
	var mobile = document.getElementById("mobile").value;
	if( (mobile=="") || (mobile.length !=10) || (isNaN(mobile)) )
	{
		document.getElementById("mobile").style.borderColor = "red";
	}else{
		document.getElementById("mobile").style.borderColor = "";
	}
	
	//Contact Validation
	
	var contact = document.getElementById("contact").value;
	if(contact=="")
	{
		document.getElementById("contact").style.borderColor = "red";
	}else{
		document.getElementById("contact").style.borderColor = "";
	}
	
	//Website Validation
	
	var website = document.getElementById("website").value;
	if(website=="")
	{
		document.getElementById("website").style.borderColor = "red";
	}else{
		document.getElementById("website").style.borderColor = "";
	}
	
	//Email Validation
	
	var email = document.getElementById("email").value;
	//hello test@ gmail.com
	var pattern =  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	if( (email=="") ||(pattern.test(email)==false) )
	{
		document.getElementById("email").style.borderColor = "red";
	}else{
		document.getElementById("email").style.borderColor = "";
	}
	
	//City Validation
	
	var city = document.getElementById("city").value;
	if(city=="")
	{
		document.getElementById("city").style.borderColor = "red";
	}else{
		document.getElementById("city").style.borderColor = "";
	}
	
	//Profile Validation
	
	var profile = document.getElementById("profile").value;
	if(profile=="")
	{
		document.getElementById("profile").style.borderColor = "red";
	}else{
		document.getElementById("profile").style.borderColor = "";
	}
	
	//Logo Validation
	
	var logo = document.getElementById("logo").value;
	if(logo=="")
	{
		document.getElementById("logo").style.borderColor = "red";
	}else{
		document.getElementById("logo").style.borderColor = "";
	}
	
	//Address Validation
	
	var address = document.getElementById("address").value;
	if(address=="")
	{
		document.getElementById("address").style.borderColor = "red";
	}else{
		document.getElementById("address").style.borderColor = "";
	}
	
	//Landmark Validation
	
	var landmark = document.getElementById("landmark").value;
	if(landmark=="")
	{
		document.getElementById("landmark").style.borderColor = "red";
	}else{
		document.getElementById("landmark").style.borderColor = "";
	}
	
	//Pincode Validation
	var pincode = document.getElementById("pincode").value;
	if(pincode=="")
	{
		document.getElementById("pincode").style.borderColor = "red";
	}else{
		document.getElementById("pincode").style.borderColor = "";
	}
	
	//Active Validation
	
	var yes = document.getElementById("yes").checked;
	var no = document.getElementById("no").checked;
	
	if( (yes==false) && (no==false) )
	{
		document.getElementById("error").innerHTML = "Please Select Yes or No !";
	}else{
		document.getElementById("error").innerHTML = "";
	}
}