# Cable Company Chatbot

> Our team is creating an AI chatbot for ACME Cable Company. Acme Cable Company would like to utilize an AI chatbot for their customer service. The AI chatbot is used by customers, technicians, and customer service representatives. The AI chatbot diagnoses common internet connectivity and cable tv issues. The chatbot also allows the user to book an appointment. To provide better service the chatbot needs contact information and then the user selects a time and date for the appointment. The technician service hours are from 8 am to 7 pm, seven days a week.

> The chatbot will be made using Dialogflow.  Google Calendar API will be used for adding events. The chatbot uses firebase to save appointment information and customer service reports made by the users. A map of the dialog is below.

# Technologies

What the team is using to build project:
* [Node](https://nodejs.org/en/)
* Angular
* Dialogflow
* Firebase

In order to build project you will need Node.js, npm package manager, and Angular. The npm package manager is installed with Node by default.

Next install Angular CLI:

`npm install -g @angular/cli`

Download repo in release. Extract the files. In terminal, navigate to the "chatbot-angular" folder.

`npm install yarn`

When the above has completed.

`ng serve`

Open local host.

`localhost:4200`

# Setup
The chatbot writes appointment information and any issues the customer may be having to the firebase database. Dialogflow is the platform that was used to build the chatbot.

The chatbot uses Google Calendar API to book an appointment on the Acme Cable Company calendar. The calendar is on the Acme Support website.
The chatbot can be downloaded for hosting on another website. In order to download the chatbot a user needs to login through our site. 

# Chatbot Dialog Map
[Link](https://github.com/SCCapstone/CCChatbot/wiki/Chatbot-Dialog-Outline) - This is simple outline of the chatbot dialog.

To get the chat going greet the bot with a hello.

# Deployment

Click the link https://acmedemo-tefspy.web.app/chat to view the chatbot.

The Acme Cable Company Calendar https://acmedemo-tefspy.web.app/calendar.

# Testing
Before testing in a new directory ALLWAYS run the following under the ~\CCChatbot\chatbot-angular directory:
"npm install yarn"
"npm update"
"npm install jquery -save" 
Running these commands will install yarn and update the package manager.  If these are not run, Behavioral tests may fail.

Both unit and behavioral testing in run through Karma/Jasmine using the prefix "ng" from the "chatbot-angular" directive.  
These commands are "ng test" and "ng e2e"

There are a total of 3 cases for each type of test.  They should all pass.

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
