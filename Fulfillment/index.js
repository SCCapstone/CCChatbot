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

'use strict';

const functions = require('firebase-functions');
// admin is code for database 
const admin = require('firebase-admin');
const {google} = require('googleapis');
const {WebhookClient} = require('dialogflow-fulfillment');

// database
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  //ws is for web socket
  databaseURL:'ws://acmedemo-tefspy.firebaseio.com/'
});

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

const timeZone = 'America/New_York';  // Change it to your time zone
const timeZoneOffset = '-05:00';         // Change it to your time zone offset

exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });

  function makeAppointment(agent) {
    // Use the Dialogflow's date and time parameters to create Javascript Date instances, 'dateTimeStart' and 'dateTimeEnd',
    // which are used to specify the appointment's time.
    const appointmentDuration = 1;// Define the length of the appointment to be one hour.
    const dateTimeStart = convertParametersDate(agent.parameters.date, agent.parameters.time);
    const dateTimeEnd = addHours(dateTimeStart, appointmentDuration);
    const appointmentTimeString = getLocaleTimeString(dateTimeStart);
    const appointmentDateString = getLocaleDateString(dateTimeStart);
    // Check the availability of the time slot and set up an appointment if the time slot is available on the calendar
    return createCalendarEvent(dateTimeStart, dateTimeEnd).then(() => {
      agent.add(`Got it. I have your appointment scheduled on ${appointmentDateString} at ${appointmentTimeString}. See you soon. Good-bye.`);
    }).catch(() => {
      agent.add(`Sorry, we're booked on ${appointmentDateString} at ${appointmentTimeString}. Is there anything else I can do for you?`);
    });
  }
  function handleSaveToDB(agent){
    // created a parameter called text in SaveToDB intent
    // if there was a parameter called soda then code would be
    // const text = agent.parameters.soda;
    // gets the text to save to DB
    const text = agent.parameters.text;
    // created a table called data
    // data has one attribute text
    // saving to db
    return admin.database().ref('data').set({
      text: text
    });
  }
  function handleReadFromDB(agent) {
    // snapshot is the data table
    // the children are the tables attributes
    return admin.database().ref('data').once('value').then((snapshot) => {
      const value = snapshot.child('text').val();
      if(value !== null){
        agent.add(`${value} is the element from the database`);
      }
    });
  }
  let intentMap = new Map();
  intentMap.set('Appointment Intent', makeAppointment);  // It maps the intent 'Make Appointment' to the function 'makeAppointment()'
  intentMap.set('SaveToDB',handleSaveToDB); // It maps the intent 'SaveToDB' to the function 'handleSaveToDB()'
  intentMap.set('ReadFromDB',handleReadFromDB); // It maps the intent 'ReadFromDB' to the function 'handleReadFromDB()'
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
