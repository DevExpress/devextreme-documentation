The following variants are available:

- *"blend"*     
Create a blend of two neighboring colors and insert it between these colors in the palette.

- *"alternate"*    
Repeat the full set of palette colors, alternating their normal, lightened, and darkened shades in that order.

- *"extrapolate"*   
Repeat the full set of palette colors, changing their shade gradually from dark to light.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/Palette/"
}

Use the `VizPaletteExtensionMode` enum to specify this option when the widget is used as an <a href="https://docs.devexpress.com/DevExtremeAspNetMvc/400943/devextreme-aspnet-mvc-controls" target="_blank">ASP.NET MVC 5 Control</a> or a <a href="https://docs.devexpress.com/AspNetCore/400263/aspnet-core-controls#devextreme-based-aspnet-core-controls" target="_blank">DevExtreme-Based ASP.NET Core Control</a>. This enum accepts the following values: `Blend`, `Alternate`, and `Extrapolate`.