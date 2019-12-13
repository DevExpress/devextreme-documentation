An end user can scroll the **ScrollView** content with the swipe gesture or with the scrollbar. The swipe gesture is default for touch devices, the scrollbar is default for desktops. However, you can unify the behavior of the **ScrollView** on all platforms. To control the swipe gesture scrolling, use the [scrollByContent](/api-reference/10%20UI%20Widgets/dxScrollable/1%20Configuration/scrollByContent.md '/Documentation/ApiReference/UI_Widgets/dxScrollView/Configuration/#scrollByContent') option. To control the scrollbar scrolling, use the [scrollByThumb](/api-reference/10%20UI%20Widgets/dxScrollable/1%20Configuration/scrollByThumb.md '/Documentation/ApiReference/UI_Widgets/dxScrollView/Configuration/#scrollByThumb') option.

    <!--JavaScript-->
    $(function() {
        $("#scrollViewContainer").dxScrollView({
            scrollByContent: true, // enables the swipe gesture on all platforms
            scrollByThumb: true // makes the scrollbar active on all platforms
        });
    });
