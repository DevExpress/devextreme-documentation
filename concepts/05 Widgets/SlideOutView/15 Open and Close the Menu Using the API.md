To open or close the **SlideOutView** menu programmatically, call the [showMenu()](/api-reference/10%20UI%20Widgets/dxSlideOutView/3%20Methods/showMenu().md '/Documentation/ApiReference/UI_Widgets/dxSlideOutView/Methods/#showMenu') or [hideMenu()](/api-reference/10%20UI%20Widgets/dxSlideOutView/3%20Methods/hideMenu().md '/Documentation/ApiReference/UI_Widgets/dxSlideOutView/Methods/#hideMenu') method. You can do the same thing using the [toggleMenuVisibility()](/api-reference/10%20UI%20Widgets/dxSlideOutView/3%20Methods/toggleMenuVisibility().md '/Documentation/ApiReference/UI_Widgets/dxSlideOutView/Methods/#toggleMenuVisibility') method. Pass **true** or **false** to this method to open or close the menu, respectively. For example, the following code shows how to open the slide-out menu when a user clicks the **Menu** button on the **Toolbar** (see the **onClick** function).

    <!--HTML--><div id="slideOutView">
        <div data-options="dxTemplate: { name: 'content' }">
            <div id="toolbar"></div>
            ...
        </div>
        <div data-options="dxTemplate: { name: 'menu' }">
            ...
        </div>
    </div>

    <!--JavaScript-->$(function() {
    	$("#slideOutView").dxSlideOutView({
            menuTemplate: 'menu',
            contentTemplate: 'content'
        });
    	
    	$("#toolbar").dxToolbar({
            dataSource: [{
                widget: 'dxButton',
                options: {
                    icon: 'menu',
                    onClick: function (e) {
                        $("#slideOutView").dxSlideOutView("showMenu");
                        // ---------- or ----------
                        $("#slideOutView").dxSlideOutView("toggleMenuVisibility", true);
                    }
                },
                location: 'before'
            }, {
                text: 'Title',
                location: 'center'
            }]
        });
        // ...
    });

    <!--CSS-->#slideOutView {
        height: auto;
        position: absolute;
        top: 0; 
        bottom: 0;
        width: 100%;
    }

When using AngularJS or Knockout, you can still call the methods mentioned before, but as an alternative, you can bind the [menuVisible](/api-reference/10%20UI%20Widgets/dxSlideOutView/1%20Configuration/menuVisible.md '/Documentation/ApiReference/UI_Widgets/dxSlideOutView/Configuration/#menuVisible') property of the **SlideOutView** widget to a scope property (in AngularJS) or an observable variable (in Knockout). After that, change this scope property or observable variable, and the slide-out menu will be opened or closed.

---
#####**AngularJS**

    <!--HTML--><div ng-controller="DemoController">
        <div id="slideOutView" dx-slide-out-view="{
            menuTemplate: 'menu',
            contentTemplate: 'content',
            bindingOptions: {
                menuVisible: 'isMenuVisible'
            }
        }">
            <div data-options="dxTemplate: { name: 'content' }">
                <div dx-toolbar="{
                    dataSource: [{
                        widget: 'dxButton',
                        options: {
                            icon: 'menu',
                            onClick: showMenu
                        },
                        location: 'before'
                    }, {
                        text: 'Title',
                        location: 'center'
                    }]
                }"></div>
                <!-- ... -->
            </div>
            <div data-options="dxTemplate: { name: 'menu' }">
                <!-- ... -->
            </div>
        </div>
    </div>

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller('DemoController', function DemoController($scope) {
            $scope.isMenuVisible = false;
            $scope.showMenu = function () {
                $scope.isMenuVisible = true;
            };
        });

#####**Knockout**

    <!--HTML--><div id="slideOutView" data-bind="dxSlideOutView: {
        menuTemplate: 'menu',
        contentTemplate: 'content',
        menuVisible: isMenuVisible
    }">
        <div data-options="dxTemplate: { name: 'content' }">
            <div data-bind="dxToolbar: {
                dataSource: [{
                    widget: 'dxButton',
                    options: {
                        icon: 'menu',
                        onClick: function (e) {
                            $data.isMenuVisible(true);
                        }
                    },
                    location: 'before'
                }, {
                    text: 'Title',
                    location: 'center'
                }]
            }"></div>
            ...
        </div>
        <div data-options="dxTemplate: { name: 'menu' }">
            <!-- ... -->
        </div>
    </div>


    <!--JavaScript-->var viewModel= {
        isMenuVisible: ko.observable(false)
    };

    ko.applyBindings(viewModel);

---

#####See Also#####
- [SlideOutView API Reference](/api-reference/10%20UI%20Widgets/dxSlideOutView '/Documentation/ApiReference/UI_Widgets/dxSlideOutView/')

[tags]slideOutView, slide-out menu, open, show, close, hide