Go to the `NgModule` in which you are going to use DevExtreme UI components and import a [predefined theme stylesheet](/concepts/60%20Themes%20and%20Styles/05%20Predefined%20Themes/00%20Predefined%20Themes.md '/Documentation/Guide/Themes_and_Styles/Predefined_Themes/') (`dx.light.css` in the code below).

    <!-- tab: app.module.ts -->
    import 'devextreme/dist/css/dx.light.css';
    // ...
    // DevExtreme modules will be imported here later
    // ...

To create a single CSS bundle, you can use the `rollup-plugin-css-only` package. Install it with the following command...

    npm install --save-dev rollup-plugin-css-only

... and configure it in the `rollup-config.js` file.

    <!-- tab: rollup-config.js -->
    import css from 'rollup-plugin-css-only';
    // ...

    export default {
        // ...
        plugins: [
            css({ output: 'dist/bundle.css' }),
            // ...
        ]
    }

[note] [SVG-based UI components](/concepts/60%20Themes%20and%20Styles/00%20HTML-%20and%20SVG-Based%20UI%20Components.md '/Documentation/Guide/Themes_and_Styles/HTML-_and_SVG-Based_UI_Components/') do not require theme stylesheets. If you choose to import the stylesheets, the UI components apply an appearance that matches them.
