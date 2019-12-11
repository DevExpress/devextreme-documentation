If you add several dictionaries to the application, specify which one of them is to be used when running this application. For this purpose, detect the language of the browser in which the application is running and set the appropriate locale as demonstrated in the code below.

    <!--JavaScript-->Globalize.locale(navigator.language || navigator.browserLanguage);

[note]Set locale only after the DevExtreme library is loaded.