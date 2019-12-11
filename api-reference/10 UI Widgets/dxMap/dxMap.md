---
module: ui/map
export: default
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

- [**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

        <!--HTML-->
        <div id="map"></div>

        <!--JavaScript-->$(function () {
            $("#map").dxMap({
                provider: 'bing',
                type: 'roadmap',
                zoom: 10,
                center: "40.749825, -73.987963"
            });
        });

- [**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

        <!--HTML-->
        <dx-map
            provider="bing"
            type="roadmap"
            [zoom]="10"
            center="40.749825, -73.987963">
        </dx-map>

- [**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

        <!--HTML-->
        <div dx-map="{
            provider: 'bing',
            type: 'roadmap',
            zoom: 10,
            center: '40.749825, -73.987963'
        }"></div>

- [**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

        <!--HTML-->
        <div data-bind="dxMap: {
            provider: 'bing',
            type: 'roadmap',
            zoom: 10,
            center: '40.749825, -73.987963'
        }"></div>

- [**ASP.NET MVC Wrappers**](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals/05%20Creating%20a%20Widget.md '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/#Creating_a_Widget')

        <!--Razor C#-->@(Html.DevExtreme().Map()
            .ID("map")
            .Provider(GeoMapProvider.Bing)
            .Type(GeoMapType.Roadmap)
            .Zoom(10)
            .Center(40.749825, -73.987963)
        )

        <!--Razor VB-->@(Html.DevExtreme().Map() _
            .ID("map") _
            .Provider(GeoMapProvider.Bing) _
            .Type(GeoMapType.Roadmap) _
            .Zoom(10) _
            .Center(40.749825, -73.987963)
        )

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/concepts/00%20Getting%20Started/01%20Installation/01%20Local%20Scripts.md '/Documentation/Guide/Getting_Started/Installation/Local_Scripts/') section.

#####See Also#####
- [Map - Overview](/concepts/05%20Widgets/Map/00%20Overview.md '/Documentation/Guide/Widgets/Map/Overview/')

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/mapsmapmapmap/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>