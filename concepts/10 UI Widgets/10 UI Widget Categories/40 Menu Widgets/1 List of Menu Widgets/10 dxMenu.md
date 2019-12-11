<article >
  
The [Menu](/api-reference/10%20UI%20Widgets/dxMenu '/Documentation/ApiReference/UI_Widgets/dxMenu/') widget provides easy and quick navigation. It consists of an array of root items, each of which can have one or several subitems. You can customize widget appearance and behavior if your task requires it.

<div class="simulator-desktop-container" data-view="Content/Applications/16_1/UIWidgets/dxMenu/Common/markup.html, Content/Applications/16_1/UIWidgets/dxMenu/script.js, Content/Applications/16_1/UIWidgets/dxMenu/styles.css"></div>
  
To set the required array of items for this widget, use the [dataSource](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxMenu/Configuration/#dataSource') configuration option. For details on data binding, refer to the [Data Binding](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/40%20Menu%20Widgets/0%20Common%20Tasks/0%20Data%20Binding.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Menu_Widgets/#Common_Tasks/Data_Binding') topic in this article. In addition, learn other [common tasks](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/40%20Menu%20Widgets/0%20Common%20Tasks '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Menu_Widgets/#Common_Tasks') that can be performed for this widget.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/navigationmenumenumenu/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>  

**Visual Elements**
  
![dxMenu Visual Elements](/images/PhoneJS/Menus/dxMenu_VisualElements.png)

**Orientation of root items**

Menu orientation sets an order in which root items are displayed. By default, root items are displayed in a line. This orientation is called horizontal. You can set a vertical orientation. In this instance, root items are displayed in a column. To set an orientation, use the [orientation](/api-reference/10%20UI%20Widgets/dxMenu/1%20Configuration/orientation.md '/Documentation/ApiReference/UI_Widgets/dxMenu/Configuration/#orientation') option. 

    <!--JavaScript-->var menuOptions = { 
        dataSource: menuItems, 
        orientation: 'vertical'
    }

<div class="simulator-desktop-container" data-view="Content/Applications/16_1/UIWidgets/dxMenu/Orientation/markup.html, Content/Applications/16_1/UIWidgets/dxMenu/script.js, Content/Applications/16_1/UIWidgets/dxMenu/styles.css"></div>

**Submenu display mode**

By default, the first submenu is displayed when clicking a root item. You can change this behavior and display the first submenu when hovering a root item. For this purpose, set the [showFirstSubmenuMode.name](/api-reference/10%20UI%20Widgets/dxMenu/1%20Configuration/showFirstSubmenuMode/name.md '/Documentation/ApiReference/UI_Widgets/dxMenu/Configuration/showFirstSubmenuMode/#name') option to the *'onHover'* value. The [showFirstSubmenuMode.delay](/api-reference/10%20UI%20Widgets/dxMenu/1%20Configuration/showFirstSubmenuMode/delay '/Documentation/ApiReference/UI_Widgets/dxMenu/Configuration/showFirstSubmenuMode/delay/') option specifies the delay of submenu showing and hiding.

When a menu has several levels of subitems, each next submenu is displayed at the same event as the first one. To set another event, use the [showSubmenuMode](/api-reference/10%20UI%20Widgets/dxMenu/1%20Configuration/showSubmenuMode.md '/Documentation/ApiReference/UI_Widgets/dxMenu/Configuration/#showSubmenuMode') option.

    <!--JavaScript-->var menuOptions = { 
        dataSource: menuItems, 
        showFirstSubmenuMode: { 
            name: 'onHover',
            delay: {
                show: 500,
                hide: 300
            }
        },
        showSubmenuMode: { 
            name: 'onClick',
        }
    }

<div class="simulator-desktop-container" data-view="Content/Applications/16_1/UIWidgets/dxMenu/DisplayMode/markup.html, Content/Applications/16_1/UIWidgets/dxMenu/script.js, Content/Applications/16_1/UIWidgets/dxMenu/styles.css"></div>

**Direction for submenus**

By default, the first submenu is displayed at the bottom of a root item when the widget's orientation is horizontal and to the right when the orientation is vertical. You can display the first submenu at the top of the root item for horizontal orientation and to the left for vertical orientation. For this purpose, set the [submenuDirection](/api-reference/10%20UI%20Widgets/dxMenu/1%20Configuration/submenuDirection.md '/Documentation/ApiReference/UI_Widgets/dxMenu/Configuration/#submenuDirection') option to *'top'* or *'left'*, respectively.

    <!--JavaScript-->var menuOptions = { 
        dataSource: menuItems, 
        orientation: 'vertical', 
        direction: 'left'
    }
  
<!---->
  
<div class="simulator-desktop-container" data-view="Content/Applications/16_1/UIWidgets/dxMenu/Direction/markup.html, Content/Applications/16_1/UIWidgets/dxMenu/script.js, Content/Applications/16_1/UIWidgets/dxMenu/styles.css"></div>

**Handle submenu events**

The **Menu** widget enables you to handle events that are raised when you show or hide a submenu. For this purpose, assign callback functions to the following widget configuration options.

- [onSubmenuShowing](/api-reference/10%20UI%20Widgets/dxMenu/1%20Configuration/onSubmenuShowing.md '/Documentation/ApiReference/UI_Widgets/dxMenu/Configuration/#onSubmenuShowing')  
 Performed before a submenu is shown.
- [onSubmenuShown](/api-reference/10%20UI%20Widgets/dxMenu/1%20Configuration/onSubmenuShown.md '/Documentation/ApiReference/UI_Widgets/dxMenu/Configuration/#onSubmenuShown')  
 Performed when a submenu menu is shown.
- [onSubmenuHiding](/api-reference/10%20UI%20Widgets/dxMenu/1%20Configuration/onSubmenuHiding.md '/Documentation/ApiReference/UI_Widgets/dxMenu/Configuration/#onSubmenuHiding')  
 Performed before a submenu is hidden.
- [onSubmenuHidden](/api-reference/10%20UI%20Widgets/dxMenu/1%20Configuration/onSubmenuHidden.md '/Documentation/ApiReference/UI_Widgets/dxMenu/Configuration/#onSubmenuHidden')  
 Performed when a submenu menu is hidden.

<!---->

    <!--JavaScript-->var menuOptions = { 
        dataSource: menuItems, 
        onSubmenuShown: function(e){
            //process submenuShown event
        },
        onSubmenuHidden: function(e){
            //process submenuHidden event
        }
    }

**Keyboard Support**

An end-user can use the following keys to interact with the widget.

- Left arrow  
 Closes the current submenu and highlights its parent item.

- Right arrow  
 Expands the submenu of the highlighted item.

- Home/End  
 Highlights the first/last item of the current submenu.

- Esc  
 Closes the popup window and removes focus from the widget.

- Space  
 Selects the highlighted element.

- Enter  
 Performs a click on the highlighted element.
</article>