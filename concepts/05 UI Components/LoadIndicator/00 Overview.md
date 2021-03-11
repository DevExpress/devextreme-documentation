The LoadIndicator is a UI element notifying the viewer that a process is in progress.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/LoadIndicator/Overview/"
}

The following code adds a simple LoadIndicator to your page. You can change the UI component size, using the [height](/api-reference/10%20UI%20Components/DOMComponent/1%20Configuration/height.md '/Documentation/ApiReference/UI_Components/dxLoadIndicator/Configuration/#height') and [width](/api-reference/10%20UI%20Components/DOMComponent/1%20Configuration/height.md '/Documentation/ApiReference/UI_Components/dxLoadIndicator/Configuration/#height') properties.

---
##### jQuery

    <!--HTML-->
    <div id="loadIndicatorContainer"></div>

    <!--JavaScript-->
    $(function() {
        $("#loadIndicatorContainer").dxLoadIndicator({
            visible: true,
            height: 40,
            width: 40
        });
    });

##### Angular

    <!--HTML-->
    <dx-load-indicator
        [(visible)]="isLoadIndicatorVisible"
        [height]="40"
        [width]="40">
    </dx-load-indicator>

    <!--TypeScript-->
    import { DxLoadIndicatorModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        isLoadIndicatorVisible: boolean = true;
    }
    @NgModule({
        imports: [
            // ...
            DxLoadIndicatorModule
        ],
        // ...
    })

##### Vue

    <template>
        <DxLoadIndicator
            :visible.sync="isLoadIndicatorVisible"
            :height="40"
            :width="40"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxLoadIndicator } from 'devextreme-vue/load-indicator';

    export default {
        components: {
            DxLoadIndicator
        },
        data() {
            return {
                isLoadIndicatorVisible: true
            };
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { LoadIndicator } from 'devextreme-react/load-indicator';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                isLoadIndicatorVisible: true
            };
        }

        render() {
            return (
                <LoadIndicator
                    visible={this.state.isLoadIndicatorVisible}
                    height={40}
                    width={40}
                />
            );
        }
    }

    export default App;

---

If you need to use a custom image in the LoadIndicator, assign its URL to the [indicatorSrc](/api-reference/10%20UI%20Components/dxLoadIndicator/1%20Configuration/indicatorSrc.md '/Documentation/ApiReference/UI_Components/dxLoadIndicator/Configuration/#indicatorSrc') property.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#loadIndicatorContainer").dxLoadIndicator({
            visible: true,
            indicatorSrc: "https://js.devexpress.com/Content/data/loadingIcons/rolling.svg"
        });
    });

##### Angular

    <!--HTML-->
    <dx-load-indicator
        [(visible)]="isLoadIndicatorVisible"
        [indicatorSrc]="indicatorUrl">
    </dx-load-indicator>

    <!--TypeScript-->
    import { DxLoadIndicatorModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        isLoadIndicatorVisible: boolean = true;
        indicatorUrl: string = "https://js.devexpress.com/Content/data/loadingIcons/rolling.svg";
    }
    @NgModule({
        imports: [
            // ...
            DxLoadIndicatorModule
        ],
        // ...
    })

##### Vue

    <template>
        <DxLoadIndicator
            :visible.sync="isLoadIndicatorVisible"
            :indicatorSrc="indicatorUrl"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxLoadIndicator } from 'devextreme-vue/load-indicator';

    export default {
        components: {
            DxLoadIndicator
        },
        data() {
            return {
                isLoadIndicatorVisible: true,
                indicatorUrl: "https://js.devexpress.com/Content/data/loadingIcons/rolling.svg"
            };
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { LoadIndicator } from 'devextreme-react/load-indicator';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                isLoadIndicatorVisible: true
                indicatorUrl: "https://js.devexpress.com/Content/data/loadingIcons/rolling.svg"
            };
        }

        render() {
            return (
                <LoadIndicator
                    visible={this.state.isLoadIndicatorVisible}
                    indicatorSrc={this.state.indicatorUrl}
                />
            );
        }
    }

    export default App;

---

#####See Also#####
#include common-link-configurewidget
- [LoadIndicator - Show and Hide Using the API](/concepts/05%20UI%20Components/LoadIndicator/05%20Show%20and%20Hide%20Using%20the%20API.md '/Documentation/Guide/UI_Components/LoadIndicator/Show_and_Hide_Using_the_API/')
- [LoadIndicator API Reference](/api-reference/10%20UI%20Components/dxLoadIndicator '/Documentation/ApiReference/UI_Components/dxLoadIndicator/')
- [LoadPanel - Overview](/concepts/05%20UI%20Components/LoadPanel/00%20Overview.md '/Documentation/Guide/UI_Components/LoadPanel/Overview/')

[tags]dxloadindicator, loadIndicator, load indicator, loading indicator, overview, overlay