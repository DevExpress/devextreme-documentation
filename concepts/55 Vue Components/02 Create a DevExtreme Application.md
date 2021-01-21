If you are starting a project from scratch, use the [DevExtreme Vue Template](/Documentation/Guide/Vue_Components/Application_Template/). It is a simple application with a navigation menu and several sample views in a responsive layout (see <a href="https://devexpress.github.io/devextreme-vue-template/#/home">live preview</a>).

You can generate this application with the [DevExtreme CLI](/concepts/Common/DevExtreme%20CLI/00%20DevExtreme%20CLI.md '/Documentation/Guide/Common/DevExtreme_CLI/'):

    // Generate a Vue 2 application
    npx -p devextreme-cli devextreme new vue-app app-name

    // Generate a Vue 3 application
    npx -p devextreme-cli devextreme new vue-app app-name --version=3

    cd app-name
    npm run serve

The application already contains the [DataGrid](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/Overview/Vue/Light) and [Form](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/Overview/Vue/Light) components. You can find their configurations in the `src\views\display-data.vue` and `src\views\profile.vue` files correspondingly.

For further information about DevExtreme Vue components, refer to the following resources:

- [Component Configuration Syntax](/concepts/55%20Vue%20Components/20%20Component%20Configuration%20Syntax '/Documentation/Guide/Vue_Components/Component_Configuration_Syntax/')
- [Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/Overview/Vue/Light)
- [API Reference](/api-reference/10%20UI%20Widgets '/Documentation/ApiReference/UI_Components/')

For more information about the structure and contents of the DevExtreme Vue Template, refer to the [DevExtreme Application Template](/Documentation/Guide/Vue_Components/Application_Template/) article.
