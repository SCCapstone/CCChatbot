Project Title

This first paragraph should be a short description of the app. You can add links to your wiki pages that have more detailed descriptions.

This is a sample outline of a good Readme.md for the UofSC Capstone class. Assume that the readers are other developers who are joining your team. Specifically, the file should contain detailed instructions that any developer can follow to install, compile, run, and test your project. These are not only useful to new developers, but also to you when you have to re-install everything because your old laptop crashed. Also, the teachers of this class will be following your instructions.

You can put a pretty screenshot of your app here, once it works well enough.

Technologies
List all the stuff the reader will need to install in order to get you app to run in their laptop. For example:

In order to build this project you will need to install:

Node.js
MongoDB
If possible, list the actual commands you used to install these.

You have to install weird-library using their installer.

You can install node (on a mac) using:

brew update
brew install node
You only need to add instructions for the machine you are using (mac, windows, linux).

Setup
Here you list all the one-time things the developer needs to do after cloning your repo. Sometimes there is no need for this section.

The first time you run the webapp you will need to create a database in your local mysql using the command

mysql << create database....
Running
To run the app in your laptop use the command:

the command
If you are bulding for mobile you might have several different ways of running your app. List all the ones you use.

To install the app in the emulator in debug mode click on "Run -> Debug Mode" in Android Studio.

In some cases you will need to add a screenshot of the buttons that need to get pressed in the IDE because there is no menu option.

Deployment
Webapps need a deployment section that explains how to get it deployed on the Internet. These should be detailed enough so anyone can re-deploy if needed. Note that you do not put passwords in git.

To deploy the latest master to google cloud you have to:

Mobile apps will also sometimes need some instructions on how to get the app on the phone.

To run it on a phone simply connect the phone via a USB cable to your laptop and then click on "Run" in Android Studio. Make sure the phone is in Developer mode.

Testing
In 492 you will write automated tests. When you do you will need to add a section that explains how to run them.

The unit tests are located at /test/unit.

The behavioral tests are located at /test/casper/.

Testing Technology
In some cases you need to install test runners, etc. Explain how.

Install Jasmine with

npm install jasmine
Running Tests
Run the unit tests with the command

command...
Run behavior tests with

command...
Authors
Your names and emails
