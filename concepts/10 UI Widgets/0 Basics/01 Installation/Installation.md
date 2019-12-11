The following DevExtreme libraries exist.

[note]Reference only one of the following libraries per application. Their combination may cause unexpected results.

 - **dx.mobile** ([DevExtreme Mobile](/concepts/Common/07%20DevExtreme%20Packages/10%20DevExtreme%20Mobile.md '/Documentation/Guide/Common/DevExtreme_Packages/#DevExtreme_Mobile') or [Complete](/concepts/Common/07%20DevExtreme%20Packages/30%20DevExtreme%20Complete.md '/Documentation/Guide/Common/DevExtreme_Packages/#DevExtreme_Complete'))
 - **dx.web** ([DevExtreme Web](/concepts/Common/07%20DevExtreme%20Packages/20%20DevExtreme%20Web.md '/Documentation/Guide/Common/DevExtreme_Packages/#DevExtreme_Web') or [Complete](/concepts/Common/07%20DevExtreme%20Packages/30%20DevExtreme%20Complete.md '/Documentation/Guide/Common/DevExtreme_Packages/#DevExtreme_Complete'))
 - **dx.viz** ([DevExtreme Web](/concepts/Common/07%20DevExtreme%20Packages/20%20DevExtreme%20Web.md '/Documentation/Guide/Common/DevExtreme_Packages/#DevExtreme_Web') or [Complete](/concepts/Common/07%20DevExtreme%20Packages/30%20DevExtreme%20Complete.md '/Documentation/Guide/Common/DevExtreme_Packages/#DevExtreme_Complete'))
 - **dx.viz-web** ([DevExtreme Web](/concepts/Common/07%20DevExtreme%20Packages/20%20DevExtreme%20Web.md '/Documentation/Guide/Common/DevExtreme_Packages/#DevExtreme_Web') or [Complete](/concepts/Common/07%20DevExtreme%20Packages/30%20DevExtreme%20Complete.md '/Documentation/Guide/Common/DevExtreme_Packages/#DevExtreme_Complete'))
 - **dx.all** ([DevExtreme Complete](/concepts/Common/07%20DevExtreme%20Packages/30%20DevExtreme%20Complete.md '/Documentation/Guide/Common/DevExtreme_Packages/#DevExtreme_Complete'))

DevExtreme has the following dependencies.

- [jQuery](https://jquery.com) version 2.1 - 2.2

Optionally, you can use DevExtreme with the following MVVM frameworks.

- [Knockout](https://knockoutjs.com) versions 2.2.3 - 2.3.0 and 3.1.0 - 3.4.0
- [AngularJS](https://angularjs.org) version [1.2 - 1.5](/concepts/Common/08%203rd-Party%20Libraries%20and%20Frameworks%20Integration/20%20Data%20Binding%20and%20SPA%20Frameworks.md '/Documentation/Guide/Common/3rd-Party_Libraries_and_Frameworks_Integration/#Data_Binding_and_SPA_Frameworks')

 [note]DevExtreme provides a CTP version of the [Angular 2 integration module](https://github.com/DevExpress/devextreme-angular2). This version is available for your evaluation, yet it has certain issues that are in the process of being addressed. Keep track of them or post a newly-found one on [this GitHub page](https://github.com/DevExpress/devextreme-angular2/issues).

Some functionality relies on additional libraries.

- [Globalize](https://github.com/jquery/globalize/releases) version 1.x     
Allows you to localize your app and use custom date, number and currency formatting.

 You need to reference Globalize only if your application should support the following functionality.

    1. Non-English locales
    2. Custom message dictionaries
    3. Non-USD currency [formatting](/api-reference/50%20Common/Object%20Structures/format '/Documentation/ApiReference/Common/Object_Structures/format/')
    4. Custom date and number [formatting](/api-reference/50%20Common/Object%20Structures/format '/Documentation/ApiReference/Common/Object_Structures/format/')

 To learn more about how to use the globalize library, refer to the [Localization](/Documentation/Guide/UI_Widgets/Common/Localization/#Localization) topic.

- JSZIP library

 Reference the JSZIP library only when [exporting data to a file](/concepts/10%20UI%20Widgets/70%20Data%20Grid/090%20Client-Side%20Export '/Documentation/Guide/UI_Widgets/Data_Grid/Client-Side_Export/').

- [Webpack](https://webpack.github.io/docs/what-is-webpack.html) version 1.13 (available [via npm](/concepts/10%20UI%20Widgets/0%20Basics/01%20Installation/20%20npm%20Package.md '/Documentation/Guide/UI_Widgets/Basics/Installation/#npm_Package') only)        

 Allows you to create your own [DevExtreme modules](/concepts/Common/30%20Modularity '/Documentation/Guide/Common/Modularity/') that include only what you need.

[note]Reference the DevExtreme scripts after external scripts.

This article shows from where to download DevExtreme and its required libraries and how to install them.