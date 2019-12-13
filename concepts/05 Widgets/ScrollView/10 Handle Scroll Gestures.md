The **ScrollView** raises the [pullDown](/api-reference/10%20UI%20Widgets/dxScrollView/4%20Events/pullDown.md '/Documentation/ApiReference/UI_Widgets/dxScrollView/Events/#pullDown') event when a user performs the <a href="https://en.wikipedia.org/wiki/Pull-to-refresh" target="_blank">pull-to-refresh gesture</a>. [Handle this event](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events') to refresh the content of the **ScrollView**. Note that the handling function should end with a call of the [release()](/api-reference/10%20UI%20Widgets/dxScrollView/3%20Methods/release(preventScrollBottom).md '/Documentation/ApiReference/UI_Widgets/dxScrollView/Methods/#releasepreventScrollBottom') method to release the **ScrollView**.

    <!--JavaScript-->
    $(function() {
        $("#scrollViewContainer").dxScrollView({
            height: 500,
            bounceEnabled: true,
            onPullDown: function (e) {
                // Commands that refresh the content go here
                e.component.release();
            }
        });
    });

[note]To enable the pull-to-refresh gesture on desktops, set the [bounceEnabled](/api-reference/10%20UI%20Widgets/dxScrollable/1%20Configuration/bounceEnabled.md '/Documentation/ApiReference/UI_Widgets/dxScrollView/Configuration/#bounceEnabled') option to **true**.

If an end user scrolls the content down to the bottom, the **ScrollView** raises the [reachBottom](/api-reference/10%20UI%20Widgets/dxScrollView/4%20Events/reachBottom.md '/Documentation/ApiReference/UI_Widgets/dxScrollView/Events/#reachBottom') event. You can handle it using the [onReachButtom](/api-reference/10%20UI%20Widgets/dxScrollView/1%20Configuration/onReachBottom.md '/Documentation/ApiReference/UI_Widgets/dxScrollView/Configuration/#onReachBottom') function. Note that this function should also contain a call of the [release()](/api-reference/10%20UI%20Widgets/dxScrollView/3%20Methods/release(preventScrollBottom).md '/Documentation/ApiReference/UI_Widgets/dxScrollView/Methods/#releasepreventScrollBottom') method. 

    <!--JavaScript-->
    $(function() {
        $("#scrollViewContainer").dxScrollView({
            height: 500,
            onReachBottom: function (e) {
                // Event handling commands go here
                e.component.release();
            }
        });
    });

If you want to process each scroll gesture performed by a user, handle the [scroll](/api-reference/10%20UI%20Widgets/dxScrollable/4%20Events/scroll.md '/Documentation/ApiReference/UI_Widgets/dxScrollView/Events/#scroll') event. The object passed to the handling function contains the **reachedTop**, **reachedBottom**, **reachedLeft** or **reachedRight** properties. Use them to check if scrolling has reached any of the content boundaries. Note that availability of these properties depends on the allowed [scrolling direction](/api-reference/10%20UI%20Widgets/dxScrollable/1%20Configuration/direction.md '/Documentation/ApiReference/UI_Widgets/dxScrollView/Configuration/#direction').

    <!--JavaScript-->
    $(function() {
        $("#scrollViewContainer").dxScrollView({
            height: 500,
            onScroll: function (e) {
                if (e.reachedBottom) {
                    // Here go the commands to be executed when the bottom is reached
                }
                // ...
            }
        });
    });

#####See Also#####
#include common-link-handleevents
- [ScrollView - Scroll the Content](/concepts/05%20Widgets/ScrollView/05%20Scroll%20the%20Content '/Documentation/Guide/Widgets/ScrollView/Scroll_the_Content/')
- [ScrollView Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/ScrollView/Overview)
- [ScrollView API Reference](/api-reference/10%20UI%20Widgets/dxScrollView '/Documentation/ApiReference/UI_Widgets/dxScrollView/')

[tags]scrollView, scroll view, pull down, pull-to-refresh, refresh, reach bottom, boundaries