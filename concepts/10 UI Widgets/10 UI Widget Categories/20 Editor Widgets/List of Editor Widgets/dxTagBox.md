<article data-show="Content/Applications/16_1/UIWidgets/dxTagBox/markup.html,
        Content/Applications/16_1/UIWidgets/dxTagBox/script.js,
        Content/Applications/16_1/UIWidgets/dxTagBox/styles.css">

The [TagBox](/api-reference/10%20UI%20Widgets/dxTagBox '/Documentation/ApiReference/UI_Widgets/dxTagBox/') widget is an editor that accepts several values from the list specified by the [dataSource](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#dataSource') option.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/editorstagboxtagboxmainfeatures/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The widget supports common Editor widget functionality and enables you to carry out the following common tasks described at the beginning of this article.

- [Get and set a widget value](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/20%20Editor%20Widgets/0%20Common%20Tasks/0%20Get%20And%20Set%20a%20Widget%20Value.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/#Common_Tasks/Get_And_Set_a_Widget_Value')  
- [Handle the value change event](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/20%20Editor%20Widgets/0%20Common%20Tasks/1%20Handle%20The%20Value%20Change%20Event.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/#Common_Tasks/Handle_The_Value_Change_Event')  

As the widget displays a collection of items, it supports common Collection Container widget functionality and enables you to carry out the following tasks.

- [Specify the data source](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/0%20Specify%20Data%20Source.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Specify_Data_Source')  
- [Handle item events](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/1%20Handle%20Item%20Events.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Handle_Item_Events')  
- [Customize item appearance](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/2%20Customize%20an%20Item%20Appearance '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Customize_an_Item_Appearance')  

In addition to common editor and collection container functionality, the widget enables you to perform the following adjustments.

**Access the selected values**

You can access the array of the selected values using the [value](/api-reference/10%20UI%20Widgets/dxTagBox/1%20Configuration/value.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#value') option. The last added value is held in the last item of the [value](/api-reference/10%20UI%20Widgets/dxTagBox/1%20Configuration/value.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#value') option. Also, you can use this option to set the initially selected values. 

**Tweak For an Item Structure**

If a data source item is a string value, the widget uses this value to display the item in the drop-down list and in the tags field. This string value is also held in the [value](/api-reference/10%20UI%20Widgets/dxTagBox/1%20Configuration/value.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#value') option if the item is selected. If a data source item is an object, you should specify which property will be used to display the item and which one will be held in the **value** options The [displayExpr](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/displayExpr.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#displayExpr') option specifies the property name whose value will be displayed in the drop-down list and in the tags field. To specify the property whose value is held in the **value** option, assign the required property name to the [valueExpr](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/valueExpr.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#valueExpr') option.

    <!--JavaScript-->
    var tagBoxData = [
        { "name": "Alabama", "capital": "Montgomery" },
        { "name": "Alaska", "capital": "Juneau" },
        { "name": "Arizona", "capital": "Phoenix" }
        . . .
    ]
    var tagBoxOptions = {
        dataSource: selectBox0Data,
        valueExpr: 'capital',
        displayExpr: 'name'
    }


**Keyboard support**

An end-user can use the following keys to interact with the widget.

- Alt+Down arrow  
 Opens the popup window.

- Alt+Up arrow  
 Closes the popup window.

- Esc  
 Closes the popup window and removes focus from the widget.

- Up/down arrow (page up/down)
 Moves to the previous/next item.

- Enter (Space)
 Applies the current item.

- Backspace  
 Unselects the last selected item.
</article>