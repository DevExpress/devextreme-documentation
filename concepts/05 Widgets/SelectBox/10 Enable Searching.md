The **SelectBox** widget allows an end user to search through its items. By default, this feature is disabled. To enable it, assign *true* to the [searchEnabled](/api-reference/10%20UI%20Widgets/dxSelectBox/1%20Configuration/searchEnabled.md '/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#searchEnabled') option. To specify which data fields should be searched, use the [searchExpr](/api-reference/10%20UI%20Widgets/dxDropDownList/1%20Configuration/searchExpr.md '/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#searchExpr') option. If you need to search several fields, assign an _array_ of field names to this option.

    <!--JavaScript-->
    var selectBoxData = [
        { id: 1, country: "Afghanistan", capital: "Kabul" },
        { id: 2, country: "Albania", capital: "Tirana" },
        // . . .
    ];

    $(function() {
        $("#selectBoxContainer").dxSelectBox({
            dataSource: selectBoxData,
            valueExpr: 'id',
            displayExpr: 'country',
            searchEnabled: true,
            searchExpr: ['country', 'capital']
        });
    });

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Select_Box/SearchAndEditing/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

By default, when a user types a string in the input field, the **SelectBox** suggests all items that _contain_ this string. If you want the **SelectBox** to suggest only those items that _start_ with the input string, assign *'startswith'* to the [searchMode](/api-reference/10%20UI%20Widgets/dxDropDownList/1%20Configuration/searchMode.md '/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#searchMode') option.

    <!--JavaScript-->
    $(function() {
        $("#selectBoxContainer").dxSelectBox({
            dataSource: selectBoxData,
            valueExpr: 'id',
            displayExpr: 'country',
            searchEnabled: true,
            searchExpr: 'country',
            searchMode: 'startswith'
        });
    });

There is a delay between the moment a user finishes typing and the moment the search is executed. To increase or descrease it, use the [searchTimeout](/api-reference/10%20UI%20Widgets/dxDropDownList/1%20Configuration/searchTimeout.md '/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#searchTimeout') option. The delay is measured in milliseconds.

    <!--JavaScript-->
    $(function() {
        $("#selectBoxContainer").dxSelectBox({
            dataSource: selectBoxData,
            valueExpr: 'id',
            displayExpr: 'country',
            searchEnabled: true,
            searchExpr: 'country',
            searchTimeout: 1000
        });
    });

By default, the **SelectBox** widget starts searching after a user has typed at least one character. To increase the number of characters that triggers the search, use the **minSearchLength** option. 

    <!--JavaScript-->
    $(function() {
        $("#selectBoxContainer").dxSelectBox({
            dataSource: selectBoxData,
            valueExpr: 'id',
            displayExpr: 'country',
            searchEnabled: true,
            searchExpr: "country",
            minSearchLength: 3
        });
    });

#####See Also#####
- [SelectBox - Create a User-Defined Item](/concepts/05%20Widgets/SelectBox/15%20Create%20a%20User-Defined%20Item.md '/Documentation/Guide/Widgets/SelectBox/Create_a_User-Defined_Item/')
- [SelectBox - Handle the Value Change Event](/concepts/05%20Widgets/SelectBox/04%20Handle%20the%20Value%20Change%20Event.md '/Documentation/Guide/Widgets/SelectBox/Handle_the_Value_Change_Event/')
- [SelectBox API Reference](/api-reference/10%20UI%20Widgets/dxSelectBox '/Documentation/ApiReference/UI_Widgets/dxSelectBox/')

[tags]selectBox, select box, editor, search, search mode, search expression, time interval, delay, search timeout, min search length