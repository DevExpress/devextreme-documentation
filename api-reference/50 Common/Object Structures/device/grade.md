---
id: Device.grade
acceptValues: 'A' | 'B' | 'C'
type: String
---
---
##### shortDescription
Specifies a performance grade of the current device.

---
The current device can have one of the grades of its performance.

- **'A'**  
iPhone 5+ devices, Android 4.4, all other devices.

- **'B'**  
iPhone 4- devices, Android 4.3 -

- **'C'**  
No devices with this grade are known now.

Use the **grade** option when specifying the device on which a particular animation can be used. 

    <!--JavaScript-->DevExpress.animationPresets.registerPreset("my-animation", {
        animation: 'fade',
        device: { grade: 'A' },
    });

    DevExpress.animationPresets.registerPreset("my-animation", {
        animation: 'none',
        device: { grade: 'C' }
    });

In the code above, when the 'my-animation' [animation preset](/api-reference/50%20Common/utils/animationPresets '/Documentation/ApiReference/Common/Utils/animationPresets/') is requested, the 'fade' animation will be performed if the current device has the 'A' category and animation will not be performed at all if the current device has the 'C' category.