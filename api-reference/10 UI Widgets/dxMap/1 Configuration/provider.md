---
default: 'google'
acceptValues: 'bing' | 'google' | 'googleStatic'
type: String
---
---
##### shortDescription
The name of the current map data provider.

---
Use the "googleStatic" provider to connect route points directly rather than following the street layout

[note]Most browsers use Bing Maps V8, except Internet Explorer 9 and 10, which fall back to V7. 

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `GeoMapProvider` enum. This enum accepts the following values: `Bing`, `Google` and `GoogleStatic`.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/mapsmapmapmap/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>