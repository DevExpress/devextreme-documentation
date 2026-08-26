Fluent Next themes ship with 11 predefined accent colors. To apply one of these colors, import an accent stylesheet after the theme:

    <!-- tab: Modular Application -->
    import 'devextreme/dist/css/dx.fluent-next.blue.light.css';
    import 'devextreme/dist/css/accents/rose.css';

    <!-- tab: Non-Modular Application -->
    <link rel="stylesheet" href="node_modules/devextreme/dist/css/dx.fluent-next.blue.light.css"></link>
    <link rel="stylesheet" href="node_modules/devextreme/dist/css/accents/rose.css"></link>

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

- Blue is the default accent color in Fluent Next themes. You do not need to import the blue accent stylesheet to apply this accent color.
- Theme and accent stylesheets define colors on the same selector (`:root`). To ensure accent colors are applied, load your app's accent stylesheet immediately after the theme stylesheet.
- Accent stylesheets apply to all variations of Fluent Next (light and dark modes, standard and compact sizes). To switch theme modes or sizes, swap the theme stylesheet only.

[/note]
