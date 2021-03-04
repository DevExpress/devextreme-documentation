---
id: dxDiagram.Options.customShapes.backgroundImageUrl
type: String
---
---
##### shortDescription
Specifies the shape background image's URL.

---
A custom shape can be created based on a default shape type (the [baseType](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/#baseType) property) or with a custom background image (the **backgroundImageUrl** property). 

Use the [backgroundImageToolboxUrl](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/#backgroundImageUrl) property to specify an image displayed for the shape in the toolbox. If the property is not set, the toolbox displays an image specified in the **backgroundImageUrl** property.

![Diagram - Custom shape's image properties](/images/diagram/imageURLs.png)

The **backgroundImageUrl** property is not in effect if the [baseType](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/customShapes/baseType.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/#baseType') is specified.

[note] Shape background images should be supplied as SVG files.

![Rounded Rectangle Shape](/images/diagram/roundedRectangle.png)

    <!-- roundedRect.svg -->
    <svg  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 26">
    <g>
        <rect rx="8" ry="8" x="0.5" y="0.5" width="47" height="25" 
            style="fill:#FFFFFF; stroke:#000000; stroke-width:2px;"/>
    </g>
    </svg>
---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        var diagram = $("#diagram").dxDiagram({
            customShapes: [{
                category: "custom",
                type: "roundedRect",
                title: "Rounded Rectangle",
                backgroundImageUrl: "images/shapes/roundedRect.svg",
                defaultWidth: 0.75,
                defaultHeight: 0.5,
                defaultText: "Text",
                textTop: 0.35,
                textHeight: 0.3,
            }],
        toolbox: {
            groups: [{ category: "custom", title: "Custom" }]
        }
    }).dxDiagram("instance");

##### Angular

    <!-- tab: app.component.html -->
    <dx-diagram #diagram id="diagram">
        <dxi-custom-shape 
            category="custom"
            type="roundedRect"
            title="Rounded Rectangle"
            backgroundImageUrl="images/shapes/roundedRect.svg"
            [defaultWidth]="0.75"
            [defaultHeight]="0.5"
            defaultText="Text"
            [textTop]="0.35"
            [textHeight]="0.3">
        </dxi-custom-shape>
        <dxo-toolbox>
            <dxi-group category="custom" title="Custom"></dxi-group>
        </dxo-toolbox>
    </dx-diagram>
##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDiagram
            id="diagram"
            ref="diagram"
        >
            <DxCustomShape
                :category="'custom'"
                :type="'roundedRect'"
                :title="'Rounded Rectangle'"
                :background-image-url="'images/shapes/roundedRect.svg'"
                :default-width="0.75"
                :default-height="0.5"
                :default-text="'Text'"
                :text-top="0.35"
                :text-height="0.3"
            >
            </DxCustomShape>
            <DxToolbox :visible="true">
                <DxGroup
                    :category="'custom'"
                    :title="'Custom'"
                />
            </DxToolbox>
        </DxDiagram>
    </template>

##### React

    <!-- tab: App.js -->
    <Diagram id="diagram" ref={this.diagramRef}>
            <CustomShape
                category="custom"
                type="roundedRect"
                title="Rounded Rectangle"
                backgroundImageUrl="images/shapes/roundedRect.svg"
                defaultWidth={0.75}
                defaultHeight={0.5}
                defaultText="Text"
                textTop={0.35}
                textHeight={0.3}>
            </CustomShape>
            <Toolbox>
                <Group category="custom" title="Custom" />
            </Toolbox>
    </Diagram>

##### ASP.NET Core Controls

    <!-- tab: DiagramPage.cshtml -->
    @(Html.DevExtreme().Diagram()
        .ID("diagram")
        .CustomShapes(cs => {
            cs.Add()
                .Category("custom")
                .Type("roundedRect")
                .Title("Rounded Rectangle")
                .BackgroundImageUrl(Url.Content("~/images/shapes/roundedRect.svg"))
                .DefaultWidth(0.75)
                .DefaultHeight(0.5)
                .DefaultText("Text")
                .TextTop(0.35)
                .TextHeight(0.3);
        })
        .Toolbox(tb => tb
            .Groups(g => g.Add().Category("custom").Title("Custom"))
        )
    )

##### ASP.NET MVC Controls

    <!-- tab: DiagramPage.cshtml -->
    @(Html.DevExtreme().Diagram()
        .ID("diagram")
        .CustomShapes(cs => {
            cs.Add()
                .Category("custom")
                .Type("roundedRect")
                .Title("Rounded Rectangle")
                .BackgroundImageUrl(Url.Content("~/images/shapes/roundedRect.svg"))
                .DefaultWidth(0.75)
                .DefaultHeight(0.5)
                .DefaultText("Text")
                .TextTop(0.35)
                .TextHeight(0.3);
        })
        .Toolbox(tb => tb
            .Groups(g => g.Add().Category("custom").Title("Custom"))
        )
    )

---

#####See Also#####
[Shapes with Custom Background Images](/Documentation/Guide/UI_Components/Diagram/Custom_Shapes/#Shapes_with_Custom_Background_Images)
