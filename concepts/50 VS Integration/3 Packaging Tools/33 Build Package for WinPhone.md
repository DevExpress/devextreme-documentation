As you were developing this application, you included layouts and style sheets specific to the WinPhone platform. The next step is to set the project properties required for building a native Windows Phone package. To do this, right-click the application project in the Visual Studio Solution Explorer and choose **Properties**, then specify the properties that are presented in the **Windows Phone package** tab.

![WinPhone Package Properties](/images/DevExtreme/WinPhonePackageProperties.png)

- **Signing**  

    Specify a path to the *.pfx* file used to sign the application package.

- **Packaging**  

    These properties are analogous to the properties from the [app manifest file for the Windows Phone](https://msdn.microsoft.com/en-us/library/windowsphone/develop/ff769509(v=vs.105).aspx#BKMK_APPelement).

- **App Icons and Images**

    Assign the icons and splash images to be built into the application's native package. To learn about image recommendations, refer to the [Tile design guidelines for the Windows Phone](https://msdn.microsoft.com/en-us/library/windowsphone/design/jj662929(v=vs.105).aspx) article.

- **Package localization**  

    If you [localize your application](/concepts/40%20SPA%20Framework/6%20Localization '/Documentation/Guide/SPA_Framework/Localization/'), specify the application's languages so that they are available for end users in the Windows Phone Store.

- **Application Template**

    Specify a [custom PhoneGap application template](/concepts/50%20VS%20Integration/3%20Packaging%20Tools/18%20Build%20Custom%20PhoneGap%20Application%20Template.md '/Documentation/Guide/VS_Integration/Packaging_Tools/#Build_Custom_PhoneGap_Application_Template') for the Windows Phone native package. When going through the **Build Package** wizard, this template will be used as a base for building a native package for the application.

Now, you can easily create a native Windows Phone package with your application right from Visual Studio. Right-click the application project and choose **Build Native Packages...**. The **Build Package** wizard will run.

![Build For WinPhone](/images/DevExtreme/WinPhoneWizard.png)

Choose **Windows Phone** and go through all the wizard steps. As a result, you will get a file that is ready to be loaded to the Windows Store. For details on the requirements for a Windows Phone application release, refer to the [Windows Phone Dev Center](https://msdn.microsoft.com/en-us/library/windowsphone/help/jj206736(v=vs.105).aspx).

<a href="http://www.youtube.com/watch?v=7X9eLN12Te4&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&index=28" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Watch Video</a>