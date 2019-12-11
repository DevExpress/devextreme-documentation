---
default: 'outside'
acceptValues: 'center' | 'inside' | 'outside'
type: String
---
---
##### shortDescription
Specifies the orientation of the range container in the **CircularGauge** widget.

---
This property specifies the range container's orientation relative to the invisible scale line.

When setting up a range container, apply the required orientation first to check that the result responds to your needs. Then, set the required **offset** from the invisible scale line to shift the range container.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `CircularGaugeElementOrientation` enum. This enum accepts the following values: `Outside`, `Inside` and `Center`.