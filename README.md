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

To use Dialogflow services on google, you will need a Gmail account.

> https://dialogflow.cloud.google.com/#/login

# Setup
The chatbot hosted on our support page engages the user about their slow internet connection. The chatbot reads and writes to a firebase database. 
The chatbot uses Google Calendar API to book an appointment on the Acme Cable Company calendar. The calendar is on the Acme Support website.
The chatbot can be downloaded to test on another website.

## To view the Dialogflow console:
Dialogflow is the platform that was used to build the chatbot.
To use Dialogflow services on google, you will need a Gmail account.
Gmail account: smithustudent@gmail.com
Password: C4rolina&

To log in:
https://dialogflow.cloud.google.com/#/login
To view the chatbot. Select "Dialogflow" in the top left corner. The chatbot will appear after the site reloads.

# Deployment

Click the link https://acmedemo-tefspy.web.app/chat to view the chatbot.

The Acme Cable Company Calendar https://acmedemo-tefspy.web.app/calendar.

# Testing
Before testing in a new directory ALLWAYS run the following under the ~\CCChatbot\chatbot-angular directory:
"npm install yarn"
"npm update"
Running these commands will install yarn and update the package manager.  If these are not run, Behavioral tests may fail.

Both unit and behavioral testing in run through Karma/Jasmine using the prefix "ng" from the "chatbot-angular" directive.  
These commands are "ng test" and "ng e2e"

Unit testing looks recursively through the app components and finds the files: "name.spec.ts" and "name.ts".  
Unit tests may be written using jasmine commands inside the .spec.ts files. 
The tests are compiled and executed when running the "ng test" command from the "chatbot-angular" directive.  
Currently, a sample test may be viewed in the "unit-test" module.  This same test simply checks if a number is negative.
Note that not many unit tests will be written, as we are not writing functions to change values in the project.

Behavioral testing looks at the ~\CCChatbot\chatbot-angular\e2e\src directory, and located the files "app.e2e-spec.ts" and
"app.po.ts".  As with unit tests, e2e tests are written in the the .spec.ts files.  Browser action is handled by the "app.po.ts" file.  
This allows us to simulate browsing.  Currently, the only test written fetches the CSS of the home page header and checks that it is displaying the correct text.  However, future tests can, and will, be written to check routing pathing, and "on click" functionality.  
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
