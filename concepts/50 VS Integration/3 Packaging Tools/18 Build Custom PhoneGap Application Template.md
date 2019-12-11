When building an iOS, Android or WinPhone package, a DevExtreme application is embedded into the DevExtreme-adapted PhoneGap application template. This template uses the Cordova library version 3.7 and accepts the [standard PhoneGap plugins](https://build.phonegap.com/plugins). If you need to [use another version of the Cordova library](/concepts/50%20VS%20Integration/3%20Packaging%20Tools/17%20Set%20Cordova%20Version.md '/Documentation/Guide/VS_Integration/Packaging_Tools/#Set_Cordova_Version') or [apply a custom 3rd party PhoneGap plugin(s)](/concepts/50%20VS%20Integration/3%20Packaging%20Tools/16%20Set%20Required%20Plugins.md '/Documentation/Guide/VS_Integration/Packaging_Tools/#Set_Required_Plugins'), build a custom PhoneGap application template for your DevExtreme application. For this purpose, do the following.

- Set your PhoneGap Build application token for the project's **PhoneGap Build Token** property within the **PhoneGap** properties tab.

    ![Application Token](/images/DevExtreme/ApplicationToken.png)

    [note]Your application token is located within the Client Applications tab of your PhoneGap account details.

- Right-click your DevExtreme application project and choose the **Build Application Template...** item. The **Build Template via PhoneGap API** wizard will be invoked.

![Build Application Template Wizard](/images/DevExtreme/BuildAppTemplateWizard.png)

Choose the platform for which you are going to build a custom application template. The wizard will upload a DevExtreme application template with your application's *config.xml* file to your private PhoneGap repository, then an *.apk*/*.ipa*/*.appx* file will be built and downloaded to your application project. Finally, the created application template will be removed from your private PhoneGap application repository.

![Build Log](/images/DevExtreme/AppTemplateBuildLog.png)

Close the wizard. The created application template will be added to the **templates** folder in your application project and a path to this template will be assigned to the **Template file path** property of the application project automatically (you can see this property within the [Android package](/concepts/50%20VS%20Integration/3%20Packaging%20Tools/3%20Build%20Package%20for%20Android.md '/Documentation/Guide/VS_Integration/Packaging_Tools/#Build_Package_for_Android'), [iOS package](/concepts/50%20VS%20Integration/3%20Packaging%20Tools/2%20Build%20Package%20for%20iOS.md '/Documentation/Guide/VS_Integration/Packaging_Tools/#Build_Package_for_iOS') and [Windows Phone package](/Documentation/Guide/VS_Integration/Packaging_Tools/#Build_Package_for_Win8Phone) tabs).

![Templates Folder](/images/DevExtreme/ApplicationTemplatesFolder.png)

As a result, the created custom application templates will be used when packing your DevExtreme application (read below to learn how to prepare a package).