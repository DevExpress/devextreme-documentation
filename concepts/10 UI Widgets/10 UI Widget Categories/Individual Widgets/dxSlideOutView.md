<article data-show="Content/Applications/16_1/UIWidgets/dxSlideOutView/markup.html,
        Content/Applications/16_1/UIWidgets/dxSlideOutView/script.js,
        Content/Applications/16_1/UIWidgets/dxSlideOutView/styles.css">

The [SlideOutView](/api-reference/10%20UI%20Widgets/dxSlideOutView '/Documentation/ApiReference/UI_Widgets/dxSlideOutView/') widget allows you to slide-out the current view to reveal a custom menu.

This widget is similar to the [SlideOut](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/1%20List%20of%20Collection%20Container%20Widgets/dxSlideOut.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#List_of_Collection_Container_Widgets/dxSlideOut') widget. In its simplest form, it consists of a panel that slides out to reveal a menu. However, unlike the **SlideOut** widget, **SlideOutView** does not hold items. It contains only content and menu panels, which enable you to use any collection widget as a menu.

**Specify the widget content**

Implement a function that renders the widget content and pass it to the [contentTemplate](/api-reference/10%20UI%20Widgets/dxSlideOutView/1%20Configuration/contentTemplate.md '/Documentation/ApiReference/UI_Widgets/dxSlideOutView/Configuration/#contentTemplate') option.

    <!--HTML-->
    <div id="mySlideOutView"></div>

<!---->

    <!--JavaScript-->
    $("#mySlideOutView").dxSlideOutView({
        contentTemplate: function(contentElement){
            contentElement.append("<h1>My Slide Out View</p>");
            contentElement.append("<p>Selected item: <b id='selecteItem'>none</b></p>");
            var showMenuButton = $("<div>");
            contentElement.append(showMenuButton);
            showMenuButton.dxButton({
                text: 'Show menu',
                onClick: function(){
                    $("#mySlideOutView").dxSlideOutView("instance").showMenu();
                }
            })
        },
        menuTemplate: function(menuElement){
            . . .
        }
    });


In **MVVM approach**, create a content template and pass its name or element to the [contentTemplate](/api-reference/10%20UI%20Widgets/dxSlideOutView/1%20Configuration/contentTemplate.md '/Documentation/ApiReference/UI_Widgets/dxSlideOutView/Configuration/#contentTemplate') option.

#####AngularJS Approach#####

    <!--HTML-->
    <div dx-slide-out-view="{ contentTemplate: 'slideOutViewContent', menuTemplate: 'slideOutViewMenu' }">
        <div data-options="dxTemplate: { name: 'slideOutViewContent' }">
            <h1>My Slide Out View</h1>
            <p>Selected item: <b>{{selectedItem}}</b></p>
            <div dx-button="{ text: 'Show menu', onClick: showMenu }"></div>
        </div>
        <div data-options="dxTemplate: { name: 'slideOutViewMenu' }">
            . . .
        </div>
    </div>

<!---->

    <!--JavaScript-->
    myApp.controller("demoController", function ($scope) {
        $scope.selectedItem = 'none';
        $scope.showMenu = function(){
            . . .
        }
    });

#####Knockout Approach#####

    <!--HTML-->
    <div data-bind="dxSlideOutView: { contentTemplate: 'slideOutViewContent', menuTemplate: 'slideOutViewMenu' }">
        <div data-options="dxTemplate: { name: 'slideOutViewContent' }">
            <h1>My Slide Out View</h1>
            <p>Selected item: <b data-bind="text: selectedItem"></b></p>
            <div data-bin="dxButton: { text: 'Show menu', onClick: showMenu }"></div>
        </div>
        <div data-options="dxTemplate: { name: 'slideOutViewMenu' }">
            . . .
        </div>
    </div>

<!---->

    <!--JavaScript-->
    var myViewModel = {
        selectedItem: ko.observable('none'),
        showMenu: function(){
            . . .
        }
    }
    ko.applyBindings(myViewModel);


#####See Also#####
- [Customize Widget Element Appearance](/concepts/10%20UI%20Widgets/80%20Common/30%20Customize%20Widget%20Element%20Appearance '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance/')
- [Customize Widget Element Appearance - MVVM Approach](/concepts/10%20UI%20Widgets/80%20Common/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance_-_MVVM_Approach/')


**Adjust the widget menu**

The **SlideOutView** widget can use any collection widget as a menu. Implement a function that renders the menu panel and pass it to the [menuTemplate](/api-reference/10%20UI%20Widgets/dxSlideOutView/1%20Configuration/menuTemplate.md '/Documentation/ApiReference/UI_Widgets/dxSlideOutView/Configuration/#menuTemplate') option.

[note]The widget requires you to append a collection widget to the menu panel element within the rendering function.

    <!--HTML-->
    <div id="mySlideOutView"></div>

<!---->

    <!--JavaScript-->
    $("#mySlideOutView").dxSlideOutView({
        contentTemplate: function(contentElement){
            . . .
        },
        menuTemplate: function(menuElement){
            menuElement.css("height", "100%");
            var menuWidget = $('<div>');
            menuElement.append(menuWidget);
            menuWidget.dxList({
                items: ['Item 1', 'Item 2', 'Item 3' ],
                onItemClick: function(itemData, itemIndex, itemElement){
                    //Process item click
                }
            });
        }
    });


In **MVVM Approach**, create a content template and pass its name or element to the [menuTemplate](/api-reference/10%20UI%20Widgets/dxSlideOutView/1%20Configuration/menuTemplate.md '/Documentation/ApiReference/UI_Widgets/dxSlideOutView/Configuration/#menuTemplate') option.

#####AngularJS Approach#####

    <!--HTML-->
    <div dx-slide-out-view="{ contentTemplate: 'slideOutViewContent', menuTemplate: 'slideOutViewMenu' }">
        <div data-options="dxTemplate: { name: 'slideOutViewContent' }">
            . . .
        </div>
        <div data-options="dxTemplate: { name: 'slideOutViewMenu' }" style="height: 100%;">
            <div dx-list="{ items: menuItems, onItemClick: itemClicked }"></div>
        </div>
    </div>

<!---->

    <!--JavaScript-->
    myApp.controller("demoController", function ($scope) {
        $scope.menuItems = ['Item 1', 'Item 2', 'Item 3' ];
        $scope.itemClicked = function(itemData, itemIndex, itemElement){
            //Process item click
        };
    });


#####Knockout Approach#####

    <!--HTML-->
    <div data-bind="dxSlideOutView: { contentTemplate: 'slideOutViewContent', menuTemplate: 'slideOutViewMenu' }">
        <div data-options="dxTemplate: { name: 'slideOutViewContent' }">
            . . .
        </div>
        <div data-options="dxTemplate: { name: 'slideOutViewMenu' }" style="height: 100%;">
            <div data-bind="dxList: { items: menuItems, onItemClick: itemClicked }"></div>
        </div>
    </div>

<!---->

    <!--JavaScript-->
    var myViewModel = {
        menuItems: ['Item 1', 'Item 2', 'Item 3' ],
        itemClicked: function(itemData, itemIndex, itemElement){
            //Process item click
        }
    }
    ko.applyBindings(myViewModel);

#####See Also#####
- [Customize Widget Element Appearance](/concepts/10%20UI%20Widgets/80%20Common/30%20Customize%20Widget%20Element%20Appearance '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance/') 
- [Customize Widget Element Appearance - MVVM Approach](/concepts/10%20UI%20Widgets/80%20Common/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance_-_MVVM_Approach/') 


**Control menu visibility**

To show or hide the menu, call the [showMenu()](/api-reference/10%20UI%20Widgets/dxSlideOutView/3%20Methods/showMenu().md '/Documentation/ApiReference/UI_Widgets/dxSlideOutView/Methods/#showMenu') or [hideMenu()](/api-reference/10%20UI%20Widgets/dxSlideOutView/3%20Methods/hideMenu().md '/Documentation/ApiReference/UI_Widgets/dxSlideOutView/Methods/#hideMenu') methods respectively. To access a widget method, obtain the widget instance first.

    <!--JavaScript-->
    var showSlideOutViewMenu = function(){
        var slideOutView = $("#mySlideOutView").dxSlideOutView('instance');
        slideOutView.showMenu();
    }
    var showSlideOutViewMenu = function(){
        var slideOutView = $("#mySlideOutView").dxSlideOutView('instance');
        slideOutView.hideMenu();
    }

Also you can use the [menuVisible](/api-reference/10%20UI%20Widgets/dxSlideOutView/1%20Configuration/menuVisible.md '/Documentation/ApiReference/UI_Widgets/dxSlideOutView/Configuration/#menuVisible') option to show or hide the menu depending on the variable value. In **jQuery approach**, set the option value using the [option(optionName, optionValue)](/api-reference/10%20UI%20Widgets/Component/3%20Methods/option(optionName_optionValue).md '/Documentation/ApiReference/UI_Widgets/dxSlideOutView/Methods/#optionoptionName_optionValue') method. In **MVVM approach**, provide two-way binding between the configuration option and the corresponding field of a view or application model.

#####AngularJS Approach#####

    <!--HTML-->
    <div dx-slide-out-view="{
        bindingOptions: {
            menuVisible: 'slideOutViewMenuVisible'
        }
    }">
        . . .
    </div>

<!---->

    <!--JavaScript-->
    myApp.controller("demoController", function ($scope) {
        $scope.slideOutViewMenuVisible = false;
        $scope.showMenu: function(){
            $scope.slideOutViewMenuVisible = true;
        };
        $scope.hideMenu: function(){
            $scope.slideOutViewMenuVisible = false;
        };
    });

#####Knockout Approach#####

    <!--HTML-->
    <div data-bind="dxSlideOutView: {
            menuVisible: slideOutViewMenuVisible
        }">
        . . .
    </div>

<!---->

    <!--JavaScript-->
    var myViewModel = {
        slideOutViewMenuVisible: ko.observable(false),
        showMenu: function(){
            this.slideOutViewMenuVisible(true);
        },
        hideMenu: function(){
            this.slideOutViewMenuVisible(false);
        }
    }
    ko.applyBindings(myViewModel);

**Menu position**

To specify the current menu position use the [menuPosition](/api-reference/10%20UI%20Widgets/dxSlideOutView/1%20Configuration/menuPosition.md '/Documentation/ApiReference/UI_Widgets/dxSlideOutView/Configuration/#menuPosition') option. This option accepts two values: *normal* and *inverted*. By default, [menuPosition](/api-reference/10%20UI%20Widgets/dxSlideOutView/1%20Configuration/menuPosition.md '/Documentation/ApiReference/UI_Widgets/dxSlideOutView/Configuration/#menuPosition') is set to *normal*. Normally, the menu is located at the left side of the screen. To display the menu at the opposite side assign 'inverted' to this option.

If you need to switch the display of the widget to right-to-left, enable the [rtlEnabled](/api-reference/10%20UI%20Widgets/DOMComponent/1%20Configuration/rtlEnabled.md '/Documentation/ApiReference/UI_Widgets/dxSlideOutView/Configuration/#rtlEnabled') option. When the option value is *true*, the text flows from right to left, and the layout the component's elements is reversed. Note, in a right-to-left representation, normal position of the menu is the right side of the screen. Assign 'inverted' to the [menuPosition](/api-reference/10%20UI%20Widgets/dxSlideOutView/1%20Configuration/menuPosition.md '/Documentation/ApiReference/UI_Widgets/dxSlideOutView/Configuration/#menuPosition') option to show the menu on the left side.

    <!--JavaScript-->
    var slideoutOptions = {
        ...
        rtlEnabled: true,
        menuPosition: 'inverted'
    }

</article>