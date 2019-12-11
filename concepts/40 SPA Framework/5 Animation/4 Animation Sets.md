In DevExtreme SPA framework-based applications, required animation presets are collected to an animation set of the [HtmlApplication](/api-reference/40%20SPA%20Framework/HtmlApplication '/Documentation/ApiReference/SPA_Framework/HtmlApplication/') object.

	<!--JavaScript-->MyApp.app = new DevExpress.framework.html.HtmlApplication({
		//...
        animationSet: {
			"view-content-change": [
				{ animation: "slide" },
				{ animation: "ios7-slide", device: { platform: "ios" } },
				{ animation: "fade", device: { deviceType: "desktop", platform: "generic" } },
				{ animation: "none", device: { grade: "C" } }
			],
			"view-content-rendered": [
				{ animation: "fade" },
				{ animation: "none", device: { grade: "C" } }
			],
			//...
		},
    });

Here, "slide", "ios7-slide", "fade" and "none" are the device-independent [predefined animation presets](/concepts/40%20SPA%20Framework/5%20Animation/3%20Predefined%20Animation%20Presets.md '/Documentation/Guide/SPA_Framework/Animation/#Predefined_Animation_Presets') from the [DevExpress.animationPresets](/api-reference/50%20Common/utils/animationPresets '/Documentation/ApiReference/Common/Utils/animationPresets/') repository.

Internally, the animation presets defined in this manner are registered in the **DevExpress.animationPresets** repository using the [registerPreset](/api-reference/50%20Common/utils/animationPresets/3%20Methods/registerPreset(name_config).md '/Documentation/ApiReference/Common/Utils/animationPresets/Methods/#registerPresetname_config') method.

	<!--JavaScript-->
	DevExpress.animationPresets.registerPreset("view-content-change", { animation: "slide" });
	DevExpress.animationPresets.registerPreset("view-content-change", { animation: "ios7-slide", device: { platform: "ios" } });
	DevExpress.animationPresets.registerPreset("view-content-change", { animation: "fade", device: { deviceType: "desktop", platform: "generic" } });
	DevExpress.animationPresets.registerPreset("view-content-change", { animation: "none", device: { grade: "C" } });
	DevExpress.animationPresets.registerPreset("view-content-rendered", { animation: "fade" });
	DevExpress.animationPresets.registerPreset("view-content-rendered", { animation: "none", device: { grade: "C" } });
	//...

According to the code above, when the "view-content-change" animation is requested, the "ios7-slide" animation preset will be used if the application is running on an iOS device, the "fade" animation - on a desktop, "slide" - on any other device except for the devices that are marked by the "C" [grade](/api-reference/50%20Common/Object%20Structures/device/grade.md '/Documentation/ApiReference/Common/Object_Structures/device/#grade') in DevExtreme. On the latter devices, animation will not be applied because of insufficient performance.