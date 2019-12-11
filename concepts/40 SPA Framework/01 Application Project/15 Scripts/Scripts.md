When developing a DevExtreme application, the following libraries must be referenced in the application page.

- [jQuery](https://jquery.com) *version 2.1 - 2.2*
- [Knockout](https://knockoutjs.com) versions 2.2.3 - 2.3.0 and 3.1.0 - 3.4.0
- dx.mobile (if you have DevExtreme [Mobile](/concepts/Common/07%20DevExtreme%20Packages/10%20DevExtreme%20Mobile.md '/Documentation/Guide/Common/DevExtreme_Packages/#DevExtreme_Mobile') or [Complete](/concepts/Common/07%20DevExtreme%20Packages/30%20DevExtreme%20Complete.md '/Documentation/Guide/Common/DevExtreme_Packages/#DevExtreme_Complete'))/dx.web (if you have [DevExtreme Web](/concepts/Common/07%20DevExtreme%20Packages/20%20DevExtreme%20Web.md '/Documentation/Guide/Common/DevExtreme_Packages/#DevExtreme_Web')).

DevExteme does not require the following libraries to be referenced in your application. However, you should reference those libraries whose functionality you are going to use in the application.

- [Globalize](https://github.com/jquery/globalize/releases) version 1.x

 You need to reference Globalize only if your application should support the following functionality.

    1. Non-English locales
    2. Custom message dictionaries
    3. Non-USD currency [formatting](/api-reference/50%20Common/Object%20Structures/format '/Documentation/ApiReference/Common/Object_Structures/format/')
    4. Custom date and number [formatting](/api-reference/50%20Common/Object%20Structures/format '/Documentation/ApiReference/Common/Object_Structures/format/')

 To learn more about how to use the globalize library, refer the [Localization](/Documentation/Guide/UI_Widgets/Common/Localization/#Localization) topic.

- JSZIP library

 You need to reference the JSZIP library only when [exporting data to a file](/concepts/10%20UI%20Widgets/70%20Data%20Grid/090%20Client-Side%20Export '/Documentation/Guide/UI_Widgets/Data_Grid/Client-Side_Export/').

[note]Reference the DevExtreme scripts (dx.mobile or dx.web) after external scripts.

There are two possible ways to provide links to the necessary files.