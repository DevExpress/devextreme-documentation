You can use this approach only if the themes belong to the same group. For instance, you can switch from Generic Light to any other Generic theme, but not to a Generic Compact or Material Design theme (see [Predefined Themes](/concepts/60%20Themes%20and%20Styles/05%20Predefined%20Themes/00%20Predefined%20Themes.md '/Documentation/Guide/Themes_and_Styles/Predefined_Themes/')).

1. Include theme stylesheets on your `index.html` page as shown below. A theme with the `data-active` attribute set to `true` is applied. In the following code snippet, the light theme is used:

    ---
    ##### jQuery

        <!-- tab: index.html -->
        <head>
            <!-- Generic themes -->
            <link rel="dx-theme" data-theme="generic.light" href="css/dx.light.css" data-active="true">
            <link rel="dx-theme" data-theme="generic.dark" href="css/dx.dark.css" data-active="false">
            <link rel="dx-theme" data-theme="generic.contrast" href="css/dx.contrast.css" data-active="false">
            <!-- ... -->
            <!-- or Generic Compact themes-->
            <link rel="dx-theme" data-theme="generic.light.compact" href="css/dx.light.compact.css" data-active="true">
            <link rel="dx-theme" data-theme="generic.dark.compact" href="css/dx.dark.compact.css" data-active="false">
            <link rel="dx-theme" data-theme="generic.contrast.compact" href="css/dx.contrast.compact.css" data-active="false">
            <!-- ... -->
            <!-- or Material Design themes-->
            <link rel="dx-theme" data-theme="material.blue.light" href="css/dx.material.blue.light.css" data-active="true">
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
            <!-- Generic themes -->
            <link rel="dx-theme" data-theme="generic.light" href="assets/dx.light.css" data-active="true">
            <link rel="dx-theme" data-theme="generic.dark" href="assets/dx.dark.css" data-active="false">
            <link rel="dx-theme" data-theme="generic.contrast" href="assets/dx.contrast.css" data-active="false">
            <!-- ... -->
            <!-- or Generic Compact themes-->
            <link rel="dx-theme" data-theme="generic.light.compact" href="assets/dx.light.compact.css" data-active="true">
            <link rel="dx-theme" data-theme="generic.dark.compact" href="assets/dx.dark.compact.css" data-active="false">
            <link rel="dx-theme" data-theme="generic.contrast.compact" href="assets/dx.contrast.compact.css" data-active="false">
            <!-- ... -->
            <!-- or Material Design themes-->
            <link rel="dx-theme" data-theme="material.blue.light" href="assets/dx.material.blue.light.css" data-active="true">
            <link rel="dx-theme" data-theme="material.blue.dark" href="assets/dx.material.blue.dark.css" data-active="false">
            <link rel="dx-theme" data-theme="material.teal.light" href="assets/dx.material.teal.light.css" data-active="false">
            <!-- ... -->
        </head>

    ##### Vue

    Copy the stylesheets, fonts, and icons you want to use from `node_modules/devextreme/dist/css/` folder to the `public` folder. If you created your own theme, place it in the `public` folder.

        <!-- tab: index.html -->
        <head>
            <!-- Generic themes -->
            <link rel="dx-theme" data-theme="generic.light" href="<%= BASE_URL %>dx.light.css" data-active="true">
            <link rel="dx-theme" data-theme="generic.dark" href="<%= BASE_URL %>dx.dark.css" data-active="false">
            <link rel="dx-theme" data-theme="generic.contrast" href="<%= BASE_URL %>dx.contrast.css" data-active="false">
            <!-- ... -->
            <!-- or Generic Compact themes-->
            <link rel="dx-theme" data-theme="generic.light.compact" href="<%= BASE_URL %>dx.light.compact.css" data-active="true">
            <link rel="dx-theme" data-theme="generic.dark.compact" href="<%= BASE_URL %>dx.dark.compact.css" data-active="false">
            <link rel="dx-theme" data-theme="generic.contrast.compact" href="<%= BASE_URL %>dx.contrast.compact.css" data-active="false">
            <!-- ... -->
            <!-- or Material Design themes-->
            <link rel="dx-theme" data-theme="material.blue.light" href="<%= BASE_URL %>dx.material.blue.light.css" data-active="true">
            <link rel="dx-theme" data-theme="material.blue.dark" href="<%= BASE_URL %>dx.material.blue.dark.css" data-active="false">
            <link rel="dx-theme" data-theme="material.teal.light" href="<%= BASE_URL %>dx.material.teal.light.css" data-active="false">
            <!-- ... -->
        </head>

    ##### React

    Copy the stylesheets, fonts, and icons you want to use from `node_modules/devextreme/dist/css/` folder to the `public` folder. If you created your own theme, place it in the `public` folder.

        <!-- tab: index.html -->
        <head>
            <!-- Generic themes -->
            <link rel="dx-theme" data-theme="generic.light" href="%PUBLIC_URL%/dx.light.css" data-active="true">
            <link rel="dx-theme" data-theme="generic.dark" href="%PUBLIC_URL%/dx.dark.css" data-active="false">
            <link rel="dx-theme" data-theme="generic.contrast" href="%PUBLIC_URL%/dx.contrast.css" data-active="false">
            <!-- ... -->
            <!-- or Generic Compact themes-->
            <link rel="dx-theme" data-theme="generic.light.compact" href="%PUBLIC_URL%/dx.light.compact.css" data-active="true">
            <link rel="dx-theme" data-theme="generic.dark.compact" href="%PUBLIC_URL%/dx.dark.compact.css" data-active="false">
            <link rel="dx-theme" data-theme="generic.contrast.compact" href="%PUBLIC_URL%/dx.contrast.compact.css" data-active="false">
            <!-- ... -->
            <!-- or Material Design themes-->
            <link rel="dx-theme" data-theme="material.blue.light" href="%PUBLIC_URL%/dx.material.blue.light.css" data-active="true">
            <link rel="dx-theme" data-theme="material.blue.dark" href="%PUBLIC_URL%/dx.material.blue.dark.css" data-active="false">
            <link rel="dx-theme" data-theme="material.teal.light" href="%PUBLIC_URL%/dx.material.teal.light.css" data-active="false">
            <!-- ... -->
        </head>

    ---

