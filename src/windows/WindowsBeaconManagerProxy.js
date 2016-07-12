//  JavaScript
var cordova = require('cordova');

// in file echopluginProxy.js
cordova.commandProxy.add("WindowsBeaconManager",{
    DetectBeacon:function(successCallback,errorCallback,beacons) {
        successCallback("echo");

        /*
        if(!strInput || !strInput.length) {
            errorCallback("Error, something was wrong with the input string. =>" + strInput);
        }
        else {
            successCallback(strInput + "echo");
        }*/
    }
});