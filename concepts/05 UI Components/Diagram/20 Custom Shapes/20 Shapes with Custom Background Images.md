Use the [backgroundImageUrl](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/customShapes/backgroundImageUrl.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/#backgroundImageUrl') property to specify a background image for a shape.

[note] Shape images should be in SVG format. 

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/CustomShapesWithIcons/"
}

![Diagram control custom shapes](/images/diagram/custom-shapes.png)

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        var diagram = $("#diagram").dxDiagram({
            customShapes: [{
                category: "hardware",
                type: "internet",
                title: "Internet",
                backgroundImageUrl: "images/shapes/internet.svg",
                backgroundImageLeft: 0.15,
                backgroundImageTop: 0,
                backgroundImageWidth: 0.7,
                backgroundImageHeight: 0.7,
                defaultWidth: 0.75,
                defaultHeight: 0.75,
                defaultText: "Internet",
                allowEditText: true,
                textLeft: 0,
                textTop: 0.7,
                textWidth: 1,
                textHeight: 0.3,
                connectionPoints: [
                    { x: 0.5, y: 0 },
                    { x: 0.9, y: 0.5 },
                    { x: 0.5, y: 1 },
                    { x: 0.1, y: 0.5 }
                ]
            },
            // ...
        ],
        toolbox: {
            groups: [{ category: "hardware", title: "Hardware" }]
        }
    }).dxDiagram("instance");
	
##### Angular

    <!-- tab: app.component.html -->
    <dx-diagram #diagram id="diagram">
        <dxi-custom-shape 
            category="hardware"
            type="internet"
            title="Internet"
            backgroundImageUrl="images/shapes/internet.svg"
            [backgroundImageLeft]="0.15"
            [backgroundImageTop]="0"
            [backgroundImageWidth]="0.7"
            [backgroundImageHeight]="0.7"
            [defaultWidth]="0.75"
            [defaultHeight]="0.75"
            defaultText="Internet"
            [allowEditText]="false"
            [textLeft]="0"
            [textTop]="0.7"
            [textWidth]="1"
            [textHeight]="0.3">
            <dxi-connection-point [x]="0.5" [y]="0"></dxi-connection-point>
            <dxi-connection-point [x]="0.9" [y]="0.5"></dxi-connection-point>
            <dxi-connection-point [x]="0.5" [y]="1"></dxi-connection-point>
            <dxi-connection-point [x]="0.1" [y]="0.5"></dxi-connection-point>
        </dxi-custom-shape>
        // ...
        <dxo-toolbox>
            <dxi-group category="hardware" title="Hardware"></dxi-group>
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
                :category="'hardware'"
                :type="'internet'"
                :title="'Internet'"
                :background-image-url="'images/shapes/internet.svg'"
                :background-image-left="0.15"
                :background-image-top="0"
                :background-image-width="0.7"
                :background-image-height="0.7"
                :default-width="0.75"
                :default-height="0.75"
                :default-text="'Internet'"
                :allow-edit-text="true"
                :text-left="0"
                :text-top="0.7"
                :text-width="1"
                :text-height="0.3"
            >
                <DxConnectionPoint
                        :x="0.5"
                        :y="0"
                />
                <DxConnectionPoint
                        :x="0.9"
                        :y="0.5"
                />
                <DxConnectionPoint
                        :x="0.5"
                        :y="1"
                />
                <DxConnectionPoint
                        :x="0.1"
                        :y="0.5"
                />
            </DxCustomShape>
            // ...
            <DxToolbox :visible="true">
                <DxGroup
                        :category="'hardware'"
                        :title="'Hardware'"
                />
            </DxToolbox>
        </DxDiagram>
    </template>

##### React

    <!-- tab: App.js -->
    class App extends React.Component {
        // ...
        render() {
            return (
                <Diagram id="diagram" ref={this.diagramRef}>
                        <CustomShape
                            category="hardware"
                            type="internet"
                            title="Internet"
                            backgroundImageUrl="images/shapes/internet.svg"
                            backgroundImageLeft={0.15}
                            backgroundImageTop={0}
                            backgroundImageWidth={0.7}
                            backgroundImageHeight={0.7}
                            defaultWidth={0.75}
                            defaultHeight={0.75}
                            defaultText="Internet"
                            allowEditText={true}
                            textLeft={0}
                            textTop={0.7}
                            textWidth={1}
                            textHeight={0.3}>
                            <ConnectionPoint x={0.5} y={0} />
                            <ConnectionPoint x={0.9} y={0.5} />
                            <ConnectionPoint x={0.5} y={1} />
                            <ConnectionPoint x={0.1} y={0.5} />
                        </CustomShape>
                        // ...
                        <Toolbox>
                            <Group category="hardware" title="Hardware" />
                        </Toolbox>
                </Diagram>
            );
        }
    }

##### ASP.NET Core Controls

    <!-- tab: Diagram.cshtml -->
@(Html.DevExtreme().Diagram()
        .ID("diagram")
        .CustomShapes(cs => {
            cs.Add()
                .Category("hardware")
                .Type("internet")
                .Title("Internet")
                .BackgroundImageUrl(Url.Content("/images/shapes/internet.svg"))
                .BackgroundImageLeft(0.15)
                .BackgroundImageTop(0)
                .BackgroundImageWidth(0.7)
                .BackgroundImageHeight(0.7)
                .DefaultWidth(0.75)
                .DefaultHeight(0.75)
                .DefaultText("Internet")
                .AllowEditText(true)
                .TextLeft(0)
                .TextTop(0.7)
                .TextWidth(1)
                .TextHeight(0.3)
                .ConnectionPoints(cp => {
                    cp.Add().X(0.5).Y(0);
                    cp.Add().X(0.9).Y(0.5);
                    cp.Add().X(0.5).Y(1);
                    cp.Add().X(0.1).Y(0.5);
                });
                // ...
        })
        .Toolbox(tb => tb
            .Groups(g => g.Add().Category("hardware").Title("Hardware"))
        )
)


##### ASP.NET MVC Controls

    <!-- tab: Diagram.cshtml -->
    @(Html.DevExtreme().Diagram()
        .ID("diagram")
        .CustomShapes(cs => {
            cs.Add()
                .Category("hardware")
                .Type("internet")
                .Title("Internet")
                .BackgroundImageUrl(Url.Content("~/Content/Images/shapes/internet.svg"))
                .BackgroundImageLeft(0.15)
                .BackgroundImageTop(0)
                .BackgroundImageWidth(0.7)
                .BackgroundImageHeight(0.7)
                .DefaultWidth(0.75)
                .DefaultHeight(0.75)
                .DefaultText("Internet")
                .AllowEditText(true)
                .TextLeft(0)
                .TextTop(0.7)
                .TextWidth(1)
                .TextHeight(0.3)
                .ConnectionPoints(cp => {
                    cp.Add().X(0.5).Y(0);
                    cp.Add().X(0.9).Y(0.5);
                    cp.Add().X(0.5).Y(1);
                    cp.Add().X(0.1).Y(0.5);

                });
                // ...
        })
        .Toolbox(tb => tb
            .Groups(g => g.Add().Category("hardware").Title("Hardware"))
        )
    )

---