DevExtreme components allow you to specify custom markup for certain elements. To specify custom markup, configure [templates](/Documentation/Guide/UI_Components/Common/Templates/).

This example hides the DataGrid [toolbar](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/toolbar/) and specifies a **columns[]**.[headerCellTemplate](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#headerCellTemplate) to display an "Add a row" button in the header row. Integrate a DevExtreme [Button](/Documentation/Guide/UI_Components/Button/Overview/) within this template and call [DataGrid.addRow()](/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#addRow) in the button's [onClick](/Documentation/ApiReference/UI_Components/dxButton/Configuration/#onClick) handler:

---

##### jQuery

    <!-- tab: index.js -->
    $("#task-grid").dxDataGrid({
        columns: [{
            type: 'buttons',
            headerCellTemplate(el, data) {
                return $('<div>').dxButton({
                    icon: 'add',
                    stylingMode: 'text',
                    onClick() {
                        data.component.addRow();
                    }
                })
            }
        }],
        toolbar: {
            visible: false
        },
        // ...
    })

---

This example also configures **columns[]**.[cellTemplate]() to implement placeholder values for empty cells and format date values ([formatDate()](/Documentation/ApiReference/Common/Utils/localization/#formatDatevalue_format)):

---

##### jQuery

    <!-- tab: index.js -->
    $("#task-grid").dxDataGrid({
        columns: [{
            dataField: "task",
            cellTemplate(element, data) {
                if (!data.value) {
                    return $(element)
                        .text('Enter a title...')
                        .css('color', 'var(--dx-color-icon)');
                } else {
                    return $(element).text(data.value);
                }
            }
        }, {
            dataField: "dueDate",
            cellTemplate(element, data) {
                if (!data.value) {
                    return $(element)
                    .text('Enter a date...')
                    .css('color', 'var(--dx-color-icon)');
                } else {
                    return $(element).text(DevExpress.localization.formatDate(data.value, 'shortDate'));
                }
            }
        }],
        // ...
    })

---

You can find the full source code of this example in the following GitHub repository:

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-first-steps"
}