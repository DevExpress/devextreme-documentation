DevExtreme application projects have the following common files.

- *cordova.js*  
Initially, this is an empty file. When building a package, the Package Builder replaces this file with a valid platform specific Cordova library of the required version. For details on the Cordova version, refer to the [Set Cordova Version](/concepts/50%20VS%20Integration/3%20Packaging%20Tools/17%20Set%20Cordova%20Version.md '/Documentation/Guide/VS_Integration/Packaging_Tools/#Set_Cordova_Version') topic.

- *config.xml*  
A file that is used by the **Build Native Packages...** wizard. This file is required to specify core Cordova API features, plugins, and platform-specific settings.
