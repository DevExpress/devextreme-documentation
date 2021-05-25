This approach is suitable for switching between any themes, but it involves page reload:

1. Include theme stylesheets on your index page as shown below. The syntax is the same as in the step 1 of the [previous instructions](/concepts/60%20Themes%20and%20Styles/05%20Predefined%20Themes/60%20Switch%20Between%20Themes%20at%20Runtime/2%20Without%20Page%20Reload.md '/Documentation/Guide/Themes_and_Styles/Predefined_Themes/#Switch_Between_Themes_at_Runtime/Without_Page_Reload'), but the `data-active` attributes are set to **false** for all themes.

        <head>
            <!-- ... -->
            <link rel="dx-theme" data-theme="generic.light" href="css/dx.light.css" data-active="false">
            <link rel="dx-theme" data-theme="generic.light.compact" href="css/dx.light.compact.css" data-active="false">
            <link rel="dx-theme" data-theme="material.blue.light" href="css/dx.material.blue.light.css" data-active="false">
            <!-- ... -->
        </head>

1. Save the target theme's name in the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" target="_blank">window.localStorage</a> and reload the page:

        var switchTheme = function(themeName) {
            window.localStorage.setItem("dx-theme", themeName);
            window.location.reload();
        }

1. On page loading, restore the theme name and pass it to the [DevExpress.ui.themes.current(themeName)](/api-reference/50%20Common/utils/ui/themes/current(themeName).md '/Documentation/ApiReference/Common/utils/ui/themes/#currentthemeName') method. You can also specify the theme to be applied in case no theme name is found in the **window.localStorage**. In the following code, it is the Material Blue Light theme.

        DevExpress.ui.themes.current(window.localStorage.getItem("dx-theme") || "material.blue.light");
        // ===== or when using modules =====
        import themes from "devextreme/ui/themes";

        themes.current(window.localStorage.getItem("dx-theme") || "material.blue.light");

#include switch-themes-initialized-note