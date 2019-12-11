As you were developing this application, you already included layouts and style sheets specific to the iOS platform. The next step is to set the project properties required for building a native iOS package. To do this, right-click the application project in the Visual Studio Solution Explorer and choose **Properties**, then specify the properties that are presented in the **iOS package** tab.

![iOSPackage Properties](/images/DevExtreme/iOSPackageProperties.png)

- **Package information**  
	Specify a unique ID to identify your application in the AppStore.

- **Signing**

	You do not have to specify these properties, because the certificate will be created during the iOS package built by the DevExtreme Build Package wizard (see below). If you have already obtained a certificate, you can specify it here, in which case it will be used by the DevExtreme Build Package wizard automatically.

- **Devices family**

	Specify the underlying hardware type on which this app is designed to run.

- **App Icons and Splash Images**

	Assign the icons and splash images that will be built into the application's native package. To learn about image recommendations, refer to the [http://developer.apple.com/](https://developer.apple.com/library/ios/#documentation/userexperience/conceptual/mobilehig/IconsImages/IconsImages.html#//apple_ref/doc/uid/TP40006556-CH14-SW8) site.

- **Package localization**  

	If you [localize your application](/concepts/40%20SPA%20Framework/6%20Localization '/Documentation/Guide/SPA_Framework/Localization/'), specify the application languages so that they are available for end users in the AppStore.

- **Application Template**

	Specify a [custom PhoneGap application template](/concepts/50%20VS%20Integration/3%20Packaging%20Tools/18%20Build%20Custom%20PhoneGap%20Application%20Template.md '/Documentation/Guide/VS_Integration/Packaging_Tools/#Build_Custom_PhoneGap_Application_Template') for the iOS native package. When going through the **Build Package** wizard, this template will be used as a base to build a native package for the application.

Now, you can easily create a native iOS package with your application right from Visual Studio. Right-click the application project and choose **Build Native Packages...**. The **Build Package** wizard will run.

![Build For iOS](/images/DevExtreme/iOSWizard.png)

Choose **iOS** and go through all the wizard steps. This will result in a native package that is ready to be loaded to the AppStore. For details on the iOS application release requirements, refer to the [developer.apple.com](https://developer.apple.com/library/content/documentation/IDEs/Conceptual/AppDistributionGuide/Introduction/Introduction.html) site.

<a href="http://www.youtube.com/watch?v=Y-oS4tDNTnc&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&index=18" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Watch Video</a>