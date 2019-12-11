A target line is a vertical line that indicates a target value. According to the concept of a bullet chart, the target value is supposed to be reached by the primary value, which is indicated on a bullet chart by the [bullet bar](/concepts/05%20Widgets/Bullet/10%20Visual%20Elements/10%20Bullet%20Bar.md '/Documentation/Guide/Widgets/Bullet/Visual_Elements/#Bullet_Bar').

![DevExtreme ChartJS BulletChart BulletGraph](/images/ChartJS/BulletTargetLine.png)

To specify the target value, set the [target](/api-reference/20%20Data%20Visualization%20Widgets/dxBullet/1%20Configuration/target.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxBullet/Configuration/#target') option of the main configuration object.

	<!--JavaScript-->var bulletOptions = {
		target: 50,
		// ...
	};

Additionally, you can customize the appearance of the target line. Particularly, you can specify its color using the [targetColor](/api-reference/20%20Data%20Visualization%20Widgets/dxBullet/1%20Configuration/targetColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxBullet/Configuration/#targetColor') option, and its width using the [targetWidth](/api-reference/20%20Data%20Visualization%20Widgets/dxBullet/1%20Configuration/targetWidth.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxBullet/Configuration/#targetWidth') option.