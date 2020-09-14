If you are starting a project from scratch, use the <a href="https://github.com/DevExpress/devextreme-react-template#devextreme-react-template" target="_blank">DevExtreme React Template</a>. It is a simple application with a navigation menu and several sample views in a responsive layout.

You can generate the application with the [DevExtreme CLI](/concepts/00%20Getting%20Started/50%20DevExtreme%20CLI/00%20DevExtreme%20CLI.md '/Documentation/Guide/Getting_Started/DevExtreme_CLI/'):

    npx -p devextreme-cli devextreme new react-app app-name
    cd app-name
    npm run start

[note]

npx is available with npm v5.2 and later. If you have an earlier version, <a href="https://docs.npmjs.com/try-the-latest-stable-version-of-npm" target="_blank">upgrade npm</a> or install the DevExtreme CLI globally and run the command from the installed package:

    npm i -g devextreme-cli
    devextreme new react-app app-name

[/note]

The application already contains the [DataGrid](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/Overview/React/Light) and [Form](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/Overview/React/Light) components. You can find their configurations in the `src/pages/display-data/display-data.js` and `src/pages/profile/profile.js` files correspondingly.

The following resources provide more information about DevExtreme React components:

- [Component Configuration Syntax](/concepts/50%20React%20Components/40%20Component%20Configuration%20Syntax/00%20Component%20Configuration%20Syntax.md '/Documentation/Guide/React_Components/Component_Configuration_Syntax/')
- [Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/Overview/React/Light)
- [API Reference](/api-reference/10%20UI%20Widgets '/Documentation/ApiReference/UI_Widgets/')
