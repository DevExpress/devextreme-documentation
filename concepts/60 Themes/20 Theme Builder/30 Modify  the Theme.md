Use the following approaches to customize the selected theme.

![Modify a Theme](/images/PhoneJS/ModifyTheme.png)

- **Base Theming**  
    You can set the base color to be used within the current theme. In platform-independent themes, you can also set:

     - a color for highlighting widget elements that are currently selected or hovered over

     - a color for the text displayed on the highlighted elements

     - a background color for your application's pages

     - a color for widget element's border, as well as its radius

    ![Modify Widget Styles](/images/PhoneJS/BaseTheming.png)

    The HTML5 Generic Theme is now visually compatible with the [Bootstrap](https://getbootstrap.com) framework. The DevExtreme Theme Builder allows you to create a custom DevExtreme theme based on a custom Bootstrap theme. For this purpose, import variables from a *.less* file to the Theme Builder, and it will analyze these variables in the file and use them for the newly created DevExtreme theme.

    ![Upload Less Variables](/images/PhoneJS/BaseThemingUploadLessVariables.png)

    To get a theme that looks like the old Generic Theme, import the following configuration to the Theme Builder.

        <!--JavaScript-->
        {
            "version": "minor_16_1",
            "themeId": "1",
            "hue": null,
            "items": [
            {"key":"@base-text-color","value":"#232323"},
            {"key":"@base-accent","value":"#606060"},
            {"key":"@base-border-color","value":"#d3d3d3"},
            {"key":"@base-border-radius","value":"0px"},
            {"key":"@badge-bg","value":"#31afe3"},
            {"key":"@texteditor-bg","value":"#fafafa"},
            {"key":"@radiogroup-bg","value":"#fafafa"},
            {"key":"@button-border-radius","value":"3px"},
            {"key":"@button-normal-bg","value":"#f5f5f5"},
            {"key":"@button-default-border-color","value":"#31afe3"},
            {"key":"@button-default-bg","value":"#31afe3"},
            {"key":"@checkbox-bg","value":"#fafafa"},
            {"key":"@list-group-header-bg","value":"rgba(96, 96, 96, 0.05)"},
            {"key":"@overlay-shader-bg","value":"rgba(0, 0, 0, 0.75)"}]
        } 

    For more information about import, see the [Save the Changes](/concepts/60%20Themes/20%20Theme%20Builder/40%20Save%20the%20Changes.md '/Documentation/Guide/Themes/Theme_Builder/#Save_the_Changes') section of this article.

- **Advanced Theming**  
    You can observe all styles defined in the current theme for each DevExtreme widget. In the leftmost navigation menu, select a widget. Set the required styles for this widget. Use the demo in the right panel to see the result.

    ![Modify Widget Styles](/images/PhoneJS/AdvancedTheming.png)

You can undo/redo the last change you made to the theme.

![Undo and Redo Changes](/images/PhoneJS/UndoRedo.png)

To undo all changes made during the current session on the site, press the **Reset** button.

![Reset Changes](/images/PhoneJS/ResetChanges.png)

