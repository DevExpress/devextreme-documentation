$(function() {
    const dataSource = new DevExpress.data.DataSource({
        store: products,
        key: "ID",
        group: "Category"
    });
    
    $("#tagBox").dxTagBox({
        id: "tagBox",
        dataSource: dataSource,
        valueExpr: "ID",
        displayExpr: "Name",
        showSelectionControls: true,
        searchEnabled: true,
        grouped: true,
        multiline: true,
        maxDisplayedTags: 6,
        onValueChanged: function(e) {
            console.log(e.previousValue);
            console.log(e.value);
        },
        dropDownOptions: {
            maxHeight: 300
        }
    });
    
});

const products = [{
    "ID": 1,
    "Name": "HD Video Player",
    "Category": "Video Players"
}, {
    "ID": 2,
    "Name": "SuperHD Player",
    "Category": "Video Players"
}, {
    "ID": 3,
    "Name": "SuperPlasma 50",
    "Category": "Televisions"
}, {
    "ID": 4,
    "Name": "SuperLED 50",
    "Category": "Televisions"
}, {
    "ID": 7,
    "Name": "SuperLCD 42",
    "Category": "Televisions"
}, {
    "ID": 8,
    "Name": "SuperPlasma 65",
    "Category": "Televisions"
}, {
    "ID": 10,
    "Name": "DesktopLED 21",
    "Category": "Monitors"
}, {
    "ID": 11,
    "Name": "DesktopLED 19",
    "Category": "Monitors"
}, {
    "ID": 12,
    "Name": "DesktopLCD 21",
    "Category": "Monitors"
}, {
    "ID": 13,
    "Name": "DesktopLCD 19",
    "Category": "Monitors"
}, {
    "ID": 14,
    "Name": "Projector Plus",
    "Category": "Projectors"
}, {
    "ID": 15,
    "Name": "Projector PlusHD",
    "Category": "Projectors"
}, {
    "ID": 16,
    "Name": "Projector PlusHT",
    "Category": "Projectors"
}, {
    "ID": 17,
    "Name": "ExcelRemote IR",
    "Category": "Automation"
}, {
    "ID": 18,
    "Name": "ExcelRemote BT",
    "Category": "Automation"
}];