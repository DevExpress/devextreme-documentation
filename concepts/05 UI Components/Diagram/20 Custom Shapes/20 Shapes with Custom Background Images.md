Use the [backgroundImageUrl](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/customShapes/backgroundImageUrl.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/#backgroundImageUrl') property to specify the custom shape's background image in SVG format. 

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/CustomShapesWithIcons/"
}

    <!-- tab: roundedRectangle.svg -->
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 26">
    <g><rect rx="5" ry="5" x="0.5" y="0.5" width="47" height="25" 
        style="fill:#FFFFFF;stroke:#000000;stroke-width:1px;"/></g>
    </svg>

---
##### jQuery

    <!-- tab: index.js -->
    var diagram = $("#diagram").dxDiagram({
        customShapes: [{
            type: "Rounded Rectangle",
            backgroundImageUrl: "images/shapes/roundedRectangle.svg"
        }],
    }).dxDiagram("instance");

##### Angular

    <!-- tab: app.component.html -->
    <dx-diagram #diagram id="diagram">
        <dxi-custom-shape 
            type="Rounded Rectangle"
            backgroundImageUrl="images/shapes/roundedRectangle.svg"
        </dxi-custom-shape>
    </dx-diagram>

##### Vue

    <!-- tab: App.vue -->
    <DxDiagram
        id="diagram"
        ref="diagram"
    >
        <DxCustomShape
            :type="'Rounded Rectangle'"
            :background-image-url="'images/shapes/roundedRectangle.svg'"
        >
        </DxCustomShape>
    </DxDiagram>

##### React

    <!-- tab: App.js -->
    <Diagram id="diagram" ref={this.diagramRef}>
        <CustomShape
            type="Rounded Rectangle"
            backgroundImageUrl="images/shapes/roundedRectangle.svg">
        </CustomShape>
    </Diagram>

---

The image below shows the result:

![Custom Shape Background Image](/images/diagram/custom-shape-background-image.png)

The following properties allow you to customize the image size and position:

