#include uiwidgets-ref-width

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/Overview/"
}

[note]

Even if the width of the UI component is specified, the count of columns may depend on the screen width. For example, if the screen width is not enough to display the whole form's container, the count of columns depends on the screen width, not the container. To always use a fixed count of columns regardless of the screen width, pass an empty function to the [screenByWidth](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/screenByWidth.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#screenByWidth') property.

    <!--JavaScript-->
    screenByWidth: function() { }

[/note]