Titles and subtitles are textual elements that provide an overview of what the widget visualizes.

![Sankey Title and Subtitle](/images/sankey/visual_elements/title.png)

The [title](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/title '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/title/') object configures the title; the **title**.[subtitle](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/title/subtitle '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/title/subtitle/') object configures the subtitle.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#sankeyContainer").dxSankey({
            // ...
            title: {
                text: "I am the Title",
                subtitle: {
                    text: "I am the Subtitle"
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-sankey ... >
        <dxo-title
            text="I am the Title">
            <dxo-subtitle
                text="I am the Subtitle">
            </dxo-subtitle>
        </dxo-title>
    </dx-sankey>

    <!--TypeScript-->
    import { DxSankeyModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxSankeyModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxSankey ... >
            <DxTitle text="I am the Title">
                <DxSubtitle text="I am the Subtitle" />
            </DxTitle>
        </DxSankey>
    </template>

    <script>
    import DxSankey, { DxTitle, DxSubtitle } from 'devextreme-vue/sankey';

    export default {
        components: {
            DxSankey,
            DxTitle,
            DxSubtitle
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Sankey, { Title, Subtitle } from 'devextreme-react/sankey';

    class App extends React.Component {
        render() {
            return (
                <Sankey ... >
                    <Title text="I am the Title">
                        <Subtitle text="I am the Subtitle" />
                    </Title>
                </Sankey>
            )
        }
    }

    export default App;

---

You can set the title's text more concisely if you assign it directly to the **title** option. This is useful if you do not want to change the title's default settings and do not need a subtitle. 

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#sankeyContainer").dxSankey({
            // ...
            title: "I am the Title"
        });
    });

##### Angular

    <!--HTML--><dx-sankey ...
        text="I am the Title">
    </dx-sankey>

    <!--TypeScript-->
    import { DxSankeyModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxSankeyModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxSankey title="I am the Title" />
    </template>

    <script>
    import DxSankey from 'devextreme-vue/sankey';

    export default {
        components: {
            DxSankey
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Sankey from 'devextreme-react/sankey';

    class App extends React.Component {
        render() {
            return (
                <Sankey title="I am the Title" />
            )
        }
    }

    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/SankeyChart/"
}

#####See Also#####
- [Adaptive Layout](/concepts/05%20Widgets/Sankey/89%20Adaptive%20Layout.md '/Documentation/Guide/Widgets/Sankey/Adaptive_Layout/')
