Click **Export** to open the **Theme Export** popup dialog. In this dialog, enter the color scheme name. If you want to export the theme as a [color swatch](/concepts/60%20Themes%20and%20Styles/05%20Predefined%20Themes/70%20Color%20Swatches.md '/Documentation/Guide/Themes_and_Styles/Predefined_Themes/#Color_Swatches'), check the check box as well.

Click **Save to File** to save a file named `dx.[base-theme-name].[color-scheme-name].css` (for example, `dx.material.brown.css`) on your computer. Alternatively, you can copy the CSS from the text area at the bottom:

![DevExtreme ThemeBuilder UI: Theme Export popup dialog](/images/Common/ThemeBuilder/themebuilder-themeexport-css.png)

Your custom theme uses [icons](/concepts/60%20Themes%20and%20Styles/30%20Icons/00%20Icons.md '/Documentation/Guide/Themes_and_Styles/Icons/') and fonts. They should be located next to the theme. When using npm, you can find the `icons` and `fonts` folders in `node_modules/devextreme/dist/css`. In other cases, these folders are in the directory with predefined themes. Copy them to the directory that contains your theme.

Finally, [register the exported theme](/concepts/60%20Themes%20and%20Styles/05%20Predefined%20Themes/50%20Apply%20a%20Theme.md '/Documentation/Guide/Themes_and_Styles/Predefined_Themes/#Apply_a_Theme'). If you exported a color swatch, apply it as described in [Color Swatches](/concepts/60%20Themes%20and%20Styles/05%20Predefined%20Themes/70%20Color%20Swatches.md '/Documentation/Guide/Themes_and_Styles/Predefined_Themes/#Color_Swatches').

[note] We periodically remove and remap unused constants to optimize our predefined themes. This can cause compatibility issues when you upgrade custom themes. We recommend saving your theme's metadata to enable you to fix these issues. Refer to the [Postpone Customization](/concepts/60%20Themes%20and%20Styles/08%20ThemeBuilder/20%20Postpone%20Customization.md '/Documentation/Guide/Themes_and_Styles/ThemeBuilder/#Postpone_Customization') topic for more information.
