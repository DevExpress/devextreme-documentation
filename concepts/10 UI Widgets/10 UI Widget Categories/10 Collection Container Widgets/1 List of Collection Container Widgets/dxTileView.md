<article data-show="Content/Applications/16_1/UIWidgets/dxTileView/markup.html,
        Content/Applications/16_1/UIWidgets/dxTileView/script.js,
        Content/Applications/16_1/UIWidgets/dxTileView/styles.css">

The [TileView](/api-reference/10%20UI%20Widgets/dxTileView '/Documentation/ApiReference/UI_Widgets/dxTileView/') widget displays data items as tiles.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/actionsandliststileviewtileviewtileview/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The widget supports common Collection Container widget functionality and enables you to carry out the following common tasks described at the beginning of this article.

- [Specify data source](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/0%20Specify%20Data%20Source.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Specify_Data_Source')  
- [Handle item events](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/1%20Handle%20Item%20Events.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Handle_Item_Events')  
- [Customize item appearance](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/2%20Customize%20an%20Item%20Appearance '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Customize_an_Item_Appearance')  

In addition to common collection container functionality, the widget enables you to perform the following adjustments.

**Specify the size of a tile**

The base size of a tile is determined by the [baseItemHeight](/api-reference/10%20UI%20Widgets/dxTileView/1%20Configuration/baseItemHeight.md '/Documentation/ApiReference/UI_Widgets/dxTileView/Configuration/#baseItemHeight') and [baseItemWidth](/api-reference/10%20UI%20Widgets/dxTileView/1%20Configuration/baseItemWidth.md '/Documentation/ApiReference/UI_Widgets/dxTileView/Configuration/#baseItemWidth') options. The actual tile size depends on values of the [widthRatio](/api-reference/10%20UI%20Widgets/dxTileView/5%20Default%20Item%20Template/widthRatio.md '/Documentation/ApiReference/UI_Widgets/dxTileView/Default_Item_Template/#widthRatio') and [heightRatio](/api-reference/10%20UI%20Widgets/dxTileView/5%20Default%20Item%20Template/heightRatio.md '/Documentation/ApiReference/UI_Widgets/dxTileView/Default_Item_Template/#heightRatio') properties of an item object. The actual size of a tile is the base size multiplied by ratio.

    <!--JavaScript-->
    var states = [
        . . .
        { name: "Maine", capital: "Augusta" },
        { name: "Maryland", capital: "Annapolis" },
        { name: "Massachusetts", capital: "Boston", widthRatio:2 }
        . . .
    ]
    var tileViewOptions = {
        dataSource: states,
        baseItemHeight: 130,
        baseItemWidth: 180
    }

**Specify the margin of a tile**

The distance between tiles is specified by the [itemMargin](/api-reference/10%20UI%20Widgets/dxTileView/1%20Configuration/itemMargin.md '/Documentation/ApiReference/UI_Widgets/dxTileView/Configuration/#itemMargin') option.

    <!--JavaScript-->
    var tileViewOptions = {
        dataSource: states,
        itemMargin: 20
    }

**Display the scrollbar**

You can specify whether or not the widget displays the scrollbar. Assign *true* to the [showScrollbar](/api-reference/10%20UI%20Widgets/dxTileView/1%20Configuration/showScrollbar.md '/Documentation/ApiReference/UI_Widgets/dxTileView/Configuration/#showScrollbar') option to display the scrollbar.

    <!--JavaScript-->
    var tileViewOptions = {
        dataSource: states,
        showScrollbar: true
    }

**Specify scrolling direction**

The widget size is specified using the [width](/api-reference/10%20UI%20Widgets/DOMComponent/1%20Configuration/width.md '/Documentation/ApiReference/UI_Widgets/dxTileView/Configuration/#width') and [height](/api-reference/10%20UI%20Widgets/dxTileView/1%20Configuration/height.md '/Documentation/ApiReference/UI_Widgets/dxTileView/Configuration/#height') options. If the specified size is not enough to display all tiles, the widget enables scrolling. Scrolling direction is specified using the [direction](/api-reference/10%20UI%20Widgets/dxTileView/1%20Configuration/direction.md '/Documentation/ApiReference/UI_Widgets/dxTileView/Configuration/#direction') option, which accepts "horizontal" and "vertical" values. By default, the widget places tiles horizontally.

**Keyboard support**

An end-user can use the following keys to interact with the widget.

- Up/down/left/right arrow  
 Move focus to a neighboring item.

- Home/End
 Move focus to the first/last item.

- Enter (Space)
 Select the focused item.
</article>