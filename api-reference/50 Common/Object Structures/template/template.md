---
id: template
type: String | function() | Node | jQuery
---
---
##### shortDescription
A template notation used to specify templates for widget elements.

---
To use a template, pass a value with one of the following types to a widget's **...Template** option:

- **String**         
Specifies the name of the template to use if the template is defined within a widget using the [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/') markup component.

    ---
    #####Angular

        <!--HTML-->
        <dx-list ...
            itemTemplate="listItem">
            <div *dxTemplate="let itemData of 'listItem'; let itemIndex = index">
                {{itemIndex}} - {{itemData.itemProperty}}
            </div>
        </dx-list>

        <!--TypeScript-->
        import { DxListModule } from "devextreme-angular";
        // ...
        export class AppComponent {
            // ...
        }
        @NgModule({
            imports: [
                // ...
                DxListModule
            ],
            // ...
        })

    #####AngularJS

        <!--HTML-->
        <div ng-controller="DemoController">
            <div dx-list="{
                ...
                itemTemplate: 'listItem'
            }" dx-item-alias="itemData">
                <div data-options="dxTemplate: { name: 'listItem' }">
                    {{$index}} - {{itemData.itemProperty}}
                </div>
            </div>
        </div>

        <!--JavaScript-->
        angular.module('DemoApp', ['dx'])
            .controller('DemoController', function ($scope) {
                // ...
            });

    #####Knockout

        <!--HTML-->
        <div data-bind="dxList: {
            ...
            itemTemplate: 'listItem'
        }">
            <div data-options="dxTemplate: { name: 'listItem' }">
                <span data-bind="text: $index"></span> - <span data-bind="text: itemProperty"></span>
            </div>
        </div>


        <!--JavaScript-->
        var viewModel = {
            // ...
        };

        ko.applyBindings(viewModel);

    ---

- **DOM Node or jQuery**        
Specifies the page element containing the template. Useful for referring to external templates when [using a 3rd-party template engine](/concepts/05%20Widgets/zz%20Common/30%20Templates/30%203rd-Party%20Template%20Engines.md '/Documentation/Guide/Widgets/Common/Templates/#3rd-Party_Template_Engines').

        <!--JavaScript-->
        DevExpress.setTemplateEngine("underscore");

        $(function() {
            $("#list").dxList({
                // ...
                itemTemplate: $("#itemTemplate")
            });
        })

        <!--HTML-->
        <div id="list"></div>
        <script type="text/html" id="itemTemplate">
            <!-- your Underscore template -->
        </script>

- **Function**      
Combines the HTML markup using jQuery <a href="http://api.jquery.com/category/manipulation/" target="_blank">DOM manipulation methods</a>:

        <!--JavaScript-->
        $(function() {
            $("#listContainer").dxList({
                // ...
                itemTemplate: function (itemData, itemIndex, element) {
                    element.append(
                        $("<span>").text(itemIndex) - $("<span>").text(itemData.itemProperty)
                    )
                }
            });
        });

#####See Also#####
- [Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates '/Documentation/Guide/Widgets/Common/Templates/')