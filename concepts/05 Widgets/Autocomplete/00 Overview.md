The **Autocomplete** widget is a textbox that provides suggestions while a user types into it.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/editors-autocomplete-overview" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The following code adds the **Autocomplete** to your page. The simplest configuration of the widget requires only a [dataSource](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxAutocomplete/Configuration/#dataSource') to be specified. In addition, you can specify the [placeholder](/api-reference/10%20UI%20Widgets/dxTextEditor/1%20Configuration/placeholder.md '/Documentation/ApiReference/UI_Widgets/dxAutocomplete/Configuration/#placeholder') to be displayed when the **Autocomplete** is empty.

    <!--HTML-->
    <div id="autocompleteContainer"></div>

<!---->

    <!--JavaScript-->
    var autocompleteData = [
        "Afghanistan",
        "Albania",
        // . . .
    ];
    $(function() {
        $("#autocompleteContainer").dxAutocomplete({
            dataSource: autocompleteData,
            placeholder: 'Type country name'
        });
    });

If your data is an array of objects, use the [valueExpr](/api-reference/10%20UI%20Widgets/dxAutocomplete/1%20Configuration/valueExpr.md '/Documentation/ApiReference/UI_Widgets/dxAutocomplete/Configuration/#valueExpr') option to specify the field providing suggestions.

    <!--JavaScript-->
    var autocompleteData = [
        { country: "Afghanistan", capital: "Kabul" },
        { country: "Albania", capital: "Tirana" },
        // . . .
    ];

    $(function() {
        $("#autocompleteContainer").dxAutocomplete({
            dataSource: autocompleteData,
            valueExpr: 'country',
            placeholder: 'Type country name'
        });
    });

Usually, the data field that provides suggestions is the same data field that is searched for the typed text. If in your case, it is two different fields: assign the field providing suggestions to the **valueExpr** option and the field to be searched - to the [searchExpr](/api-reference/10%20UI%20Widgets/dxDropDownList/1%20Configuration/searchExpr.md '/Documentation/ApiReference/UI_Widgets/dxAutocomplete/Configuration/#searchExpr') option. Note that **searchExpr** also accepts arrays in case you need several fields to search in.

    <!--JavaScript-->
    var autocompleteData = [
        { country: "Afghanistan", capital: "Kabul" },
        { country: "Albania", capital: "Tirana" },
        // . . .
    ];

    $(function() {
        $("#autocompleteContainer").dxAutocomplete({
            dataSource: autocompleteData,
            valueExpr: 'country',
            searchExpr: 'capital',
            placeholder: 'Type capital name'
        });
    });

#####See Also#####
- [Widget Basics - jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/')
- [Widget Basics - AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/')
- [Widget Basics - Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/')
- [Autocomplete - Customize Item Appearance](/concepts/05%20Widgets/Autocomplete/05%20Customize%20Item%20Appearance.md '/Documentation/Guide/Widgets/Autocomplete/Customize_Item_Appearance')
- [Autocomplete - Configure Search Parameters](/concepts/05%20Widgets/Autocomplete/10%20Configure%20Search%20Parameters.md '/Documentation/Guide/Widgets/Autocomplete/Configure_Search_Parameters')
- [Autocomplete API Reference](/api-reference/10%20UI%20Widgets/dxAutocomplete '/Documentation/ApiReference/UI_Widgets/dxAutocomplete/')

[tags]autocomplete, collection container, collection widget, editor, overview, data source