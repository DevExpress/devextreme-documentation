If you add several dictionaries to the application, specify which one of them is to be used when running this application. For this purpose, detect the language of the browser in which the application is running and set the appropriate locale as demonstrated in the code below.

    <!--JavaScript-->Globalize.locale(navigator.language || navigator.browserLanguage);

This line of code should be written somewhere in the *index.js* file of your application, before creating the HtmlApplication object.

If **globalize** libraries are not found for the specified locale, the neutral English locale "en" is used by default.
