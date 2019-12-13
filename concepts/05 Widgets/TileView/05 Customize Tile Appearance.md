For a minor customization of tiles, you can define [specific fields](/api-reference/10%20UI%20Widgets/dxTileView/1%20Configuration/items '/Documentation/ApiReference/UI_Widgets/dxTileView/Configuration/items/') in item data objects. For example, the following code generates three tiles: the first is disabled, the second is not customized, the third is hidden.

---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#tileViewContainer").dxTileView({
            dataSource: [
                { text: "Alabama", disabled: true },
                { text: "Alaska" },
                { text: "Arizona", visible: false }
            ]
        });
    });

#####Angular

    <!--TypeScript-->
    import { DxTileViewModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        tileViewData = [
            { text: "Alabama", disabled: true },
            { text: "Alaska" },
            { text: "Arizona", visible: false }
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxTileViewModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-tile-view 
        [dataSource]="tileViewData">
    </dx-tile-view>

---

If you need a more flexible solution, define a custom template. For Angular, AngularJS and Knockout apps, DevExtreme provides the [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/') markup component. The following code gives a simple example of how you can use **dxTemplate** to customize tiles.

---
##### Angular

    <!--HTML-->
    <dx-tile-view 
        [dataSource]="tileViewData"
        [itemMargin]="15"
        [baseItemHeight]="80"
        [baseItemWidth]="140"
        itemTemplate="tile">
        <div class="tile" *dxTemplate="let data of 'tile'">
            <p style="font-size:larger"><b>{{data.name}}</b></p>
            <p>Capital: <i>{{data.capital}}</i></p>
        </div>
    </dx-tile-view>

    <!--TypeScript-->
    import { DxTileViewModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        tileViewData = [
            { name: "Alabama", capital: "Montgomery" },
            { name: "Alaska", capital: "Juneau" },
            { name: "Arizona", capital: "Phoenix" },
            // ...
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxTileViewModule
        ],
        // ...
    })

    <!--CSS-->
    .tile {
        border-radius: .5em;
        text-align: center;
        color: white;
        background: gray;
    }

#####AngularJS

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-tile-view="{
            dataSource: tileViewData,
            itemMargin: 15,
            baseItemHeight: 80,
            baseItemWidth: 140,
            itemTemplate: 'tile'
        }" dx-item-alias="itemObj">
            <div class="tile" data-options="dxTemplate: { name: 'tile' }">
                <p style="font-size:larger"><b>{{ itemObj.name }}</b></p>
                <p>Capital: <i>{{ itemObj.capital }}</i></p>
            </div>
        </div>
    </div>

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller('DemoController', function ($scope) {
            $scope.tileViewData =  [
                { name: "Alabama", capital: "Montgomery" },
                { name: "Alaska", capital: "Juneau" },
                { name: "Arizona", capital: "Phoenix" },
                // ...
            ];
        });

    <!--CSS-->.tile {
        border-radius: .5em;
        text-align: center;
        color: white;
        background: gray;
    }

[note] The `dx-item-alias` directive specifies the variable that is used to access the item object.

#####Knockout

    <!--HTML-->
    <div data-bind="dxTileView: {
        dataSource: tileViewData,
        itemMargin: 15,
        baseItemHeight: 80,
        baseItemWidth: 140,
        itemTemplate: 'tile'
    }">
        <div class="tile" data-options="dxTemplate: { name: 'tile' }">
            <p style="font-size:larger"><b data-bind="text: name"></b></p>
            <p>Capital: <i data-bind="text: capital"></i></p>
        </div>
    </div>

    <!--JavaScript-->var viewModel = {
        tileViewData: [
            { name: "Alabama", capital: "Montgomery" },
            { name: "Alaska", capital: "Juneau" },
            { name: "Arizona", capital: "Phoenix" },
            // ...
        ]
    };

    ko.applyBindings(viewModel);

    <!--CSS-->.tile {
        border-radius: .5em;
        text-align: center;
        color: white;
        background: gray;
    }

---

If you use jQuery alone, use <a href="http://api.jquery.com/category/manipulation/" target="_blank">DOM manipulation methods</a> to combine the HTML markup for items. To apply this markup, use the [itemTemplate](/api-reference/10%20UI%20Widgets/dxTileView/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Widgets/dxTileView/Configuration/#itemTemplate') callback function.

    <!--JavaScript-->var tileViewData = [
        { name: "Alabama", capital: "Montgomery" },
        { name: "Alaska", capital: "Juneau" },
        { name: "Arizona", capital: "Phoenix" },
        // ...
    ];

    $(function() {
        $("#tileViewContainer").dxTileView({
            dataSource: tileViewData,
            itemTemplate: function (itemData, itemIndex, itemElement) {
                itemElement.addClass("tile");
                itemElement.append(
                    "<p style='font-size:larger'><b>" + itemData.name + "</b></p>",
                    "<p>Capital: <i>" + itemData.capital + "</i></p>"
                )
            }
        });
    });

    <!--CSS-->.tile {
        border-radius: .5em;
        text-align: center;
        color: white;
        background: gray;
    }

You can also customize an individual tile. For this purpose, declare a template for this tile as a script and pass its `id` to the [template](/api-reference/_hidden/CollectionWidgetItem/template.md '/Documentation/ApiReference/UI_Widgets/dxTileView/Configuration/items/#template') field of the item's data object.

    <!--HTML-->
    <script id="individualTileTemplate" type="text/html">
        <!-- ... -->
    </script>

    <!--JavaScript-->var tileViewData = [
        { name: "Alabama", capital: "Montgomery" },
        { name: "Alaska", capital: "Juneau", template: $("#individualTileTemplate") },
        // ...
    ];

In addition, you can use a 3rd-party template engine to customize widget appearance. For more information, see the [3rd-Party Template Engines](/concepts/05%20Widgets/zz%20Common/30%20Templates/30%203rd-Party%20Template%20Engines.md '/Documentation/Guide/Widgets/Common/Templates/#3rd-Party_Template_Engines') article.

<a href="/Demos/WidgetsGallery/Demo/Tile_View/ItemTemplate/" class="button orange small fix-width-155" style="margin-right: 5px; width:240px" target="_blank">View Built-In Template Engine Demo</a>
<a href="/Demos/WidgetsGallery/Demo/Tile_View/Item3RdPartyEngineTemplate/" class="button orange small fix-width-155" style="margin-right: 20px; width:240px" target="_blank">View 3rd-Party Template Engine Demo</a>

#####See Also#####
- [TileView - Specify the Size of Tiles](/concepts/05%20Widgets/TileView/03%20Specify%20the%20Size%20of%20Tiles.md '/Documentation/Guide/Widgets/TileView/Specify_the_Size_of_Tiles')
- [TileView Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TileView/Overview)
- [TileView API Reference](/api-reference/10%20UI%20Widgets/dxTileView '/Documentation/ApiReference/UI_Widgets/dxTileView/')

[tags]tile view, tileView, item appearance, tile appearance, customize, templates, template, custom template
