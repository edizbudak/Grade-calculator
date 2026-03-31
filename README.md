🌐 Live Demo  
https://edizbudak.github.io/Grade-calculator/

📌 Project Title

Weighted Grade Calculator

❓ Research Problem

Students in the Turkish education system need to calculate their weighted average based on course grades and weekly hours.
However, doing this manually is time-consuming and prone to mistakes.

This project solves the problem by providing a simple and interactive web-based calculator.

🎯 Motivation

Calculating weighted averages manually can be confusing, especially when dealing with multiple courses and different weekly hours.

This project was created to:

• Make the calculation process faster
•Reduce human error
•Provide instant results
•Help students understand their academic status (certificate eligibility)

⚙️ Control Flow
Step-by-step logic:
User clicks "Add Course"
A new course row appears
User selects a course
User enters:
  •Grade (0–100)
  •Weekly hours
User can remove courses if needed
User clicks "Calculate"
System checks:
  •Empty fields
  •Grade range
  •Hour validity
  •Total hours ≤ 39
System calculates:
  •Weighted points = grade × hours
  •Average = total weighted points / total hours
Result is displayed:
  •Average
  •Certificate status
  
🧠 Implementation Strategy
Structure:
HTML
  •Input fields
  •Buttons
  •Result section
CSS
  •Clean layout
  •Styled result box
  •Color-coded status
JavaScript
  •Dynamic course adding/removing
  •Input validation
  •Weighted average calculation
  •Status determination
  
🏆 Certificate System
Average	Result
85+	Certificate of Achievement (Takdir Belgesi)
70–84.99	Certificate of Appreciation (Teşekkür Belgesi)
Below 70	No Certificate

🚀 Features
Dynamic course adding
Remove course option
Input validation system
Weighted average calculation
Certificate classification
Smooth scroll to results
Reset all function

💻 Technologies Used
HTML
CSS
JavaScript

📷 Live Demo

Project runs locally in browser.
(No backend required)

📁 How to Run
Download project files
Open index.html
Start using the calculator
