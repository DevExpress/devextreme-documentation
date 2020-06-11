Regardless of the data source you use, the **Lookup** always wraps it in a [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/'). Call the [getDataSource()](/api-reference/10%20UI%20Widgets/DataHelperMixin/3%20Methods/getDataSource().md '/Documentation/ApiReference/UI_Widgets/dxLookup/Methods/#getDataSource') method to get the instance of the **DataSource**.

---
##### jQuery

    <!--JavaScript-->const lookupDataSource = $("#lookupContainer").dxLookup("getDataSource");

##### Angular

    <!--TypeScript-->
    import { DxLookupModule, DxLookupComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxLookupComponent, { static: false }) lookup: DxLookupComponent;
        // Prior to Angular 8
        // @ViewChild(DxLookupComponent) lookup: DxLookupComponent;
        lookupDataSource = this.lookup.instance.getDataSource();
    }
    @NgModule({
         imports: [
             // ...
             DxLookupModule
         ],
         // ...
     })

##### Vue

    <template>
        <DxLookup ...
            ref="lookup"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxLookup } from 'devextreme-vue/lookup';

    export default {
        components: {
            DxLookup
        },
        methods: {
            getDataSource() {
                this.ds = this.$refs.lookup.instance.getDataSource();
            }
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Lookup } from 'devextreme-react/lookup';

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.lookupRef = React.createRef();

            this.getDataSource = this.getDataSource.bind(this);
        }

        getDataSource() {
            this.ds = this.lookupRef.current.instance.getDataSource();
        } 

        render() {
            return (
                <Lookup ...
                    ref={this.lookupRef}
                />
            );
        }
    }

    export default App;

---

Now, you can call [any method](/api-reference/30%20Data%20Layer/DataSource/3%20Methods '/Documentation/ApiReference/Data_Layer/DataSource/Methods/') the **DataSource** exposes. For example, you can reload data using the [load()](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/load().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load') method.

    <!--JavaScript-->lookupDataSource.load();

#####See Also#####
- [Data Layer - Overview](/concepts/70%20Data%20Binding/5%20Data%20Layer '/Documentation/Guide/Data_Binding/Data_Layer/')
- [Lookup Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Lookup/Basics)

[tags]Lookup, data binding, access data source, getDataSource, reload data
