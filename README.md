To Run:
  1. clone the repo::
  2. in backend folder open cmd and run this commnad <br>
     npm init -y <br>
     node server.js
  3. in frontend folder open cmd and run this command: <br>
     npm i <br>
     npm run dev
  4. in chrome open  http://localhost:5173/    <- change port if frontend running on different port


Where the Scores Are Stored:
  All speaking assessment scores are stored on the backend in a single in-memory data file:
  backend/data/reportData.js


How Feedback Logic Works:
  Each score (overall, skill-wise, exam-wise) has an associated feedback string stored directly in the backend data file.
  Feedback is written based on score ranges:
    Score Range	Feedback Meaning
    ≥ 8	Excellent / Strong control
    6 – 7.9	Good with minor inaccuracies
    < 6	Needs improvement


UI Photo:
<img width="1351" height="1255" alt="assignment_ui" src="https://github.com/user-attachments/assets/43334525-2150-4970-9814-7736d4017d36" />


when click on view chart :
<img width="1366" height="1777" alt="assignment_ui_with_chart" src="https://github.com/user-attachments/assets/3bf740d8-6444-4f95-9ae2-7903487e44f3" />
