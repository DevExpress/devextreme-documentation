---
module: ui/tile_view
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
You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxTileView` jQuery plug-in.

        <!--HTML-->
        <div id="tileView"></div>

    <!---->

        <!--JavaScript-->
        var tileViewData = [
            { name: "Alabama", capital: "Montgomery", population: 4822023, area: 135765 },
            { name: "Alaska", capital: "Juneau", population: 731449, area: 1717854 },
            { name: "Arizona", capital: "Phoenix", population: 6553255, area: 295254 },
            ...
        ];
        $("#tileView").dxTileView({
            dataSource: tileViewData,
            itemMargin: 20,
            baseItemHeight: 130,
            baseItemWidth: 180
        });

- **Knockout**  
 Add a div element and apply the `dxTileView` binding to this element.

        <!--HTML-->
        <div data-bind="dxTileView: {
            dataSource: tileViewData,
            itemMargin: 20,
            baseItemHeight: 130,
            baseItemWidth: 180
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-tile-view` directive to this element.

        <!--HTML-->
        <div dx-tile-view="{
            dataSource: tileViewData,
            itemMargin: 20,
            baseItemHeight: 130,
            baseItemWidth: 180
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/concepts/10%20UI%20Widgets/0%20Basics/01%20Installation '/Documentation/Guide/UI_Widgets/Basics/Installation/') article.

Since the **TileView** widget is used to display multiple items, it supports common Collection Container widget functionality. You can find detailed information on the principles of working with the widget in the [dxTileView section](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/1%20List%20of%20Collection%20Container%20Widgets/dxTileView.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#List_of_Collection_Container_Widgets/dxTileView') of the [Collection Container Widgets](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/') article.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/actionsandliststileviewtileviewtileview/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>