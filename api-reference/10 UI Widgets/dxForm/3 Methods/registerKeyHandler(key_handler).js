var companyData = {
    id: "1",
    name: "Super Mart of the West",
    city: "Bentonville",
    state: "Arkansas",
    zip: 72716,
    phone: "(800) 555-2797",
    fax: "(800) 555-2171",
    website: "http://www.nowebsitesupermart.com"
};
var conf = {
    message: "Enter key was pressed",
    type: "success",
    displayTime: 1500,
    position: { at: 'center center' }
};
var enterKeyHandler = function () {
    DevExpress.ui.notify(conf);
};
$(function () {
    $("#myForm").dxForm({
        formData: companyData,
        focusStateEnabled: true,
        colCount: 2,
        onContentReady: function (e) {
            e.component.registerKeyHandler('enter', enterKeyHandler);
            e.component.focus();
        }
    });
});
