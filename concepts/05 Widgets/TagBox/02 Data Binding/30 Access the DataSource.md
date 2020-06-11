Regardless of the data source you use, the **TagBox** always wraps it in a [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/'). Call the [getDataSource()](/api-reference/10%20UI%20Widgets/DataHelperMixin/3%20Methods/getDataSource().md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Methods/#getDataSource') method to get the instance of the **DataSource**.

---
##### jQuery

    <!--JavaScript-->var tagBoxDataSource = $("#tagBoxContainer").dxTagBox("getDataSource");

##### Angular

    <!--TypeScript-->
    import { ViewChild, ... } from "@angular/core";
    import { DxTagBoxModule, DxTagBoxComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTagBoxComponent, { static: false }) tagBox: DxTagBoxComponent;
        // Prior to Angular 8
        // @ViewChild(DxTagBoxComponent) tagBox: DxTagBoxComponent;
        ds: any = {};
        getDataSource () {
            this.ds = this.tagBox.instance.getDataSource();
        }
    }
    @NgModule({
         imports: [
             // ...
             DxTagBoxModule
         ],
         // ...
     })

##### Vue

    <template>
        <DxTagBox
            ref="tagBox"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxTagBox } from 'devextreme-vue/tag-box';

    export default {
        components: {
            DxTagBox
        },
        methods: {
            getDataSource() {
                this.ds = this.$refs.tagBox.instance.getDataSource();
            }
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { TagBox } from 'devextreme-react/tag-box';

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.tagBoxRef = React.createRef();

            this.getDataSource = this.getDataSource.bind(this);
        }

        getDataSource() {
            this.ds = this.tagBoxRef.current.instance.getDataSource();
        } 

        render() {
            return (
                <TagBox
                    ref={this.tagBoxRef}
                />
            );
        }
    }

    export default App;

---

Now, you can call [any method](/api-reference/30%20Data%20Layer/DataSource/3%20Methods '/Documentation/ApiReference/Data_Layer/DataSource/Methods/') the **DataSource** exposes. For example, you can reload data using the [load()](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/load().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load') method.

    <!--JavaScript-->tagBoxDataSource.load();

#####See Also#####
- [Data Layer - Overview](/concepts/70%20Data%20Binding/5%20Data%20Layer '/Documentation/Guide/Data_Binding/Data_Layer/')
- [TagBox Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tag_Box/Overview)

[tags]tagBox, data binding, access data source, getDataSource, reload data
