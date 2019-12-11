---
module: ui/tile_view
export: default
inherits: ..\CollectionWidget\CollectionWidget.md
---
---
##### widgettree
dataSource: [
    {text: ""},
    {text: ""},
    {text: ""},
    {text: ""},
    {text: ""},
    {text: ""},
    {text: ""}
],
height: 300

##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **TileView** widget contains a collection of tiles. Tiles can store much more information than ordinary buttons, that is why they are very popular in apps designed for touch devices.

---
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

    <!--JavaScript-->
    $(function() {
        $("#tileView").dxTileView({
            dataSource: [
                { text: "Tile 1 Text" },
                { text: "Tile 2 Text" },
                { text: "Tile 3 Text" }
            ],
            baseItemHeight: 130,
            baseItemWidth: 180
        });
    });

    <!--HTML-->
    <div id="tileView">

#####[**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <dx-tile-view
        [dataSource]="tileViewDataSource"
        [baseItemHeight]="130"
        [baseItemWidth]=180>
    </dx-tile-view>

    <!--TypeScript-->
    import { DxTileViewModule } from "devextreme-angular"
    // ...
    export class AppComponent {
        tileViewDataSource = [
            { text: "Tile 1 Text" },
            { text: "Tile 2 Text" },
            { text: "Tile 3 Text" }
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxTileViewModule
        ],
        // ...
    })

#####[**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div dx-tile-view="{
        dataSource: tileViewDataSource,
        baseItemHeight: 130,
        baseItemWidth: 180
    }"></div>

    <!--JavaScript-->angular.module("DemoApp", ["dx"])
        .controller("DemoController", function ($scope) {
            $scope.tileViewDataSource = [
                { text: "Tile 1 Text" },
                { text: "Tile 2 Text" },
                { text: "Tile 3 Text" }
            ];
        });

#####[**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div data-bind="dxTileView: {
        dataSource: tileViewDataSource,
        baseItemHeight: 130,
        baseItemWidth: 180
    }"></div>

    <!--JavaScript-->var viewModel = {
        tileViewDataSource: [
            { text: "Tile 1 Text" },
            { text: "Tile 2 Text" },
            { text: "Tile 3 Text" }
        ]
    };
    ko.applyBindings(viewModel);

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().TileView()
        .ID("tileView")
        .DataSource(new[] {
            new { text = "Tile 1 Text" },
            new { text = "Tile 2 Text" },
            new { text = "Tile 3 Text" }
        })
        .BaseItemHeight(130)
        .BaseItemWidth(180)
    )

    <!--Razor VB-->@(Html.DevExtreme().TileView() _
            .ID("tileView") _
            .DataSource({
                New With { .text = "Tile 1 Text" },
                New With { .text = "Tile 2 Text" },
                New With { .text = "Tile 3 Text" }
            }) _
            .BaseItemHeight(130) _
            .BaseItemWidth(180)
    )

---

 

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/actionsandliststileviewtileviewtileview/"
}

#####See Also#####
- [TileView - Overview](/concepts/05%20Widgets/TileView/00%20Overview.md '/Documentation/Guide/Widgets/TileView/Overview/')