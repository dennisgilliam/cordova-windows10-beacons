// JavaScript
var WindowsBeaconManager = {
    DetectBeacon: function (successCallback, errorCallback, beacons) {
        cordova.exec(successCallback, errorCallback, "WindowsBeaconManager", "DetectBeacon", beacons);
    }
};

module.exports = WindowsBeaconManager;

/*
window.DetectBeacon = function(str, callback) {
    cordova.exec(callback, function(err) {
        callback('Nothing to echo.');
    }, "WindowsBeaconManager", "DetectBeacon", [str]);
};*/