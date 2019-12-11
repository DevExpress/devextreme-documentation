<article data-show="Content/Applications/16_1/UIWidgets/dxList/HandleSelectionEvents/markup.html,
        Content/Applications/16_1/UIWidgets/dxList/HandleSelectionEvents/script.js,
        Content/Applications/16_1/UIWidgets/dxList/HandleSelectionEvents/styles.css">

The widget allows you to handle events that occurred when an item is selected or unselected. Declare the appropriate handling function and assign it to the [onSelectionChanged](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/onSelectionChanged.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#onSelectionChanged') configuration option.

    <!--JavaScript-->
    var selectionChanged = function(e) {
        //Process item selection
    };
    
    var listOptions = {
        dataSource: listData,
        selectionMode: "single",
        onSelectionChanged: selectionChanged
    };

An object passed to the handling function as an argument contains properties that enable you to access the widget instance, widget element, current viewModel, item data object and item element.
</article>