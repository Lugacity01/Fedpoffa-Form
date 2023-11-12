function displayInfo() {
    // Get the selected examCentre, examNumber, deptment, examType, examYear from the input fields
    var examCentre = document.querySelector("input[name='examCentre']").value;
    var examNumber = document.querySelector("input[name='examNumber']").value;
    var deptment = document.getElementById('deptment').value;
    var examType = document.getElementById('examType').value;
    var examYear = document.getElementById('examYear').value;

    // Declare Global Arrays for course and grade values
    var courseValues = [];
    var gradeValues = [];

    for (let i = 1; i <= 4; i++) { // Adjust the loop limit based on the number of departments
        var course = document.getElementById(`sciDeptment${i}`).value;
        var grade = document.getElementById(`gradeDeptment${i}`).value;

        courseValues.push(course);
        gradeValues.push(grade);
    }

    // Check if any required field is empty or set to "Select"
    if ([examType, examCentre, examNumber, examYear, deptment, ...courseValues, ...gradeValues].some(value => value === "" || value === "Select")) {
        var displayInfos = document.querySelector(".displayinfos"); // Use querySelector to select the class
        displayInfos.style.display = "block";
        displayInfos.innerHTML = "Please fill in all required fields.";
    } else {
        // Display the information in the custom div
        var infoDisplay = document.getElementById('infoDisplay');
        infoDisplay.style.display = 'block';
        infoDisplay.innerHTML = `Exam Type: ${examType}<br> Exam Centre: ${examCentre}<br> Exam Number: ${examNumber}<br> Exam Year: ${examYear}<br> Department: ${deptment}`;

        for (let i = 0; i < 4; i++) { // Adjust the loop limit based on the number of departments
            if (courseValues[i] !== "Select" && gradeValues[i] !== "Select") {
                infoDisplay.innerHTML += `<br>Course ${i + 1}: ${courseValues[i]} ${gradeValues[i]}`;
            }
        }
    }
}




// COurse of study
function changeCourse(){
    const selectedCourse = document.getElementById("selected_course").value;
    const commInfo = document.querySelector(".commInfo");
    const appScience = document.querySelector(".appScience");
    const bizManagement = document.querySelector(".bizManagement");
    const engTech = document.querySelector(".engTech");
    const envStudies = document.querySelector(".envStudies");
    const entrePre = document.querySelector(".entrePre");
    const IJMB = document.querySelector(".IJMB");
    const GST = document.querySelector(".GST");

    
    var elementsToHide = [commInfo, appScience, bizManagement, engTech, envStudies, entrePre, IJMB, GST];

        // Loop through the array and hide each element
        elementsToHide.forEach(function(element) {
        element.style.display = 'none';
        });
        
    // commInfo.style.display = 'none';
    // appScience.style.display = 'none';
    // bizManagement.style.display = 'none';
    // engTech.style.display = 'none';
    // envStudies.style.display = 'none';
    // entrePre.style.display = 'none';
    // IJMB.style.display = 'none';
    // GST.style.display = 'none';


    if(selectedCourse === "CIT"){
        commInfo.style.display = 'block';
        appScience.style.display = 'none';
        bizManagement.style.display = 'none';
        engTech.style.display = 'none';
        envStudies.style.display = 'none';
        entrePre.style.display = 'none';
        IJMB.style.display = 'none';
        GST.style.display = 'none';
    } 
    
    else if (selectedCourse === "AST"){
        appScience.style.display = 'block';
        commInfo.style.display = 'none';
        bizManagement.style.display = 'none';
        engTech.style.display = 'none';
        envStudies.style.display = 'none';
        entrePre.style.display = 'none';
        IJMB.style.display = 'none';
        GST.style.display = 'none';
    } 
    
    else if (selectedCourse === "BMS"){
        bizManagement.style.display = 'block';
        appScience.style.display = 'none';
        commInfo.style.display = 'none';
        engTech.style.display = 'none';
        envStudies.style.display = 'none';
        entrePre.style.display = 'none';
        IJMB.style.display = 'none';
        GST.style.display = 'none';
    } 
    
    else if (selectedCourse === "ET"){
        engTech.style.display = 'block';
        bizManagement.style.display = 'none';
        appScience.style.display = 'none';
        commInfo.style.display = 'none';
        envStudies.style.display = 'none';
        entrePre.style.display = 'none';
        IJMB.style.display = 'none';
        GST.style.display = 'none';
    } 
    
    else if (selectedCourse === "ES"){
        envStudies.style.display = 'block';
        engTech.style.display = 'none';
        bizManagement.style.display = 'none';
        appScience.style.display = 'none';
        commInfo.style.display = 'none';
        entrePre.style.display = 'none';
        IJMB.style.display = 'none';
        GST.style.display = 'none';
    } 
    
    else if (selectedCourse === "Entrepre"){
        entrePre.style.display = 'block';
        engTech.style.display = 'none';
        bizManagement.style.display = 'none';
        appScience.style.display = 'none';
        commInfo.style.display = 'none';
        envStudies.style.display = 'none';
        IJMB.style.display = 'none';
        GST.style.display = 'none';
    } 
    
    else if (selectedCourse === "IJMB"){
        IJMB.style.display = 'block';
        engTech.style.display = 'none';
        bizManagement.style.display = 'none';
        appScience.style.display = 'none';
        commInfo.style.display = 'none';
        envStudies.style.display = 'none';
        entrePre.style.display = 'none';
        GST.style.display = 'none';
    }
    else if (selectedCourse === "GS"){
        GST.style.display = 'block';
        engTech.style.display = 'none';
        bizManagement.style.display = 'none';
        appScience.style.display = 'none';
        commInfo.style.display = 'none';
        envStudies.style.display = 'none';
        entrePre.style.display = 'none';
        IJMB.style.display = 'none';
        }
}