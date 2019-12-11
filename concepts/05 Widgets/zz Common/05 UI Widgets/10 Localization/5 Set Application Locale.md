To change the default locale of your application, detect the language of the browser in which the application is running and set the appropriate locale as demonstrated in the code below.

    <!--JavaScript-->
    DevExpress.localization.locale(navigator.language || navigator.browserLanguage);

In the modular approach, use the following code.

    <!--JavaScript-->
    var localization = require("devextreme/localization");
    localization.locale(navigator.language || navigator.browserLanguage);

[note]Set locale only after the DevExtreme library is loaded.