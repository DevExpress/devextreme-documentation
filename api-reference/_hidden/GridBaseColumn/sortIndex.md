---
id: GridBaseColumn.sortIndex
type: Number
default: undefined
firedEvents: optionChanged
---
---
##### shortDescription
Specifies the index according to which columns participate in sorting.

---
This option accepts an integer specifying the index of the column in a collection of columns with applied sorting. For example, consider the following data source that can provide data for three columns.

    <!--JavaScript-->var dataSource = [
        { firstName: "John", lastName: "Doe", title: "Sales Manager" },
        { firstName: "Michael", lastName: "King", title: "Sales Representative" },
        // ...
    ];

To sort data first by the *"Last Name"* and then by the *"First Name"* column, use the following code. Note that the [sortOrder](/api-reference/_hidden/GridBaseColumn/sortOrder.md '{basewidgetpath}/Configuration/columns/#sortOrder') option should also be specified.
    
---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            columns: [
                { dataField: "firstName", sortIndex: 1, sortOrder: "asc" },
                { dataField: "lastName", sortIndex: 0, sortOrder: "asc" },
                // ...
            ]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-{widget-name} ... >
        <dxi-column dataField="firstName" [sortIndex]="1" sortOrder="asc"></dxi-column>
        <dxi-column dataField="lastName" [sortIndex]="0" sortOrder="asc"></dxi-column>
    </dx-{widget-name}>

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })
    
---

You can set the **sortIndex** option at design time to specify initial sorting, or change this option using the [columnOption](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/columnOption(id_optionName_optionValue).md '{basewidgetpath}/Methods/#columnOptionid_optionName_optionValue') method to sort at runtime.