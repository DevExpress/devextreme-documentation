---
##### shortDescription
Adds a marker to the map.

##### param(markerOptions): object|array
A marker object and an array of marker objects.

##### return: Promise
A Promise of the jQuery Deferred object which is resolved with an original marker instance when the marker is added.

---
The marker object should include the following fields.

- **location** (required) - the marker location. You can specify the location in one of the following formats:
  - { lat: 40.749825, lng: -73.987963};
  - "40.749825, -73.987963";
  - [40.749825, -73.987963];
  - 'Brooklyn Bridge,New York,NY';
- **tooltip** (optional) - the marker tooltip;
- **onClick** (optional) - a callback function performed when the marker is clicked;
- **text** (optional) - the marker caption.
- **iconSrc** (optional) - a URL pointing to the custom icon to be used for the marker.