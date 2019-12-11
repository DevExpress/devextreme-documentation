<article data-show="Content/Applications/16_1/UIWidgets/dxList/SelectItems/markup.html,
        Content/Applications/16_1/UIWidgets/dxList/SelectItems/script.js,
        Content/Applications/16_1/UIWidgets/dxList/SelectItems/styles.css">

The [List](/api-reference/10%20UI%20Widgets/dxList '/Documentation/ApiReference/UI_Widgets/dxList/') widget allows an end-user to select single or multiple items depending on the [selectionMode](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/selectionMode.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#selectionMode') option value, which supports the "none", "single", "multiple" and "all" values.

    <!--JavaScript-->
    var listOptions = {
        dataSource: listData,
        selectionMode: "multiple"
    };

The [showSelectionControls](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/showSelectionControls.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#showSelectionControls') option enables you to display check boxes or radio buttons at items if the **selectionMode** value is "multiple" or "single" respectively.

    <!--JavaScript-->
    var listOptions = {
        dataSource: listData,
        selectionMode: "multiple",
        showSelectionControls: true
    };

You can access the list of the selected items using the [selectedItems](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/selectedItems.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#selectedItems') option. If no items are selected, the option contains an empty array.
</article>