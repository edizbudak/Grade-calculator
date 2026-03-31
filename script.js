const coursesDiv = document.getElementById("courses");
const addBtn = document.getElementById("add-course");
const calculateBtn = document.getElementById("calculate");
const resetAllBtn = document.getElementById("reset-all");

const courseOptions = [
    "Turkish Language and Literature",
    "Religion",
    "History",
    "Geography",
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "Philosophy",
    "First Foreign Language",
    "Second Foreign Language",
    "Physical Education",
    "Art/Music",
    "Elective Course"
];

addBtn.addEventListener("click", function () {
    const courseRow = document.createElement("div");

    let select = document.createElement("select");

    courseOptions.forEach(course => {
        let option = document.createElement("option");
        option.textContent = course;
        select.appendChild(option);
    });

    let gradeInput = document.createElement("input");
    gradeInput.type = "number";
    gradeInput.placeholder = "Enter grade (0-100)";

    let hourInput = document.createElement("input");
    hourInput.type = "number";
    hourInput.placeholder = "Hours";
    hourInput.step = "1";
    hourInput.min = "1";

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";

    removeBtn.addEventListener("click", function () {
        courseRow.remove();
    });

    courseRow.appendChild(select);
    courseRow.appendChild(gradeInput);
    courseRow.appendChild(hourInput);
    courseRow.appendChild(removeBtn);

    coursesDiv.appendChild(courseRow);
});

calculateBtn.addEventListener("click", function () {
    const rows = coursesDiv.querySelectorAll("div");

    if (rows.length === 0) {
        alert("Please add at least one course.");
        return;
    }

    let totalWeightedPoints = 0;
    let totalHours = 0;

    for (let row of rows) {
        const inputs = row.querySelectorAll("input");

        const grade = Number(inputs[0].value);
        const hours = Number(inputs[1].value);

        if (inputs[0].value === "" || inputs[1].value === "") {
            alert("Please fill in all fields.");
            return;
        }

        if (!Number.isInteger(hours)) {
            alert("Hours must be a whole number.");
            return;
        }

        if (grade < 0 || grade > 100) {
            alert("Grade must be between 0 and 100.");
            return;
        }

        if (hours <= 0) {
            alert("Hours must be greater than 0.");
            return;
        }

        totalWeightedPoints += grade * hours;
        totalHours += hours;
    }

    if (totalHours > 39) {
        alert("Total weekly hours cannot be more than 39.");
        return;
    }

    let average = totalWeightedPoints / totalHours;
    document.getElementById("average").textContent = average.toFixed(2);

    let status = "No Certificate";

    if (average >= 85) {
        status = "Certificate of Achievement";
    } else if (average >= 70) {
        status = "Certificate of Appreciation";
    }

    const statusText = document.getElementById("status");
    statusText.textContent = status;

    if (status === "Certificate of Achievement") {
        statusText.style.color = "#c2410c";
    } else if (status === "Certificate of Appreciation") {
        statusText.style.color = "#15803d";
    } else {
        statusText.style.color = "#000000";
    }

    document.querySelector(".results").scrollIntoView({ behavior: "smooth" });
});

resetAllBtn.addEventListener("click", function () {
    coursesDiv.innerHTML = "";
    document.getElementById("average").textContent = 0;
    document.getElementById("status").textContent = "-";
    document.getElementById("status").style.color = "#000000";
});