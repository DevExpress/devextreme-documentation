---
type: Object
uid: viz/polar_chart:CommonAxisSettingsminorTick
---
---
##### shortDescription
Specifies the properties of the minor ticks.

---
<!--
In addition to [major ticks](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/commonAxisSettings/tick '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/commonAxisSettings/tick/'), the PolarChart UI component provides the capability to draw minor ticks. Minor ticks divide an axis segment that lies between two neighboring major ticks. To specify how to generate minor ticks, use the **minorTickInterval** or **minorTickCount** properties.

To configure the appearance of minor ticks, use the properties of the **minorTick** object. Declared within the **commonAxisSettings** object, the **minorTick** object sets properties for all minor ticks. To change the appearance of the minor ticks that belong to the argument or value axis individually, declare the **minorTick** object in the **argumentAxis** or **valueAxis** object respectively. Settings specified individually override those that are set in the **commonAxisSettings** object.

By default, minor ticks are hidden. To make them visible, assign **true** to the **visible** property of the **minorTick** object. Additionally, you can change the color, opacity and width of the minor ticks using the corresponding properties.

[note]Minor ticks cannot be displayed on a *discrete* axis.
-->