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
The chatbot hosted on our support page engages the user about their slow internet connection. The chatbot reads and writes to a firebase database. The chat will also take an appointment request from the user. However, app design in angular will not use Google Calendar API.

Although, the web demo provided by dialogflow does use Google Calendar API. It will send any appointment request to our company's google calendar. The chatbot in both angular web demo and dialogflow web demo is the same. 

The original support page was altered to included dialog suggestions. The support page previously had an FAQ section on the left side of the web page. An issue was submitted to show the support page with the FAQ section.

# Deployment

Click the link https://acme-chatbot.firebaseapp.com/ to view the chatbot built and design with Angular.

Click the link https://bot.dialogflow.com/144fa622-1dcb-43a6-b535-f9107a8edb6b to view the web demo chatbot provided by dialogflow. 

The Acme Cable Company Calendar https://calendar.google.com/calendar?cid=Nm1mOXVycWdubDdjcm5iZzE3b3BwcDZlbnNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ.

# Testing

Dialog for testing the angular chatbot is provided on the support page.

Use the dialogflow web demo to test the Google Calendar API.

Angular Chatbot reads and writes to DB. Engages the user about their internet connection.

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
