DevExpress.devices.current("iPhone");
platformName = ko.observable("undefined");
getEmulatedPlatform = function () {
    platformName(DevExpress.devices.current().platform);
};
getActualPlatform = function () {
    platformName(DevExpress.devices.real().platform);
};