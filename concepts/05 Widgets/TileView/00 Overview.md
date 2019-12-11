The **TileView** widget contains a collection of tiles. Tiles can store much more information than ordinary buttons, that is why they are very popular in apps designed for touch devices.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/actions_and_lists-tileview-overview" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The following code adds a primitive **TileView** to your page.

    <!--HTML--><div id="tileViewContainer"></div>

<!---->

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

Note that all data source items in the code above follow the [Default Item Template](/api-reference/10%20UI%20Widgets/dxTileView/5%20Default%20Item%20Template '/Documentation/ApiReference/UI_Widgets/dxTileView/Default_Item_Template/') pattern. This provides a default tile appearance, which can be customized later. 

By default, the widget is oriented horizontally, but you can orient it vertically using the [direction](/api-reference/10%20UI%20Widgets/dxTileView/1%20Configuration/direction.md '/Documentation/ApiReference/UI_Widgets/dxTileView/Configuration/#direction') option. 

    <!--JavaScript-->$(function() {
        $("#tileViewContainer").dxTileView({
            // ...
            direction: "vertical"
        });
    });

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tile_View/Directions/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 5px;" target="_blank">View Demo</a>

#####See Also#####
- [Widget Basics - jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/')
- [Widget Basics - AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/')
- [Widget Basics - Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/')
- [TileView - Specify the Size of Tiles](/concepts/05%20Widgets/TileView/03%20Specify%20the%20Size%20of%20Tiles.md '/Documentation/Guide/Widgets/TileView/Specify_the_Size_of_Tiles')
- [TileView - Customize Tile Appearance](/concepts/05%20Widgets/TileView/05%20Customize%20Tile%20Appearance.md '/Documentation/Guide/Widgets/TileView/Customize_Tile_Appearance')
- [TileView API Reference](/api-reference/10%20UI%20Widgets/dxTileView '/Documentation/ApiReference/UI_Widgets/dxTileView/')

[tags]tile view, tileView, collection container, collection widget, navigation, overview