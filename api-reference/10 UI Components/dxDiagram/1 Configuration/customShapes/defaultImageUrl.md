---
id: dxDiagram.Options.customShapes.defaultImageUrl
type: String
---
---
##### shortDescription
Specifies the URL of an image displayed in a card shape.

---
A custom shape supports an inner image in two cases:

* When a shape is created based on a card shape type (the [baseType](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/customShapes/baseType.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/#baseType') property is set to `CardWithImageOnLeft`, `CardWithImageOnRight`, or `CardWithImageOnTop`). Note that in this case, the image size and position properties are not in effect, because they are predefined in the shape type.
* When a shape is created based on a custom SVG image (with the [backgroundImageUrl](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/customShapes/backgroundImageUrl.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/#backgroundImageUrl') property specified). In this case, you can use the following properties to customize inner image size and position: [imageHeight](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/#imageHeight), [imageWidth](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/#imageWidth), [imageLeft](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/#imageLeft), and [imageTop](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/#imageTop).

Use the **defaultImageUrl** property to specify the image URL. 

![Diagram - Custom shape's image properties](/images/diagram/imageURLs.png)

If the [allowEditImage](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/#allowEditImage) property is set to `true`, the diagram context menu displays commands that allow users to change the image.

![Diagram - Card's context menu](/images/diagram/card-image-context-menu.png)

#####See Also#####
[backgroundImageUrl](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/customShapes/backgroundImageUrl.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/#backgroundImageUrl')
