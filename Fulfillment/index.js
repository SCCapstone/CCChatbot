/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// all calendar related functions and code where provided by Dialogflow
// https://cloud.google.com/dialogflow/docs/tutorials/build-an-agent/create-fulfillment-using-webhook
// modified for our region, project id, client email 
// copyright above 

'use strict';

const functions = require('firebase-functions');
const {google} = require('googleapis');
const {WebhookClient} = require('dialogflow-fulfillment');

// source: https://github.com/Lepetere/Dialogflow-Examples/blob/master/How%20to%20Persist%20Session%20Data%20to%20Firestore/index.js
// line 30 to 32 code created by Peter Fessel
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();

// Enter your calendar ID and service account JSON below.
const calendarId2 = '6mf9urqgnl7crnbg17oppp6ens@group.calendar.google.com'; // Example: 6ujc6j6rgfk02cp02vg6h38cs0@group.calendar.google.com
const serviceAccount2 = {
  "type": "service_account",
  "project_id": "acmedemo-tefspy",
  "private_key_id": "7c85db2de70e361e4c645f21e30086ec3b8a78fb",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDCRveArqsOB3Mr\njOOhFKO/koHYMI0k4Uocye6bzTOKpiwd+llWZugkkipZTbP9d9RDfy4SC+tWgcA5\nntG0lzVtMq8FuvYQYjx6OR3ivFTfXwI8dssRAY8D24taLGNhTsYB1zbB0y0EIrDk\n+W9Qe9ZDEuCDmbBfQemY/af2aa4qIGUp1UIDitZnkcmpcwVxHtD0FlHUiq+ujuOU\neQPMVszrKROSkkf1h2GJITWuoWl2G3xQKyhWMLxj8qk+zvVZOz/W/uzKW2qZKvKV\n+ptHe+0hSp0cMbREbaYWXjhs3b64kIpeNH01/pjJ24nCS2IUIYHaaf3nPrzonNIc\n8fo0UKrNAgMBAAECggEAD3j+ckG2/t2KByBn6qbNqc69x52KSDMnJ2bPuZncroCw\nh8yt+8sjVvJLLCSbnqbCAYQqA6buXcvkptImyna2exVryg2LVl+0iFlvL2Unb0jO\nUUl2v8p7fOep0Asz+QaAj5n30vUCI0+t/fZ9ro/GTz48Ik8FtHh35cbh7yaYh+M7\nwQOiJ1f1tJsNGAYXcffYmC2R/sd1667KdDqZMpQeVSuVyPfNRxsJfp1axL8xd87C\ntmnnUVP93oMeBjqb/kWvwgoa8AUOdgRijwhU4UbDwedekBY3YRx8ycab0SVpPah9\nxiUJu9fxgnQ0u1VVg4N1qJTJrYHDs5NY02nBMugH4QKBgQD/jAioYlOdfuw9sUTH\n/d3G+P0bz4P35dGTlfEnVZcqgNOifeteyqQ9N1iljj2PTv0xOYpjOQQZSrzqDkLJ\nybT+lyDcPPiLple0O4WLzd0WWndi+I9lV0556/+RW76u6CQdgNruOG63y9FJutSi\ntT7zI7Ac2/uVwAlreeyov4VM8QKBgQDCnyEGqXl7cAcj42y6LGRAZatQJPuAO0ct\nK4dTRWqdt5xwcMH4/Vs6aFo2nG5vjKiau17jgvr99SL8EHbfeGPY15m+V/l4XQst\ngoJnzZsopvA9bW+SLY0j9jamfYc34cycBDqK2hFk7vKTbm858jkXmfy94zGiDZ9G\nbL8aJeQrnQKBgQDl3cm/5Up/ZjcMu1M6blI686eBh6WWrKRbFEoq7qOeeOllxcyd\npLwd0JYtvYgES7IWwEKKRDQ6p+7Mvu024/ip9bl6QmH0BDnqBox3GEOiItg3L4yV\nRPZzV2S5FQSuAmTSISFNnXeCXpUwtB0nCs/IF7cIDpz8tBQFGFRX6ob2kQKBgAQY\nWxaLzF2Xjt7ncys7seRU/1TRYmVhWe8OYmuTI1osOeN3y+0UT64b8gICKqS4Pff7\nh1ScNfHQDatmIUo0e01dxANoUHyC4LBVda7/eYtSb+2q9tUJllWyYZYBQC4h1y9V\nO3Iego0wJfSKN1btzNu9Rr8sH6g8RySxNxgywelVAoGBALiDhv2sp9JkQK/ZtgZW\nOk+Q2kdI2O2QJcvYjHC7o2D3S38BhoREA4GN0VViqQH8aIwqM/3kDrauLgb+mLc8\nTltLmXlFwvW32gt9aQtdxLeH2SdOrF4gun/1J3D+svBZYIj0YqgaIkhvq8R5TnLR\njKQMgH19atVVycp/N6pLbKVc\n-----END PRIVATE KEY-----\n",
  "client_email": "acme-company-calendar@acmedemo-tefspy.iam.gserviceaccount.com",
  "client_id": "117700220677123523345",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/acme-company-calendar%40acmedemo-tefspy.iam.gserviceaccount.com"
}; // The JSON object looks like: { "type": "service_account", ... }

