---
default: undefined
type: boolean
---
---
##### shortDescription
Specifies whether the column bands other columns or not.

---
Unlike normal columns, band columns do not hold data. Instead, they collect two or more columns under one column header. In most cases, to set up this layout, you can declare the band column using a hierarchical structure. For example, the following code bands three columns under the *"Address"* header.

    <!--JavaScript-->var dataGridOptions = {
        // ...
        columns: [{
            caption: 'Address',
            columns: ['City', 'Street', 'Apartment']
        }, {
            // ...
        }]
    };

If you use the [customizeColumns](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/customizeColumns.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#customizeColumns') option to configure columns, the hierarchical structure cannot be implemented. To band columns in this case, use the **isBand** and [ownerBand](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/ownerBand.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#ownerBand') options.

    <!--JavaScript-->var dataGridOptions = {
        // ...
        customizeColumns: function(columns) {
            columns.push({ // Pushes the "Address" band column into the "columns" array
                caption: 'Address',
                isBand: true
            });
            
            var addressFields = ['City', 'Street', 'Apartment'];
            for (var i = 0; i < columns.length-1; i++) {
                if (addressFields.indexOf(columns[i].dataField) > -1) // If the column belongs to "Address",
                    columns[i].ownerBand = columns.length-1; // assigns "Address" as the owner band column
            }
        }
    };

[note]Band columns must not have the **dataField** option set.

The column with the **isBand** flag set to *true* can have the following properties only.

- [alignment](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/alignment.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#alignment')
- [allowFixing](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/allowFixing.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowFixing')
- [allowHiding](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/allowHiding.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowHiding')
- [allowReordering](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/allowReordering.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowReordering')
- [caption](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/caption.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#caption')
- [cssClass](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/cssClass.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#cssClass')
- [fixed](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/fixed.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#fixed')
- [fixedPosition](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/fixedPosition.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#fixedPosition')
- [headerCellTemplate](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/headerCellTemplate.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#headerCellTemplate')
- [name](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/name.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#name')
- [visible](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/visible.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#visible')
- [visibleIndex](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/visibleIndex.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#visibleIndex')