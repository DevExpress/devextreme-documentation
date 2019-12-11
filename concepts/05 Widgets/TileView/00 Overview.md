The **TileView** widget contains a collection of tiles. Tiles can store much more information than ordinary buttons, that is why they are very popular in apps designed for touch devices.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/actions_and_lists-tileview-overview"
}

The following code adds a primitive **TileView** to your page.

---
#####jQuery

    <!--HTML--><div id="tileViewContainer"></div>

    <!--JavaScript-->$(function() {
        $("#tileViewContainer").dxTileView({
            dataSource: [
                { text: "Alabama" },
                { text: "Alaska" },
                { text: "Arizona" },
                // ...
            ]
        });
    });

##### Angular

    <!--HTML-->
    <dx-tile-view 
        [dataSource]="tileViewData">
    </dx-tile-view>

    <!--TypeScript-->
    import { DxTileViewModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        tileViewData = [
            { text: "Alabama" },
            { text: "Alaska" },
            { text: "Arizona" },
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

---

Note that all data source items in the code above follow the [Default Item Template](/api-reference/10%20UI%20Widgets/dxTileView/5%20Default%20Item%20Template '/Documentation/ApiReference/UI_Widgets/dxTileView/Default_Item_Template/') pattern. This provides a default tile appearance, which can be customized later. 

By default, the widget is oriented horizontally, but you can orient it vertically using the [direction](/api-reference/10%20UI%20Widgets/dxTileView/1%20Configuration/direction.md '/Documentation/ApiReference/UI_Widgets/dxTileView/Configuration/#direction') option. 

---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#tileViewContainer").dxTileView({
            // ...
            direction: "vertical"
        });
    });

##### Angular

    <!--HTML-->
    <dx-tile-view ...
        direction="vertical">
    </dx-tile-view>

    <!--TypeScript-->
    import { DxTileViewModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTileViewModule
        ],
        // ...
    })

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tile_View/Directions/jQuery/Light/"
}

#####See Also#####
- **Widget Basics**: [jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/') | [Angular](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/') | [AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/') | [Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/')
- [TileView - Specify the Size of Tiles](/concepts/05%20Widgets/TileView/03%20Specify%20the%20Size%20of%20Tiles.md '/Documentation/Guide/Widgets/TileView/Specify_the_Size_of_Tiles')
- [TileView - Customize Tile Appearance](/concepts/05%20Widgets/TileView/05%20Customize%20Tile%20Appearance.md '/Documentation/Guide/Widgets/TileView/Customize_Tile_Appearance')
- [TileView API Reference](/api-reference/10%20UI%20Widgets/dxTileView '/Documentation/ApiReference/UI_Widgets/dxTileView/')

[tags]tile view, tileView, collection container, collection widget, navigation, overview