// Set up Google Calendar service account credentials
const serviceAccountAuth = new google.auth.JWT({
  email: serviceAccount2.client_email,
  key: serviceAccount2.private_key,
  scopes: 'https://www.googleapis.com/auth/calendar'
});

const calendar = google.calendar('v3');
process.env.DEBUG = 'dialogflow:*'; // It enables lib debugging statements

const timeZone = 'America/Barbados';  // Change it to your time zone
const timeZoneOffset = '-04:00';         // Change it to your time zone offset

exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  
  // sessionId is id of chat session
  // a database is made of collections
  // each collection is made of documents
  // each document has a unique id
  // the sessionId is the unique id
  // the document will contain all collected info about a user during their session
  ////// source: https://github.com/Lepetere/Dialogflow-Examples/blob/master/How%20to%20Persist%20Session%20Data%20to%20Firestore/index.js
  // line 73 code created by Peter Fessel
  const sessionId = request.body.session.split("/").reverse()[0];
  function saveName(agent) {
    const nameParam = agent.parameters.name;
    const context = agent.getContext('awaiting_name_confirm');
    const name = nameParam || context.parameters.name;
    
    agent.add(`Thank you, ` + name + `!`);
    
    return admin.database().ref('/names').push({name: name}).then((snapshot) => {
    // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
    console.log('database write sucessful: ' + snapshot.ref.toString());
  });
  }
  // checking that the date and time given hasn't passed
  function checkAppointmentInput (dateTimeStart) {
    // gets the current time and date
    var today = new Date();
    // breaking the current timestamp into parts
    var Day = today.getDate();
    var Yr = today.getFullYear(); 
    var Mo = today.getMonth()+1; 
    var Hour = today.getHours(); 
    var Min = today.getMinutes(); 
    // takes the time and date given by user and breaks it into pieces
    var inDay = dateTimeStart.getDate();
    var inYr = dateTimeStart.getFullYear(); 
    var inMo = dateTimeStart.getMonth()+1; 
    var inHour = dateTimeStart.getHours();
    var inMin = dateTimeStart.getMinutes(); 
    if((inMo<Mo&&inYr==Yr)||(inYr<Yr)||(inDay<Day&&inMo==Mo&&inYr==Yr)||(inDay==Day&&inMo==Mo&&inYr==Yr&&inHour<Hour&&inMin<Min)) {
      // if a invalid date or time...
      return false;
    } else {
      return true;
    }
  }
  function hoursOfOperation (dateTimeStart) {
    // gets hour inputted by user
    var inHour = dateTimeStart.getHours();
    // gets the timezone set for the chatbot
    var timeZ = parseInt(timeZoneOffset);
    // the current hour for the chatbots timezone
    var currHour = inHour+timeZ;
    // hours of operation are 8am to 7pm for any day of the week
    var startDay = 8;
    var endDay = 19; 
    if(currHour >= startDay && currHour < endDay) {
      return true;
    } else {
      return false;
    }
  }
  function sixOClock (dateTimeStart) {
    var inHour = dateTimeStart.getHours();
    var inMin = dateTimeStart.getMinutes();
    var timeZ = parseInt(timeZoneOffset);
    // the current hour for the chatbots timezone
    var currHour = inHour+timeZ;
    if(currHour == 18 && inMin > 0) {
      return false;
    } else {
      return true;
    }
  }
  function makeAppointment(agent) {
    // Use the Dialogflow's date and time parameters to create Javascript Date instances, 'dateTimeStart' and 'dateTimeEnd',
    // which are used to specify the appointment's time.
    const appointmentDuration = 1;// Define the length of the appointment to be one hour.
    const dateTimeStart = convertParametersDate(agent.parameters.date, agent.parameters.time);
    const dateTimeEnd = addHours(dateTimeStart, appointmentDuration);
    const appointmentTimeString = getLocaleTimeString(dateTimeStart);
    const appointmentDateString = getLocaleDateString(dateTimeStart);
    let dateSave = appointmentDateString;
    let timeSave = appointmentTimeString;
    // checks that the date and time is current or is coming
    if(checkAppointmentInput(dateTimeStart)==true) {
      // checks the hours of operation
      if(hoursOfOperation(dateTimeStart)==true) {
        // check that it isn't after 6pm
        if(sixOClock(dateTimeStart)==true) {
    // Check the availability of the time slot and set up an appointment if the time slot is available on the calendar
    return createCalendarEvent(dateTimeStart, dateTimeEnd).then(() => {
      db.collection('Information').doc(sessionId).update({ date: dateSave, time: timeSave});
      agent.add(`Got it. I have your appointment scheduled on ${dateSave} at ${timeSave}. See you soon. Good-bye.`);
      //agent.add(`Got it. I have your appointment scheduled on ${appointmentDateString} at ${appointmentTimeString}. See you soon. Good-bye.`);
    }).catch(() => {
      agent.add(`Sorry, we're booked on ${appointmentDateString} at ${appointmentTimeString}. Please enter a different time in.`);
    });
        } else {
          agent.add(`Our appointment window is approximately an hour long. Please choose a different time.`);
        }
        } else {
        agent.add(`Sorry for the inconvenience, our hours of operation are from 8am to 7pm, 7 days a week. The appointment time at `+appointmentTimeString+
                  ` is outside of our hours of operation . Please enter a different time in.`);
      }
      } else {
        agent.add(`I'm sorry, the appointment `+appointmentDateString+` at `+appointmentTimeString+
                  ` has passed. Please enter a different time or date in.`);
  }
  }
  // to get Information from user before scheduling an appointment

  // writes first name to database for customer service
  function getFirstName(agent) {
    let firstname = agent.parameters.firstname;
    // code created by Google firebase lines 182 to 199
    // modified by Epiphany
    // source: https://firebase.google.com/docs/firestore/query-data/get-data#get_a_document
    // check if document exists in the database
    var docRef = db.collection('userReports').doc(sessionId);

docRef.get().then(function(doc) {
    if (doc.exists) {
      // update the document
        db.collection('userReports').doc(sessionId).update({ 
      firstname: firstname
    });
    } else {
        // doc.data() will be undefined in this case
      // create a new document using the chat session id
        db.collection('userReports').doc(sessionId).set({ 
      firstname: firstname
    });
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
    agent.add(``);
  }
  // saving the last name to db for customer service
  function getLastName(agent) {
    let lastname = agent.parameters.lastname;
    db.collection('userReports').doc(sessionId).update({ 
      lastname: lastname
    });
    agent.add(``);
  }
  // saving the first name for scheduling an appointment
  function getFirstNameBook(agent) {
    let firstname = agent.parameters.firstname;
    // code created by Google firebase lines 218 to 2235
    // modified by Epiphany
    // source: https://firebase.google.com/docs/firestore/query-data/get-data#get_a_document
    // checking if document with session id exists in db
    // the session id is the chat session id
    var docRef = db.collection('Information').doc(sessionId);

docRef.get().then(function(doc) {
    if (doc.exists) {
      // if exists then update it
        db.collection('Information').doc(sessionId).update({ 
      firstname: firstname
    });
    } else {
        // doc.data() will be undefined in this case
      // creates a new document using the session id
        db.collection('Information').doc(sessionId).set({ 
      firstname: firstname
    });
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
    agent.add(``);
  }
  // saves the last name to db for scheduling an appointment
  function getLastNameBook(agent) {
    let lastname = agent.parameters.lastname;
    db.collection('Information').doc(sessionId).update({ 
      lastname: lastname
    });
    agent.add(``);
  }
  // puts users address in db
  // it will accept the following user input
  // street address, city, country, state, island, shortcut, and zip code
  function getAddress(agent) {
      let address = agent.parameters.location;
    db.collection('Information').doc(sessionId).update({address:address});
    agent.add(``);
  }
  // saves users phone number to db
  function getPhone(agent) {
    let phone = agent.parameters.phonenumber;
    db.collection('Information').doc(sessionId).update({ phonenumber: phone});
    agent.add(``);
  }
  // gets customers email for customer service
  function getEmail(agent) {
    let email = agent.parameters.email;
    db.collection('userReports').doc(sessionId).update({ 
      email: email
    });
    agent.add(``);
  }
  // gets the issue the customer is having
  // saves any user input into db
  function getIssue(agent) {
    let problem = agent.query;
    db.collection('userReports').doc(sessionId).update({ 
      Issue: problem
    });
    agent.add(``);
  }
  let intentMap = new Map();
  intentMap.set('Get Name', saveName);
  intentMap.set('Confirm Name Yes', saveName);
  // for writing full name to db for customer service
  intentMap.set('First Name.CS', getFirstName);
  intentMap.set('Last Name.CS', getLastName);
  intentMap.set('First Name.CS.any', getFirstName);// to catch unique names
  intentMap.set('Last Name.CS.any', getLastName);
  // saves email for customer service
  intentMap.set('get email', getEmail);
  // saves user issue to db for customer service
  intentMap.set('get email - fallback', getIssue);
  // for writing full name to db for scheduling an appointment
  intentMap.set('First Name.book', getFirstNameBook);
  intentMap.set('Last Name.book', getLastNameBook);
  intentMap.set('First Name.book.any', getFirstNameBook);// to catch unique names
  intentMap.set('Last Name.book.any', getLastNameBook);
  intentMap.set('Appointment Intent', makeAppointment);  // It maps the intent 'Make Appointment' to the function 'makeAppointment()'
  //intentMap.set('Full Name', getName);
  intentMap.set('Customer Address', getAddress);
  intentMap.set('Customer Phone Number', getPhone);
  agent.handleRequest(intentMap);
});

function createCalendarEvent(dateTimeStart, dateTimeEnd) {
  return new Promise((resolve, reject) => {
    calendar.events.list({  // List all events in the specified time period
      auth: serviceAccountAuth,
      calendarId: calendarId2,
      timeMin: dateTimeStart.toISOString(),
      timeMax: dateTimeEnd.toISOString()
    }, (err, calendarResponse) => {
      // Check if there exists any event on the calendar given the specified the time period
      if (err || calendarResponse.data.items.length > 0) {
        reject(err || new Error('Requested time conflicts with another appointment'));
      } else {
        // Create an event for the requested time period
        calendar.events.insert({ auth: serviceAccountAuth,
          calendarId: calendarId2,
          resource: {summary: 'Technician Appointment',
            start: {dateTime: dateTimeStart},
            end: {dateTime: dateTimeEnd}}
        }, (err, event) => {
          err ? reject(err) : resolve(event);
        }
        );
      }
    });
  });
}

// A helper function that receives Dialogflow's 'date' and 'time' parameters and creates a Date instance.
function convertParametersDate(date, time){
  return new Date(Date.parse(date + 'T' + time + timeZoneOffset));
}

// A helper function that adds the integer value of 'hoursToAdd' to the Date instance 'dateObj' and returns a new Data instance.
function addHours(dateObj, hoursToAdd){
  return new Date(new Date(dateObj).setHours(dateObj.getHours() + hoursToAdd));
}

// A helper function that converts the Date instance 'dateObj' into a string that represents this time in English.
function getLocaleTimeString(dateObj){
  return dateObj.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, timeZone: timeZone });
}

// A helper function that converts the Date instance 'dateObj' into a string that represents this date in English.
function getLocaleDateString(dateObj){
  return dateObj.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', timeZone: timeZone });
}
