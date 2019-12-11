If list content height exceeds the widget height, an end user can scroll content vertically to view the required item.

Scrolling is enabled by default. However, you can set the [enableScrolling](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/scrollingEnabled.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#scrollingEnabled') option to *false* to disable it.

If scrolling is enabled, you can specify whether or not a user can scroll the widget by content and by a scroll bar thumb using the [scrollByContent](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/scrollByContent.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#scrollByContent') and [scrollByThumb](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/scrollByThumb.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#scrollByThumb') options respectively.

    <!--JavaScript-->
    var listOptions: {
        . . .
        scrollByThumb: true,
        scrollByContent: true
    }

The **List** widget also enables you to scroll its content programmatically using the [scrollBy(distance)](/api-reference/10%20UI%20Widgets/dxList/3%20Methods/scrollBy(distance).md '/Documentation/ApiReference/UI_Widgets/dxList/Methods/#scrollBydistance'), [scrollTo(location)](/api-reference/10%20UI%20Widgets/dxList/3%20Methods/scrollTo(location).md '/Documentation/ApiReference/UI_Widgets/dxList/Methods/#scrollTolocation'), [scrollToItem(itemElement)](/api-reference/10%20UI%20Widgets/dxList/3%20Methods/scrollToItem(itemElement).md '/Documentation/ApiReference/UI_Widgets/dxList/Methods/#scrollToItemitemElement'), [scrollToItem(itemIndex)](/api-reference/10%20UI%20Widgets/dxList/3%20Methods/scrollToItem(itemIndex).md '/Documentation/ApiReference/UI_Widgets/dxList/Methods/#scrollToItemitemIndex') or [scrollTop()](/api-reference/10%20UI%20Widgets/dxList/3%20Methods/scrollTop().md '/Documentation/ApiReference/UI_Widgets/dxList/Methods/#scrollTop') method.

    <!--JavaScript-->
    // Get widget instance
    . . .
    listInstance.scrollToItem(15);

In addition, you can execute a custom action once the list has been scrolled. Handle the [scroll](/api-reference/10%20UI%20Widgets/dxList/4%20Events/scroll.md '/Documentation/ApiReference/UI_Widgets/dxList/Events/#scroll') event or pass the required function to the [onScroll](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/onScroll.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#onScroll') option.

#####See Also#####
- [Handle Events - jQuery](/concepts/10%20UI%20Widgets/0%20Basics/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_jQuery/#Handle_Events')
- [Handle Events - AngularJS](/concepts/10%20UI%20Widgets/0%20Basics/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_AngularJS/#Handle_Events')
- [Handle Events - Knockout](/concepts/10%20UI%20Widgets/0%20Basics/25%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_Knockout/#Handle_Events')
