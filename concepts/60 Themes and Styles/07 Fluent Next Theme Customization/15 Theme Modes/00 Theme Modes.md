Fluent Next themes ship with light and dark theme modes. Each Fluent Next stylesheet contains styles for both modes. The stylesheet you load specifies the default mode for the page. Light and dark stylesheets are available in standard and compact sizes:

- **Light**:
    - `dx.fluent-next.blue.light.css`
    - `dx.fluent-next.blue.light.compact.css`
- **Dark**:
    - `dx.fluent-next.blue.dark.css`
    - `dx.fluent-next.blue.dark.compact.css`

You can switch the theme mode for the entire page without loading another stylesheet. Assign the `dx-theme-mode-light` or `dx-theme-mode-dark` class to the `<html>` element. For more information about theme mode classes, refer to the following help topic: [Container-Specific Theme Modes](/Documentation/Guide/Themes_and_Styles/Fluent_Next_Theme_Customization/#Theme_Modes/Container-Specific_Theme_Modes).

[note]

- [Accent colors](/Documentation/Guide/Themes_and_Styles/Fluent_Next_Theme_Customization/#Accent_Colors) apply to all variations of Fluent Next (light and dark modes, standard and compact sizes). When you switch theme modes or sizes, you do not need to change your accent stylesheet or custom accent color.
- [Palette](/Documentation/Guide/Themes_and_Styles/SVG-Based_Components_Customization/#Palettes) colors in SVG-based components apply to all variations of Fluent Next (light and dark modes, standard and compact sizes). Theme modes change other colors in these components, such as backgrounds, text, and grid lines.

[/note]
