The following code shows the [onValueChanged](/api-reference/10%20UI%20Widgets/dxTagBox/1%20Configuration/onValueChanged.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#onValueChanged') event handler's implementation that limits the number of tags a user can select in the **TagBox**:

---
##### jQuery

    <!--JavaScript-->
    $(function(){
        const products = [
            "HD Video Player",
            "SuperHD Video Player",
            "SuperPlasma 50",
            "SuperLED 50",
            // ...
        ],
        maxItems = 2;

        $("#tagBoxContainer").dxTagBox({
            dataSource: products,
            onValueChanged: function(e) {
                if (e.value.length > maxItems) {
                    const newValue = e.value.slice(0, maxItems); 
                    e.component.option("value", newValue);
                    tooltip.show();
                }
            }
        });

        const tooltip = $("#tooltipContainer").dxTooltip({
            target: "#tagBoxContainer",
            position:"bottom", 
            hideEvent: {
                name: "mouseout",
                delay: 2000
            }  
        }).dxTooltip("instance");
    });

    <!--HTML-->
    <div id="tagBoxContainer"></div>
    <div id="tooltipContainer">Limit reached</div>

##### Angular

    <!--HTML-->
    <dx-tag-box id="tagBoxContainer"
        [dataSource]="products"
        (onValueChanged)="onValueChanged($event)">
    </dx-tag-box>
    <dx-tooltip
        target="#tagBoxContainer"
        position="bottom"
        [hideEvent]="{ name: 'mouseout', delay: 2000 }"
        [(visible)]="isVisible">
        <div *dxTemplate="let data of 'content'">
            <p>Limit reached</p>
        </div>
    </dx-tooltip>

    <!--TypeScript-->
    import { DxTagBoxModule, DxTooltipModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        isVisible: boolean = false;
        products = [
            "HD Video Player",
            "SuperHD Video Player",
            "SuperPlasma 50",
            "SuperLED 50",
            // ...
        ];
        maxItems: number = 2;
        onValueChanged (e) {
            if (e.value.length > this.maxItems) {
                let newValue = e.value.slice(0, this.maxItems); 
                e.component.option("value", newValue);
                this.isVisible = true;
            }
        }
    }
    @NgModule({
         imports: [
             // ...
             DxTagBoxModule,
             DxTooltipModule
         ],
         // ...
     })

##### Vue

    <template>
        <div>
            <DxTagBox
                id="tagBoxContainer"
                :data-source="products"
                @value-changed="onValueChanged"
            />
            <DxTooltip 
                target="#tagBoxContainer"
                :hide-event="hideEvent"
                position="bottom"
                :visible="isTooltipVisible">
                <template>
                    <p>Limit reached</p>
                </template>
            </DxTooltip>
        </div>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxTagBox } from 'devextreme-vue/tag-box';
    import { DxTooltip } from 'devextreme-vue/tooltip';

    export default {
        components: {
            DxTagBox,
            DxTooltip
        },
        data() {
            return {
                hideEvent: { name: 'mouseout', delay: 2000 },
                products: [
                    "HD Video Player",
                    "SuperHD Video Player",
                    "SuperPlasma 50",
                    "SuperLED 50",
                    // ...
                ],
                isTooltipVisible: false,
                maxItems: 2
            };
        },
        methods: {
            onValueChanged(e) {
                if (e.value.length > this.maxItems) {
                    const newValue = e.value.slice(0, this.maxItems);
                    e.component.option('value', newValue);
                    this.isTooltipVisible = true;
                }
            }
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { TagBox } from 'devextreme-react/tag-box';
    import { Tooltip } from 'devextreme-react/tooltip';

    const products = [
        "HD Video Player",
        "SuperHD Video Player",
        "SuperPlasma 50",
        "SuperLED 50",
        // ...
    ];

    const renderContent = () => {
        return (
            <p>Limit reached</p>
        );
    }

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                isTooltipVisible: false
            }

            this.maxItems = 2;
            this.hideEvent = { delay: 2000, name: "mouseout" };

            this.onValueChanged = this.onValueChanged.bind(this);
            this.onTooltipHiding = this.onTooltipHiding.bind(this);
        }

        onValueChanged(e) {
            if (e.value.length > this.maxItems) {
                const newValue = e.value.slice(0, this.maxItems);
                e.component.option('value', newValue);
                this.setState({
                    isTooltipVisible: true
                });
            }
        }

        onTooltipHiding(e) {
            this.setState({
                isTooltipVisible: false
            });
        }

        render() {
            return (
                <div>
                    <TagBox
                        id="tagBoxContainer"
                        dataSource={products}
                        onValueChanged={this.onValueChanged}
                    />
                    <Tooltip
                        target="#tagBoxContainer"
                        hideEvent={this.hideEvent}
                        contentRender={renderContent}
                        position="bottom"
                        visible={this.state.isTooltipVisible}
                        onHiding={this.onTooltipHiding}
                    />
                </div>
            );
        }
    }

    export default App;

---

