SVG-based components (such as charts and gauges) use `--dx-viz-*` CSS variables in Fluent Next themes to paint elements. These themes ship with the Fluent Next [palette](/Documentation/Guide/Themes_and_Styles/SVG-Based_Components_Customization/#Palettes), which defines the following color sets:

<table class="dx-table">
    <tr>
        <th>Color Set</th>
        <th>CSS Variables</th>
    </tr>
    <tr>
        <td><b>simpleSet</b></td>
        <td><ul><li><code>--dx-viz-blue</code></li><li><code>--dx-viz-red</code></li><li><code>--dx-viz-green</code></li><li><code>--dx-viz-yellow</code></li><li><code>--dx-viz-pink</code></li><li><code>--dx-viz-purple</code></li></ul></td>
    </tr>
    <tr>
        <td><b>indicatingSet</b></td>
        <td><ul><li><code>--dx-viz-success</code></li><li><code>--dx-viz-warning</code></li><li><code>--dx-viz-danger</code></li></ul></td>
    </tr>
    <tr>
        <td><b>gradientSet</b></td>
        <td><ul><li><code>--dx-viz-blue</code></li><li><code>--dx-viz-green</code></li></ul></td>
    </tr>
</table>

[note]

[Accent colors](/Documentation/Guide/Themes_and_Styles/Fluent_Next_Theme_Customization/#Accent_Colors) in Fluent Next themes only apply to HTML-based components and to the following [RangeSelector elements](/Documentation/Guide/UI_Components/RangeSelector/Visual_Elements/):

- Selected range
- Slider handles
- Slider markers

[/note]

You can override palette variables to change colors in all SVG-based components:

    <!-- tab: CSS -->
    :root {
        --dx-viz-blue: #0063b1;
        --dx-viz-red: #d13438;
    }

Load your override stylesheet after the Fluent Next stylesheet. Palette variables apply to all Fluent Next variations (light and dark modes, standard and compact sizes), so `:root` overrides also apply to components in [theme mode containers](/Documentation/Guide/Themes_and_Styles/Fluent_Next_Theme_Customization/#Theme_Modes/Container-Specific_Theme_Modes). SVG-based components apply CSS variable changes immediately, and you do not need to call [refreshTheme()](/Documentation/ApiReference/Common/Utils/viz/#refreshTheme).

`--dx-viz-*` color overrides also apply to palette extensions. An SVG-based component automatically extends the applied palette based on an [extension mode](/Documentation/ApiReference/Common_Types/charts/#PaletteExtensionMode) when the component needs more colors than the palette contains. The [generateColors(palette, count, options)](/Documentation/ApiReference/Common/Utils/viz/#generateColorspalette_count_options) utility method also uses color overrides.

Methods that return colors (for instance, a Chart point's [getColor()](/Documentation/ApiReference/UI_Components/dxChart/Chart_Elements/Point/Methods/#getColor)) return resolved colors used to render elements. These methods return opaque colors in hexadecimal format and colors with transparency in `rgba()` format.
