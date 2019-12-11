This option accepts an integer specifying the index of the column in a collection of columns with applied sorting. For example, consider the following data source that can provide data for three columns.

    <!--JavaScript-->var dataSource = [
        { firstName: 'John', lastName: 'Doe', title: 'Sales Manager' },
        { firstName: 'Michael', lastName: 'King', title: 'Sales Representative' },
        // ...
    ];

To sort data first by the *"Last Name"* and then by the *"First Name"* column, use the following code. Note that the [sortOrder](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/sortOrder.md '{basewidgetpath}/Configuration/columns/#sortOrder') option should also be specified.
    
---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            columns: [
                { dataField: 'firstName', sortIndex: 1, sortOrder: 'asc' },
                { dataField: 'lastName', sortIndex: 0, sortOrder: 'asc' },
                // ...
            ]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxi-column dataField="firstName" [sortIndex]="1" sortOrder="asc"></dxi-column>
        <dxi-column dataField="lastName" [sortIndex]="1" sortOrder="asc"></dxi-column>
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })
    
---

You can set the **sortIndex** option at design-time to specify initial sorting, or change this option using the [columnOption]({basewidgetname}/Methods/#columnOptionid_optionName_optionValue) method to sort at runtime.