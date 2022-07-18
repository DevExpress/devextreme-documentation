$(function() {
    const employeesTasks = [
        {
            ID: 1,
            Assignee: "Mr. John Heart",
            Subject: "Choose between PPO and HMO Health Plan",
            disabled: true
        }, {
            ID: 2,
            Assignee: "Mr. John Heart",
            Subject: "Google AdWords Strategy"
        }, {
            ID: 3,
            Assignee: "Mr. John Heart",
            Subject: "New Brochures"
        }, {
            ID: 4,
            Assignee: "Mr. John Heart",
            Subject: "Update NDA Agreement"
        }, {
            ID: 5,
            Assignee: "Mr. John Heart",
            Subject: "Review Product Recall Report by Engineering Team"
        }, {
            ID: 6,
            Assignee: "Mrs. Olivia Peyton",
            Subject: "Update Personnel Files"
        }, {
            ID: 7,
            Assignee: "Mrs. Olivia Peyton",
            Subject: "Review Health Insurance Options Under the Affordable Care Act"
        }, {
            ID: 8,
            Assignee: "Mrs. Olivia Peyton",
            Subject: "Non-Compete Agreements"
        }, {
            ID: 9,
            Assignee: "Mrs. Olivia Peyton",
            Subject: "Give Final Approval for Refunds"
        }, {
            ID: 10,
            Assignee: "Mr. Robert Reagan",
            Subject: "Deliver R&D Plans for 2013"
        }, {
            ID: 11,
            Assignee: "Mr. Robert Reagan",
            Subject: "Decide on Mobile Devices to Use in the Field"
        }, {
            ID: 12,
            Assignee: "Mr. Robert Reagan",
            Subject: "Try New Touch-Enabled WinForms Apps"
        }, {
            ID: 13,
            Assignee: "Mr. Robert Reagan",
            Subject: "Approval on Converting to New HDMI Specification"
        }, {
            ID: 14,
            Assignee: "Ms. Greta Sims",
            Subject: "Approve Hiring of John Jeffers"
        }, {
            ID: 15,
            Assignee: "Ms. Greta Sims",
            Subject: "Update Employee Files with New NDA"
        }, {
            ID: 16,
            Assignee: "Ms. Greta Sims",
            Subject: "Provide New Health Insurance Docs"
        }
    ];

    $(function() {
        const dataSource = new DevExpress.data.DataSource({
            store: {
                type: 'array',
                data: employeesTasks,
                key: 'ID',
            },
            group: 'Assignee',
        });
        
        $('#autocomplete').dxAutocomplete({
            dataSource,
            valueExpr: "Subject",
            label: "Search for a task",
            labelMode: "floating",
            grouped: true,
            showClearButton: true,
            groupTemplate ({ key }) {
                return "Assigned to " + key;
            },
            onValueChanged: function(e) {
                console.log(e.value);
                console.log(e.previousValue);
            },
            itemTemplate ({ Subject }, index) {
                return index + 1 + '. ' + Subject;
            },
            wrapItemText: true,
            searchTimeout: 300,
            maxLength: 20,
            dropDownOptions: {
                maxHeight: 230
            },
            value: "a",
            opened: true
        });
    });
});