<article data-show="Content/Applications/16_1/UIWidgets/dxPanorama/markup.html,
        Content/Applications/16_1/UIWidgets/dxPanorama/script.js">

The [Panorama](/api-reference/10%20UI%20Widgets/dxPanorama '/Documentation/ApiReference/UI_Widgets/dxPanorama/') widget is a full screen widget that allows you to locate widgets, display data and provide services by using a long horizontal canvas that extends beyond the frames of the screen. Content is divided into items that can be explored by panning and flicking. When viewing an item, you will be able to see a portion of the item next to it. This widget is often used as a navigation map on the first page of an application. Although **Panorama** was designed based on the native WindowsPhone8 Panorama widget, it can be used on any platform.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/navigationpanoramapanoramapanorama/iphone/ios7/default/default" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The widget supports common Collection Container widget functionality and enables you to carry out the following common tasks described at the beginning of this article.

- [Specify data source](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/0%20Specify%20Data%20Source.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Specify_Data_Source')  
- [Handle item events](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/1%20Handle%20Item%20Events.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Handle_Item_Events')  
- [Customize item appearance](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/2%20Customize%20an%20Item%20Appearance '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Customize_an_Item_Appearance')  

In addition to common collection container functionality, the widget enables you to perform the following adjustments.

**Specify panorama title and background**

All widget items are displayed against the same background and title. The title text is specified using the [title](/api-reference/10%20UI%20Widgets/dxPanorama/1%20Configuration/title.md '/Documentation/ApiReference/UI_Widgets/dxPanorama/Configuration/#title') option. If you want to use a background image, you should pass a configuration object containing the following properties to the [backgroundImage](/api-reference/10%20UI%20Widgets/dxPanorama/1%20Configuration/backgroundImage '/Documentation/ApiReference/UI_Widgets/dxPanorama/Configuration/backgroundImage/') option.

- [height](/api-reference/10%20UI%20Widgets/dxPanorama/1%20Configuration/backgroundImage/height.md '/Documentation/ApiReference/UI_Widgets/dxPanorama/Configuration/backgroundImage/#height')  
 Specifies the height of the background image.

- [width](/api-reference/10%20UI%20Widgets/dxPanorama/1%20Configuration/backgroundImage/width.md '/Documentation/ApiReference/UI_Widgets/dxPanorama/Configuration/backgroundImage/#width')  
 Specifies the width of the background image.

- [url](/api-reference/10%20UI%20Widgets/dxPanorama/1%20Configuration/backgroundImage/url.md '/Documentation/ApiReference/UI_Widgets/dxPanorama/Configuration/backgroundImage/#url')  
 Specifies the url of the background image file.

<!---->

    <!--JavaScript-->
    var panoramaOptions = {
        dataSource: panoramaData,
        title: "Online restaurant",
        backgroundImage: {
            width: 500,
            height: 300,
            url: "/images/panoramaBackground.png"
        }
    }
</article>