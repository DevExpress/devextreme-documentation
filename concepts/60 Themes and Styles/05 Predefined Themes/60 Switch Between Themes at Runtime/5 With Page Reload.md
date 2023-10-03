This approach is suitable for switching between any themes, but it involves page reload:

1. Include theme stylesheets on your index page as shown below. The syntax is the same as in the step 1 of the [previous instructions](/concepts/60%20Themes%20and%20Styles/05%20Predefined%20Themes/60%20Switch%20Between%20Themes%20at%20Runtime/2%20Without%20Page%20Reload.md '/Documentation/Guide/Themes_and_Styles/Predefined_Themes/#Switch_Between_Themes_at_Runtime/Without_Page_Reload'), but the `data-active` attributes are set to **false** for all themes.

    ---
    ##### jQuery

        <!-- tab: index.html -->
        <head>
            <link rel="dx-theme" data-theme="material.blue.light" href="css/dx.material.blue.light.css" data-active="false">
            <link rel="dx-theme" data-theme="material.blue.dark" href="css/dx.material.blue.dark.css" data-active="false">
            <link rel="dx-theme" data-theme="material.teal.light" href="css/dx.material.teal.light.css" data-active="false">
            <!-- ... -->
        </head>

    ##### Angular

    If you want your themes to update automatically with the DevExtreme package, reference them in `angular.json`, and after, use the themes in `index.html`.

        <!-- tab: angular.json -->
        "assets": [
            "src/favicon.ico",
            "src/assets",
            {
                "glob": "**/*",
                "input": "./node_modules/devextreme/dist/css/",
                "output": "assets"
            }
        ],

        <!-- tab: index.html -->
        <head>
            <link rel="dx-theme" data-theme="material.blue.light" href="assets/dx.material.blue.light.css" data-active="false">
            <link rel="dx-theme" data-theme="material.blue.dark" href="assets/dx.material.blue.dark.css" data-active="false">
            <link rel="dx-theme" data-theme="material.teal.light" href="assets/dx.material.teal.light.css" data-active="false">
            <!-- ... -->
        </head>

    ##### Vue

    Copy the stylesheets you want to use from `node_modules/devextreme/dist/css/` folder to the `public` folder. If you created your own theme, place it in the `public` folder.

        <!-- tab: index.html -->
        <head>
            <link rel="dx-theme" data-theme="material.blue.light" href="<%= BASE_URL %>dx.material.blue.light.css" data-active="false">
            <link rel="dx-theme" data-theme="material.blue.dark" href="<%= BASE_URL %>dx.material.blue.dark.css" data-active="false">
            <link rel="dx-theme" data-theme="material.teal.light" href="<%= BASE_URL %>dx.material.teal.light.css" data-active="false">
            <!-- ... -->
        </head>

    ##### React

    Copy the stylesheets you want to use from `node_modules/devextreme/dist/css/` folder to the `public` folder. If you created your own theme, place it in the `public` folder.

        <!-- tab: index.html -->
        <head>
            <link rel="dx-theme" data-theme="material.blue.light" href="%PUBLIC_URL%/dx.material.blue.light.css" data-active="false">
            <link rel="dx-theme" data-theme="material.blue.dark" href="%PUBLIC_URL%/dx.material.blue.dark.css" data-active="false">
            <link rel="dx-theme" data-theme="material.teal.light" href="%PUBLIC_URL%/dx.material.teal.light.css" data-active="false">
            <!-- ... -->
        </head>

    ---

1. Save the target theme's name in the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" target="_blank">window.localStorage</a> and reload the page:

        var switchTheme = function(themeName) {
            window.localStorage.setItem("dx-theme", themeName);
            window.location.reload();
        }

1. On page loading, restore the theme name and pass it to the [DevExpress.ui.themes.current(themeName)](/api-reference/50%20Common/utils/ui/themes/current(themeName).md '/Documentation/ApiReference/Common/utils/ui/themes/#currentthemeName') method. You can also specify the theme to be applied in case no theme name is found in the **window.localStorage**. In the following code, it is the Material Blue Light theme.

    ---

    ##### jQuery

        DevExpress.ui.themes.current(window.localStorage.getItem("dx-theme") || "material.blue.light");

    ##### Angular

        import themes from "devextreme/ui/themes";

        themes.current(window.localStorage.getItem("dx-theme") || "material.blue.light");

    ##### Vue

        import themes from "devextreme/ui/themes";
        
        themes.current(window.localStorage.getItem("dx-theme") || "material.blue.light");

    ##### React

        import themes from "devextreme/ui/themes";
        
        themes.current(window.localStorage.getItem("dx-theme") || "material.blue.light");

    ---

#include switch-themes-initialized-note