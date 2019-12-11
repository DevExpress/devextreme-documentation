---
##### shortDescription
Adds a route to the map.

##### param(options): object|array
A route object and an array of route objects.

##### return: Promise
A Promise of the jQuery Deferred object which is resolved with an original route instance when the route is added.

---
The route object should include the **locations** field, containing an array of route locations.
Each location can be specified in any of the following formats.

 - { lat: 40.749825, lng: -73.987963}
 - "40.749825, -73.987963"
 - [40.749825, -73.987963]
 - 'Brooklyn Bridge,New York,NY'