//  JavaScript
var cordova = require('cordova'),
    WindowsBeaconManager = require('./WindowsBeaconManager');

module.exports = {

    WindowsBeaconManager: function (successCallback, errorCallback, strInput) {

        var upperCase = strInput[0].toUpperCase();
        if(upperCase != "") {
            successCallback(upperCase);
        }
        else {
            errorCallback(upperCase);
        }
    }
};
require("cordova/exec/proxy").add("WindowsBeaconManager", module.exports);