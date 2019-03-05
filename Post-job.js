function showdata()
{
	var name = document.getElementById("name").value;
	if(name=="")
	{
		document.getElementById("name").style.borderColor = "red";
	}else{
		document.getElementById("name").style.borderColor = "";
	}
	
	//Job Title Validation
	
	var title = document.getElementById("title").value;
	if(title=="")
	{
		document.getElementById("title").style.borderColor = "red";
	}else{
		document.getElementById("title").style.borderColor = "";
	}
	
	//Min Experience Validation
	
	var minexperience = document.getElementById("minexperience").value;
	if(minexperience=="")
	{
		document.getElementById("minexperience").style.borderColor = "red";
	}else{
		document.getElementById("minexperience").style.borderColor = "";
	}
	
	//Max Experience Validation
	
	var maxexperience = document.getElementById("maxexperience").value;
	if(maxexperience=="")
	{
		document.getElementById("maxexperience").style.borderColor = "red";
	}else{
		document.getElementById("maxexperience").style.borderColor = "";
	}
	
	//Min Salary Validation
	
	var minsalary = document.getElementById("minsalary").value;
	if(minsalary=="")
	{
		document.getElementById("minsalary").style.borderColor = "red";
	}else{
		document.getElementById("minsalary").style.borderColor = "";
	}
	
	//Max Salary Validation
	
	var maxsalary = document.getElementById("maxsalary").value;
	if(maxsalary=="")
	{
		document.getElementById("maxsalary").style.borderColor = "red";
	}else{
		document.getElementById("maxsalary").style.borderColor = "";
	}
	
	//Vaccancies Validation
	
	var vacancies = document.getElementById("vacancies").value;
	if(vacancies=="")
	{
		document.getElementById("vacancies").style.borderColor = "red";
	}else{
		document.getElementById("vacancies").style.borderColor = "";
	}
	
	//City Validation
	
	var city = document.getElementById("city").value;
	if(city=="")
	{
		document.getElementById("city").style.borderColor = "red";
	}else{
		document.getElementById("city").style.borderColor = "";
	}
	
	//Open Date Validation
	
	var opendate = document.getElementById("opendate").value;
	if(opendate=="")
	{
		document.getElementById("opendate").style.borderColor = "red";
	}else{
		document.getElementById("opendate").style.borderColor = "";
	}
	
	//Close Date Validation
	
	var closedate = document.getElementById("closedate").value;
	if(closedate=="")
	{
		document.getElementById("closedate").style.borderColor = "red";
	}else{
		document.getElementById("closedate").style.borderColor = "";
	}
	
	//Qualification Validation
	
	var qualification = document.getElementById("qualification").value;
	if(qualification=="")
	{
		document.getElementById("qualification").style.borderColor = "red";
	}else{
		document.getElementById("qualification").style.borderColor = "";
	}
	
	//Search Keywords Validation
	
	var search = document.getElementById("search").value;
	if(search=="")
	{
		document.getElementById("search").style.borderColor = "red";
	}else{
		document.getElementById("search").style.borderColor = "";
	}
	
	//Active Validation
	
	var yes = document.getElementById("yes").checked;
	var no = document.getElementById("no").checked;
	if( (yes==false) && (no==false) )
	{
		document.getElementById("radioerror").innerHTML = "Select Yes or No !";
	}else{
		document.getElementById("radioerror").innerHTML = "";
	}
}