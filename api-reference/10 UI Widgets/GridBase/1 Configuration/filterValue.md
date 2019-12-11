---
default: null
type: Filter expression
firedEvents: optionChanged
---
---
##### shortDescription
Specifies a filter expression.

---
If [filterSyncEnabled](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/filterSyncEnabled.md '{basewidgetpath}/Configuration/#filterSyncEnabled') is **true**, the filter expression includes a combination of the [filter row](/concepts/05%20Widgets/DataGrid/30%20Filtering%20and%20Searching/1%20Filter%20Row.md '/Documentation/Guide/Widgets/{WidgetName}/Filtering_and_Searching/#Filter_Row'), [header filter](/concepts/05%20Widgets/DataGrid/30%20Filtering%20and%20Searching/2%20Header%20Filter.md '/Documentation/Guide/Widgets/{WidgetName}/Filtering_and_Searching/#Header_Filter'), and [filter builder](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/filterBuilder.md '{basewidgetpath}/Configuration/#filterBuilder') filters. Otherwise, it contains only the filter builder filter.

The filter expression can contain the following operations: *"="*, *"<>"*, *"<"*, *">"*, *"<="*, *">="*, *"between"*, *"contains"*, *"notcontains"*, *"startswith"*, *"endswith"*, *"anyof"*, *"noneof"*, and the filter builder's [custom operations](/api-reference/10%20UI%20Widgets/dxFilterBuilder/1%20Configuration/customOperations '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/customOperations/'). Use *"anyof"* and *"noneof"* to select and clear the selection of items in the header filter's popup menu. In the following code, *"anyof"* is used to select items with IDs `500` and `700`:

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("{widgetName}Container").dx{WidgetName}({
            // ...
            filterSyncEnabled: true,
            headerFilter: { visible: true },
            filterValue: ["ID", "anyof", [500, 700]], 
        })
    });

#####Angular

    <!--HTML-->
    <dx-{widget-name} ...
        [filterSyncEnabled]="true"
        [(filterValue)]="['ID', 'anyof', [500, 700]]"> 
        <dxo-header-filter 
            [visible]="true">
        </dxo-header-filter>
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

If a column's [groupInterval](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/headerFilter/groupInterval.md '{basewidgetpath}/Configuration/columns/headerFilter/#groupInterval') option is set, the *"anyof"* and *"noneof"* operations for this column accept the beginning of intervals instead of exact values:

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("{widgetName}Container").dx{WidgetName}({
            // ...
            filterValue: ["ID", "anyof", [500, 700]], // Filter intervals are 500-600 and 700-800
            columns: [{
                dataField: "ID",
                dataType: "number",
                headerFilter: { groupInterval: 100 }
            },
            // ...
            ]
        })
    });

#####Angular

    <!--HTML-->
    <dx-{widget-name} ...
        <!-- Filter intervals are 500-600 and 700-800 -->
        [(filterValue)]="['ID', 'anyof', [500, 700]]"> 
            <dxi-column
                dataField="ID"
                dataType="number">
                    <dxo-header-filter 
                        [groupInterval]="100">
                    </dxo-header-filter>
            </dxi-column>
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


[note] The **DataSource** does not support the *"anyof"*, *"noneof"*, and custom operations. Use the [getCombinedFilter(returnDataField)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/getCombinedFilter(returnDataField).md '{basewidgetpath}/Methods/#getCombinedFilterreturnDataField') method to get the **DataSource**-compatible filter expression.

#####See Also#####
- [Filter Panel with Filter Builder](/concepts/05%20Widgets/DataGrid/30%20Filtering%20and%20Searching/4%20Filter%20Panel%20with%20Filter%20Builder.md '/Documentation/Guide/Widgets/{WidgetName}/Filtering_and_Searching/#Filter_Panel_with_Filter_Builder')