2. Use the [DevExpress.ui.themes.current(themeName)](/api-reference/50%20Common/utils/ui/themes/current(themeName).md '/Documentation/ApiReference/Common/utils/ui/themes/#currentthemeName') method to switch to another theme. 

The method accepts the `data-theme` attribute value. For example, if you want to switch to `dx.generic.dark`, pass `generic.dark` (without the 'dx' prefix) as an argument in the method. For a custom theme, specify the theme you used as a base. If both of your themes are derived from the same base, get the `data-theme` value from the `font-family` value of the `dx-theme-marker` CSS class, which is located in each theme's CSS file.

If you use SVG components, you should also call the [refreshTheme()](/api-reference/50%20Common/utils/viz/refreshTheme().md '/Documentation/ApiReference/Common/Utils/viz/#refreshTheme') method to update their theme. The following example shows how to apply the Generic Contrast theme:

---

##### jQuery

    DevExpress.ui.themes.current("generic.contrast");
    // When using SVG components
    // DevExpress.viz.refreshTheme();

##### Angular

    import { themes } from "devextreme/ui/themes";
    themes.current("generic.contrast");

    // When using SVG components
    // import { refreshTheme } from "devextreme/viz/themes";
    // refreshTheme();

##### Vue

    import { themes } from "devextreme/ui/themes";
    themes.current("generic.contrast");

    // When using SVG components
    // import { refreshTheme } from "devextreme/viz/themes";
    // refreshTheme();

##### React

    import { themes } from "devextreme/ui/themes";
    themes.current("generic.contrast");

    // When using SVG components
    // import { refreshTheme } from "devextreme/viz/themes";
    // refreshTheme();

---

#include switch-themes-initialized-note

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-project-template-theme-selector"
}
