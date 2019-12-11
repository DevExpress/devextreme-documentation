<article data-show="Content/Applications/16_1/UIWidgets/dxGallery/Modes/markup.html,
        Content/Applications/16_1/UIWidgets/dxGallery/Modes/script.js,
        Content/Applications/16_1/UIWidgets/dxGallery/Modes/styles.css">

- **Loop**  
 The **Gallery** widget can display specified images in a loop. If the widget loop mode is enabled, it scrolls back to the first item if an end-user navigates forward from the last item, or goes to the last item if an end-user navigates backward from the first item. The loop mode is disabled by default. To enable it, assign *true* to the [loop](/api-reference/10%20UI%20Widgets/dxGallery/1%20Configuration/loop.md '/Documentation/ApiReference/UI_Widgets/dxGallery/Configuration/#loop') configuration option.

        <!--JavaScript-->
        var galleryOptions = {
            dataSource: galleryData,
            loop: true
        };

- **Slideshow**  
 The widget also supports the slideshow mode. If the this mode is enabled, the images are switched automatically after the specified time span. To enable the slideshow mode, assign a positive numeric value, which specifies the time span in milliseconds, to the [slideshowDelay](/api-reference/10%20UI%20Widgets/dxGallery/1%20Configuration/slideshowDelay.md '/Documentation/ApiReference/UI_Widgets/dxGallery/Configuration/#slideshowDelay') option. If the option is set to zero, the slideshow mode is disabled.

        <!--JavaScript-->
        var galleryOptions = {
            dataSource: galleryData,
            slideshowDelay: 1500
        };

 If the slideshow mode is enabled, you can specify the time spent on single slide animation using the [animationDuration](/api-reference/10%20UI%20Widgets/dxGallery/1%20Configuration/animationDuration.md '/Documentation/ApiReference/UI_Widgets/dxGallery/Configuration/#animationDuration') option.
</article>