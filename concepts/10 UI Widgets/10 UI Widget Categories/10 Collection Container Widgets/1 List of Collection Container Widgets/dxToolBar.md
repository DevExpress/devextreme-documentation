<article data-show="Content/Applications/16_1/UIWidgets/dxToolbar/markup.html,
        Content/Applications/16_1/UIWidgets/dxToolbar/script.js">

The [Toolbar](/api-reference/10%20UI%20Widgets/dxToolbar '/Documentation/ApiReference/UI_Widgets/dxToolbar/') widget displays a set of UI elements usually used to manage screen content. The toolbar can contain plain text items and items representing a widget.

The widget supports common Collection Container widget functionality and enables you to carry out the following common tasks described at the beginning of this article.

- [Specify data source](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/0%20Specify%20Data%20Source.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Specify_Data_Source')  
- [Handle item events](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/1%20Handle%20Item%20Events.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Handle_Item_Events')  
- [Customize item appearance](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/2%20Customize%20an%20Item%20Appearance '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Customize_an_Item_Appearance')  

In addition to common collection container functionality, the widget enables you to perform the following adjustments.

**Specify an item type**

To create a toolbar item containing a widget, add an item that includes the [widget](/api-reference/10%20UI%20Widgets/dxToolbar/5%20Default%20Item%20Template/widget.md '/Documentation/ApiReference/UI_Widgets/dxToolbar/Default_Item_Template/#widget') property to the array of toolbar items. You can assign one of the following values to this field.

To configure the widget representing a toolbar item, use the [options](/api-reference/10%20UI%20Widgets/dxToolbar/5%20Default%20Item%20Template/options.md '/Documentation/ApiReference/UI_Widgets/dxToolbar/Default_Item_Template/#options') property of the data source item object. Set the options that are exposed by the specified widget.

    <!--JavaScript-->
    $(function() {
        $("#toolbarContainer").dxToolbar({
            dataSource: [{
                widget: 'dxButton',
                options: {
                    type: 'back',
                    text: 'Back',
                    onClick: function () {
                        // . . .
                    }
                }
            }, {
                widget: 'dxSelectBox',
                options: {
                    width: 140,
                    items: ['All', 'Family', 'Favorites'],
                    onItemClick: function (e) {
                        // . . .
                    }
                }
            },
            // . . .  
            ]
        });
    });

**Specify an item location**

To set a location of toolbar items, use the [location](/api-reference/10%20UI%20Widgets/dxToolbar/5%20Default%20Item%20Template/location.md '/Documentation/ApiReference/UI_Widgets/dxToolbar/Default_Item_Template/#location') option of the data source item object. You can assign one of the following values: 'before', 'after' or 'center'. To add the toolbar item to the toolbar's overflow menu, specify the [locateInMenu](/api-reference/10%20UI%20Widgets/dxToolbar/5%20Default%20Item%20Template/locateInMenu.md '/Documentation/ApiReference/UI_Widgets/dxToolbar/Default_Item_Template/#locateInMenu') option. This menu is displayed by a drop-down menu, or the [Popover](/api-reference/10%20UI%20Widgets/dxPopover '/Documentation/ApiReference/UI_Widgets/dxPopover/'), [ActionSheet](/api-reference/10%20UI%20Widgets/dxActionSheet '/Documentation/ApiReference/UI_Widgets/dxActionSheet/'), [application bar](https://msdn.microsoft.com/en-us/library/windowsphone/develop/ff431813(v=vs.105).aspx) widget based on the device on which the application is running. You can introduce a custom template for menu items using the [menuItemTemplate](/api-reference/10%20UI%20Widgets/dxToolbar/1%20Configuration/menuItemTemplate.md '/Documentation/ApiReference/UI_Widgets/dxToolbar/Configuration/#menuItemTemplate') option.

#####See Also#####
- [Customize Widget Element Appearance](/concepts/10%20UI%20Widgets/80%20Common/30%20Customize%20Widget%20Element%20Appearance '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance/')
- [Customize Widget Element Appearance - MVVM Approach](/concepts/10%20UI%20Widgets/80%20Common/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance_-_MVVM_Approach/')

<!---->

    <!--JavaScript-->
    var buttonClickHandler = function () {
        //Process a button click
    };
    var menuItemClickHandler = function (e) {
        //Process a menu item click
    };
    var toolbarItems = [
        {
            location: 'before',
            widget: 'dxButton',
            options: {
                type: 'back',
                text: 'Back',
                onClick: buttonClickHandler
            } 
        },
        {
            location: 'after', widget: 'dxDropDownMenu', options: {
                items: ["Add", "Change", "Remove"],
                onItemClick: menuItemClickHandler
            }
        },
        { location: 'center', text: 'Products' }
    ];
    var toolbarOptions = {
        dataSource: toolbarItems
    }

**Use top/bottom toolbar appearance**

When configuring the **Toolbar** widget, use the [renderAs](/api-reference/10%20UI%20Widgets/dxToolbar/1%20Configuration/renderAs.md '/Documentation/ApiReference/UI_Widgets/dxToolbar/Configuration/#renderAs') option to specify the location of this widget in an HTML template of a view. Depending on the value that you set for this option, the widget's appearance will be adjusted accordingly.

    <!--JavaScript-->
    var toolbarOptions = {
        dataSource: toolbarItems
        renderAs: 'bottomToolbar'
    }

**Keyboard support**

An end-user can move focus to the next or previous item using the **Tab** or **Shift**+**Tab** shortcuts respectively.
</article>