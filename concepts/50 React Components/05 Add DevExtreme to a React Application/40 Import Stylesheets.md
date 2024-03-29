Open the main application file (`App.js`) and import a [predefined theme stylesheet](/concepts/60%20Themes%20and%20Styles/05%20Predefined%20Themes/00%20Predefined%20Themes.md '/Documentation/Guide/Themes_and_Styles/Predefined_Themes/') (`dx.light.css` in the code below). Alternatively, you can import the stylesheets where DevExtreme UI components are used. The syntax is the same.

    <!-- tab: App.js -->
    // ...
    import 'devextreme/dist/css/dx.light.css';

Then, go to the `public` folder, open the `index.html` file, and add the `dx-viewport` class to the `<body>` tag. This ensures that theme colors and typography settings are applied to all page elements (and not only to DevExtreme UI components).

    <!-- tab: index.html -->
    <html lang="en">
        <head>
            <!-- ... -->
        </head>
        <body class="dx-viewport">
            <div id="root"></div>
        </body>
    </html>

[note] [SVG-based UI components](/concepts/60%20Themes%20and%20Styles/00%20Styling%20Methods.md '/Documentation/Guide/Themes_and_Styles/Styling_Methods/') do not require theme stylesheets. If you choose to import the stylesheets, the UI components apply an appearance that matches them.

[tags] theme
