function experiencesPage() {
	document.getElementById("intro").style.display = "none";
	document.getElementById("projects").style.display = "none";
	document.getElementById("skills").style.display = "none";
	document.getElementById("experiences").style.display = "block";
}
			
function projectsPage() {
	document.getElementById("intro").style.display = "none";
	document.getElementById("experiences").style.display = "none";
	document.getElementById("skills").style.display = "none";
	document.getElementById("projects").style.display = "block";	
}

function skillPage() {	
	document.getElementById("intro").style.display = "none";
	document.getElementById("experiences").style.display = "none";
	document.getElementById("projects").style.display = "none"
	document.getElementById("skills").style.display = "block";
}

function mainPage() {
	document.getElementById("intro").style.display = "flex";
	document.getElementById("experiences").style.display = "none";
	document.getElementById("skills").style.display = "none";
	document.getElementById("projects").style.display = "none";
}

