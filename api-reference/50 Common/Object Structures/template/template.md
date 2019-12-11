---
type: String | function | Node | jQuery
---
---
##### shortDescription
A template notation used to specify a template for widget elements (item, title, content, etc.).

---
To use a template pass a value that has one of the following types to a template option (**itemTemplate**, **titleTemplate**, **contentTemplate**, **template**, etc.).

- String

 Specifies the name of the template to use, if the template is defined within a widget using the dxTemplate markup option.

 #####AngularJS#####

        <!--HTML-->
        <div dx-list="listOptions" dx-item-alias="itemData">
            <div data-options="dxTemplate:{ name:'customTemplate' }">
                <i>{{title}}</i><br/>
                <b>{{text}}</b>
            </div>
        </div>

    <!---->

        <!--JavaScript-->
        var myApp = angular.module('myApp', ['dx']);
        myApp.controller("demoController", function ($scope) {
            $scope.listOptions = {
                // ...
                itemTemplate: 'customTemplate'
            }
        });
        angular.element(document).ready(function () {
            angular.bootstrap(document, ['myApp']);
        });

 #####Knockout#####

        <!--HTML-->
        <div data-bind="dxList: listOptions">
            <div data-options="dxTemplate:{ name:'customTemplate' }">
                <i data-bind="title"></i><br/>
                <b data-bind="text"></b>
            </div>
        </div>

    <!---->

        <!--JavaScript-->
        var myViewModel = {
            listOptions: {
                // ...
                itemTemplate: 'customTemplate'
            }
        }
        ko.applyBindings(myViewModel);

- DOM Node or jQuery

 Specifies the element of the template to use. This approach is used if the template is specified out of the widget.

 #####AngularJS#####

        <!--HTML-->
        <script type="text/html" id="customTemplate">
            <i>{{title}}</i><br/>
            <b>{{text}}</b>
        </script>
        <div dx-list="listOptions" dx-item-alias="itemData">
        </div>

    <!---->

        <!--JavaScript-->
        var myApp = angular.module('myApp', ['dx']);
        myApp.controller("demoController", function ($scope) {
            $scope.listOptions = {
                // ...
                itemTemplate: $('#customTemplate')
            }
        });
        angular.element(document).ready(function () {
            angular.bootstrap(document, ['myApp']);
        });

 #####Knockout#####

        <!--HTML-->
        <script type="text/html" id="customTemplate">
            <i data-bind="title"></i><br/>
            <b data-bind="text"></b>
        </script>
        <div data-bind="dxList: listOptions">
        </div>

    <!---->

        <!--JavaScript-->
        var myViewModel = {
            listOptions: {
                // ...
                itemTemplate: $('#customTemplate')
            }
        }
        ko.applyBindings(myViewModel);

- function

 You can use a function that returns a template name or a template element if a template is defined within or out of the widget. This approach is almost similar to the first two approaches described above. However, it enables you to choose a template depending on certain conditions.

 #####AngularJS#####

        <!--HTML-->
        <div dx-list="listOptions" dx-item-alias="itemData">
            <div data-options="dxTemplate:{ name:'usualTemplate' }">
                <i>{{title}}</i><br/>
                <b>{{text}}</b>
            </div>
            <div data-options="dxTemplate:{ name:'importantTemplate' }">
                <h2>{{title}}</h2><br/>
                <b style="color: red;">{{text}}</b>
            </div>
        </div>

    <!---->

        <!--JavaScript-->
        var myApp = angular.module('myApp', ['dx']);
        myApp.controller("demoController", function ($scope) {
            $scope.listOptions = {
                // ...
                itemTemplate: function (itemData, itemIndex, itemElement) {
                    if(itemData.important)
                        return 'importantTemplate';
                    return usualTemplate;
                }
            }
        });
        angular.element(document).ready(function () {
            angular.bootstrap(document, ['myApp']);
        });

 #####Knockout#####

        <!--HTML-->
        <div data-bind="dxList: listOptions">
            <div data-options="dxTemplate:{ name:'standardTemplate' }">
                <i data-bind="title"></i><br/>
                <b data-bind="text"></b>
            </div>
            <div data-options="dxTemplate:{ name:'importantTemplate' }">
                <h2 data-bind="title"></h2><br/>
                <b style="color: red;" data-bind="text"></b>
            </div>
        </div>

    <!---->

        <!--JavaScript-->
        var myViewModel = {
            listOptions: {
                // ...
                itemTemplate: function (itemData, itemIndex, itemElement) {
                    if(itemData.important)
                        return 'importantTemplate';
                    return usualTemplate;
                }
            }
        }
        ko.applyBindings(myViewModel);

 Alternatively, you can use a function to render the element. In this case, the function should return nothing; hoever, it should append the required markup to the rendered element, which can be accessed using the appropriate argument. The rendering function is usually used in the jQuery approach.

        <!--JavaScript-->
        var listOptions = {
            // ...
            itemTemplate: function (itemData, itemIndex, itemElement) {
                itemElement.append("<i>itemData.title</i><br/>");
                itemElement.append("<b>itemData.text</b>");
            }
        }

 The list of arguments passed to the function depends on the option, which the function is assigned to. For example, if the function is passed to the **itemTemplate** option, it accepts the *itemData*, *itemIndex* and *itemElement* arguments. If the function is passed to the **contentTemplate** option, it accepts the *contentElement* argument. The arguments passed to this function are listed in a particular option description.

#####See Also#####
- [Customize Widget Element Appearance](/concepts/10%20UI%20Widgets/80%20Common/30%20Customize%20Widget%20Element%20Appearance '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance/')
- [Customize Widget Element Appearance - MVVM Approach](/concepts/10%20UI%20Widgets/80%20Common/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance_-_MVVM_Approach/')