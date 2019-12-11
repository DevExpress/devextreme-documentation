---
default: undefined
type: array
---
---
##### shortDescription
Columns banded by the current column.

---
Unlike normal columns, band columns do not hold data. Instead, they collect two or more columns under one column header. To set up this layout, declare the band column using a hierarchical structure. For this purpose, assign the nested columns to the **columns** field of the band column. For example, the following code declares the *"Address"* band column and nests three columns within it.

    <!--JavaScript-->var dataGridOptions = {
        // ...
        columns: [{
            caption: 'Address',
            columns: ['City', 'Street', 'Apartment']
        }, {
            // ...
        }]
    };

A nested column has almost every property a regular column has. These properties are described in the [columns](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/') section of the Reference.

[note]There is an exception though: nested columns cannot be [fixed](/concepts/10%20UI%20Widgets/70%20Data%20Grid/001%20Visual%20Elements/010%20Grid%20Columns/060%20Fixing%20Grid%20Columns.md '/Documentation/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Grid_Columns/Fixing_Grid_Columns') alone, therefore specifying the [fixed](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/fixed.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#fixed') and [fixedPosition](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/fixedPosition.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#fixedPosition') properties for them is useless. However, the whole band column can be fixed as usual.

For example, the following code specifies the **width** and **sortOrder** properties of the *"Street"* column nested within the fixed *"Address"* band column.

    <!--JavaScript-->var dataGridOptions = {
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
        }, {
            // ...
        }]
    };

Band columns support hierarchies of any nesting level. It means that the following structure is acceptable.

    <!--JavaScript-->var dataGridOptions = {
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
    };

Band columns have the [isBand](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/isBand.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#isBand') flag. Banded columns have the [ownerBand](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/ownerBand.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#ownerBand') property set. Use these properties to distinguish band and banded columns from regular ones in code.

<a href="https://www.youtube.com/watch?v=FAZJ4fHjfss&index=3&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Watch Video</a>