<article data-show="Content/Applications/16_1/UIWidgets/dxGallery/UIElements/markup.html,
        Content/Applications/16_1/UIWidgets/dxGallery/UIElements/script.js,
        Content/Applications/16_1/UIWidgets/dxGallery/UIElements/styles.css">

The **Gallery** widget displays only a single image at a time. You can use any of the following ways to navigate through the images associated with the widget.

- Swipe the current image  
 You can swipe the current image to switch to the next or previous item. This feature is enabled by default. You can specify its availability using the [swipeEnabled](/api-reference/10%20UI%20Widgets/dxGallery/1%20Configuration/swipeEnabled.md '/Documentation/ApiReference/UI_Widgets/dxGallery/Configuration/#swipeEnabled') option.

- Click an indicator bullet  
 The indicator is a set of bullets located under the displayed image. Each bullet corresponds to an image. The bullet corresponding to the currently displayed image is highlighted. You can specify indicator availability using the [showIndicator](/api-reference/10%20UI%20Widgets/dxGallery/1%20Configuration/showIndicator.md '/Documentation/ApiReference/UI_Widgets/dxGallery/Configuration/#showIndicator') option. The indicator is visible by default.

 To enable an end-user to switch images by clicking an indicator bullet, set the [indicatorEnabled](/api-reference/10%20UI%20Widgets/dxGallery/1%20Configuration/indicatorEnabled.md '/Documentation/ApiReference/UI_Widgets/dxGallery/Configuration/#indicatorEnabled') option to *true*.
 
        <!--JavaScript-->
        var galleryOptions = {
            dataSource: galleryData,
            showIndicator: true,
            indicatorEnabled: true
        };
    
- Click a navigation button  
 The **Gallery** widget can display navigation buttons used to switch to the previous or next image. These buttons are located at the right and left side of the displayed image. You can specify navigation button availability using the [showNavButtons](/api-reference/10%20UI%20Widgets/dxGallery/1%20Configuration/showNavButtons.md '/Documentation/ApiReference/UI_Widgets/dxGallery/Configuration/#showNavButtons') option.
 
        <!--JavaScript-->
        var galleryOptions = {
            dataSource: galleryData,
            showNavButtons: true
        };
</article>