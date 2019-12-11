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
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

    <!--JavaScript-->$(function () {
        $("#map").dxMap({
            provider: 'bing',
            type: 'roadmap',
            zoom: 10,
            center: "40.749825, -73.987963"
        });
    });

    <!--HTML-->
    <div id="map"></div>

#####[**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <dx-map
        provider="bing"
        type="roadmap"
        [zoom]="10"
        center="40.749825, -73.987963">
    </dx-map>

    <!--TypeScript-->
    import { DxMapModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxMapModule
        ],
        // ...
    })

#####[**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div dx-map="{
        provider: 'bing',
        type: 'roadmap',
        zoom: 10,
        center: '40.749825, -73.987963'
    }"></div>

#####[**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div data-bind="dxMap: {
        provider: 'bing',
        type: 'roadmap',
        zoom: 10,
        center: '40.749825, -73.987963'
    }"></div>

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

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

---

 

#####See Also#####
- [Map - Overview](/concepts/05%20Widgets/Map/00%20Overview.md '/Documentation/Guide/Widgets/Map/Overview/')

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/mapsmapmapmap/"
}