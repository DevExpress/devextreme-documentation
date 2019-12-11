The **Lookup** widget allows a user to search through its items. Moreover, the widget offers suggestions while the user types a value into the search box. Usually, the data field that provides suggestions is the same data field that is searched for the typed value. If in your case, it is two different fields: assign the field providing suggestions to the **valueExpr** option and the field to be searched - to the **searchExpr** option.  If you need to search several fields, assign an array of field names to the **searchExpr** option.

    <!--JavaScript-->
    var lookupData = [
        { country: "Afghanistan", capital: "Kabul" },
        { country: "Albania", capital: "Tirana" },
        // ...
    ];

    $(function() {
        $("#lookupContainer").dxLookup({
            dataSource: lookupData,
            valueExpr: 'country',
            displayExpr: 'country',
            searchExpr: 'capital',
            placeholder: 'Select country'
        });
    });

The **Lookup** widget can provide suggestions in two different modes: *'contains'* (by default) and *'startswith'*. You can use the [searchMode](/api-reference/10%20UI%20Widgets/dxDropDownList/1%20Configuration/searchMode.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#searchMode') option to change the mode. In addition, you can use the [searchPlaceholder](/api-reference/10%20UI%20Widgets/dxLookup/1%20Configuration/searchPlaceholder.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#searchPlaceholder') option to specify a placeholder for an empty search box.

    <!--JavaScript-->
    var lookupData = [
        { country: "Afghanistan", capital: "Kabul" },
        { country: "Albania", capital: "Tirana" },
        // . . .
    ];

    $(function() {
        $("#lookupContainer").dxLookup({
            dataSource: lookupData,
            valueExpr: 'country',
            searchMode: 'startswith',
            searchPlaceholder: 'Type country name'
        });
    });

By default, the **Lookup** widget starts providing suggestions once an end user types the first character. To increase the number of characters that triggers suggestions, use the [minSearchLength](/api-reference/10%20UI%20Widgets/dxDropDownList/1%20Configuration/minSearchLength.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#minSearchLength') option. 

    <!--JavaScript-->
    $(function() {
        $("#lookupContainer").dxLookup({
            // . . .
            minSearchLength: 3
        });
    });

You can also specify the time interval the widget should wait before providing suggestions. Assign this time interval measured in milliseconds to the [searchTimeout](/api-reference/10%20UI%20Widgets/dxDropDownList/1%20Configuration/searchTimeout.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#searchTimeout') option.

    <!--JavaScript-->$(function() {
        $("#lookupContainer").dxLookup({
            // . . .
            searchTimeout: 500
        });
    });

By default, the **Lookup** widget clears previous search results before the drop-down menu is displayed. To keep them, assign *false* to the [cleanSearchOnOpening](/api-reference/10%20UI%20Widgets/dxLookup/1%20Configuration/cleanSearchOnOpening.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#cleanSearchOnOpening') option.

    <!--JavaScript-->$(function() {
        $("#lookupContainer").dxLookup({
            // . . .
            cleanSearchOnOpening: false
        });
    });

In case you need to disable searching, assign *false* to the [searchEnabled](/api-reference/10%20UI%20Widgets/dxLookup/1%20Configuration/searchEnabled.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#searchEnabled') option.

    <!--JavaScript-->$(function() {
        $("#lookupContainer").dxLookup({
            // . . .
            searchEnabled: false
        });
    });

#####See Also#####
- [Lookup - Enable Grouping](/concepts/05%20Widgets/Lookup/10%20Enable%20Grouping.md '/Documentation/Guide/Widgets/Lookup/Enable_Grouping/')
- [Lookup - Enable Paging](/concepts/05%20Widgets/Lookup/15%20Enable%20Paging.md '/Documentation/Guide/Widgets/Lookup/Enable_Paging/')
- [Lookup Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Lookup/Basics)
- [Lookup API Reference](/api-reference/10%20UI%20Widgets/dxLookup '/Documentation/ApiReference/UI_Widgets/dxLookup/')

[tags]lookup, search, search mode, time interval, min search length, disable searching, placeholder, clean search parameters, searchExpr