* [backgroundImageWidth](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/customShapes/backgroundImageWidth.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/#backgroundImageWidth')
* [backgroundImageHeight](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/customShapes/backgroundImageHeight.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/#backgroundImageHeight')
* [backgroundImageTop](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/customShapes/backgroundImageTop.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/#backgroundImageTop')
* [backgroundImageLeft](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/customShapes/backgroundImageLeft.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/#backgroundImageLeft')

**Shape Size**

Use the following properties to specify the shape size settings:

* [defaultHeight](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/customShapes/defaultHeight.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/#defaultHeight')
* [defaultWidth](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/customShapes/defaultWidth.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/#defaultWidth')
* [allowResize](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/customShapes/allowResize.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/#allowResize')
* [minHeight](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/customShapes/minHeight.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/#minHeight')
* [maxHeight](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/customShapes/maxHeight.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/#maxHeight')
* [minWidth](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/customShapes/minWidth.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/#minWidth')
* [maxWidth](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/customShapes/maxWidth.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/#maxWidth')
* [keepRatioOnAutoSize](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/customShapes/keepRatioOnAutoSize.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/#keepRatioOnAutoSize')

---
##### jQuery

    <!-- tab: index.js -->
    var diagram = $("#diagram").dxDiagram({
        customShapes: [{
            // ...
            defaultWidth: 2,
            defaultHeight: 1,
        }],
    }).dxDiagram("instance");

##### Angular 

    <!-- tab: app.component.html -->
    <dx-diagram #diagram id="diagram">
        <dxi-custom-shape 
            <!-- ... -->
            [defaultWidth]="2"
            [defaultHeight]="1"
        </dxi-custom-shape>
    </dx-diagram>

##### Vue

    <!-- tab: App.vue -->
    <DxDiagram
        id="diagram"
        ref="diagram"
    >
        <DxCustomShape
            <!-- ... -->
            :default-width="2"
            :default-height="1"
        >
        </DxCustomShape>
    </DxDiagram>

##### React

    <!-- tab: App.js -->
    <Diagram id="diagram" ref={this.diagramRef}>
        <CustomShape
            // ...
            defaultWidth={2}
            defaultHeight={1}>
        </CustomShape>
    </Diagram>

---

The image below shows the result:

![Custom Shape Size](/images/diagram/custom-shape-size.png)

**Shape Inner Image**

A custom shape can display an inner image. Use the [defaultImageUrl](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/customShapes/defaultImageUrl.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/#defaultImageUrl') property to specify the image URL.

The following properties allow you to specify the image size and position:

* [imageHeight](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/customShapes/imageHeight.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/#imageHeight')
* [imageTop](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/customShapes/imageTop.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/#imageTop')
* [imageLeft](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/customShapes/imageLeft.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/#imageLeft')
* [imageWidth](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/customShapes/imageWidth.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/#imageWidth')

---
##### jQuery

    <!-- tab: index.js -->
    var diagram = $("#diagram").dxDiagram({
        customShapes: [{
            // ...
            defaultImageUrl: "images/photo.png",
            imageHeight: 0.8,
            imageWidth: 0.3,
            imageTop: 0.1,
            imageLeft: 0.1,
        }],
    }).dxDiagram("instance");

##### Angular

    <!-- tab: app.component.html -->
    <dx-diagram #diagram id="diagram">
        <dxi-custom-shape 
            <!-- ... -->
            defaultImageUrl="images/photo.png"
            [imageHeight]="0.8"
            [imageWidth]="0.3"
            [imageTop]="0.1"
            [imageLeft]="0.1"
        </dxi-custom-shape>
    </dx-diagram>

##### Vue

    <!-- tab: App.vue -->
    <DxDiagram
        id="diagram"
        ref="diagram"
    >
        <DxCustomShape
            <!-- ... -->
            :default-image-url="'images/photo.png'"
            :image-height="0.8"
            :image-width="0.3"
            :image-top="0.1"
            :image-left="0.1"
        >
        </DxCustomShape>
    </DxDiagram>

##### React

    <!-- tab: App.js -->
    <Diagram id="diagram" ref={this.diagramRef}>
        <CustomShape
            // ...
            defaultImageUrl="images/photo.png"
            imageHeight={0.8}
            imageWidth={0.3}
            imageTop={0.1}
            imageLeft={0.1}>
        </CustomShape>
    </Diagram>

---

The image below shows the result:

![Custom Shape Inner Image](/images/diagram/custom-shape-inner-image.png)

If the [allowEditImage](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/customShapes/allowEditImage.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/#allowEditImage') property is set to `true`, the Diagram context menu displays commands that allow users to change the image.


![Custom Shape Image Context Menu](/images/diagram/custom-shape-inner-image-context-menu.png)

**Shape Text**

The [defaultText](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/customShapes/defaultText.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/#defaultText') property specifies the shape text. Users can change the text if the [allowEditText](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/customShapes/allowEditText.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/#allowEditText') property is set to `true`.

Use the following properties to specify the size and position of the text container:

* [textHeight](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/customShapes/textHeight.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/#textHeight')
* [textWidth](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/customShapes/textWidth.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/#textWidth')
* [textLeft](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/customShapes/textLeft.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/#textLeft')
* [textTop](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/customShapes/textTop.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/#textTop')

---
##### jQuery

    <!-- tab: index.js -->
    var diagram = $("#diagram").dxDiagram({
        customShapes: [{
            // ...
            defaultText: "Employee",
            textLeft: 0.4,
            textWidth: 0.6
        }],
    }).dxDiagram("instance");

##### Angular

    <!-- tab: app.component.html -->
    <dx-diagram #diagram id="diagram">
        <dxi-custom-shape 
            <!-- ... -->
            defaultText="Employee"
            [textLeft]="0.4"
            [textWidth]="0.6">
        </dxi-custom-shape>
    </dx-diagram>

##### Vue

    <!-- tab: App.vue -->
    <DxDiagram
        id="diagram"
        ref="diagram"
    >
        <DxCustomShape
            <!-- ... -->
            :default-text="'Employee'"
            :text-left="0.4"
            :text-width="0.6"
        >
        </DxCustomShape>
    </DxDiagram>

##### React

    <!-- tab: App.js -->
    <Diagram id="diagram" ref={this.diagramRef}>
        <CustomShape
            // ...
            defaultText="Employee"
            textLeft={0.4}
            textWidth={0.6}>
        </CustomShape>
    </Diagram>

---

The image below shows the result:

![Custom Shape Text](/images/diagram/custom-shape-text.png)

You can use the [textStyle](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/defaultItemProperties/textStyle.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/defaultItemProperties/#textStyle') property to specify the default style settings for a shape's text.

---
##### jQuery

    <!-- tab: index.js -->
    var diagram = $("#diagram").dxDiagram({
        defaultItemProperties: {
            textStyle: "font-size: 14pt;"
        },
        // ...
    }).dxDiagram("instance");

##### Angular

    <!-- tab: app.component.html -->
    <dx-diagram #diagram id="diagram">
        <dxo-default-item-properties
            textStyle="font-size: 14pt;">
        </dxo-default-item-properties>
        <!-- ... -->
    </dx-diagram>

##### Vue

    <!-- tab: App.vue -->
    <DxDiagram
        id="diagram"
        ref="diagram"
    >
        <DxDefaultItemProperties
            :textStyle="'font-size: 14pt;'"
        />
        <!-- ... -->
    </DxDiagram>
##### React

    <!-- tab: App.js -->
    class App extends React.Component {
    // ...
        render() {
            return (
                <Diagram id="diagram" ref={this.diagramRef}>
                    <DefaultItemProperties textStyle="font-size: 14pt;"/>
                    <!-- ... -->
                </Diagram>
            );
        }
    }

---

The image below shows the result:

![Custom Shape Text Size](/images/diagram/custom-shape-text-size.png)

**Connection Points**

Use the [connectionPoints](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/customShapes/connectionPoints '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/#connectionPoints') property to specify a collection of custom connection points for a shape. If the property is not specified, the shape displays the default connection points.

---
##### jQuery

    <!-- tab: index.js -->
    var diagram = $("#diagram").dxDiagram({
        customShapes: [{
            // ...
            connectionPoints: [
                    { x: 0.5, y: 0 },
                    { x: 0.5, y: 1 },
            ]
        }],
    }).dxDiagram("instance");

##### Angular

    <!-- tab: app.component.html -->
    <dx-diagram #diagram id="diagram">
        <dxi-custom-shape 
            <!-- ... -->
            <dxi-connection-point [x]="0.5" [y]="0"></dxi-connection-point>
            <dxi-connection-point [x]="0.5" [y]="1"></dxi-connection-point>
        </dxi-custom-shape>
    </dx-diagram>

##### Vue

    <!-- tab: App.vue -->
    <DxDiagram
        id="diagram"
        ref="diagram"
    >
        <DxCustomShape
            <!-- ... -->
            <DxConnectionPoint
                :x="0.5"
                :y="0"
            />
            <DxConnectionPoint
                :x="0.5"
                :y="1"
            />
        >
        </DxCustomShape>
    </DxDiagram>

##### React

    <!-- tab: App.js -->
    <Diagram id="diagram" ref={this.diagramRef}>
        <CustomShape
            // ...
            <ConnectionPoint x={0.5} y={0} />
            <ConnectionPoint x={0.5} y={1} />
        </CustomShape>
    </Diagram>

---

The image below shows the result:

![Custom Shape Connection Points](/images/diagram/custom-shape-connection-points.png)