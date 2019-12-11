To provide the required stylesheets for your application, you can put them into the project and give links to them within the application page. 

    <!--HTML--><link rel="stylesheet" type="text/css" href="css/dx.common.css" />
    <link rel="stylesheet" type="text/css" href="css/dx.spa.css" />
    <link rel="dx-theme" data-theme="android5.light" href="css/dx.android5.light.css" data-active="true" />
    <link rel="dx-theme" data-theme="ios7.default" href="css/dx.ios7.default.css" />
    <link rel="dx-theme" data-theme="win10.black" href="css/dx.win10.black.css" data-active="true" />
    <link rel="dx-theme" data-theme="win10.white" href="css/dx.win10.white.css" />
    <link rel="dx-theme" data-theme="generic.light" href="css/dx.light.css" data-active="true" />
    <link rel="dx-theme" data-theme="generic.light.compact" href="css/dx.light.compact.css" />
    <link rel="dx-theme" data-theme="generic.dark" href="css/dx.dark.css" />
    <link rel="dx-theme" data-theme="generic.dark.compact" href="css/dx.dark.compact.css" />
    <link rel="dx-theme" data-theme="generic.contrast" href="css/dx.contrast.css" />
    <link rel="dx-theme" data-theme="generic.contrast.compact" href="css/dx.contrast.compact.css" />

The *dx.common.css* and *dx.spa.css* files include styles that are required for DevExtreme applications, with no relationship to the device on which the application is running.

All the files with styles are available for you in the DevExtreme zip archive or in the folder where you have installed DevExtreme, which is **C:\Program Files (x86)\DevExpress 17.1\DevExtreme\Sources** by default.

In the application template project, all the DevExtreme stylesheets are already located within the **css** folder. Links to these stylesheets are given within the application page.