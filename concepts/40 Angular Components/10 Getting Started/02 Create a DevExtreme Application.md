If you are starting a project from scratch, use the [DevExtreme Angular Template](/concepts/40%20Angular%20Components/30%20Application%20Template/00%20Application%20Template.md '/Documentation/Guide/Angular_Components/Application_Template/'). It is a simple application with a navigation menu and several sample views in a responsive layout (see <a href="https://devexpress.github.io/devextreme-angular-template/#/home">live preview</a>).

You can generate this application with the [DevExtreme CLI](/concepts/Common/DevExtreme%20CLI/00%20DevExtreme%20CLI.md '/Documentation/Guide/Common/DevExtreme_CLI/'):

    npx -p devextreme-cli devextreme new angular-app app-name
    cd app-name
    npm run start

The application already contains the [DataGrid](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/Overview/Angular/Light) and [Form](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/Overview/Angular/Light) UI components. You can find their configurations in the `src\app\pages\tasks\tasks.component.html` and `src\app\pages\profile\profile.component.html` files correspondingly. The following instructions show how to employ any other DevExtreme UI component using the [Button](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Button/PredefinedTypes/Angular/Light) UI component as an example:

1. Import the DevExtreme UI component's module in the `NgModule` where you are going to use it. Open the `src\app\app-routing.module.ts` file and add the following code:

        <!-- tab: app-routing.module.ts -->
        // ...
        import { ..., DxButtonModule } from 'devextreme-angular';

        @NgModule({
            imports: [ ..., DxButtonModule ],
            // ...
        })
        export class AppModule { }

1. Configure the DevExtreme UI component in the markup. Add the following code to the `src\app\pages\home\home.component.html` file:

        <!-- tab: home.component.html -->
        <!-- ... -->
        <dx-button
            text="Click me"
            (onClick)="helloWorld()">
        </dx-button>
        <!-- ... -->

2. Declare callback functions, event handlers, and binding properties in the application class. In this example, we declare the [onClick](/api-reference/10%20UI%20Components/dxButton/1%20Configuration/onClick.md '/Documentation/ApiReference/UI_Components/dxButton/Configuration/#onClick') event handler in the `src\app\pages\home\home.component.ts` file:

        <!-- tab: home.component.ts -->
        // ...
        export class AppComponent {
            helloWorld() {
                alert('Hello world!');
            }
        }

If you go to the Home view in the browser, you should see the Button.

For further information about DevExtreme Angular components, refer to the following resources:

- [Component Configuration Syntax](/concepts/40%20Angular%20Components/20%20Component%20Configuration%20Syntax '/Documentation/Guide/Angular_Components/Component_Configuration_Syntax/')
- [Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/Overview/Angular/Light)
- [API Reference](/api-reference/10%20UI%20Components '/Documentation/ApiReference/UI_Components/')

For more information about the structure and contents of the DevExtreme Angular Template, refer to the [DevExtreme Application Template](/concepts/40%20Angular%20Components/30%20Application%20Template/00%20Application%20Template.md '/Documentation/Guide/Angular_Components/Application_Template/') article.

[tags] angular