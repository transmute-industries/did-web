const functions = require("firebase-functions");
const firebaseConfig = functions.config().did_web;

module.exports = {
 ...firebaseConfig
};
