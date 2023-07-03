You can import the theme bundle from the `bundles` folder from the `devextreme` package in the root `.scss` file:

    /* @use 'devextreme/scss/bundles/dx.theme_name.scss';  */
    @use 'devextreme/scss/bundles/dx.carmine.scss';

Or you can import individual files for the whole theme. The example below imports files of the `Material Blue Light Compact` theme

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

The theme path can be either `material` or `generic` depending on the theme family. The second solution is useful if you need to import only specific components. To do this, replace `@use 'devextreme/scss/widgets/material';` with `@use 'devextreme/scss/widgets/componentName';`:

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

You can use the following variables in the imports:

- `$mode`    
The theme main palette (`dark` or `light`). This variable has effect for `Material` themes only.

- `$color`    
Derived from the theme name. Represents the theme's main color (blue, carmine, contrast, etc.)

- `$size:`    
Can be `compact` or `default`.

[note] If you want to customize inner variables (like components fonts, color, etc.), examine the file content inside the `devextreme/scss/widgets/` folder to learn what variables can be customized. Note that this code is internal and DevExtreme does not have a complete documentation for the SCSS structure. Variable names, order of import, and the folder structure may be changed without any warning. To customize specific variables, use [ThemeBuilder](/Documentation/Guide/Themes_and_Styles/ThemeBuilder/) or override [individual CSS classes](/Documentation/Guide/Themes_and_Styles/HTML-Based_Components_Customization/#Individual_CSS_Classes).
