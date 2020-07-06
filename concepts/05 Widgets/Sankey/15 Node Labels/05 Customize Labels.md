[note] This article describes the options that customize labels' text. Labels have other customization options, such as [font](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/1%20Configuration/label/font '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/label/font/'), [border](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/1%20Configuration/label/border '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/label/border/'), [shadow](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/1%20Configuration/label/shadow '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/label/shadow/'), and so on. Refer to the [label](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/1%20Configuration/label '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/label/') API reference section for more information about them.

You can use the [customizeText](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/1%20Configuration/label/customizeText.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/label/#customizeText') function to change the labels' text. Its argument contains a [Node](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/6%20Node '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Node/') object that provides information about the node being customized. The function should return a string value that will be used as a label's text.

In the following example, the **customizeText** function is used to add incoming and outgoing weight values to the label:

---
##### jQuery

    <!--JavaScript-->$(function() {
        var weightsReducer = function(accumulator, currentValue) {
            return accumulator + currentValue.weight;
        }

        $("#sankeyContainer").dxSankey({
            // ...
            label: {
                customizeText: function(node) {
                    return node.title + " (in: " + node.linksIn.reduce(weightsReducer, 0) + ", "
                        + "out: " + node.linksOut.reduce(weightsReducer, 0) + ")";
                }
            }
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxSankeyModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        constructor() {
            this.sankey_label_customizeText = this.sankey_label_customizeText.bind(this);
        }
        weightsReducer(accumulator, currentValue) {
            return accumulator + currentValue.weight;
        }
        sankey_label_customizeText(node) {
            return node.title + " (in: " + node.linksIn.reduce(this.weightsReducer, 0) + ", "
                + "out: " + node.linksOut.reduce(this.weightsReducer, 0) + ")";
        }
    }
    @NgModule({
        imports: [
            // ...
            DxSankeyModule
        ],
        // ...
    })

    <!--HTML--><dx-sankey ... >
        <dxi-series>
            <dxo-label
                [customizeText]="sankey_label_customizeText">
            </dxo-label>
        </dxi-series>
    </dx-sankey>

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxSankey ... >
            <DxLabel :customize-text="customizeText" />
        </DxSankey>
    </template>

    <script>
    import DxSankey, { DxLabel } from 'devextreme-vue/sankey';

    const weightsReducer = (accumulator, currentValue) => {
        return accumulator + currentValue.weight;
    }

    export default {
        components: {
            DxSankey,
            DxLabel
        },
        methods: {
            customizeText(node) {
                return `${node.title} (in: ${node.linksIn.reduce(weightsReducer, 0)}, out: ${node.linksOut.reduce(weightsReducer, 0)})`;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Sankey, { Label } from 'devextreme-react/sankey';

    const weightsReducer = (accumulator, currentValue) => {
        return accumulator + currentValue.weight;
    }

    class App extends React.Component {
        render() {
            return (
                <Sankey ... >
                    <Label customizeText={this.customizeText} />
                </Sankey>
            )
        }
        customizeText(node) {
            return `${node.title} (in: ${node.linksIn.reduce(weightsReducer, 0)}, out: ${node.linksOut.reduce(weightsReducer, 0)})`;
        }
    }

    export default App;

---

#####See Also#####
- [Colorize Labels](/concepts/05%20Widgets/Sankey/15%20Node%20Labels/03%20Colorize%20Labels.md '/Documentation/Guide/Widgets/Sankey/Node_Labels/Colorize_Labels/')
- [Resolve Label Overlapping](/concepts/05%20Widgets/Sankey/15%20Node%20Labels/10%20Resolve%20Overlapping.md '/Documentation/Guide/Widgets/Sankey/Node_Labels/Resolve_Overlapping/')
- [Sankey API Reference](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/')
