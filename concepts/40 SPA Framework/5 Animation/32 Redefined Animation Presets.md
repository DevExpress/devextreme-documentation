The animation presets that are not specific to a device can serve as a base for device-specific animation presets. In this instance, the animation presets that are formed from the base presets will be used under a new name when the application runs on a specified device.

	<!--JavaScript-->DevExpress.animationPresets.registerPreset('my-animation', {
		device: { platform: 'ios' },
		animation: 'ios7-slide'
	});

Device-specific animation presets can also be redefined so that they are accessible under particular names. For instance, you can register a custom animation preset under the name that is used in layouts, and you will not have to change the layouts.

	<!--JavaScript-->DevExpress.animationPresets.registerPreset('view-content-change', { animation: { 'my-animation' } })