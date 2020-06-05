The focused row feature allows you to display master-detail relationships and improve navigation through records.

To allow users to focus rows, set the [focusedRowEnabled](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/focusedRowEnabled.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#focusedRowEnabled') option to **true**.

Users can control the focused row using the following mouse and keyboard commands:

<table class="dx-table">
    <tr>
        <th>Command</th><th>Action</th>
    </tr>
    <tr>
        <td>Mouse Click</td><td>Focuses a row.</td>
    </tr>
    <tr>
        <td>&uarr; / &darr;</td>
        <td>Focuses the next/previous row.</td>
    </tr>
    <tr>
        <td>&larr; / &rarr;</td>
        <td>Focuses the cell to the left/right.</td>
    </tr>
    <tr>
        <td>Esc</td>
        <td>Removes highlighting from the focused cell.</td>
    </tr>
</table>

You can specify the initially focused row using the [focusedRowKey](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/focusedRowKey.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#focusedRowKey') or [focusedRowIndex](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/focusedRowIndex.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#focusedRowIndex') option. The grid is scrolled down to it. If you also set the [focusedColumnIndex](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/focusedColumnIndex.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#focusedColumnIndex') option, a specific cell in this row is focused.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            focusedRowEnabled: true,
            focusedRowIndex: 0, // focus the first row
            // or
            // focusedRowKey: 100,
            focusedColumnIndex: 0 // focus the first cell
        });
    });

##### Angular

    <!--HTML-->
    <dx-tree-list ...
        [focusedRowEnabled]="true"
        [focusedRowIndex]="0" <!-- focus the first row -->
        [focusedColumnIndex]="0"> <!-- focus the first cell -->
    </dx-tree-list>

    <!--TypeScript-->
    import { dxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            dxTreeListModule
        ],
        // ...
    })

---

Change the same options using the [option(optionName, optionValue)](/api-reference/10%20UI%20Widgets/Component/3%20Methods/option(optionName_optionValue).md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#optionoptionName_optionValue') method to focus a row or cell programmatically. You can also use the [navigateToRow(key)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/navigateToRow(key).md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#navigateToRowkey') method to focus a row. This approach is more typical of jQuery and ASP.NET MVC Controls. With JavaScript frameworks, use property binding.

    <!--JavaScript-->
    var treeList = $("#treeListContainer").dxTreeList("instance");
    treeList.option("focusedRowKey", 100);
    // or
    treeList.navigateToRow(100);

The **TreeList** raises events before and after a row or cell is focused. Use the [onFocusedRowChanging](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/onFocusedRowChanging.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onFocusedRowChanging')/[onFocusedRowChanged](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/onFocusedRowChanged.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onFocusedRowChanged') and [onFocusedCellChanging](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/onFocusedCellChanging.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onFocusedCellChanging')/[onFocusedCellChanged](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/onFocusedCellChanged.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onFocusedCellChanged') functions to handle these events. You can perform custom actions in these functions, for instance, customize keyboard navigation, as shown in the [onFocusedCellChanging](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/onFocusedRowChanging.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onFocusedRowChanging') example.
