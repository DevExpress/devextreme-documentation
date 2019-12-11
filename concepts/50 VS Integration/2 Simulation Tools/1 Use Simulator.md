Press F5 to run a [DevExtreme application](/concepts/50%20VS%20Integration/0%20Project%20Templates/02%20DevExtreme%20App%20Project%20Template '/Documentation/Guide/VS_Integration/Project_Templates/#DevExtreme_App_Project_Template') being implemented in Visual Studio. The simulator will run. It will show the application in different devices.

![Application in Simulator](/images/DevExtreme/AppInSimuilator.png)

Use the following capabilities of the simulator to test your application.

- Choose a device

- Choose between the Portrait or Landscape orientation

- Choose between the full or half sized device

- Scan the QRCode to run the application on a real device (read below).

[note]Some behavior of widgets in the simulator may differ from the one on a real device. This is because the simulator just emulates a device, but a desktop browser actually runs the application. So some device-specific behavior is not accessible in the simulator. For instance, if [native scrolling](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/useNativeScrolling.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#useNativeScrolling') is set, a simulated scrolling is applied in the simulator. To test such device-specific features, run your application [on a device](/concepts/50%20VS%20Integration/2%20Simulation%20Tools/3%20Run%20on%20Device.md '/Documentation/Guide/VS_Integration/Simulation_Tools/#Run_on_Device').


The simulator runs to show your application because the DevExtreme project has the **Run in simulator** property set to *true* by default. Right-click the project with your application and switch to the **Debug** tab in the invoked pane. Here you can see the **Simulator** section and the **Run in simulator** property in it. If you uncheck this property, the application will run in the browser as a web application. This mode is useful to test the URIs that are generated when navigating between views.

![Application in Simulator](/images/DevExtreme/SimulatorProperties.png)

As you can see, you can set the default device and orientation for the simulator using project properties.