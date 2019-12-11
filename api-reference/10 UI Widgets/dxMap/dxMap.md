---
module: ui/map
inherits: ..\Widget\Widget.md
---
---
##### widgettree

##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **Map** is an interactive widget that displays a geographic map with markers and routes.

---
You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxMap` jQuery plug-in.

        <!--HTML-->
        <div id="map"></div>

    <!---->

        <!--JavaScript-->
        $("#map").dxMap({
            provider: 'bing',
            type: 'roadmap',
            zoom: 10,
            center: "40.749825, -73.987963"
        });

- **Knockout**  
 Add a div element and apply the `dxMap` binding to this element.

        <!--HTML-->
        <div data-bind="dxMap: {
            provider: 'bing',
            type: 'roadmap',
            zoom: 10,
            center: '40.749825, -73.987963'
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-map` directive to this element.

        <!--HTML-->
        <div dx-map="{
            provider: 'bing',
            type: 'roadmap',
            zoom: 10,
            center: '40.749825, -73.987963'
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/concepts/10%20UI%20Widgets/0%20Basics/01%20Installation '/Documentation/Guide/UI_Widgets/Basics/Installation/') article.

For detailed information on working with the **Map** widget, refer to the [dxMap guide](/concepts/10%20UI%20Widgets/20%20UI%20Widgets%20-%20Deep%20Dive/dxMap '/Documentation/Guide/UI_Widgets/UI_Widgets_-_Deep_Dive/dxMap/').

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/mapsmapmapmap/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>