For a minor customization of **NavBar** items, you can define [specific fields](/api-reference/10%20UI%20Widgets/dxTabs/1%20Configuration/items '/Documentation/ApiReference/UI_Widgets/dxNavBar/Configuration/items/') in item data objects. For example, the following code generates three items. Each of them has an [icon](/concepts/60%20Themes%20and%20Styles/30%20Icons/10%20Built-In%20Icon%20Library.md '/Documentation/Guide/Themes_and_Styles/Icons/#Built-In_Icon_Library'). In addition, the second item is disabled, and the third item has a badge.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#navBarContainer").dxNavBar({
            items: [
                { text: "User", icon: "user" },
                { text: "Find", icon: "find", disabled: true },
                { text: "Favorites", icon: "favorites", badge: "New" }
            ]
        });
    });

##### Angular

    <!--HTML-->
    <dx-nav-bar>
        <dxi-item text="User" icon="user"></dxi-item>
        <dxi-item text="Find" icon="find" [disabled]="true"></dxi-item>
        <dxi-item text="Favorites" icon="favorites" badge="New"></dxi-item>
    </dx-nav-bar>

    <!--TypeScript-->
    import { DxNavBarModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxNavBarModule
        ],
        // ...
    })

---

If you need a more flexible solution, define a custom template. For Angular, AngularJS, and Knockout apps, DevExtreme provides the [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/') markup component. The following code gives a simple example of how you can use **dxTemplate** to customize items in the **NavBar**.

---
##### Angular

    <!--HTML-->
    <dx-nav-bar
        itemTemplate="customTemplate">
        <div *dxTemplate="let item of 'customTemplate'">
            <div class="dx-icon-{{item.icon}}"></div>
            <p class="navbar-template-text">{{item.text}}</p>
        </div>
        <dxi-item text="User" icon="user"></dxi-item>
        <dxi-item text="Find" icon="find"></dxi-item>
        <dxi-item text="Favorites" icon="favorites"></dxi-item>
        <dxi-item text="About" icon="info"></dxi-item>
        <dxi-item text="Home" icon="home"></dxi-item>
        <dxi-item text="URI" icon="tips"></dxi-item>
    </dx-nav-bar>

    <!--TypeScript-->
    import { DxNavBarModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxNavBarModule
        ],
        // ...
    })

    <!--CSS-->
    .navbar-template-text {
        font-size: 12px;
        margin-top: 10px;
    }

##### AngularJS

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-nav-bar="{
            items: navItems,
            itemTemplate: 'customTemplate'
        }" dx-item-alias="itemObj">
            <div data-options="dxTemplate: { name: 'customTemplate' }">
                <div class="dx-icon-{{ itemObj.icon }}"></div>
                <p style="font-size:12px; margin-top:10px">{{ itemObj.text }}</p>
            </div>
        </div>
    </div>

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function ($scope) {
            $scope.navItems = [
                { text: "User", icon: "user" },
                { text: "Find", icon: "find" },
                { text: "Favorites", icon: "favorites" },
                { text: "About", icon: "info" },
                { text: "Home", icon: "home" },
                { text: "URI", icon: "tips" }
            ];
        });

[note] The `dx-item-alias` directive specifies the variable that is used to access the item object.

##### Knockout

    <!--HTML-->
    <div data-bind="dxNavBar:{
        items: navItems,
        itemTemplate: 'customTemplate'
    }">
        <div data-options="dxTemplate: { name: 'customTemplate' }">
            <div data-bind="css: 'dx-icon-' + icon"></div>
            <p style="font-size:12px; margin-top:10px" data-bind="text: text"></p>
        </div>
    </div>

    <!--JavaScript-->
    var viewModel = {
        navItems: [
            { text: "User", icon: "user" },
            { text: "Find", icon: "find" },
            { text: "Favorites", icon: "favorites" },
            { text: "About", icon: "info" },
            { text: "Home", icon: "home" },
            { text: "URI", icon: "tips" }
        ]
    };

    ko.applyBindings(viewModel);

---

If you use jQuery alone, use <a href="http://api.jquery.com/category/manipulation/" target="_blank">DOM manipulation methods</a> to combine the HTML markup for items. To apply this markup, use the [itemTemplate](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Widgets/dxNavBar/Configuration/#itemTemplate') callback function as shown in the following code.

    <!--JavaScript-->
    $(function() {
        $("#navBarContainer").dxNavBar({
            items: [
                { text: "User", icon: "user" },
                { text: "Find", icon: "find" },
                // ...
            ],
            itemTemplate: function (itemData, itemIndex, itemElement) {
                var icon = $("<div />").addClass('dx-icon-' + itemData.icon);
                var label = $("<p />").attr("style", "font-size:12px; margin-top:10px")
                                      .text(itemData.text)
                itemElement.append(icon, label);
            }
        });
    });

You can also customize an individual navigation item. For this purpose, declare a template for this item as a script and pass its `id` to the [template](/api-reference/_hidden/CollectionWidgetItem/template.md '/Documentation/ApiReference/UI_Widgets/dxNavBar/Configuration/items/#template') field. 

    <!--HTML--><script id="individualTemplate" type="text/html">
        <!-- ... -->
    </script>

    <!--JavaScript-->var navItems = [
        { text: "User" },
        { text: "Find" },
        { text: "About", template: $("#individualTemplate") },
        // ...
    ];

In addition, you can use a 3rd-party template engine to customize widget appearance. For more information, see the [3rd-Party Template Engines](/concepts/05%20Widgets/zz%20Common/30%20Templates/30%203rd-Party%20Template%20Engines.md '/Documentation/Guide/Widgets/Common/Templates/#3rd-Party_Template_Engines') article.

#####See Also#####
- [NavBar - Items Selection](/concepts/05%20Widgets/NavBar/10%20Items%20Selection.md '/Documentation/Guide/Widgets/NavBar/Items_Selection/')
- [NavBar Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Navbar/Overview)
- [NavBar API Reference](/api-reference/10%20UI%20Widgets/dxNavBar '/Documentation/ApiReference/UI_Widgets/dxNavBar/')

[tags]nav bar, navBar, navigation bar, item appearance, customize, templates, template, custom template