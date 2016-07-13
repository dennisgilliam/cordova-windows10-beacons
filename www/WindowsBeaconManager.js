// JavaScript
var WindowsBeaconManager = {
    startScan: function (onBeaconFound) {
        cordova.exec(null, null, "WindowsBeaconManager", "startScan", onBeaconFound);
    }
};

module.exports = WindowsBeaconManager;
