$(function () {
    $("#gridContainer").dxDataGrid({
        dataSource: employees,
        columns: [
            {
                dataField: "Prefix",
                caption: "Title",
                width: 70
            },
            "FirstName",
            "LastName", {
                dataField: "StateID",
                caption: "State",
                width: 125,
                lookup: {
                    dataSource: states,
                    displayExpr: "Name",
                    valueExpr: "ID"
                }
            },
            "Address",
            "Phone"
        ],
        editing: {
            mode: 'form',
            allowUpdating: true,
            form: {
                labelLocation: "top",
                items: [{
                    itemType: "group",
                    caption: "Personal Data",
                    items: [
                        { dataField: "Prefix" },
                        { dataField: "FirstName" },
                        { dataField: "LastName" }
                    ]
                }, {
                    itemType: "group",
                    caption: "Contacts",
                    items: [
                        { dataField: "Phone", helpText: "Example: +1(111)111-1111" },
                        { dataField: "State" },
                        { dataField: "Address" }
                    ]
                }]
            }
        }
    });
});

var employees = [{
    "ID": 1,
    "FirstName": "John",
    "LastName": "Heart",
    "Prefix": "Mr.",
    "Phone": "+1(360)684-1334",
    "Address": "351 S Hill St.",
    "StateID": 2
}, {
    "ID": 2,
    "FirstName": "Olivia",
    "LastName": "Peyton",
    "Prefix": "Mrs.",
    "Phone": "+1(387)678-7784",
    "Address": "807 W Paseo Del Mar",
    "StateID": 3
}, {
    "ID": 3,
    "FirstName": "Robert",
    "LastName": "Reagan",
    "Prefix": "Mr.",
    "Phone": "+1(734)785-5642",
    "Address": "4 Westmoreland Pl.",
    "StateID": 4
}, {
    "ID": 4,
    "FirstName": "Greta",
    "LastName": "Sims",
    "Prefix": "Ms.",
    "Phone": "+1(784)981-1233",
    "Address": "1700 S Grandview Dr.",
    "StateID": 1
}, {
    "ID": 5,
    "FirstName": "Brett",
    "LastName": "Wade",
    "Prefix": "Mr.",
    "Phone": "+1(736)789-1445",
    "Address": "1120 Old Mill Rd.",
    "StateID": 2
}, {
    "ID": 6,
    "FirstName": "Sandra",
    "LastName": "Johnson",
    "Prefix": "Mrs.",
    "Phone": "+1(789)458-7935",
    "Address": "4600 N Virginia Rd.",
    "StateID": 7
}];

var states = [{
    "ID": 1,
    "Name": "Alabama"
}, {
    "ID": 2,
    "Name": "Alaska"
}, {
    "ID": 3,
    "Name": "Arizona"
}, {
    "ID": 4,
    "Name": "Arkansas"
}, {
    "ID": 5,
    "Name": "California"
}, {
    "ID": 6,
    "Name": "Colorado"
}, {
    "ID": 7,
    "Name": "Connecticut"
}];
