Oftentimes, columns contain data that can be organized in logical groups. It would be smart to collect such columns under a single header. The banded layout provides you with this capability. 

![DevExpress DevExtreme DataGrid HTML5 BandColumns](/images/DataGrid/BandColumns.png)

To set up the banded layout, declare a band column using a hierarchical structure. For this purpose, assign the nested columns to the [columns](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#columns') field of the band column. For example, the following code declares the *"Address"* band column and nests three columns within it.

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

[note]There is an exception though: nested columns cannot be [fixed](/concepts/05%20Widgets/DataGrid/001%20Visual%20Elements/010%20Grid%20Columns/060%20Fixing%20Grid%20Columns.md '/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Columns/Fixing_Grid_Columns') alone, therefore specifying the [fixed](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/fixed.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#fixed') and [fixedPosition](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/fixedPosition.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#fixedPosition') properties for them is useless. However, the whole band column can be fixed as usual.

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
        }]
    };
	
If you use the [customizeColumns](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/customizeColumns.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#customizeColumns') option to configure columns, the hierarchical structure cannot be implemented. To band columns in this case, use the [isBand](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/isBand.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#isBand') and [ownerBand](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/ownerBand.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#ownerBand') options. Using the same options, you can distinguish band and banded columns from regular ones in code.

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
	
Band columns support the following properties only.

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

[note]Band columns must not have the [dataField](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/dataField.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#dataField') option set.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/data_grid-columns-multi-row_headers_(bands)" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>