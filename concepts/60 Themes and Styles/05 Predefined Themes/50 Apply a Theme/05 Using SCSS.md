You can import a theme bundle from the `bundles` folder of the `devextreme` package into the root `.scss` file:

    /* @use 'devextreme/scss/bundles/dx.theme_name.scss';  */
    @use 'devextreme/scss/bundles/dx.carmine.scss';

Alternatively, you can import individual files that comprise a theme. The theme folder name is `material`, `generic`, or `fluent` depending on the theme family. The example below imports files from the `Material Blue Light Compact` theme:

    @use 'devextreme/scss/widgets/material/colors' with ($color: 'blue', $mode: 'light');
    @use 'devextreme/scss/widgets/material/sizes' with ($size: 'compact');
    @use 'devextreme/scss/widgets/material/icons';
    @use 'devextreme/scss/widgets/material/widget';
    @use 'devextreme/scss/widgets/material/card';
    @use 'devextreme/scss/widgets/material/fieldset';
    @use 'devextreme/scss/widgets/material/common';
    @use 'devextreme/scss/widgets/base/resizable';
    @use 'devextreme/scss/widgets/base/draggable';
    @use 'devextreme/scss/widgets/base/ui';
    @use 'devextreme/scss/widgets/material';

To import only specific components, replace `@use 'devextreme/scss/widgets/themeName';` with `@use 'devextreme/scss/widgets/themeName/componentName';`:

    @use "devextreme/scss/widgets/generic/colors" with ($color: "darkmoon");
    @use "devextreme/scss/widgets/generic/sizes" with ($size: "default");
    @use "devextreme/scss/widgets/generic/typography";
    @use "devextreme/scss/widgets/generic/icons";
    @use "devextreme/scss/widgets/generic/widget";
    @use "devextreme/scss/widgets/generic/card";
    @use "devextreme/scss/widgets/generic/fieldset";
    @use "devextreme/scss/widgets/generic/common";
    @use "devextreme/scss/widgets/base/resizable";
    @use "devextreme/scss/widgets/base/draggable";
    @use "devextreme/scss/widgets/base/ui";
    @use "devextreme/scss/widgets/generic/textBox";
    @use "devextreme/scss/widgets/generic/button";

You can use the following variables in imported files:

- `$mode`    
The main theme palette (`dark` or `light`). This variable has effect on `Material` themes only.

- `$color`    
Derived from the theme name. This variable defines the main theme color (blue, carmine, contrast, etc.)

- `$size:`    
Can be `compact` or `default`.

[note] If you want to customize internal variables (like component fonts, color, etc.), examine file content inside the `devextreme/scss/widgets/` folder to learn about customizable variables. Note that this code is internal and DevExtreme does not have complete documentation for the SCSS structure. Variable names, import order, and the folder structure may change in future builds without official notice. To customize specific variables, use [ThemeBuilder](/concepts/60%20Themes%20and%20Styles/08%20ThemeBuilder '/Documentation/Guide/Themes_and_Styles/ThemeBuilder/') or override [individual CSS classes](/concepts/60%20Themes%20and%20Styles/10%20HTML-Based%20Components%20Customization/40%20Individual%20CSS%20Classes.md '/Documentation/Guide/Themes_and_Styles/HTML-Based_Components_Customization/#Individual_CSS_Classes').
