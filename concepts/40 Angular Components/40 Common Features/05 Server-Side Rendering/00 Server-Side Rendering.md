<a href="https://angular.io/guide/universal#angular-universal-server-side-rendering" target="_blank">Server-side rendering</a> (SSR) generates static pages on the server to reduce the application's loading time.

SSR is used only in Angular Universal applications, but for DevExtreme components, there is no difference between Angular Universal and normal Angular applications.

You can get an Angular Universal application in two ways:

* Run the following command to add the Universal module to a normal Angular application:

        ng generate universal my-app

* <a href="https://github.com/angular/universal-starter#angular-universal-starter" target="_blank">Start a Universal application from scratch</a> and [add DevExtreme components](/concepts/40%20Angular%20Components/10%20Getting%20Started/03%20Add%20DevExtreme%20to%20an%20Angular%20CLI%20Application '/Documentation/Guide/Angular_Components/Getting_Started/Add_DevExtreme_to_an_Angular_CLI_Application/') to it.

[note] DevExtreme Angular components do not support [switching between themes at runtime](/concepts/60%20Themes%20and%20Styles/05%20Predefined%20Themes/60%20Switch%20Between%20Themes%20at%20Runtime '/Documentation/Guide/Themes_and_Styles/Predefined_Themes/#Switch_Between_Themes_at_Runtime') in the SSR mode. You can only [use a single theme](/concepts/40%20Angular%20Components/10%20Getting%20Started/03%20Add%20DevExtreme%20to%20an%20Angular%20CLI%20Application/03%20Configure%20Stylesheets.md '/Documentation/Guide/Angular_Components/Getting_Started/Add_DevExtreme_to_an_Angular_CLI_Application/#Configure_Stylesheets').

<a href="https://github.com/DevExpress/devextreme-examples/tree/19_2/universal-angular#universal-angular" target="_blank">This example</a> demonstrates DevExtreme components used in an Angular Universal application with server-side rendering.
