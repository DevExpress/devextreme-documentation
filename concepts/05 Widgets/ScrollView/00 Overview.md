The **ScrollView** is a widget that enables a user to scroll its content.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/#demo/forms_and_multi-purpose-scrollview-overview" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The following code adds a simple **ScrollView** to your page. The [width](/api-reference/10%20UI%20Widgets/DOMComponent/1%20Configuration/width.md '/Documentation/ApiReference/UI_Widgets/dxScrollView/Configuration/#width') and [height](/api-reference/10%20UI%20Widgets/DOMComponent/1%20Configuration/height.md '/Documentation/ApiReference/UI_Widgets/dxScrollView/Configuration/#height') options specify the widget size. By default, the **ScrollView** allows a user to scroll its content vertically. To change this behavior, use the [direction](/api-reference/10%20UI%20Widgets/dxScrollable/1%20Configuration/direction.md '/Documentation/ApiReference/UI_Widgets/dxScrollView/Configuration/#direction') option. Note that horizontal scrolling appears only if the content is wider than the **ScrollView**. Otherwise, the content adapts to the width of the **ScrollView**.

    <!--HTML-->
    <div id="scrollViewContainer">
        <!-- Here goes long content -->
    </div>

<!---->

    <!--JavaScript-->
    $(function() {
		$("#scrollViewContainer").dxScrollView({
            height: 500,
            width: 500,
            direction: 'both' // or 'horizontal' | 'vertical'
        });
    });

The **ScrollView** employs native scrolling on most platforms, except desktops. To employ it on all platforms without exception, assign *true* to the [useNative](/api-reference/10%20UI%20Widgets/dxScrollable/1%20Configuration/useNative.md '/Documentation/ApiReference/UI_Widgets/dxScrollView/Configuration/#useNative') option. Note that if you assign *false* to this option, the **ScrollView** will simulate scrolling on all platforms.

    <!--JavaScript-->
    $(function() {
		$("#scrollViewContainer").dxScrollView({
            useNative: true
        });
    });

If simulated scrolling is used, you can specify when to show the scrollbar. For this purpose, use the [showScrollbar](/api-reference/10%20UI%20Widgets/dxScrollable/1%20Configuration/showScrollbar.md '/Documentation/ApiReference/UI_Widgets/dxScrollView/Configuration/#showScrollbar') option.

    <!--JavaScript-->
    $(function() {
		$("#scrollViewContainer").dxScrollView({
            useNative: false,
            showScrollbar: 'always' // or 'onScroll' | 'onHover' | 'never'
        });
    });

#####See Also#####
- [Widget Basics - jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/')
- [Widget Basics - AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/')
- [Widget Basics - Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/')
- [ScrollView - Handle Scroll Gestures](/concepts/05%20Widgets/ScrollView/10%20Handle%20Scroll%20Gestures.md '/Documentation/Guide/Widgets/ScrollView/Handle_Scroll_Gestures/')
- [ScrollView - Scroll the Content](/concepts/05%20Widgets/ScrollView/05%20Scroll%20the%20Content '/Documentation/Guide/Widgets/ScrollView/Scroll_the_Content/')
- [ScrollView API Reference](/api-reference/10%20UI%20Widgets/dxScrollView '/Documentation/ApiReference/UI_Widgets/dxScrollView/')

[tags]scrollView, scroll view, overview, scrolling direction, native scrolling, simulated scrolling, scrollbar