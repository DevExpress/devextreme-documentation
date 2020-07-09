$(function() {
    const data = [{
        ID: 1,
        Name: 'Banana',
        Category: 'Fruits',
    }, {
        ID: 2,
        Name: 'Cucumber',
        Category: 'Vegetables',
    }, {
        ID: 3,
        Name: 'Apple',
        Category: 'Fruits',
    }, {
        ID: 4,
        Name: 'Tomato',
        Category: 'Vegetables',
    }, {
        ID: 5,
        Name: 'Apricot',
        Category: 'Fruits',
    }]

    const dataSource = new DevExpress.data.DataSource({
        store: {
            data: data,
            type: 'array',
            key: "ID"
        },
        group: "Category"
    });

    $("#selectBox").dxSelectBox({
        dataSource: dataSource,
        valueExpr: "ID",
        displayExpr: "Name",
        searchEnabled: true,
        onValueChanged: function(e) {
            const item = data.filter(i => i.ID === e.value)[0];
            console.log(item.ID + ": " + item.Name);
        },
        grouped: true,
        opened: true,
        dropDownOptions: {
            maxHeight: 400,
        } 
    });
});