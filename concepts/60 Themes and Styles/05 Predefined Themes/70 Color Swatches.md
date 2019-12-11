Color swatches are secondary color schemes used alongside a primary color scheme. You can use them to stylize parts of your application differently, for instance, when the navigation sidebar should be dark and the content area light.

A color swatch is defined by scoped CSS rules that are prefixed with a specific selector: `dx-swatch-xxx` (for instance, `dx-swatch-green`). To apply a color swatch to a part of an HTML document, wrap this part as follows:

    <!--HTML-->
    <div>
        This content applies the primary color scheme

        <div class="dx-swatch-dark">
            This content applies the "dark" color scheme
        </div>
    </div>

[important] Color swatches do not allow compiling different themes and should be based on a single theme (Generic, Generic Compact, or Material).

You can generate color swatches with the DevExtreme CLI or ThemeBuilder UI:

* **<a href="https://github.com/DevExpress/devextreme-cli/blob/master/README.md" target="_blank">DevExtreme CLI</a>**        

    The following command generates a new `custom` color swatch that uses Generic Dark as a base theme.

        > devextreme build-theme –-base-theme="generic.dark" --make-swatch --output-color-scheme="dark"
        // ===== or without installing DevExtreme CLI globally =====
        > npx -p devextreme-cli devextreme build-theme –-base-theme="generic.dark" --make-swatch --output-color-scheme="dark"

    The result of this command is a `dx.generic.dark.css` file in which every rule is prefixed with the `.dx-swatch-dark` CSS selector. Move the file to the application folder, [register it](/concepts/60%20Themes%20and%20Styles/05%20Predefined%20Themes/50%20Apply%20a%20Theme.md '/Documentation/Guide/Themes_and_Styles/Predefined_Themes/#Apply_a_Theme'), and add the swatch class to a page element.

    Refer to <a href="https://github.com/DevExpress/devextreme-cli/blob/master/README.md#themebuilder" target="_blank">DevExtreme CLI: ThemeBuilder</a> for more information about CLI commands and command line arguments.

* **[ThemeBuilder UI](/concepts/60%20Themes%20and%20Styles/08%20ThemeBuilder '/Documentation/Guide/Themes_and_Styles/ThemeBuilder/')**       

    Click **Export** on the toolbar to open the **Theme Export** popup dialog. Enter the color swatch's name ("brown" in the following image), check the **Save as a color swatch** checkbox, and click **Save to File**:

    ![DevExtreme ThemeBuilder UI: Export a color swatch](/images/Common/ThemeBuilder/themebuilder-themeexport-css.png)

    Move the resulting CSS file to the application folder, [register it](/concepts/60%20Themes%20and%20Styles/05%20Predefined%20Themes/50%20Apply%20a%20Theme.md '/Documentation/Guide/Themes_and_Styles/Predefined_Themes/#Apply_a_Theme'), and add the swatch class to a page element.

[note] Color swatches cannot be used to customize SVG-based widgets because the [widget's themes are widget configurations](/concepts/60%20Themes%20and%20Styles/20%20SVG-Based%20Widgets%20Customization/15%20Themes/00%20Themes.md '/Documentation/Guide/Themes_and_Styles/SVG-Based_Widgets_Customization/#Themes') that do not use CSS. With [predefined CSS themes](/concepts/60%20Themes%20and%20Styles/05%20Predefined%20Themes/00%20Predefined%20Themes.md '/Documentation/Guide/Themes_and_Styles/Predefined_Themes/'), SVG-based widgets detect which theme is used on the page and apply the corresponding widget configuration. When an SVG-based widget is within a color swatch, the detection is impossible. However, you can [create and apply a widget configuration](/concepts/60%20Themes%20and%20Styles/20%20SVG-Based%20Widgets%20Customization/15%20Themes/30%20Create%20a%20Custom%20Theme.md '/Documentation/Guide/Themes_and_Styles/SVG-Based_Widgets_Customization/#Themes/Create_a_Custom_Theme') that visually fits the color swatch.
