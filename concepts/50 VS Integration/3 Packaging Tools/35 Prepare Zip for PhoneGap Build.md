The [DevExtreme project templates](/concepts/50%20VS%20Integration/0%20Project%20Templates/02%20DevExtreme%20App%20Project%20Template '/Documentation/Guide/VS_Integration/Project_Templates/#DevExtreme_App_Project_Template') can be built for any platform using the [build.phonegap.com](https://build.phonegap.com). For this purpose, generate a zip package of your application using the **Build Package** wizard.

Before running the **Build Package** wizard, [set the required version of the Cordova library](/concepts/50%20VS%20Integration/3%20Packaging%20Tools/17%20Set%20Cordova%20Version.md '/Documentation/Guide/VS_Integration/Packaging_Tools/#Set_Cordova_Version') if needed and [include required PhoneGap plugin(s)](/concepts/50%20VS%20Integration/3%20Packaging%20Tools/16%20Set%20Required%20Plugins.md '/Documentation/Guide/VS_Integration/Packaging_Tools/#Set_Required_Plugins') into the application project. 

To prepare a zip package for the PhoneGap Build, right-click the application project and choose **Build Native Packages...** The **Build Package** wizard will be invoked.

![ZIP Build](/images/DevExtreme/ZIPWizard.png)

Choose **Zip** and a PhoneGap package will be generated automatically.