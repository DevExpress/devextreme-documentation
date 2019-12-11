For a minor customization of **Panorama** views, you can use the default item template. This template defines the appearance of a view depending on whether [specific fields](/api-reference/10%20UI%20Widgets/dxPanorama/5%20Default%20Item%20Template '/Documentation/ApiReference/UI_Widgets/dxPanorama/Default_Item_Template/') are present or absent from the view's data object. For example, the following code generates two **Panorama** views: the first is disabled, the second contains only text and a title.

    <!--JavaScript-->
    $(function() {
        $("#panoramaContainer").dxPanorama({
            items: [{
                title: "Main courses",
                text: "First and second courses of a meal",
                disabled: true
            }, {
                title: "Seafood",
                text: "Seafood: ocean and sea"
            }],
            title: "Online Menu"
        });
    });

Using the default item template is the easiest way to customize a view, but it lacks flexibility. Instead, you can define a custom template. For AngularJS and Knockout apps, DevExtreme provides a markup component called [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/'). The following code shows how you can use **dxTemplate** to define a template for views of the widget.

---

#####**AngularJS**

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-panorama="{
            title: 'Online Menu',
            itemTemplate: 'customTemplate',
            items: panoramaData
        }" dx-item-alias="itemObj">
            <div data-options="dxTemplate : { name: 'customTemplate' } ">
                <div>{{ itemObj.text }}</div>
                <div>
                    <img ng-repeat="image in itemObj.images" ng-attr-src="{{ image.src }}" />
                </div>
            </div>
        </div>
    </div>

    <!--JavaScript-->
    var foodImages = {
        mainCourses: [
            { src: "/content/data/products/06.jpg" },
            { src: "/content/data/products/16.jpg" },
            { src: "/content/data/products/19.jpg" }
        ],
        // . . .
    };

    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function ($scope) {
            $scope.panoramaData = [{
                title: "Main courses",
                text: "First and second courses of a meal",
                images: foodImages.mainCourses
            },
            // . . .
            ];
        });

[note] The `dx-item-alias` directive specifies the variable that is used to access the item object.

#####**Knockout**

    <!--HTML-->
    <div data-bind="dxPanorama: {
        title: 'Online Menu',
        itemTemplate: 'customTemplate',
        items: panoramaData
     }">
        <div data-options="dxTemplate : { name: 'customTemplate' } ">
            <div data-bind="text: text"></div>
            <div data-bind="foreach: images">
                <img data-bind="attr: { src: src }" />
            </div>
        </div>
    </div>

    <!--JavaScript-->
    var foodImages = {
        mainCourses: [
            { src: "/content/data/products/06.jpg" },
            { src: "/content/data/products/16.jpg" },
            { src: "/content/data/products/19.jpg" }
        ],
        // . . .
    };

    var viewModel = {
        panoramaData: [{
            title: "Main courses",
            text: "First and second courses of a meal",
            images: foodImages.mainCourses
        },
        // . . .
        ]
    };

    ko.applyBindings(viewModel);

---

If you use jQuery alone, combine the HTML markup for views manually with jQuery [DOM manipulation methods](https://api.jquery.com/category/manipulation). To apply this markup, use the [itemTemplate](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Widgets/dxPanorama/Configuration/#itemTemplate') callback function as shown in the following code.

    <!--JavaScript-->
    var foodImages = {
        mainCourses: [
            { src: "/content/data/products/06.jpg" },
            { src: "/content/data/products/16.jpg" },
            { src: "/content/data/products/19.jpg" }
        ],
        // . . .
    };

    $(function() {
        $("#panoramaContainer").dxPanorama({
            items: [{
                title: "Main courses",
                text: "First and second courses of a meal",
                images: foodImages.mainCourses
            },
            // . . .
            ],
            title: "Online Menu",
            itemTemplate: function (itemData, itemIndex, itemElement) {
                var text = $("<div />").text(itemData.text);
                var images = $("<div />");
                for (var i = 0; i < itemData.images.length; i++) {
                    images.append(
                        $("<img />").attr("src", itemData.images[i].src)
                    );
                };
                itemElement.append(text, images);
            }
        });
    });

You can also customize an individual view. For this purpose, declare a template for this view as a script and pass its `id` to the [template](/api-reference/10%20UI%20Widgets/CollectionWidget/5%20Default%20Item%20Template/template.md '/Documentation/ApiReference/UI_Widgets/dxPanorama/Default_Item_Template/#template') field. 

    <!--HTML-->
    <script id="individualTemplate" type="text/html">
        <!-- ... -->
    </script>

    <!--JavaScript-->
    var panoramaData = [{
        title: "Seafood",
        text: "Seafood: ocean and sea",
        template: $('#individualTemplate')
    },
    // . . .
    ];
    
In addition, you can use a 3rd-party template engine to customize widget appearance. For more information, see the [3rd-Party Template Engines](/concepts/05%20Widgets/zz%20Common/30%20Templates/30%203rd-Party%20Template%20Engines.md '/Documentation/Guide/Widgets/Common/Templates/#3rd-Party_Template_Engines') article.

#####See Also#####
- [Panorama Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/navigation-panorama-overview/ios7)
- [Panorama API Reference](/api-reference/10%20UI%20Widgets/dxPanorama '/Documentation/ApiReference/UI_Widgets/dxPanorama/')

[tags]panorama, item appearance, customize, templates, template, custom template, default item, default template
