// JavaScript
var WindowsBeaconManager = {
    DetectBeacon: function (successCallback, errorCallback, strInput) {
        cordova.exec(successCallback, errorCallback, "WindowsBeaconManager", "DetectBeacon", [strInput]);
    }
};

module.exports = WindowsBeaconManager;