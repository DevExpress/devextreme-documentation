**Gallery** items are not sctrictly images. They can contain text or other elements of your choice. For a minor customization of **Gallery** items, you can define [specific fields](/api-reference/10%20UI%20Widgets/dxGallery/1%20Configuration/items '/Documentation/ApiReference/UI_Widgets/dxGallery/Configuration/items/') in item data objects. For example, the following code generates two items: one is disabled and the other has a specified <a href="http://www.w3schools.com/tags/att_img_alt.asp" target="_blank">alt attribute</a>.

---
#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#galleryContainer").dxGallery({
            dataSource: [{
                imageSrc: "https://js.devexpress.com/Content/images/doc/19_2/PhoneJS/person1.png",
                disabled: true
            }, {
                imageSrc: "https://js.devexpress.com/Content/images/doc/19_2/PhoneJS/person2.png",
                imageAlt: "Peter"
            }],
            height: 300
        });
    });

#####Angular

    <!--HTML-->
    <dx-gallery
        [dataSource]="galleryDataSource"
        [height]="300">
    </dx-gallery>

    <!--TypeScript-->
    import { DxGalleryModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        galleryDataSource = [{
            imageSrc: "https://js.devexpress.com/Content/images/doc/19_2/PhoneJS/person1.png",
            disabled: true
        }, {
            imageSrc: "https://js.devexpress.com/Content/images/doc/19_2/PhoneJS/person2.png",
            imageAlt: "Peter"
        }];
    }
    @NgModule({
        imports: [
            // ...
            DxGalleryModule
        ],
        // ...
    })

---

If you need a more flexible solution, define a custom template. For Angular, AngularJS and Knockout apps, DevExtreme provides the [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/') markup component. The following code gives a simple example of how you can use **dxTemplate** to customize gallery items.

---

#####Angular

    <!--HTML-->
    <dx-gallery
        [dataSource]="galleryDataSource"
        [height]="300"
        itemTemplate="item">
        <div *dxTemplate="let data of 'item'">
            <p><b>Name</b>: <span>{{data.name}}</span></p>
            <img src="{{data.path}}" alt="{{data.name}}" />
        </div>
    </dx-gallery>

    <!--TypeScript-->
    import { DxGalleryModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        galleryDataSource = [
            { path: "https://js.devexpress.com/Content/images/doc/19_2/PhoneJS/person1.png", name: "Maria" },
            { path: "https://js.devexpress.com/Content/images/doc/19_2/PhoneJS/person2.png", name: "John" },
            { path: "https://js.devexpress.com/Content/images/doc/19_2/PhoneJS/person3.png", name: "Xavier" }
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxGalleryModule
        ],
        // ...
    })

#####AngularJS

    <!--HTML--><div ng-controller="DemoController">
        <div dx-gallery="{
            dataSource: galleryData,
            height: 300,
            itemTemplate: 'item'
        }" dx-item-alias="item">
            <div data-options="dxTemplate: { name: 'item' }">
                <p><b>Name</b>: <span>{{item.name}}</span></p>
                <img ng-attr-src="{{item.path}}" ng-attr-alt="{{item.name}}" />
            </div>
        </div>
    </div>

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller('DemoController', function DemoController($scope) {
            $scope.galleryData = [
                { path: "https://js.devexpress.com/Content/images/doc/19_2/PhoneJS/person1.png", name: "Maria" },
                { path: "https://js.devexpress.com/Content/images/doc/19_2/PhoneJS/person2.png", name: "John" },
                { path: "https://js.devexpress.com/Content/images/doc/19_2/PhoneJS/person3.png", name: "Xavier" }
            ];
        });

[note] The `dx-item-alias` directive specifies the variable that is used to access the item object.

#####Knockout

    <!--HTML-->
    <div data-bind="dxGallery: {
        dataSource: galleryData,
        height: 300,
        itemTemplate: 'item'
    }">
        <div data-options="dxTemplate: { name: 'item' }">
            <p><b>Name</b>: <span data-bind="text: name"></span></p>
            <img data-bind="attr: { src: path, alt: name }" />
        </div>
    </div>

    <!--JavaScript-->var viewModel = {
        galleryData: [
            { path: "https://js.devexpress.com/Content/images/doc/19_2/PhoneJS/person1.png", name: "Maria" },
            { path: "https://js.devexpress.com/Content/images/doc/19_2/PhoneJS/person2.png", name: "John" },
            { path: "https://js.devexpress.com/Content/images/doc/19_2/PhoneJS/person3.png", name: "Xavier" }
        ]
    };

    ko.applyBindings(viewModel);

---

If you use jQuery alone, use <a href="http://api.jquery.com/category/manipulation/" target="_blank">DOM manipulation methods</a> to combine the HTML markup for menu items. To apply this markup, use the [itemTemplate](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Widgets/dxMenu/Configuration/#itemTemplate') callback function as shown in the following code.

    <!--JavaScript-->
    $(function () {
        $("#galleryContainer").dxGallery({
            dataSource: galleryData,
            height: 300,
            itemTemplate: function(e){
                e.itemElement.empty();
                e.itemElement.append("<p><b>Name</b>: " + e.itemData.name + "</p>");
                e.itemElement.append("<img src=\"" + e.itemData.path + "\" alt=\"" + e.itemData.name + "\"/>");
            }
        });
    });

You can also customize an individual **Gallery** item. For this purpose, declare a template for this item as a script and pass its `id` to the [template](/api-reference/_hidden/CollectionWidgetItem/template.md '/Documentation/ApiReference/UI_Widgets/dxGallery/Configuration/items/#template') field of the item's data object.

    <!--HTML--><script id="individualTemplate" type="text/html">
        <!-- ... -->
    </script>

    <!--JavaScript-->
    var galleryData = [{
        imageSrc: "https://js.devexpress.com/Content/images/doc/19_2/PhoneJS/person1.png",
        imageAlt: "Maria",
        template: $("#individualTemplate"),
    },
        // ...
    ];

In addition, you can use a 3rd-party template engine to customize widget appearance. For more information, see the [3rd-Party Template Engines](/concepts/05%20Widgets/zz%20Common/30%20Templates/30%203rd-Party%20Template%20Engines.md '/Documentation/Guide/Widgets/Common/Templates/#3rd-Party_Template_Engines') article.

<a href="/Demos/WidgetsGallery/Demo/Gallery/ItemTemplate/" class="button orange small fix-width-155" style="margin-right: 5px; width:240px" target="_blank">View Built-In Template Engine Demo</a>
<a href="/Demos/WidgetsGallery/Demo/Gallery/Item3rdPartyEngineTemplate/" class="button orange small fix-width-155" style="margin-right: 20px; width:240px" target="_blank">View 3rd-Party Template Engine Demo</a>

#####See Also#####
- [Gallery - Transform and Combine Images](/concepts/05%20Widgets/Gallery/25%20Transform%20and%20Combine%20Images.md '/Documentation/Guide/Widgets/Gallery/Transform_and_Combine_Images/')
- [Gallery API Reference](/api-reference/10%20UI%20Widgets/dxGallery '/Documentation/ApiReference/UI_Widgets/dxGallery/')

[tags]gallery, item appearance, customize, templates