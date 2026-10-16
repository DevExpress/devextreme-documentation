You can use the following keys to interact with the Map when **provider** is *"osm"*:

<table class="dx-table">
    <tr>
        <th>Key</th>
        <th>Action</th>
    </tr>
    <tr>
        <td>Tab / Shift + Tab</td>
        <td>Moves focus to the map and between interactive markers (markers that have a <b>tooltip</b> or an <b>onClick</b> handler). Markers outside the visible area do not receive focus.</td>
    </tr>
    <tr>
        <td>Enter / Space</td>
        <td>Displays or hides the focused marker tooltip and calls the marker's <b>onClick</b> handler.</td>
    </tr>
    <tr>
        <td>Esc</td>
        <td>Hides the most recently opened tooltip.</td>
    </tr>
</table>

While the map has focus, you can also use arrow keys to pan the map and the + and - keys to zoom in and out. OpenLayers implements these shortcuts in [KeyboardPan](https://openlayers.org/en/latest/apidoc/module-ol_interaction_KeyboardPan-KeyboardPan.html) and [KeyboardZoom](https://openlayers.org/en/latest/apidoc/module-ol_interaction_KeyboardZoom-KeyboardZoom.html).
