<article data-show="Content/Applications/16_1/UIWidgets/OverlaysDisplayModes/markup.html,
        Content/Applications/16_1/UIWidgets/OverlaysDisplayModes/script.js,
        Content/Applications/16_1/UIWidgets/OverlaysDisplayModes/styles.css">
Some overlay widgets support the full-screen mode, which allows you to stretch the widget on the full screen. To enable this mode, set the **fullScreen** option of the widget to *true*.

    <!--JavaScript-->
    var popupOptions = {
        fullScreen: true
    }

An overlay widget can also shade the main screen when the widget is visible. To enable shading, set the **shading** option of the widget to *true*. You can also specify the shading color using the **shadingColor** option.

    <!--JavaScript-->
    var popupOptions = {
        shading: true,
        shadingColor: 'rgba(10, 100, 250, 0.4)'
    }
</article>