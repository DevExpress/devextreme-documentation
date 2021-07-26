The [Map](/Documentation/ApiReference/UI_Components/dxMap/) component can contain multiple [markers](/Documentation/ApiReference/UI_Components/dxMap/Configuration/markers/). Each marker can display a tooltip. Its content is taken from the marker's [tooltip](/Documentation/ApiReference/UI_Components/dxMap/Configuration/markers/tooltip/).[text](/Documentation/ApiReference/UI_Components/dxMap/Configuration/markers/tooltip/#text) property. This property can accept an HTML string that the component evaluates. Note that if the HTML contains JavaScript commands, they will be executed. Attackers can exploit this behavior for XSS. The following example illustrates such a case: <a href="https://codepen.io/romantsukanov/pen/zYwdBzJ?editors=1010" target="_blank">Map.markers[].tooltip.text - Potential XSS Vulnerability</a>

If markers data comes from an untrusted source, encode the **tooltip**.**text** value as follows:

    <!-- tab: JavaScript -->
    const markers = [ ... ];
    const encodeMessage = (message) => {
        // ...
        // Encode the `message` string with your favorite sanitizing tool
        // ...
        return encodedMessage;
    };

    const sanitizeMarkers = (markers) => {
        markers.forEach(marker => {
            marker.tooltip.text = encodeMessage(marker.tooltip.text);
        })
        return markers;
    };
