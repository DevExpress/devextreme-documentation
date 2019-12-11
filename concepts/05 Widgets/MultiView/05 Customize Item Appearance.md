To customize views in the **MultiView**, define a custom template for them. For AngularJS and Knockout apps, DevExtreme provides a markup component called [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/'). The following code shows how you can use **dxTemplate** to define a template for **MultiView** views.

**AngularJS**

    <!--HTML-->
    <div ng-controller="DemoController" style="height: 100%;">
        <div dx-multi-view="{
            dataSource: multiViewItems,
            itemTemplate: 'item'
        }" dx-item-alias="itemObj">
            <div data-options="dxTemplate: { name: 'item' }">
                <div style="margin:25px;">
                    <h1>{{ itemObj.title }}</h1>
                    <div style="text-align:left;" ng-repeat="(key, value) in itemObj.data">
                        <p>{{ key }}: <b>{{ value }}</b></p>
                    </div>
                </div>
            </div>
        </div>
    </div>

<!---->

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function ($scope) {
            $scope.multiViewItems = [{
                title: "Personal Data",
                data: {
                    firstName: "John",
                    lastName: "Smith",
                    birthYear: 1986
                }
            }, {
                title: "Contacts",
                data: {
                    phone: "(555)555-5555",
                    email: "John.Smith@example.com"
                }
            },
            // . . . 
            ];
        });

[note] The `dx-item-alias` directive specifies the variable that is used to access the item object.

**Knockout**

    <!--HTML-->
    <div data-bind="dxMultiView: { dataSource: multiViewItems, itemTemplate: 'item' }">
        <div data-options="dxTemplate: { name: 'item' } ">
            <div style="margin:25px;">
                <h1 data-bind="text: title"></h1>
                <div style="text-align:left;" data-bind="foreach: dataArray">
                    <p><span data-bind="text: propertyKey">
                    </span>: <b data-bind="text: propertyValue"></b></p>
                </div>
            </div>
        </div>
    </div>

<!---->

    <!--JavaScript-->
    var viewModel = {
        multiViewItems: new DevExpress.data.DataSource({
            store: [{
                title: "Personal Data",
                data: {
                    firstName: "John",
                    lastName: "Smith",
                    birthYear: 1986
                }
            }, {
                title: "Contacts",
                data: {
                    phone: "(555)555-5555",
                    email: "John.Smith@example.com"
                }
            },
            // . . .
            ],
            // Brings each item of the array to a specific structure
            map: function (itemData) {
                itemData.text = itemData.title;
                itemData.dataArray = $.map(itemData.data, function (value, key) {
                    return {
                        propertyKey: key,
                        propertyValue: value
                    }
                });
                return itemData;
            }
        })
    };

    ko.applyBindings(viewModel);

If you use jQuery alone, combine the HTML markup for items manually with jQuery [DOM manipulation methods](https://api.jquery.com/category/manipulation). To apply this markup, use the [itemTemplate](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Widgets/dxMultiView/Configuration/#itemTemplate') callback function as shown in the following code.

    <!--JavaScript-->
    var multiViewItems = [{
        title: "Personal Data",
        data: {
            firstName: "John",
            lastName: "Smith",
            birthYear: 1986
        }
    }, {
        title: "Contacts",
        data: {
            phone: "(555)555-5555",
            email: "John.Smith@example.com"
        }
    },
    // . . . 
    ];

    $(function() {
        $("#multiViewContainer").dxMultiView({
            dataSource: multiViewItems,
            itemTemplate: function (itemData, itemIndex, itemElement) {
                var mainContainer = $("<div style='margin:25px;'>");
                mainContainer.append("<h1>" + itemData.title + "</h1>");

                var info = $("<div style='text-align:left;'>");
                for (var field in itemData.data) {
                    info.append("<p>" + field + ": <b>" + itemData.data[field] + "</b></p>");
                }
                mainContainer.append(info);
                itemElement.append(mainContainer);
            }
        });
    });

You can also customize an individual view. For this purpose, declare a template for this view as a script and pass its `id` to the [template](/api-reference/10%20UI%20Widgets/CollectionWidget/5%20Default%20Item%20Template/template.md '/Documentation/ApiReference/UI_Widgets/dxMultiView/Default_Item_Template/#template') field. 

    <!--HTML-->
    <script id="individualTemplate" type="text/html">
        <!-- ... -->
    </script>

<!---->

    <!--JavaScript-->var multiViewItems = [
        { text: "Personal Data" },
        { text: "Contacts", template: $('#individualTemplate') },
        { text: "Address" }
    ];

In addition, you can use a 3rd-party template engine to customize widget appearance. For more information, see the [Use an Alternative Template Engine](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/30%20Customize%20Widget%20Element%20Appearance/5%20Use%20an%20Alternative%20Template%20Engine.md '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/#Use_an_Alternative_Template_Engine') article.

#####See Also#####
- [Customize Widget Element Appearance](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/#Customize_Widget_Element_Appearance/)
- [Customize Widget Element Appearance - MVVM Approach](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/')
- [MultiView - Switch Between Views](/concepts/05%20Widgets/MultiView/10%20Switch%20Between%20Views.md '/Documentation/Guide/Widgets/MultiView/Switch_Between_Views/')
- [MultiView - Loop the Views](/concepts/05%20Widgets/MultiView/15%20Loop%20the%20Views.md '/Documentation/Guide/Widgets/MultiView/Loop_the_Views/')
- [MultiView Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/navigation-multi_view-overview)
- [MultiView API Reference](/api-reference/10%20UI%20Widgets/dxMultiView '/Documentation/ApiReference/UI_Widgets/dxMultiView/')

[tags]multi view, multiView, item appearance, customize, templates, template, custom template
