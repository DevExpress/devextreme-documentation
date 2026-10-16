The DevExpress Design System defines 11 [primary color palettes](https://docs.devexpress.com/DesignSystem/405638/colors/theme-palettes/fluent-theme-palettes) for Fluent themes. These color palettes ship as stylesheets in the DevExtreme npm package. Import one of these accent stylesheets after a Fluent Next theme to apply an accent color:

    <!-- tab: Modular Application -->
    import 'devextreme/dist/css/dx.fluent-next.blue.light.css';
    import 'devextreme/dist/css/accents/rose.css';

    <!-- tab: Non-Modular Application -->
    <link rel="stylesheet" href="node_modules/devextreme/dist/css/dx.fluent-next.blue.light.css">
    <link rel="stylesheet" href="node_modules/devextreme/dist/css/accents/rose.css">

The following accent stylesheets are available:

<table class="dx-table">
    <tr>
        <th>Accent Color</th>
        <th>Stylesheet</th>
    </tr>
    <tr>
        <td>Blue</td>
        <td><code>accents/blue.css</code></td>
    </tr>
    <tr>
        <td>Cool Blue</td>
        <td><code>accents/cool-blue.css</code></td>
    </tr>
    <tr>
        <td>Desert</td>
        <td><code>accents/desert.css</code></td>
    </tr>
    <tr>
        <td>Mint</td>
        <td><code>accents/mint.css</code></td>
    </tr>
    <tr>
        <td>Moss</td>
        <td><code>accents/moss.css</code></td>
    </tr>
    <tr>
        <td>Orchid</td>
        <td><code>accents/orchid.css</code></td>
    </tr>
    <tr>
        <td>Purple</td>
        <td><code>accents/purple.css</code></td>
    </tr>
    <tr>
        <td>Rose</td>
        <td><code>accents/rose.css</code></td>
    </tr>
    <tr>
        <td>Rust</td>
        <td><code>accents/rust.css</code></td>
    </tr>
    <tr>
        <td>Steel</td>
        <td><code>accents/steel.css</code></td>
    </tr>
    <tr>
        <td>Storm</td>
        <td><code>accents/storm.css</code></td>
    </tr>
</table>

[note]

Consider the following when you apply accent stylesheets:

- Blue is the default accent color in Fluent Next themes. You do not need to import the Blue accent stylesheet to apply this accent color.
- Theme and accent stylesheets define colors on the same selector (`:root`). To ensure accent colors take effect, load your accent stylesheet after the theme stylesheet.
- [Custom accent colors](/Documentation/Guide/Themes_and_Styles/Fluent_Next_Theme_Customization/#Accent_Colors/Custom_Accent_Colors) override predefined accent colors regardless of stylesheet load order. Predefined accent stylesheets declare shades as fallback values for `--dx-accent-color-*` variables:

        <!-- tab: CSS -->
        /* Shade 10 of the Blue accent stylesheet */
        --dxds-primary-10: var(--dx-accent-color-10, #f4f8fc);

- Accent stylesheets apply to all Fluent Next variations (light and dark modes, standard and compact sizes). When you switch theme modes or sizes, you do not need to change your accent stylesheet.

[/note]
