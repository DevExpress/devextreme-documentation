The **TagBox** widget is an editor that allows an end user to select multiple items from a drop-down list.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/#demo/editors-tag_box-overview" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">View Demo</a>
<a href="https://www.youtube.com/watch?v=PEz46QIZhxQ&index=35&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>

The following code adds the **TagBox** to your page. The simplest configuration of the widget requires only a [dataSource](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#dataSource') to be specified. In addition, you can specify the [placeholder](/api-reference/10%20UI%20Widgets/dxSelectBox/1%20Configuration/placeholder.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#placeholder') to be displayed when the **TagBox** is empty.

    <!--HTML-->
    <div id="tagBoxContainer"></div>

<!---->

    <!--JavaScript-->
    $(function() {
        $("#tagBoxContainer").dxTagBox({
            dataSource: [
                "HD Video Player",
                "SuperHD Video Player",
                "SuperPlasma 50",
                // . . .
            ],
            placeholder: "Select products..."
        });
    });

If your data is an array of objects, specify: 

- [valueExpr](/api-reference/10%20UI%20Widgets/dxTagBox/1%20Configuration/valueExpr.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#valueExpr')     
    The data field whose value will be written into the [value](/api-reference/10%20UI%20Widgets/dxTagBox/1%20Configuration/value.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#value') option.  
- [displayExpr](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/displayExpr.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#displayExpr')     
    The data field whose value will be displayed in the drop-down list and in the input field of the widget.

<!---->

    <!--JavaScript-->
    var tagBoxData = [
        { id: 1, country: "Afghanistan" },
        { id: 2, country: "Albania" },
        // . . .
    ];

    $(function() {
        $("#tagBoxContainer").dxTagBox({
            dataSource: tagBoxData,
            valueExpr: 'id',
            displayExpr: 'country'
        });
    });

#####See Also#####
- [Widget Basics - jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/')
- [Widget Basics - AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/')
- [Widget Basics - Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/')
- [TagBox - Control the Behavior](/concepts/05%20Widgets/TagBox/03%20Control%20the%20Behavior.md '/Documentation/Guide/Widgets/TagBox/Control_the_Behavior/')
- [TagBox - Handle the Value Change Event](/concepts/05%20Widgets/TagBox/04%20Handle%20the%20Value%20Change%20Event.md '/Documentation/Guide/Widgets/TagBox/Handle_the_Value_Change_Event/')
- [TagBox - Customize Item Appearance](/concepts/05%20Widgets/TagBox/05%20Customize%20Item%20Appearance.md '/Documentation/Guide/Widgets/TagBox/Customize_Item_Appearance/')
- [TagBox - Enable Searching](/concepts/05%20Widgets/TagBox/10%20Enable%20Searching.md '/Documentation/Guide/Widgets/TagBox/Enable_Searching/')
- [TagBox - Create a User-Defined Item](/concepts/05%20Widgets/TagBox/15%20Create%20a%20User-Defined%20Item.md '/Documentation/Guide/Widgets/TagBox/Create_a_User-Defined_Item/')
- [TagBox - Keyboard Support](/concepts/05%20Widgets/TagBox/25%20Keyboard%20Support.md '/Documentation/Guide/Widgets/TagBox/Keyboard_Support/')
- [TagBox API Reference](/api-reference/10%20UI%20Widgets/dxTagBox '/Documentation/ApiReference/UI_Widgets/dxTagBox/')

[tags]tagBox, tag box, editor, overview, data source, value, display expression