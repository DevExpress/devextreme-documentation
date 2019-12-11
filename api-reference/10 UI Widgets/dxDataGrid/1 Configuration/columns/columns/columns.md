---
default: undefined
type: array
---
---
##### shortDescription
Columns banded by the current column.

---
Unlike normal columns, band columns do not hold data. Instead, they collect two or more columns under one column header. To set up this layout, declare the band column using a hierarchical structure. For this purpose, assign the nested columns to the **columns** field of the band column. For example, the following code declares the *"Address"* band column and nests three columns within it.

---
#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                caption: 'Address',
                columns: ['City', 'Street', 'Apartment']
            }, 
            // ...
            ]
        });
    });

#####Angular

    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column
            caption="Address"
            [columns]="['City', 'Street', 'Apartment']">
        </dxi-column>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

---

A nested column has almost every property a regular column has. These properties are described in the [columns](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/') section of the Reference.

[note]There is an exception though: nested columns cannot be fixed alone, therefore specifying the [fixed](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/fixed.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#fixed') and [fixedPosition](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/fixedPosition.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#fixedPosition') properties for them is useless. However, the whole band column can be fixed as usual.

For example, the following code specifies the **width** and **sortOrder** properties of the *"Street"* column nested within the fixed *"Address"* band column.

---
#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                caption: 'Address',
                fixed: true,
                fixedPosition: 'right',
                columns: [ 'City',
                    {
                        dataField: 'Street',
                        width: 100,
                        sortOrder: 'asc'
                    },
                    'Apartment']
            }, 
            // ...
            ]
        });
    });

#####Angular

    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column
            caption="Address"
            [fixed]="true"
            fixedPosition="right">
            <dxi-column dataField="City"></dxi-column>
            <dxi-column dataField="Street" [width]="100" sortOrder="asc"></dxi-column>
            <dxi-column dataField="Apartment"></dxi-column>
        </dxi-column>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

---

Band columns support hierarchies of any nesting level. It means that the following structure is acceptable.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                caption: 'A',
                columns: [ 'A1', 'A2', {
                    caption: 'A3',
                    columns: ['A31', 'A32', {
                        caption: 'A33',
                        columns: ['A331', 'A332', 'A333']
                    }]
                }]
            }, {
                caption: 'B',
                columns: // ...
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column caption="A">
            <dxi-column dataField="A1"></dxi-column>
            <dxi-column dataField="A2"></dxi-column>
            <dxi-column caption="A3">
                <dxi-column dataField="A31"></dxi-column>
                <dxi-column dataField="A32"></dxi-column>
                <dxi-column caption="A33">
                    <dxi-column dataField="A331"></dxi-column>
                    <dxi-column dataField="A332"></dxi-column>
                    <dxi-column dataField="A333"></dxi-column>
                </dxi-column>
            </dxi-column>
        </dxi-column>
        <dxi-column caption="B">
            ...
        </dxi-column>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })
    
---


Band columns have the [isBand](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/isBand.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#isBand') flag. Banded columns have the [ownerBand](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/ownerBand.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#ownerBand') property set. Use these properties to distinguish band and banded columns from regular ones in code.

<a href="https://www.youtube.com/watch?v=FAZJ4fHjfss&index=3&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>

#####See Also#####
- [Band Columns](/concepts/05%20Widgets/DataGrid/15%20Columns/10%20Column%20Types/2%20Band%20Columns.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_Types/Band_Columns/')
- [Column Fixing](/concepts/05%20Widgets/DataGrid/15%20Columns/30%20Column%20Fixing.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_Fixing/')