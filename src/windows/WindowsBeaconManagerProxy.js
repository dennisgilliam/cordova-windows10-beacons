//  JavaScript
var cordova = require('cordova');
var WindowsBeaconManager = require('./WindowsBeaconManager');

var bluetoothLEAdvertisementWatcher;


module.exports = {

    startScan: function (successCallback, errorCallback, onBeaconFound) {
        bluetoothLEAdvertisementWatcher = new Windows.Devices.Bluetooth.Advertisement.BluetoothLEAdvertisementWatcher();
        bluetoothLEAdvertisementWatcher.scanningMode = Windows.Devices.Bluetooth.Advertisement.BluetoothLEScanningMode.active;

        console.log("Start scanning for beacons");

        bluetoothLEAdvertisementWatcher.addEventListener("received", function(eventArgs) {
            var macAddressAsInt64 = eventArgs.bluetoothAddress;
            var macAddress = macAddressAsInt64.toString(16);
            onBeaconFound(macAddress);
        });
        bluetoothLEAdvertisementWatcher.start();
    }
};

require("cordova/exec/proxy").add("WindowsBeaconManager", module.exports);
