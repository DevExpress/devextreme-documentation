$(() => {
    $('#stepper').dxStepper({
        items: [{
            label: 'Personal Details',
            template: (data) => `<div class='star dx-step-indicator'></div><div class='dx-step-caption'><div class='dx-step-label'>${data.label}</div></div>`,
        }, {
            label: 'Program Selection',
            icon: 'detailslayout',
        }, {
            label: 'Campus and Start Dates',
            icon: 'map',
        }, {
            label: 'Supporting Documents',
            icon: 'textdocument',
        }, {
            label: 'Scholarship and Aid',
            icon: 'money',
            optional: true,
        }, {
            label: 'Review and Submit',
            icon: 'send',
        }],
        linear: true,
        selectedIndex: 0,
        onSelectionChanged: (e) => {
            const newItem = e.addedItems[0];
            const items = e.component.option('items');
            const newIndex = items.findIndex((item) => newItem.label === item.label);
            e.component.option(`items[${newIndex - 1}].disabled`, true);
        },
    });
});
