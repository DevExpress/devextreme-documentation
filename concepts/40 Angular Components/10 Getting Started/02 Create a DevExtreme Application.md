If you are starting a project from scratch, use the <a href="https://github.com/DevExpress/devextreme-angular-template#devextreme-angular-template" target="_blank">DevExtreme Angular Template</a>. It is a simple application with a navigation menu and several sample views in a responsive layout.

You can generate the application with the [DevExtreme CLI](/concepts/00%20Getting%20Started/50%20DevExtreme%20CLI/00%20DevExtreme%20CLI.md '/Documentation/Guide/Getting_Started/DevExtreme_CLI/'):

    npx -p devextreme-cli devextreme new angular-app app-name
    cd app-name
    npm run start

[note]

npx is available with npm v5.2 and later. If you have an earlier version, <a href="https://docs.npmjs.com/try-the-latest-stable-version-of-npm" target="_blank">upgrade npm</a> or install the DevExtreme CLI globally and run the command from the installed package:

    npm i -g devextreme-cli
    devextreme new angular-app app-name

[/note]

The application already contains the [DataGrid](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/Overview/Angular/Light) and [Form](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/Overview/Angular/Light) components. The following instructions show how to employ any other DevExtreme component using the [Button](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Button/PredefinedTypes/Angular/Light) component as an example:

1. Import the DevExtreme component's module in the `NgModule` where you are going to use it. Open the `src/app/app-routing.module.ts` file and add the following code:

        <!-- tab: app-routing.module.ts -->
        // ...
        import { ..., DxButtonModule } from 'devextreme-angular';

        @NgModule({
            imports: [ ..., DxButtonModule ],
            // ...
        })
        export class AppModule { }

1. Configure the DevExtreme component in the markup. Add the following code to the `src/app/pages/home/home.component.html` file:

        <!-- tab: home.component.html -->
        <!-- ... -->
        <dx-button
            text="Click me"
            (onClick)="helloWorld()">
        </dx-button>
        <!-- ... -->

1. Declare callback functions, event handlers, and binding properties for DevExtreme components in the Angular component. In this example, we declare the [onClick](/api-reference/10%20UI%20Widgets/dxButton/1%20Configuration/onClick.md '/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#onClick') event handler in the `src/app/pages/home/home.component.ts` file:

        <!-- tab: home.component.ts -->
        // ...
        export class AppComponent {
            helloWorld() {
                alert('Hello world!');
            }
        }

If you go to the Home view in the browser, you should see the **Button**.

The following resources provide more information about DevExtreme Angular components:

- [Component Configuration Syntax](/concepts/40%20Angular%20Components/20%20Component%20Configuration%20Syntax '/Documentation/Guide/Angular_Components/Component_Configuration_Syntax/')
- [Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/Overview/Angular/Light)
- [API Reference](/api-reference/10%20UI%20Widgets '/Documentation/ApiReference/UI_Widgets/')
