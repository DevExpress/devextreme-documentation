The **Lookup** is a widget that allows an end user to search for an item in a collection shown in a drop-down menu.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/#demo/actions_and_lists-lookup-basics" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The following code adds the **Lookup** widget to your page. The simplest configuration requires only a [dataSource](/api-reference/10%20UI%20Widgets/dxLookup/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#dataSource') to be specified. In addition, you can define the [placeholder](/api-reference/10%20UI%20Widgets/dxLookup/1%20Configuration/placeholder.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#placeholder') to be displayed when the **Lookup** input field is empty.

    <!--HTML-->
    <div id="lookupContainer"></div>

<!---->

    <!--JavaScript-->
    $(function() {
        $("#lookupContainer").dxLookup({
            dataSource: [
                "HD Video Player",
                "SuperHD Video Player",
                "SuperPlasma 50",
                // . . .
            ],
            placeholder: "Select a product..."
        });
    });

If your data is an array of objects, specify: 

- [valueExpr](/api-reference/10%20UI%20Widgets/dxLookup/1%20Configuration/valueExpr.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#valueExpr')     
    The data field whose value will be written into the [value](/api-reference/10%20UI%20Widgets/dxLookup/1%20Configuration/value.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#value') option.
- [displayExpr](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/displayExpr.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#displayExpr')     
    The data field whose value will be displayed within the inner [List](/concepts/05%20Widgets/List/00%20Overview.md '/Documentation/Guide/Widgets/List/Overview') widget and in the input field of the **Lookup**.

<!---->

    <!--JavaScript-->
    var lookupData = [
        { id: 1, country: "Afghanistan" },
        { id: 2, country: "Albania" },
        // . . .
    ];

    $(function() {
        $("#lookupContainer").dxLookup({
            dataSource: lookupData,
            valueExpr: 'id',
            displayExpr: 'country'
        });
    });


#####See Also#####
- [Widget Basics - jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/')
- [Widget Basics - AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/')
- [Widget Basics - Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/')
- [Lookup - Configure Search Parameters](/concepts/05%20Widgets/Lookup/05%20Configure%20Search%20Parameters.md '/Documentation/Guide/Widgets/Lookup/Configure_Search_Parameters/')
- [Lookup - Enable Grouping](/concepts/05%20Widgets/Lookup/10%20Enable%20Grouping.md '/Documentation/Guide/Widgets/Lookup/Enable_Grouping/')
- [Lookup - Enable Paging](/concepts/05%20Widgets/Lookup/15%20Enable%20Paging.md '/Documentation/Guide/Widgets/Lookup/Enable_Paging/')
- [Lookup - Customize the Appearance](/concepts/05%20Widgets/Lookup/20%20Customize%20the%20Appearance '/Documentation/Guide/Widgets/Lookup/Customize_the_Appearance/')
- [Lookup - Handle the Value Change Event](/concepts/05%20Widgets/Lookup/25%20Handle%20the%20Value%20Change%20Event.md '/Documentation/Guide/Widgets/Lookup/Handle_the_Value_Change_Event/')
- [Lookup API Reference](/api-reference/10%20UI%20Widgets/dxLookup '/Documentation/ApiReference/UI_Widgets/dxLookup/')

[tags]lookup, overview, data source, value, display expression, displayExpr, valueExpr