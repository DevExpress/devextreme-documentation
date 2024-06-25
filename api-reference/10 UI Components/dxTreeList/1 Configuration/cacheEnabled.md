When this property is set to **true**, data loaded once is saved in cache. Then, the UI component takes data from this cache when performing such operations as sorting, grouping, paging, etc. Caching is helpful when the data source takes significant time to load. But, consider disabling it for frequently changing data sources. 

To update data in cache, call the [refresh()](/api-reference/10%20UI%20Components/GridBase/3%20Methods/refresh().md '{basewidgetpath}/Methods/#refresh') method of the UI component or the [reload()](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/reload().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#reload') method of the **DataSource**:

---
##### jQuery

    <!--JavaScript-->
    $("#{widgetName}Container").dx{WidgetName}("refresh");
    // ===== or =====
    const {widgetName}DataSource = $("#{widgetName}Container").dx{WidgetName}("getDataSource");
    {widgetName}DataSource.reload();

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { Dx{WidgetName}Module, Dx{WidgetName}Component } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(Dx{WidgetName}Component, { static: false }) {widgetName}: Dx{WidgetName}Component;
        // Prior to Angular 8
        // @ViewChild(Dx{WidgetName}Component) {widgetName}: Dx{WidgetName}Component;
        refreshData () {
            this.{widgetName}.instance.refresh();
            // ===== or =====
            const {widgetName}DataSource = this.{widgetName}.instance.getDataSource();
            {widgetName}DataSource.reload();
        }
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} :ref="{widgetName}RefKey">
            <!-- ... -->
        </Dx{WidgetName}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import Dx{WidgetName} from 'devextreme-vue/{widget-name}';

    const {widgetName}RefKey = "my-{widget-name}";

    export default {
        components: {
            Dx{WidgetName}
        },
        data() {
            return {
                {widgetName}RefKey
            }
        },
        methods: {
            refreshData() {
                this.{widgetName}.refresh();
                // ===== or =====
                const {widgetName}DataSource = this.{widgetName}.getDataSource();
                {widgetName}DataSource.reload();
            }
        },
        computed: {
            {widgetName}: function() {
                return this.$refs[{widgetName}RefKey].instance;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName} from 'devextreme-react/{widget-name}';

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.{widgetName}Ref = React.createRef();

            this.refreshData = () => {
                this.{widgetName}.refresh();
                // ===== or =====
                const {widgetName}DataSource = this.{widgetName}.getDataSource();
                {widgetName}DataSource.reload();
            }
        }

        get {widgetName}() {
            return this.{widgetName}Ref.current.instance();
        }

        render() {
            return (
                <{WidgetName} ref={this.{widgetName}Ref}>
                    {/* ... */ }
                </{WidgetName}>
            );
        }
    }
    export default App;
    
---