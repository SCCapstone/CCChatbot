# Cable Company Chatbot

> Our team is creating an AI chatbot for a Cable Company. The chatbot will resolve internet connectivity issues and will schedule appointments.
The chatbot will be used by the customers, customer service representatives, and technicians. 
The chatbot will be made using Dialogflow. A calendar is needed for booking appointments and to allow
technicians to select availability. Google Calendar API will be used for adding events.

> Place screenshot of the app here.

# Technologies

What the team is using to build project:

* Angular
* Dialogflow

Dialogflow Instructions:

In order to use Dialogflow services on google, you will need a gmail account.

> https://dialogflow.cloud.google.com/#/login

# Setup
The chatbot hosted on our support page engages the user about their slow internet connection. The chatbot reads and writes to a firebase database. The chatbot uses Google Calendar API to book an appointment on the Acme Company calendar. 

The original support page was altered to included dialog suggestions. The support page previously had an FAQ section on the left side of the web page. An issue was submitted to show the support page with the FAQ section.

# Deployment

Click the link https://acme-chatbot.firebaseapp.com/ to view the chatbot.

The Acme Cable Company Calendar https://calendar.google.com/calendar?cid=Nm1mOXVycWdubDdjcm5iZzE3b3BwcDZlbnNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ.

# Testing
Before testing in a new directory ALLWAYS run the following under the ~\CCChatbot\chatbot-angular directory:
"npm install yarn"
"npm update"
Running these commands will install yarn and update the package manager.  If these are not run, Behavioral tests may fail.

Both unit and behavioral testing in run through Karma/Jasmine using the prefix "ng" from the "chatbot-angular" directive.  
These commands are "ng test" and "ng e2e"

Unit testing looks recursivly through the app components and finds the files: "name.spec.ts" and "name.ts".  
Unit tests may be written using jasmine commands inside the .spec.ts files. 
The tests are compiled and executed when running the "ng test" command from the "chatbot-angular" directive.  
Currently a sample test may be viewed in the "unit-test" module.  This same test simply checks if a number is negative.
Note that not many unit tests will be written, as we are not writing functions to change values in the project.

Behavioral testing looks at the ~\CCChatbot\chatbot-angular\e2e\src directory, and located the files "app.e2e-spec.ts" and
"app.po.ts".  As with unit tets, e2e tests are written in the the .spec.ts files.  Browser action is handled by the "app.po.ts" file.  
This allows us to simulate browsing.  Currently, the only test written fetches the css of the home page header, and checks that it is displaying the correct text.  However, future tests can, and will, be written to check routing pathing, and "on click" functionality.  
These e2e tests can be run by invoking the "ng e2e" from the "chatbot-angular" directive.

On success, these tests should both print "success" in the console, as well as the popup window they display (currently chrome).
On failure, these tests should both print "failure" in the console, as well as the popup window they display (still chrome).

Dialog for testing the angular chatbot is provided on the support page.

Open the calendar to view all appointments.

Angular Chatbot reads and writes to DB. Engages the user about their internet connection. Books appointments using Google Calendar.

# Authors
### Jahred Danker
* Email: jdanker@email.sc.edu
### Alden Perreyclear
* Email: perreyce@email.sc.edu
### Epiphany Christian
* Email: epiphany@email.sc.edu
### Steven Taylor McGown
* Emails: Stevenmcgown1@gmail.com
* Smcgown@email.sc.edu
### Jacob Rego
* Email: jrego@email.sc.edu
