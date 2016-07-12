// JavaScript
var WindowsBeaconManager = {
    DetectBeacon: function (successCallback, errorCallback, strInput) {
        cordova.exec(successCallback, errorCallback, "WindowsBeaconManager", "DetectBeacon", [strInput]);
    }
};

module.exports.WindowsBeaconManager = WindowsBeaconManager;

window.DetectBeacon = function(str, callback) {
    cordova.exec(callback, function(err) {
        callback('Nothing to echo.');
    }, "WindowsBeaconManager", "DetectBeacon", [str]);
};