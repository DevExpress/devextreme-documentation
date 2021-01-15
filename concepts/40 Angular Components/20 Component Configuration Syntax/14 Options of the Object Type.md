Use UI components prefixed with `dxo-` ("o" stands for "object"). In the following example, we configure the [TreeMap](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/HierarchicalDataStructure/Angular/Light)'s [tooltip](/api-reference/10%20UI%20Components/dxTreeMap/1%20Configuration/tooltip '/Documentation/ApiReference/UI_Components/dxTreeMap/Configuration/tooltip/') property:

    <!--HTML-->
    <dx-tree-map>
        <dxo-tooltip
            [enabled]="true"
            format="thousands">
        </dxo-tooltip>
    </dx-tree-map>

Particular properties of the object type are not implemented as nested components. These properties depend on the values of other properties and therefore cannot be typed (**columns[]**.[editorOptions](/api-reference/_hidden/GridBaseColumn/editorOptions.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#editorOptions') in the **DataGrid**, item's [editorOptions](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/editorOptions.md '/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/editorOptions.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#editorOptions'') in the **Form**, **items[]**.[options](/api-reference/_hidden/dxToolbarItem/options.md '/Documentation/ApiReference/UI_Components/dxToolbar/Configuration/items/#options') in the **Toolbar**). Specify them with an object:

    <!--HTML-->
    <dx-data-grid>
        <dxi-column
            [editorOptions]="{ width: 100 }">
        </dxi-column>
    </dx-data-grid>
 
