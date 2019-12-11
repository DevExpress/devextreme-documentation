<article data-show="Content/Applications/16_1/UIWidgets/dxMap/Types/markup.html,
        Content/Applications/16_1/UIWidgets/dxMap/Types/script.js,
        Content/Applications/16_1/UIWidgets/dxMap/Types/styles.css">

Each map provider supports similar map types, but type names are different. The **Map** widget includes the [type](/api-reference/10%20UI%20Widgets/dxMap/1%20Configuration/type.md '/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/#type') option that specifies the map type. The option accepts the "hybrid", "roadmap" and "satellite" values, which are based on names of the Google map types. If you use the Bing map provider, the widget automatically maps option values in the following way.

- "hybrid" -> "Aerial"
- "roadmap" -> "Road"

<!---->

    <!--JavaScript-->
    var mapOptions = {
        provider: "bing",
        type: "roadmap"
    }
</article>