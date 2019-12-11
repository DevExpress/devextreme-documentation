<article data-show="Content/Applications/16_1/UIWidgets/dxResizable/markup.html,
        Content/Applications/16_1/UIWidgets/dxResizable/script.js,
        Content/Applications/16_1/UIWidgets/dxResizable/styles.css">

The [Resizable](/api-reference/10%20UI%20Widgets/dxResizable '/Documentation/ApiReference/UI_Widgets/dxResizable/') widget is a container element whose size can be changed by an end user.

The boundary sizes are specified using the [minHeight](/api-reference/10%20UI%20Widgets/dxResizable/1%20Configuration/minHeight.md '/Documentation/ApiReference/UI_Widgets/dxResizable/Configuration/#minHeight'), [minWidth](/api-reference/10%20UI%20Widgets/dxResizable/1%20Configuration/minWidth.md '/Documentation/ApiReference/UI_Widgets/dxResizable/Configuration/#minWidth'), [maxHeight](/api-reference/10%20UI%20Widgets/dxResizable/1%20Configuration/maxHeight.md '/Documentation/ApiReference/UI_Widgets/dxResizable/Configuration/#maxHeight') and [maxWidth](/api-reference/10%20UI%20Widgets/dxResizable/1%20Configuration/maxWidth.md '/Documentation/ApiReference/UI_Widgets/dxResizable/Configuration/#maxWidth') options.

    <!--JavaScript-->
    var resizableOptions = {
        minWidth: 200,
        maxWidth: 500,
        minHeight: 100,
        maxHeight: 500
    }

The current width and height can be accessed using the [height](/api-reference/10%20UI%20Widgets/DOMComponent/1%20Configuration/height.md '/Documentation/ApiReference/UI_Widgets/dxResizable/Configuration/#height') and [width](/api-reference/10%20UI%20Widgets/DOMComponent/1%20Configuration/width.md '/Documentation/ApiReference/UI_Widgets/dxResizable/Configuration/#width') options.

The [handles](/api-reference/10%20UI%20Widgets/dxResizable/1%20Configuration/handles.md '/Documentation/ApiReference/UI_Widgets/dxResizable/Configuration/#handles') option enables you to specify which borders of the widget element are used as handles. This option accepts the "all", "top", "bottom", "left", "right" values. You can use several values separated by space.

    <!--JavaScript-->
    var resizableOptions = {
        handles: "left right bottom"
    }

If right and bottom borders are used as handles, a triangular handle is displayed at their junction.
</article>