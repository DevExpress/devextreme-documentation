<article>

The [ContextMenu](/api-reference/10%20UI%20Widgets/dxContextMenu '/Documentation/ApiReference/UI_Widgets/dxContextMenu/') widget displays a context menu and gives you full control over the appearance and behavior of menu items at any nesting level.

<div class="simulator-desktop-container" data-view="Content/Applications/16_1/UIWidgets/dxContextMenu/Common/markup.html, Content/Applications/16_1/UIWidgets/dxContextMenu/script.js, Content/Applications/16_1/UIWidgets/dxContextMenu/styles.css"></div>
  
To set the required array of items for this widget, use the [dataSource](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxContextMenu/Configuration/#dataSource') configuration option. For details on data binding, refer to the [Data Binding](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/40%20Menu%20Widgets/0%20Common%20Tasks/0%20Data%20Binding.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Menu_Widgets/#Common_Tasks/Data_Binding') topic in this article. You can also review other [common tasks](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/40%20Menu%20Widgets/0%20Common%20Tasks '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Menu_Widgets/#Common_Tasks') that can be performed for this widget.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/actionsandlistscontextmenucontextmenucontextmenu/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
  
**Visual Elements**

![dxMenu Visual Elements](/images/PhoneJS/Menus/dxContextMenu_VisualElements.png)

**Target element**

To specify the element where the menu is displayed, use the [target](/api-reference/10%20UI%20Widgets/dxContextMenu/1%20Configuration/target.md '/Documentation/ApiReference/UI_Widgets/dxContextMenu/Configuration/#target') option. Leaving this option undefined is equivalent to assigning the window element.

    <!--JavaScript-->var contextMenuOptions = {
        target: "#targetElement",
        dataSource: contextMenuItems
    }

**First level display mode**


By default, a context menu is displayed when you right-click the target element. If your task requires it, you can invoke a context menu in code.

The **ContextMenu** widget includes the [show()](/api-reference/10%20UI%20Widgets/dxContextMenu/3%20Methods/show().md '/Documentation/ApiReference/UI_Widgets/dxContextMenu/Methods/#show') and [hide()](/api-reference/10%20UI%20Widgets/dxContextMenu/3%20Methods/hide().md '/Documentation/ApiReference/UI_Widgets/dxContextMenu/Methods/#hide') methods, which show and hide the widget respectively. To access a widget method, obtain the widget instance first.

    <!--JavaScript-->
    var buttonOptions = { 
        onClick:  function () {
            // Get the widget instance
            ...
            contextMenuInstance.show();
        }
    };
    var contextMenuOptions = {
        target: "#targetElement",
        dataSource: contextMenuItems,
        invokeOnlyFromCode: true      
    };

You can prohibit end users from displaying the context menu by setting the [invokeOnlyFromCode](/Documentation/ApiReference/UI_Widgets/dxContextMenu/Configuration/#invokeOnlyFromCode) option to *true*.
    
[note]To change widget visibility, you can also use the [toggle(showing)](/api-reference/10%20UI%20Widgets/dxContextMenu/3%20Methods/toggle().md '/Documentation/ApiReference/UI_Widgets/dxContextMenu/Methods/#toggle') method, which displays or hides the widget depending on the value of the **showing** parameter.  
  

Another way is to use the [visible](/api-reference/10%20UI%20Widgets/dxContextMenu/1%20Configuration/visible.md '/Documentation/ApiReference/UI_Widgets/dxContextMenu/Configuration/#visible') option. In **MVVM approach**, provide two-way binding to the option to show or hide the widget depending on the variable value. To show or hide the widget, assign true or false to the appropriate field respectively.

  
#####AngularJS Approach#####

    <!--HTML--><div id="targetElement"></div>
    <div dx-button="{
        onClick: showContextMenu
    }"></div>
    <div dx-context-menu="{
        target: '#targetElement',
        dataSource: contextMenuItems,
        invokeOnlyFromCode: true,
        bindingOptions: {
            visible: 'contextMenuVisible'
        }
    }"></div>

<!---->
  
    <!--JavaScript-->function Controller($scope) {
        $scope.contextMenuVisible = false;
        $scope.showContextMenu = function () {
            $scope.contextMenuVisible = true;
        };
        //...
    }

