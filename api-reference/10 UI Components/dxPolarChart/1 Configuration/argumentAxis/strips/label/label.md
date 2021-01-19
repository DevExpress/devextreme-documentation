---
id: dxPolarChart.Options.argumentAxis.strips.label
type: Object
---
---
##### shortDescription
An object that defines the label configuration options of a strip.

---
A strip label represents descriptive information on a strip. It often represents a strip's title. To set label options for an individual strip, define the **label** object. If you need to set similar values for labels in all strips, use the **commonAxisSettings**.**stripStyle**.[label](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/commonAxisSettings/stripStyle/label '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/stripStyle/label/') configuration object. It exposes the properties that can be specified for labels on all strips simultaneously. Note that the values specified for a strip individually (in the **argumentAxis**.**strips**.**strip**.**label** object) override the values that are specified for all axes (in the **commonAxisSettings**.**stripStyle**.**label** object).