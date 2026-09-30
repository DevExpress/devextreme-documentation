Unlike CSS themes, which are collections of CSS classes, SVG themes are UI component configurations. However, all [predefined CSS themes](/concepts/60%20Themes%20and%20Styles/05%20Predefined%20Themes/00%20Predefined%20Themes.md '/Documentation/Guide/Themes_and_Styles/Predefined_Themes/') have SVG counterparts. This allows HTML- and SVG-based UI components to have a uniform appearance when they are displayed on the same page.

If you already use a predefined CSS theme on the page, a corresponding SVG theme is applied automatically. Otherwise, you need to [apply the SVG theme](/concepts/60%20Themes%20and%20Styles/20%20SVG-Based%20Components%20Customization/15%20Themes/20%20Apply%20a%20Theme.md '/Documentation/Guide/Themes_and_Styles/SVG-Based_Components_Customization/#Themes/Apply_a_Theme'). 

[note]

If you use Fluent Next themes in your application, note the following specifics:

- SVG components use [Fluent Next CSS variables](/Documentation/Guide/Themes_and_Styles/Fluent_Next_Theme_Customization/#CSS_Variables/SVG-Based_Component_Colors) and support [container-specific theme modes](/Documentation/Guide/Themes_and_Styles/Fluent_Next_Theme_Customization/#Theme_Modes/Container-Specific_Theme_Modes).
- [Accent colors](/Documentation/Guide/Themes_and_Styles/Fluent_Next_Theme_Customization/#Accent_Colors) apply only to HTML-based components and to the following [RangeSelector elements](/Documentation/Guide/UI_Components/RangeSelector/Visual_Elements/):
    - The selected range
    - Slider handles
    - Slider markers

[/note]

You can also [create custom SVG themes](/concepts/60%20Themes%20and%20Styles/20%20SVG-Based%20Components%20Customization/15%20Themes/30%20Create%20a%20Custom%20Theme.md '/Documentation/Guide/Themes_and_Styles/SVG-Based_Components_Customization/#Themes/Create_a_Custom_Theme').