<article data-show="Content/Applications/16_1/UIWidgets/dxList/ReorderItems/markup.html,
        Content/Applications/16_1/UIWidgets/dxList/ReorderItems/script.js,
        Content/Applications/16_1/UIWidgets/dxList/ReorderItems/styles.css">

The **List** widget supports the reordering of items by an end-user. Set the [allowItemReordering](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/allowItemReordering.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#allowItemReordering') option to *true* to allow a user to reorder items. To change an item position, drag the required item by the special icon located at the right side of the item and drop it over the target position.

    <!--JavaScript-->
    var listOptions = {
        dataSource: listData,
        allowItemReordering: true
    };

After an item is moved to another position, the widget fires the [itemReordered](/api-reference/10%20UI%20Widgets/dxList/4%20Events/itemReordered.md '/Documentation/ApiReference/UI_Widgets/dxList/Events/#itemReordered') event. To handle this event, pass a function to the [onItemReordered](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/onItemReordered.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#onItemReordered') option or subscribe the **itemReordered** event. 

[note]The item reordering feature requires the [useNativeScrolling](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/useNativeScrolling.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#useNativeScrolling') option to be set to *false* in Windows Phone 8 and Android.

#####See Also#####
- [Handle Events - jQuery](/concepts/10%20UI%20Widgets/0%20Basics/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_jQuery/#Handle_Events')
- [Handle Events - AngularJS](/concepts/10%20UI%20Widgets/0%20Basics/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_AngularJS/#Handle_Events')
- [Handle Events - Knockout](/concepts/10%20UI%20Widgets/0%20Basics/25%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_Knockout/#Handle_Events')

</article>