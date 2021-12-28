$(function() {
    const employeesTasks = [{
        "ID": 1,
        "Assigned": "Mr. John Heart",
        "Subject": "Choose between PPO and HMO Health Plan",
        "disabled": true
    }, {
        "ID": 2,
        "Assigned": "Mr. John Heart",
        "Subject": "Google AdWords Strategy",
        "visible": false
    }, {
        "ID": 3,
        "Assigned": "Mr. John Heart",
        "Subject": "New Brochures"
    }, {
        "ID": 4,
        "Assigned": "Mr. John Heart",
        "Subject": "Update NDA Agreement"
    }, {
        "ID": 5,
        "Assigned": "Mr. John Heart",
        "Subject": "Review Product Recall Report by Engineering Team"
    }, {
        "ID": 6,
        "Assigned": "Mrs. Olivia Peyton",
        "Subject": "Update Personnel Files"
    }, {
        "ID": 7,
        "Assigned": "Mrs. Olivia Peyton",
        "Subject": "Review Health Insurance Options Under the Affordable Care Act"
    }, {
        "ID": 8,
        "Assigned": "Mrs. Olivia Peyton",
        "Subject": "Non-Compete Agreements"
    }, {
        "ID": 9,
        "Assigned": "Mrs. Olivia Peyton",
        "Subject": "Give Final Approval for Refunds"
    }, {
        "ID": 10,
        "Assigned": "Mr. Robert Reagan",
        "Subject": "Deliver R&D Plans for 2013"
    }, {
        "ID": 11,
        "Assigned": "Mr. Robert Reagan",
        "Subject": "Decide on Mobile Devices to Use in the Field"
    }, {
        "ID": 12,
        "Assigned": "Mr. Robert Reagan",
        "Subject": "Try New Touch-Enabled WinForms Apps"
    }, {
        "ID": 13,
        "Assigned": "Mr. Robert Reagan",
        "Subject": "Approval on Converting to New HDMI Specification"
    }, {
        "ID": 14,
        "Assigned": "Ms. Greta Sims",
        "Subject": "Approve Hiring of John Jeffers"
    }, {
        "ID": 15,
        "Assigned": "Ms. Greta Sims",
        "Subject": "Update Employee Files with New NDA"
    }, {
        "ID": 16,
        "Assigned": "Ms. Greta Sims",
        "Subject": "Provide New Health Insurance Docs"
    }];

    $("#lookup").dxLookup({
        dataSource: new DevExpress.data.DataSource({ 
            store: employeesTasks, 
            key: "ID",
            group: "Assigned",
            paginate: true,
            pageSize: 2
        }),
        valueExpr: "ID",
        displayExpr: "Subject",
        pageLoadMode: "nextButton",
        nextButtonText: "More",
        onValueChanged: function(e) {
            console.log(e.previousValue);
            console.log(e.value);
        },
        dropDownOptions: {
            closeOnOutsideClick: true,
            showTitle: false
        },
        grouped: true,
        searchExpr: ['Assigned', 'Subject'],
        searchMode: 'startswith',
        minSearchValue: 2,
        itemTemplate: function (itemData, itemIndex, itemElement) {
            return itemData.disabled ? '\u274C ' + itemData.Subject : '\u2705 ' + itemData.Subject;
        }, 
        groupTemplate: function (data, index, element) {
            return data.key + " - " + data.items.length;
        },
        opened: true
    });
});