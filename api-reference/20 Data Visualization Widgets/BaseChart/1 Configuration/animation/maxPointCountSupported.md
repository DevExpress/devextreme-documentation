---
id: BaseChart.Options.animation.maxPointCountSupported
type: Number
default: 300
---
---
##### shortDescription
Specifies how many series points the UI component should have before the animation will be disabled.

---
If the number of series points in your chart increases over time, animating them may affect UI component performance. In this case, use the **maxPointCountSupported** property to specify a limit for the number of points. When this limit is exceeded, the animation will be disabled.