#####Knockout Approach#####

    <!--HTML--><div id="targetElement"></div>
    <div data-bind="dxButton: {
        onClick: function (e) {
            e.model.contextMenuVisible(true);
        }
    }"></div>
    <div id="myContextMenu" data-bind="dxContextMenu({
        target: '#targetElement',
        dataSource: contextMenuItems,
        invokeOnlyFromCode: true,
        visible: contextMenuVisible
    }"></div>

<!---->
  
    <!--JavaScript-->var viewModel = {
        contextMenuVisible = ko.observable(false);
        //...
    }
    ko.applyBindings(viewModel);


<div class="simulator-desktop-container" data-view="Content/Applications/16_1/UIWidgets/dxContextMenu/FirstLevelDisplay/markup.html, Content/Applications/16_1/UIWidgets/dxContextMenu/script.js, Content/Applications/16_1/UIWidgets/dxContextMenu/styles.css"></div>
 <!---->

**Menu positioning**

When a context menu is displayed as a result of right-clicking the target element, it is positioned with its top left corner by the mouse pointer. When a context menu in invoked in code, it is positioned at the top left corner of the target element. You can set a custom position using the [position](/api-reference/10%20UI%20Widgets/dxContextMenu/1%20Configuration/position.md '/Documentation/ApiReference/UI_Widgets/dxContextMenu/Configuration/#position') option.

    <!--JavaScript-->
    var buttonOptions = {
        onClick:  function () {
            // Get widget instance
            ...
            contextMenuInstance.show();
    };
    var contextMenuInstance = {
        target: "#targetElement",
        dataSource: contextMenuItems,
        position: {
            at: 'top right',
            my: 'top left'
        },            
        invokeOnlyFromCode: true      
    };

<div class="simulator-desktop-container" data-view="Content/Applications/16_1/UIWidgets/dxContextMenu/Positioning/markup.html, Content/Applications/16_1/UIWidgets/dxContextMenu/script.js, Content/Applications/16_1/UIWidgets/dxContextMenu/styles.css"></div>


**Secondary levels display mode**

By default, sub-menus are displayed when hovering the mouse pointer over their parent element. To specify a different action, use the [showSubmenuMode](/api-reference/10%20UI%20Widgets/dxMenuBase/1%20Configuration/showSubmenuMode '/Documentation/ApiReference/UI_Widgets/dxContextMenu/Configuration/#showSubmenuMode') option. 

    <!--JavaScript-->var contextMenuOptions = {
        target: '#targetElement',
        dataSource: contextMenuItems
        showSubmenuMode: {
            name: 'onClick'
        }
    }

<div class="simulator-desktop-container" data-view="Content/Applications/16_1/UIWidgets/dxContextMenu/SecondaryLevelDisplay/markup.html, Content/Applications/16_1/UIWidgets/dxContextMenu/script.js, Content/Applications/16_1/UIWidgets/dxContextMenu/styles.css"></div>

**Handle menu events**

The **ContextMenu** widget enables you to handle events that are raised when you show or hide the menu. For this purpose, assign callback functions to the following widget configuration options.

- [onShowing](/Documentation/ApiReference/UI_Widgets/dxMenu/Configuration/#onShowing)  
 Performed before a menu is shown.
- [onShown](/Documentation/ApiReference/UI_Widgets/dxMenu/Configuration/#onShown)  
 Performed when a menu menu is shown.
- [onHiding](/Documentation/ApiReference/UI_Widgets/dxMenu/Configuration/#onHiding)  
 Performed before a menu is hidden.
- [onHidden](/Documentation/ApiReference/UI_Widgets/dxMenu/Configuration/#onHidden)  
 Performed when a menu menu is hidden.

<!---->

    <!--JavaScript-->
    var contextMenuOptions = { 
        dataSource: menuItems, 
        onShown: function(e){
            //process shown event
        },
        onHidden: function(e){
            //process hidden event
        }
    }

**Keyboard Support**

An end-user can use the following keys to interact with the widget.

- Left arrow  
 Closes the current submenu and highlight its parent item.

- Right arrow  
 Expands the submenu of the highlighted item.

- Home/End  
 Highlights the first/last item of the current submenu.

- Esc  
 Hides the menu.

- Space  
 Selects the highlighted element.

- Enter  
 Performs a click on the highlighted element.
</article>
