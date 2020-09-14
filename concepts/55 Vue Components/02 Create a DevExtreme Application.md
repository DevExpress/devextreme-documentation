If you are starting a project from scratch, use the <a href="https://github.com/DevExpress/devextreme-vue-template#devextreme-vue-template" target="_blank">DevExtreme Vue Template</a>. It is a simple application with a navigation menu and several sample views in a responsive layout.

You can generate the application with the [DevExtreme CLI](/concepts/00%20Getting%20Started/50%20DevExtreme%20CLI/00%20DevExtreme%20CLI.md '/Documentation/Guide/Getting_Started/DevExtreme_CLI/'):

    npx -p devextreme-cli devextreme new vue-app app-name
    cd app-name
    npm run serve

[note]

npx is available with npm v5.2 and later. If you have an earlier version, <a href="https://docs.npmjs.com/try-the-latest-stable-version-of-npm" target="_blank">upgrade npm</a> or install the DevExtreme CLI globally and run the command from the installed package:

    npm i -g devextreme-cli
    devextreme new vue-app app-name

[/note]

The application already contains the [DataGrid](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/Overview/Vue/Light) and [Form](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/Overview/Vue/Light) components. You can find their configurations in the `src/views/display-data.vue` and `src/views/profile.vue` files correspondingly.

The following resources provide more information about DevExtreme Vue components:

- [Component Configuration Syntax](/concepts/55%20Vue%20Components/20%20Component%20Configuration%20Syntax '/Documentation/Guide/Vue_Components/Component_Configuration_Syntax/')
- [Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/Overview/Vue/Light)
- [API Reference](/api-reference/10%20UI%20Widgets '/Documentation/ApiReference/UI_Widgets/')
