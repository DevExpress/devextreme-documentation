You can use this approach only if the themes belong to the same group. For instance, you can switch from Generic Light to any other Generic theme, but not to a Generic Compact or Material Design theme (see [Predefined Themes](/concepts/60%20Themes%20and%20Styles/05%20Predefined%20Themes/00%20Predefined%20Themes.md '/Documentation/Guide/Themes_and_Styles/Predefined_Themes/')).

1. Include theme stylesheets on your index page as shown below. A theme with the `data-active` attribute set to **true** is applied. In the following code, it is Generic Light:

        <head>
            <!-- Generic themes -->
            <link rel="dx-theme" data-theme="generic.light" href="css/dx.light.css" data-active="true">
            <link rel="dx-theme" data-theme="generic.dark" href="css/dx.dark.css" data-active="false">
            <link rel="dx-theme" data-theme="generic.contrast" href="css/dx.contrast.css" data-active="false">
            <!-- ... -->
            <!-- or Generic Compact themes-->
            <!-- link rel="dx-theme" data-theme="generic.light.compact" href="css/dx.light.compact.css" data-active="true" -->
            <!-- link rel="dx-theme" data-theme="generic.dark.compact" href="css/dx.dark.compact.css" data-active="false" -->
            <!-- link rel="dx-theme" data-theme="generic.contrast.compact" href="css/dx.contrast.compact.css" data-active="false" -->
            <!-- ... -->
            <!-- or Material Design themes-->
            <!-- link rel="dx-theme" data-theme="material.blue.light" href="css/dx.material.blue.light.css" data-active="true" -->
            <!-- link rel="dx-theme" data-theme="material.blue.dark" href="css/dx.material.blue.dark.css" data-active="false" -->
            <!-- link rel="dx-theme" data-theme="material.teal.light" href="css/dx.material.teal.light.css" data-active="false" -->
            <!-- ... -->
        </head>

1. Switch to a theme using the [DevExpress.ui.themes.current(themeName)](/api-reference/50%20Common/utils/ui/themes/current(themeName).md '/Documentation/ApiReference/Common/utils/ui/themes/#currentthemeName') method. It accepts the `data-theme` attribute's value from the previous code. The following example shows how to apply the Generic Contrast theme:

        DevExpress.ui.themes.current("generic.contrast");
        // ===== or when using modules =====
        import themes from "devextreme/ui/themes";

        themes.current("generic.contrast");