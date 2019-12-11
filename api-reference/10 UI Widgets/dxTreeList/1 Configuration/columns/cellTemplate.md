The **cellInfo** object has the following fields:

- **data**: <font size="-1">Object</font>        
The data of the row to which the cell belongs.
- **component**: <font size="-1">Object</font>  
The widget's instance.
- **value**: <font size="-1">Any</font>        
The cell's raw value.
- **oldValue**: <font size="-1">Any</font>        
The cell's previous raw value.
- **displayValue**: <font size="-1">Any</font>        
The cell's display value. Differs from the **value** field only when the column uses [lookup](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/lookup '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/lookup/') or [calculateDisplayValue](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/calculateDisplayValue.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#calculateDisplayValue').
- **text**: <font size="-1">String</font>        
**displayValue** after applying [format](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/format.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#format') and [customizeText](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/customizeText.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#customizeText').
- **columnIndex**: <font size="-1">Number</font>        
The index of the cell's column.
- **rowIndex**: <font size="-1">Number</font>        
The index of the cell's row. Begins with 0 on each page. Refer to [Column and Row Indexes](/concepts/05%20Widgets/TreeList/10%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/Widgets/TreeList/Columns/Column_and_Row_Indexes/') for more information.
- **column**: <font size="-1">Object</font>        
The column's properties.
- **watch**: <font size="-1">Function</font>        
Allows tracking a variable and performing actions when it changes. Applies when [repaintChangesOnly](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/repaintChangesOnly.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#repaintChangesOnly') is **true**.       
This function has the following parameters:     

    - **getter(data)**: <font size="-1">Function</font>        
    A function that returns the variable that should be tracked.

    - **handler(newValue)**: <font size="-1">Function</font>        
    A function called when this variable changes.

[note]If you implement two-way data binding in your template, make sure that you have switched off the built-in implementation of this feature by setting the [twoWayBindingEnabled](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/twoWayBindingEnabled.md '{basewidgetpath}/Configuration/#twoWayBindingEnabled') option to **false**.

In the following code, a **cellTemplate** is used to display a price change as an absolute value and a percentage:

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            repaintChangesOnly: true,
            columns: [
                // ...
                "Price", 
                { 
                    dataField: "Change", 
                    cellTemplate: function(element, info) {
                        var data = info.data;
                        var percent = (data.Change / data.Price * 100).toFixed(2);
                        element.html(data.Change + " (" + percent + "%)");
                        // Tracks the `Price` data field
                        info.watch(function() { return data.Price }, function(e) {
                            percent = (data.Change / e * 100).toFixed(2);
                            element.html(data.Change + " (" + percent + "%)");
                        })
                    }
                }
            ]
        })
    })

#####Angular

    <!--HTML-->
    <dx-tree-list ... 
        [repaintChangesOnly]="true">
        <dxi-column dataField="Price"></dxi-column>
        <dxi-column dataField="Change" cellTemplate="cellTemplate"></dxi-column>
        <div *dxTemplate="let cell of 'cellTemplate'">
            {{cell.data.Change}} ({{(cell.data.Change / cell.data.Price * 100).toFixed(2)}}%)
        </div>
    </dx-tree-list>

#####ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().TreeList()
        .ID("treeListContainer")
        // ...
        .RepaintChangesOnly(true)
        .Columns(c => {
            c.Add().DataField("Price")
            c.Add().DataField("Change").CellTemplate(new JS("treeList_change_cellTemplate"))
        })
    )
    <script>
        function treeList_change_cellTemplate(element, info) {
            var data = info.data;
            var percent = (data.Change / data.Price * 100).toFixed(2);
            element.html(data.Change + " (" + percent + "%)");
            // Tracks the `Price` data field
            info.watch(function() { return data.Price }, function(e) {
                percent = (data.Change / e * 100).toFixed(2);
                element.html(data.Change + " (" + percent + "%)");
            })
        }
    </script>

---

#####See Also#####
- [Customize Cells Appearance](/concepts/05%20Widgets/TreeList/10%20Columns/40%20Customize%20Cells/2%20Customize%20the%20Appearance.md '/Documentation/Guide/Widgets/TreeList/Columns/Customize_Cells/#Customize_the_Appearance')
- [Custom Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates')
- [onCellPrepared](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/onCellPrepared.md '{basewidgetpath}/Configuration/#onCellPrepared')