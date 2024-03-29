---
id: dxMap.addMarker(markerOptions)
---
---
##### shortDescription
Adds a marker to the map.

##### return: Promise<Object>
A Promise that is resolved with an original marker instance when the marker is added.
#include ref-promisedistinction

##### param(markerOptions): Object | Array<Object>
The [Marker](/api-reference/10%20UI%20Components/dxMap/1%20Configuration/markers '/Documentation/ApiReference/UI_Components/dxMap/Configuration/markers/') object(s).

---
The marker object should include the following fields.

- **location** (required) - the marker location. You can specify the location in one of the following formats:
  - { lat: 40.749825, lng: -73.987963};
  - "40.749825, -73.987963";
  - [40.749825, -73.987963];
  - "Brooklyn Bridge,New York,NY";
- **tooltip** (optional) - the marker tooltip;
- **onClick** (optional) - a callback function performed when the marker is clicked;
- **text** (optional) - the marker caption.
- **iconSrc** (optional) - a URL pointing to the custom icon to be used for the marker.

#####See Also#####
#include common-link-callmethods