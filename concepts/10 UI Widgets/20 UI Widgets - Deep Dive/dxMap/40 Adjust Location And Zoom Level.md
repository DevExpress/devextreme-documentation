<article data-show="Content/Applications/16_1/UIWidgets/dxMap/LocationAndZoom/markup.html,
        Content/Applications/16_1/UIWidgets/dxMap/LocationAndZoom/script.js,
        Content/Applications/16_1/UIWidgets/dxMap/LocationAndZoom/styles.css">

You can specify the location displayed at the center of the widget using the [center](/api-reference/10%20UI%20Widgets/dxMap/1%20Configuration/center '/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/center/') option. The widget accepts the same location formats as the current map provider. Thus you can use the following location formats.

- { lat: 40.749825, lng: -73.987963 }
- "40.749825, -73.987963"
- [40.749825, -73.987963]
- 'Brooklyn Bridge,New York,NY'

<!---->

    <!--JavaScript-->
    var mapOptions = {
        center: {
            lat: 40.749825,
            lng: -73.987963
        }
    }

The displayed area size is defined by the map zoom level, which is specified using the [zoom](/api-reference/10%20UI%20Widgets/dxMap/1%20Configuration/zoom.md '/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/#zoom') option. The stronger the zoom level, the smaller area that is displayed.

    <!--JavaScript-->
    var mapOptions = {
        zoom: 10
    }

By default, the widget sets the automatically calculated zoom value each time a marker or a route is added to the map. In this case, zoom is set to the maximum value, allowing all markers and routes to be displayed at the same time. Set the [autoAdjust](/api-reference/10%20UI%20Widgets/dxMap/1%20Configuration/autoAdjust.md '/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/#autoAdjust') option to *false* to disable this behavior.

    <!--JavaScript-->
    var mapOptions = {
        center: "40.749825, -73.987963",
        zoom: 10,
        autoAdjust: false
    }
</article>