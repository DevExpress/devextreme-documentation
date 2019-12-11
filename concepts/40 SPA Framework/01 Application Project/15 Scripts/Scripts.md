When developing a DevExtreme application, the following libraries must be referenced in the application page.

- [jQuery](https://jquery.com) *version 2.1 - 2.2 and 3.x*
- [Knockout](https://knockoutjs.com) versions 2.2.3 - 2.3.0 and 3.1.0 - 3.4.0
- dx.mobile or dx.web.

DevExteme does not require the following libraries to be referenced in your application. However, you should reference those libraries whose functionality you are going to use in the application.

- [Globalize](https://github.com/jquery/globalize/releases) version 1.x

 You need to reference Globalize only if your application should support the following functionality.

    1. Non-English locales
    2. Custom message dictionaries
    3. Non-USD currency [formatting](/api-reference/50%20Common/Object%20Structures/format '/Documentation/ApiReference/Common/Object_Structures/format/')
    4. Custom date and number [formatting](/api-reference/50%20Common/Object%20Structures/format '/Documentation/ApiReference/Common/Object_Structures/format/')

 To learn more about how to use the Globalize library, refer the [Localization Using Globalize](/concepts/Common/33%20Localization/05%20Using%20Localization%20Libraries/10%20Using%20Globalize.md '/Documentation/Guide/Common/Localization/#Using_Localization_Libraries/Using_Globalize') topic.

- JSZIP library

 You need to reference the JSZIP library only when [exporting data to a file](/concepts/05%20Widgets/DataGrid/70%20Client-Side%20Exporting '/Documentation/Guide/Widgets/DataGrid/Client-Side_Exporting/').

[note]Reference the DevExtreme scripts (dx.mobile or dx.web) after external scripts.

There are two possible ways to provide links to the necessary files.