---
module: ui/gallery
inherits: ..\CollectionWidget\CollectionWidget.md
---
---
##### widgettree
dataSource: [
    "http://js.devexpress.com/Content/images/doc/16_1/PhoneJS/person1.png",
    "http://js.devexpress.com/Content/images/doc/16_1/PhoneJS/person2.png",
    "http://js.devexpress.com/Content/images/doc/16_1/PhoneJS/person3.png",
    "http://js.devexpress.com/Content/images/doc/16_1/PhoneJS/person4.png"
],
height: 400

##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **Gallery** is a widget that displays a collection of images in a carousel. The widget is supplied with various navigation controls that allow a user to switch between images.

---
You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxGallery` jQuery plug-in.

        <!--HTML-->
        <div id="gallery"></div>

    <!---->

        <!--JavaScript-->
        $("#gallery").dxGallery({
            dataSource: galleryData,
            showIndicator: true,
            indicatorEnabled: true,
            showNavButtons: true
        });

- **Knockout**  
 Add a div element and apply the `dxGallery` binding to this element.

        <!--HTML-->
        <div data-bind="dxGallery: {
            dataSource: galleryData,
            showIndicator: true,
            indicatorEnabled: true,
            showNavButtons: true
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-gallery` directive to this element.

        <!--HTML-->
        <div dx-gallery="{
            dataSource: galleryData,
            showIndicator: true,
            indicatorEnabled: true,
            showNavButtons: true
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/concepts/10%20UI%20Widgets/0%20Basics/01%20Installation '/Documentation/Guide/UI_Widgets/Basics/Installation/') article.

The **Gallery** widget supports common Collection Container functionality. You can find detailed information on the principles of working with collection container widgets in the [Collection Container Widgets](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/') guide. For detailed information on working with the **Gallery** widget, refer to the [dxGallery guide](/concepts/10%20UI%20Widgets/20%20UI%20Widgets%20-%20Deep%20Dive/dxGallery '/Documentation/Guide/UI_Widgets/UI_Widgets_-_Deep_Dive/dxGallery/').

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/actionsandlistsgallerygallerysimplegallery/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>