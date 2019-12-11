To make your DevExtreme application appear native on the device it is running, a specific theme must be applied. DevExtreme includes a set of themes that are specific to different devices. The generic "light" and "dark" themes are also available. These themes are not specific to a particular device, but make an application look consistent on any device. To learn about predefined themes and styles, refer to the [Predefined Themes](/concepts/60%20Themes/10%20Predefined%20Themes '/Documentation/Guide/Themes/Predefined_Themes/') article.

[note]Add links to the required themes on the application page **before** adding links to the product scripts.

Read subsections below to learn two possible ways to provide links to the necessary files.

In addition to the predefined styles, you may need to define the styles that are specific to a particular application. These styles should be collected within the *app.css* file. This file should be referenced within the application page.

    <!--HTML--><link rel="stylesheet" type="text/css" href="app.css"/>