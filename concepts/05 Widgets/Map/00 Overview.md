The **Map** is an interactive widget that displays a geographic map with markers and routes.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/#demo/maps-map-providers_and_types" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The code below adds the **Map** widget to your page. The **Map** is [centered](/api-reference/10%20UI%20Widgets/dxMap/1%20Configuration/center '/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/center/') and [zoomed](/api-reference/10%20UI%20Widgets/dxMap/1%20Configuration/zoom.md '/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/#zoom') and supplied with [controls](/api-reference/10%20UI%20Widgets/dxMap/1%20Configuration/controls.md '/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/#controls') that allow a user to [zoom and navigate](/concepts/05%20Widgets/Map/05%20Zoom%20and%20Center%20the%20Map.md '/Documentation/Guide/Widgets/Map/Zoom_and_Center_the_Map/') the **Map** or [change its type](/concepts/05%20Widgets/Map/10%20Specify%20the%20Provider%20and%20Type.md '/Documentation/Guide/Widgets/Map/Specify_the_Provider_and_Type/').

    <!--HTML-->
    <div id="mapContainer"></div>
     
<!---->
 
    <!--JavaScript-->
    $(function() {
        $("#mapContainer").dxMap({
            center: { lat: 40.749825, lng: -73.987963 },
            zoom: 10,
            controls: true
        });
    });

#####See Also#####
- [Widget Basics - jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/')
- [Widget Basics - AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/')
- [Widget Basics - Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/')
- [Map - Zoom and Center the Map](/concepts/05%20Widgets/Map/05%20Zoom%20and%20Center%20the%20Map.md '/Documentation/Guide/Widgets/Map/Zoom_and_Center_the_Map/')
- [Map - Specify the Provider and Type](/concepts/05%20Widgets/Map/10%20Specify%20the%20Provider%20and%20Type.md '/Documentation/Guide/Widgets/Map/Specify_the_Provider_and_Type/')
- [Map - Specify the Size](/concepts/05%20Widgets/Map/15%20Specify%20the%20Size.md '/Documentation/Guide/Widgets/Map/Specify_the_Size/')
- [Map - Configure Markers](/concepts/05%20Widgets/Map/20%20Configure%20Markers '/Documentation/Guide/Widgets/Map/Configure_Markers/')
- [Map - Configure Routes](/concepts/05%20Widgets/Map/25%20Configure%20Routes '/Documentation/Guide/Widgets/Map/Configure_Routes/')
- [Map API Reference](/api-reference/10%20UI%20Widgets/dxMap '/Documentation/ApiReference/UI_Widgets/dxMap/')

[tags]map, center, central position, zoom level, controls
