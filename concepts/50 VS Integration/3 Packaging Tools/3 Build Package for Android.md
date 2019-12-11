As you were developing this application, you already included layouts and style sheets specific to the Android platform. The next step is to set the project properties required for building a native Android package. To do this, right-click the application project in the Visual Studio Solution Explorer and choose **Properties**, then specify the properties that are presented in the **Android package** tab.

![Android Package Properties](/images/DevExtreme/AndroidPackageProperties.png)

- **Package**|**Name**  
	Specify the package name to be assigned to your Android application.

- **Package**|**Debuggable**  
	Check this option to enable [WebView debugging](https://developer.chrome.com/devtools/docs/remote-debugging#debugging-webviews) when the application runs on an Android device. 

- **Version**  
	Specify an additional element for the application version.

- **Signing**

	You do not have to specify these properties, because the certificate will be created during the iOS package built by the DevExtreme Build Package wizard (see below). If you have already obtained a certificate, you can specify it here. In this instance, it will be used by the DevExtreme Build Package wizard automatically.

- **App Icons and Splash Images**

	Assign the icons and splash images to be built into the application's native package. To learn about image recommendations, refer to the [Launcher Icons](https://developer.android.com/guide/practices/ui_guidelines/icon_design_launcher.html#size) and [Supporting Multiple Screens](https://developer.android.com/guide/practices/screens_support.html#top) articles.

- **Application Template**

	Specify a [custom PhoneGap application template](/concepts/50%20VS%20Integration/3%20Packaging%20Tools/18%20Build%20Custom%20PhoneGap%20Application%20Template.md '/Documentation/Guide/VS_Integration/Packaging_Tools/#Build_Custom_PhoneGap_Application_Template') for the Android native package. When going through the **Build Package** wizard, this template will be used as a base for building a native package for the application.

Now, you can easily create a native Android package with your application right from Visual Studio. Right-click the application project and choose **Build Native Packages...**. The **Build Package** wizard will run.

![Build For Android](/images/DevExtreme/AndroidWizard.png)

Choose **Android** and go through all the wizard steps. As a result, you will get a file that is ready to be loaded to the Google Play. For details on the requirements for an Android application release, refer to the [developer.android.com](https://developer.android.com/tools/publishing/app-signing.html) site.

<a href="http://www.youtube.com/watch?v=5meDNrE9Mb4&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&index=26" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Watch Video</a>