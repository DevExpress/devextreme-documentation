Within the *index.html* file (the main page of your application), add links to the following files.

- *dx.mobile.js* (*dx.all.js* or *dx.web.js*)  
    A [predefined dictionary](/concepts/40%20SPA%20Framework/6%20Localization/32%20Modify%20Predefined%20Dictionaries.md '/Documentation/Guide/SPA_Framework/Localization/#Modify_Predefined_Dictionaries') for the required locale.
- *localization.XX.js*  
    Your application's [dictionary](/concepts/40%20SPA%20Framework/6%20Localization/3%20Create%20App%20Dictionaries%20for%20Locales.md '/Documentation/Guide/SPA_Framework/Localization/#Create_App_Dictionaries_for_Locales') for the required locale.

Take a look below for an example of links in code. 

    <!--HTML-->
    <!--DevExtreme library-->
    <script type="text/javascript" src="js/dx.web.js"></script>

    <!--DevExtreme dictionaries-->
    <script type="text/javascript" src="js/localization/dx.messages.en.js"></script>
    <script type="text/javascript" src="js/localization/dx.messages.de.js"></script>
    <script type="text/javascript" src="js/localization/dx.messages.ja.js"></script>
    <script type="text/javascript" src="js/localization/dx.messages.ru.js"></script>

    <!--Application dictionaries-->
    <script type="text/javascript" src="js/localization/localization.en.js"></script>
    <script type="text/javascript" src="js/localization/localization.de.js"></script>
    <script type="text/javascript" src="js/localization/localization.ja.js"></script>
    <script type="text/javascript" src="js/localization/localization.ru.js"></script>

[note]Dictionary scripts must be linked in the same order as those presented in the example above. DevExtreme scripts must be linked above dictionary scripts.

If you are using Globalize, refer to the [Localization Using Globalize](/concepts/Common/33%20Localization/05%20Using%20Localization%20Libraries/10%20Using%20Globalize.md '/Documentation/Guide/Common/Localization/#Using_Localization_Libraries/Using_Globalize') article to learn how to link Globalize modules.

For the information on linking modules required for Intl localization, refer to [Intl](https://github.com/DevExpress/DevExtreme-Intl) documentation.