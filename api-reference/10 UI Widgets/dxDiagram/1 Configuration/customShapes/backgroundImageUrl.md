---
id: dxDiagram.Options.customShapes.backgroundImageUrl
type: String
---
---
##### shortDescription
Specifies the shape background image's URL.

---
A custom shape can be created based on a default shape type (the [baseType](/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/customShapes/#baseType) option) or with a custom background image (the **backgroundImageUrl** option). 

Use the [backgroundImageToolboxUrl](/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/customShapes/#backgroundImageUrl) option to specify an image displayed for the shape in the toolbox. If the option is not set, the toolbox displays an image specified in the **backgroundImageUrl** option.

![Diagram - Custom shape's image properties](/images/diagram/imageURLs.png)

The **backgroundImageUrl** option is not in effect if the [baseType](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/customShapes/baseType.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/customShapes/#baseType') is specified.

[note] Shape background images should be supplied as SVG files.

#####See Also#####
[defaultImageUrl](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/customShapes/defaultImageUrl.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/customShapes/#defaultImageUrl')
