---
default: 'outside'
acceptValues: 'outside' | 'center' | 'inside'
type: String
---
---
##### shortDescription
Specifies the orientation of the range container in the **CircularGauge** widget.

---
<p>This property specifies the range container's orientation relative to the invisible scale line.<br/>

When setting up a range container, apply the required orientation first to check that the result responds to your needs. Then, set the required <b>offset</b> from the invisible scale line to shift the range container.</p>

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `CircularGaugeElementOrientation` enum. This enum accepts the following values: `Outside`, `Inside` and `Center`.