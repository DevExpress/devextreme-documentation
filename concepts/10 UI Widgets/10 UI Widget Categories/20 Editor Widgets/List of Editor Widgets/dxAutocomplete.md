<article data-show="Content/Applications/16_1/UIWidgets/dxAutocomplete/markup.html,
        Content/Applications/16_1/UIWidgets/dxAutocomplete/script.js,
        Content/Applications/16_1/UIWidgets/dxAutocomplete/styles.css">

The [Autocomplete](/api-reference/10%20UI%20Widgets/dxAutocomplete '/Documentation/ApiReference/UI_Widgets/dxAutocomplete/') widget is a [text editor](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/20%20Editor%20Widgets/1%20Text%20Editors.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/#Text_Editors') that suggests ways of completing the text being typed.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/editorsautocompleteautocompleteautocomplete/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The widget supports common Editor widget functionality and enables you to carry out the following common tasks described at the beginning of this article.

- [Get and set a widget value](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/20%20Editor%20Widgets/0%20Common%20Tasks/0%20Get%20And%20Set%20a%20Widget%20Value.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/#Common_Tasks/Get_And_Set_a_Widget_Value')  
- [Handle the value change event](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/20%20Editor%20Widgets/0%20Common%20Tasks/1%20Handle%20The%20Value%20Change%20Event.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/#Common_Tasks/Handle_The_Value_Change_Event')  

As the widget displays a collection of items, it supports common Collection Container widget functionality and enables you to carry out the following tasks.

- [Specify the data source](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/0%20Specify%20Data%20Source.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Specify_Data_Source')  
- [Handle item events](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/1%20Handle%20Item%20Events.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Handle_Item_Events')  
- [Customize item appearance](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/2%20Customize%20an%20Item%20Appearance '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Customize_an_Item_Appearance')  

In addition to common editor and collection container functionality, the widget enables you to perform the following adjustments.

**Specify Search parameters**

The widget only displays items that satisfy the specified criterion. The widget can use the **contains** or **startswith** binary operation to filter data items. Assign the required operation name to the [searchMode](/api-reference/10%20UI%20Widgets/dxDropDownList/1%20Configuration/searchMode.md '/Documentation/ApiReference/UI_Widgets/dxAutocomplete/Configuration/#searchMode') option to specify the search criterion. The default search mode is **contains**.

By default, the **Autocomplete** widget displays a list of available completions when an end-user types in at least one character. Use the [minSearchLength](/api-reference/10%20UI%20Widgets/dxAutocomplete/1%20Configuration/minSearchLength.md '/Documentation/ApiReference/UI_Widgets/dxAutocomplete/Configuration/#minSearchLength') option to change this behavior. This option specifies the minimum number of characters that must be entered into the search box to begin a search.

You can also specify the time period in milliseconds before a search is executed using the [searchTimeout](/api-reference/10%20UI%20Widgets/dxDropDownList/1%20Configuration/searchTimeout.md '/Documentation/ApiReference/UI_Widgets/dxAutocomplete/Configuration/#searchTimeout') option.

    <!--JavaScript-->
    var autocompleteOptions = {
        dataSource: autocompleteData,
        searchMode: 'startswith',
        minSearchLength: 3,
        searchTimeout: 500
    }

**Tweak For an Item Structure**

If a data source item is a string value, the widget compares the entered text with this value to filter data items. If an item is an object, you should specify which property will be used for comparison. Assign the required property name to the [valueExpr](/api-reference/10%20UI%20Widgets/dxAutocomplete/1%20Configuration/displayExpr.md '/Documentation/ApiReference/UI_Widgets/dxAutocomplete/Configuration/#displayExpr') option.

    <!--JavaScript-->
    var autocompleteData = [
        { "name": "Alabama", "capital": "Montgomery" },
        { "name": "Alaska", "capital": "Juneau" },
        { "name": "Arizona", "capital": "Phoenix" }
        . . .
    ]
    var autocompleteOptions = {
        dataSource: autocompleteData,
        valueExpr: 'name'
    }

**Keyboard support**

An end-user can use the following keys to interact with the widget.

- Alt + Down arrow  
 Open the popup window.

- Alt + Up arrow  
 Close the popup window.

- Esc  
 Close the popup window and remove focus from the widget.

- Up/down arrow (page up/down)
 Move to the previous/next item.

- Enter (Space)
 Apply the current item.
</article>