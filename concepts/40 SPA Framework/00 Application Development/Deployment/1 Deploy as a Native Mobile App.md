DevExtreme applications are ready to be compiled by Apache Cordova ([PhoneGap](https://build.phonegap.com)) into a native package that can then be submitted to app stores. If you follow this route, PhoneGap also provides libraries to [access](https://docs.phonegap.com/en/2.0.0/index.html) a device's built-in functionality such as camera, accelerometer and contact list.

**DevExtreme Mobile**/**DevExtreme Web**

To build a package for your application, do the following.

- Add the *config.xml* file to the application project according to the [PhoneGap Build instructions](https://docs.build.phonegap.com/en_US/configuring_basics.md.html).

- Pack your project content to a ZIP archive.

- Follow the instructions provided by [PhoneGap Build](https://docs.build.phonegap.com/en_US/#googtrans(en)) to get a native package for your application.

**DevExtreme Complete**

DevExtreme comes with the **Build Native Package** wizard integrated into Visual Studio. This wizard helps produce a native package for the following platforms: iOS, Android and WindowsPhone8. You can also use the wizard to get a ZIP archive that is ready to be compiled by Apache Cordova ([PhoneGap Build](https://build.phonegap.com)). To learn more on how to use the **Build Native Package** wizard, refer to the [Packaging Tools](/concepts/50%20VS%20Integration/3%20Packaging%20Tools '/Documentation/Guide/VS_Integration/Packaging_Tools/') article.

[note]If you use device APIs provided by [Apache Cordova](https://cordova.apache.org) in your application, call device API functions after the [deviceready](https://cordova.apache.org/docs/en/5.0.0/cordova_events_events.md.html#deviceready) event has fired. Otherwise, the application may work too slowly on startup. The **deviceready** event fires when Apache Cordova is fully loaded.