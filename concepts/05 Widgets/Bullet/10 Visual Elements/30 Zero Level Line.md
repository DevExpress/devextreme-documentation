A zero level line indicates zero on a bullet graph. It serves as a starting point to the [bullet bar](/concepts/05%20Widgets/Bullet/10%20Visual%20Elements/10%20Bullet%20Bar.md '/Documentation/Guide/Widgets/Bullet/Visual_Elements/#Bullet_Bar').

![DevExtreme ChartJS BulletChart BulletGraph](/images/ChartJS/BulletZeroLine.png)

By default, the zero level line is visible. However, in certain scenarios, you may need to change its visibility. For this purpose, use the [showZeroLevel](/api-reference/20%20Data%20Visualization%20Widgets/dxBullet/1%20Configuration/showZeroLevel.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxBullet/Configuration/#showZeroLevel') option.

	<!--JavaScript-->var bulletOptions = {
		showZeroLevel: true // false
		// ...
	};

[note]For the zero level line to be displayed, the zero value must fall in the scale range specified by the [startScaleValue](/api-reference/20%20Data%20Visualization%20Widgets/dxBullet/1%20Configuration/startScaleValue.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxBullet/Configuration/#startScaleValue') and [endScaleValue](/api-reference/20%20Data%20Visualization%20Widgets/dxBullet/1%20Configuration/endScaleValue.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxBullet/Configuration/#endScaleValue') options.

When visible, the zero level line has the same color as the [target line](/concepts/05%20Widgets/Bullet/10%20Visual%20Elements/20%20Target%20Line.md '/Documentation/Guide/Widgets/Bullet/Visual_Elements/#Target_Line'). This color is specified by the [targetColor](/api-reference/20%20Data%20Visualization%20Widgets/dxBullet/1%20Configuration/targetColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxBullet/Configuration/#targetColor') option.
