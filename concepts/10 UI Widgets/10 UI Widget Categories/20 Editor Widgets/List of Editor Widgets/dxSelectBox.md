<article data-show="Content/Applications/16_1/UIWidgets/dxSelectBox/markup.html,
        Content/Applications/16_1/UIWidgets/dxSelectBox/script.js,
        Content/Applications/16_1/UIWidgets/dxSelectBox/styles.css">

The [SelectBox](/api-reference/10%20UI%20Widgets/dxSelectBox '/Documentation/ApiReference/UI_Widgets/dxSelectBox/') widget is an editor that accepts a value from the list specified by the [dataSource](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#dataSource') option.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/editorsselectboxselectboxmainfeatures/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The widget supports common Editor widget functionality and enables you to carry out the following common tasks described at the beginning of this article.

- [Get and set a widget value](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/20%20Editor%20Widgets/0%20Common%20Tasks/0%20Get%20And%20Set%20a%20Widget%20Value.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/#Common_Tasks/Get_And_Set_a_Widget_Value')  
- [Handle the value change event](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/20%20Editor%20Widgets/0%20Common%20Tasks/1%20Handle%20The%20Value%20Change%20Event.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/#Common_Tasks/Handle_The_Value_Change_Event')  

As the widget displays a collection of items, it supports common Collection Container widget functionality and enables you to carry out the following tasks.

- [Specify the data source](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/0%20Specify%20Data%20Source.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Specify_Data_Source')  
- [Handle item events](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/1%20Handle%20Item%20Events.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Handle_Item_Events')  
- [Customize item appearance](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/2%20Customize%20an%20Item%20Appearance '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Customize_an_Item_Appearance')  

In addition to common editor and collection container functionality, the widget enables you to perform the following adjustments.

**Tweak For an Item Structure**

If a data source item is a string value, the widget uses this value to display the item in the drop-down list and in the text field. This string value is also held in the [value](/api-reference/10%20UI%20Widgets/dxSelectBox/1%20Configuration/value.md '/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#value') option if the item is selected. If a data source item is an object, you should specify which property will be used to display the item and which one will be held in the **value** option. The [displayExpr](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/displayExpr.md '/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#displayExpr') option specifies the property name whose value will be displayed in the drop-down list and in the text field. To specify the property whose value is held in the **value** option, assign the required property name to the [valueExpr](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/valueExpr.md '/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#valueExpr') option.

    <!--JavaScript-->
    var selectBoxData = [
        { "name": "Alabama", "capital": "Montgomery" },
        { "name": "Alaska", "capital": "Juneau" },
        { "name": "Arizona", "capital": "Phoenix" }
        . . .
    ]
    var selectBoxOptions = {
        dataSource: selectBoxData,
        valueExpr: 'capital',
        displayExpr: 'name'
    }

Use the [displayValue](/api-reference/10%20UI%20Widgets/dxDropDownList/1%20Configuration/displayValue.md '/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#displayValue') option to access the text displayed by the text field.

**Keyboard support**

An end-user can use the following keys to interact with the widget.

- Alt+Down arrow  
 Opens the popup window.

- Alt+Up arrow  
 Closes the popup window.

- Esc  
 Closes the popup window and removes focus from the widget.

- Up/down arrow (page up/down)
 If a drop-down list is displayed, this shortcut moves focus to the previous/next item. Otherwise, it switches the current widget value to the previous/next item.

- Enter (Space)
 Applies the current item.
</article>