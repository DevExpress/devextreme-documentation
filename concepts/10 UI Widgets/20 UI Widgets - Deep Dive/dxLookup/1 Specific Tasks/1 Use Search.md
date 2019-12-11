<article data-show="Content/Applications/16_1/UIWidgets/dxLookup/Search/markup.html,
        Content/Applications/16_1/UIWidgets/dxLookup/Search/script.js,
        Content/Applications/16_1/UIWidgets/dxLookup/Search/styles.css">

An end-user can use the incremental search to quickly find the required item within the list of available values. The **searchEnabled** option specifies the availability of the *search* field.

    <!--JavaScript-->
    var lookupOptions = {
        dataSource: lookupData,
        displayExpr: "name",
        searchEnabled: true
    }

The widget searches the required items by the value of the property specified using the [displayExpr](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/displayExpr.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#displayExpr') option. For example, if the **displayExpr** option is set to "name", the widget displays items whose **name** property value satisfies the search criterion.

The widget starts searching after the specified timeout that occurs after an end-user has modified the search box value has expired, provided that the length of the string typed in the search field is more than or equal to the minimum length specified using the [minSearchLength](/api-reference/10%20UI%20Widgets/dxDropDownList/1%20Configuration/minSearchLength.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#minSearchLength') option. You can specify the timeout using the [searchTimeout](/api-reference/10%20UI%20Widgets/dxDropDownList/1%20Configuration/searchTimeout.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#searchTimeout') option.

</article>