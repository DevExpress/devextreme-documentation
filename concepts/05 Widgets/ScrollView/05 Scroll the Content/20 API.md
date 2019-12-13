To scroll the **ScrollView** content by a specified distance, call the [scrollBy(distance)](/api-reference/10%20UI%20Widgets/dxScrollable/3%20Methods/scrollBy(distance).md '/Documentation/ApiReference/UI_Widgets/dxScrollView/Methods/#scrollBydistance') method. If you need to scroll in the opposite direction, the `distance` parameter should be a negative number.

    <!--JavaScript-->
    $(function() {
        var scrollView = $("#scrollViewContainer").dxScrollView({
            height: 400
        }).dxScrollView("instance");

        $("#scrollUpButton").dxButton({
            text: "Scroll Up",
            onClick: function () {
                scrollView.scrollBy(-100);
            }
        });

        $("#scrollDownButton").dxButton({
            text: "Scroll Down",
            onClick: function () {
                scrollView.scrollBy(100);
            }
        });
    });

To scroll the content both vertically and horizontally, call the [scrollBy(distanceObj)](/api-reference/10%20UI%20Widgets/dxScrollable/3%20Methods/scrollBy(distanceObject).md '/Documentation/ApiReference/UI_Widgets/dxScrollView/Methods/#scrollBydistanceObject') method with an object as an argument. The format of the object is the following: { left: *value1*, top: *value2* }. Note that in this case, the [direction](/api-reference/10%20UI%20Widgets/dxScrollable/1%20Configuration/direction.md '/Documentation/ApiReference/UI_Widgets/dxScrollView/Configuration/#direction') option must be set to *"both"*

    <!--JavaScript-->
    $(function() {
        var scrollView = $("#scrollViewContainer").dxScrollView({
            height: 400,
            width: 100,
            direction: "both"
        }).dxScrollView("instance");

        $("#scrollButton").dxButton({
            text: "Scroll",
            onClick: function () {
                scrollView.scrollBy({ left: 100, top: 100 });
            }
        });
    });

To scroll the content to a specific position, call the [scrollTo(targetLocation)](/api-reference/10%20UI%20Widgets/dxScrollable/3%20Methods/scrollTo(targetLocation).md '/Documentation/ApiReference/UI_Widgets/dxScrollView/Methods/#scrollTotargetLocation') method. Just like the **scrollBy()** method from the previous examples, the **scrollTo()** method accepts either a numeric value (when [directon](/api-reference/10%20UI%20Widgets/dxScrollable/1%20Configuration/direction.md '/Documentation/ApiReference/UI_Widgets/dxScrollView/Configuration/#direction') is *"left"* or *"right"*) or an object (when **direction** is *"both"*). The object should have the following format: { left: *value1*, top: *value2* }. Note that the top left corner of the **ScrollView** has the { left: 0, top: 0 } coordinates.

    <!--JavaScript-->
    $(function() {
        var scrollView = $("#scrollViewContainer").dxScrollView({
            height: 400,
            width: 100,
            direction: "vertical"
        }).dxScrollView("instance");

        $("#scrollButton").dxButton({
            text: "Scroll",
            onClick: function () {
                scrollView.scrollTo(500);
            }
        });
    });

To scroll the content to a specific element, call the [scrollToElement(targetLocation)](/api-reference/10%20UI%20Widgets/dxScrollable/3%20Methods/scrollToElement(targetLocation).md '/Documentation/ApiReference/UI_Widgets/dxScrollView/Methods/#scrollToElementtargetLocation') method. 

    <!--HTML-->
    <div id="scrollViewContainer">
        <!-- Here goes long content -->
        <div id="end"></div>
    </div>

    <!--JavaScript-->
    $(function() {
        var scrollView = $("#scrollViewContainer").dxScrollView({
            height: 400,
            width: 100,
            direction: 'vertical',
        }).dxScrollView("instance");

        $("#scrollButton").dxButton({
            text: "Scroll ",
            onClick: function () {
                // Scrolls the content to the element with the "end" id
                scrollView.scrollToElement($("#end"));
            }
        });
    });

To get the current scroll position against the top left corner, call the [scrollOffset()](/api-reference/10%20UI%20Widgets/dxScrollable/3%20Methods/scrollOffset().md '/Documentation/ApiReference/UI_Widgets/dxScrollView/Methods/#scrollOffset') method. It returns an object of the following format: { top: *topScrollOffset*, left: *leftScrollOffset* }. If you need to get only the top or left scroll offset, use the [scrollTop()](/api-reference/10%20UI%20Widgets/dxScrollable/3%20Methods/scrollTop().md '/Documentation/ApiReference/UI_Widgets/dxScrollView/Methods/#scrollTop') and [scrollLeft()](/api-reference/10%20UI%20Widgets/dxScrollable/3%20Methods/scrollLeft().md '/Documentation/ApiReference/UI_Widgets/dxScrollView/Methods/#scrollLeft') methods, respectively.

#####See Also#####
- [ScrollView - Handle Scroll Gestures](/concepts/05%20Widgets/ScrollView/10%20Handle%20Scroll%20Gestures.md '/Documentation/Guide/Widgets/ScrollView/Handle_Scroll_Gestures/')
- [ScrollView Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/ScrollView/Overview)
- [ScrollView API Reference](/api-reference/10%20UI%20Widgets/dxScrollView '/Documentation/ApiReference/UI_Widgets/dxScrollView/')