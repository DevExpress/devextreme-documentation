---
id: animationPresets.registerPreset(name, config)
---
---
##### shortDescription
Adds an animation with a specific name to the animation repository.

##### param(name): String
The animation's name.

##### param(config): Object
Information on the animation.

##### field(config.animation): animationConfig
The animation's configuration.

##### field(config.device): Device
The animation's target device.

---
The animation repository allows you to store common animations that can be used for different elements in an application/site. These common animations are the presets that are registered by certain names. These presets can define the same animation, thus they have the same name, but be targeted for different devices, thus they have different animation configurations. Here is an example of an iOS-specific animation preset registered by the "my-animation" name.

    <!--JavaScript-->DevExpress.animationPresets.registerPreset('my-animation', {
        device: { platform: 'ios' },
        animation: {
            //iOS-specific animation configuration
        }
    });

If you do not specify the **device** field of the preset, the preset will be used on any device.

    <!--JavaScript-->DevExpress.animationPresets.registerPreset('my-animation', {
        animation: {
            //common animation configuration 
        }
    });

The following request will return the iOS-specific animation configuration when the application is running on an iOS device and the common animation configuration on any other device.

    <!--JavaScript-->DevExpress.animationPresets.getPreset('my-animation');

You can register several animation presets common for all devices and then use them to register device specific presets under another name. Here is an example where the [default presets](/api-reference/50%20Common/utils/animationPresets '/Documentation/ApiReference/Common/Utils/animationPresets/') are used to register another preset with a specific animation configurations used in iOS and on desktop.

    <!--JavaScript-->DevExpress.animationPresets.registerPreset( 'view-content-change', { animation: 'slide' } );
    DevExpress.animationPresets.registerPreset('view-content-change', { animation: 'ios7-slide', device: { platform: 'ios' } } );
    DevExpress.animationPresets.registerPreset('view-content-change', { animation: 'fade', device: { deviceType: 'desktop', platform: 'generic' } } );

[note]The changes performed by the **registerPreset(name, config)** method are not applied to the animation repository automatically. You should also call the [applyChanges()](/api-reference/50%20Common/utils/animationPresets/applyChanges().md '/Documentation/ApiReference/Common/utils/animationPresets/#applyChanges') method then. But consider calling the latter method once after you made all the required changes, because a single update of the repository takes less time then the updates performed each time you make a change.