# Website Team:
Given a user attempting to log into his/her account
When that user submits the wrong credentials for an account
Then an error message will pop up indicating that the user’s credentials were wrong

Given a user forgets his/her password
When that user clicks “Forgot My Password”
Then they will be prompted to change their password via a link sent to their account’s email address

Given the correct username and password,
When the user pushes the login button,
Then the user is given access to the parts of the website that they are allowed

Given the wrong username or password,
When the user pushes the login button,
Then the user is given an error message and “three attempts remaining” appears on the page and user access is denied

Given the correct username and password,
When the user pushes the login button,
Then the username is checked over the database and the password is hashed and compared to the database

Given the user is a student or tutor,
When they click create an account,
Then the user is taken to a new scree to create an account

Given the user wants to schedule a tutoring session,
When the user goes to the calendar and checks availability,
Then the user is able to schedule a tutoring session on some time that was available

Given the website loads,
when a user logs in,
the user should be able to access their courses and lessons on a dashboard.

Given the website loads,
when in a tutoring session,
then the user should still be able to access and see other courses they're enrolled in inside a side menu.

Given a tutor account is logged in,
When the account page is loaded,
Then the features available only to tutors are loaded.

Given a student account is logged in,
When the account page is loaded,
Then the webpage wont load features only available to tutors.

# Video Team:
Given there is an active tutoring room
When the student presses “JOIN”
Then the student will enter the tutoring room

Given there is no active tutoring room
When the tutor presses “START SESSION”
Then the tutoring room will be created by the server

Given that there is a user prompt for activating their webcam,
When they click to enable or disable the feed by default,
Then their preference will be saved on the site.

Given that there is a microphone button,
When the user clicks on it,
Then the microphone's state toggles between on and off.

Given that there is an active tutoring room
When the student joins the room
Then the student and tutor are added to a video call/text chat

Given that there is an active tutoring room
When the tutor presses “END SESSION”
The video call is ended, the tutoring room closes, and the tutor and 
student are returned to the home page

Given that there is a video chat
When the student and tutor are talking
Then the student and tutor can both hear and see each other without lag/interruption

Given that there is not a current video chat
When the student wants to start a video chat
Then the student is not prompted to create a new account on a third party site

Given that there is a camera button
When the student or tutor hits the camera button
Then the camera toggles between on and off 

# IDE Team
Student Writing Code:

1.Given the student made unwanted changes
When they want to go back to the previous version 
Then they should be able to press ctrl+z to go back 

2.Given that the student is working in one programming language
When he presses the option to switch programming languages
Then the programming language should switch to the selected language

3.Given the student and teacher are in a tutoring session,
When the student makes changes to the code,
Then the teacher should be able to see those changes in real time

4.Given there is an error in the file 
When the student runs the code
The website should produce an error message to both the teacher and student.

5.Given the program is written correctly 
When the student runs the code
Then code should produce the appropriate output.

Teacher Uploading Code:

Given the teacher wants to upload some code in Python or Java,
When the teacher does not upload a file,
Then alert the teacher that no file was uploaded.

Given the teacher wants to upload some code in Python or Java,
When the teacher does upload a valid python or java file,
Then ensure that the student and teacher can see the code on the editor/compiler.

Given the teacher wants to upload some code in Python or Java,
When the teacher does upload a valid python file but the current language is Java, or vice versa,
Then alert the teacher that there is a conflict 

Student Downloading Code:
Given that the student wants to download their Python or Java code,
When there is no code to download,
Then no file should be downloaded.

Given that the student wants to download their Python or Java code,
When there is code to download,
Then the file should be downloaded with the proper extension for the code that was written.

Given the teacher is in  a session with a student
When the teacher makes a change to the code,
Then the student should be able to see those changes in real times.

Given there is an error in the code
When the teacher runs the code,
The website should produce an error message to both the teacher and student.

Given that the program is written correctly
When the teacher runs the code,
The code should be able to produce some sort of output. Such as a “Hello World!”
