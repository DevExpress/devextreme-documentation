Paging options are set in the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/'): [paginate](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/paginate.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate') enables paging; [pageSize](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/pageSize.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#pageSize') specifies how many data items a page should contain.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#selectBoxContainer").dxSelectBox({
            dataSource: new DevExpress.data.DataSource({
                store: /* A store is configured here */,
                paginate: true,
                pageSize: 10
            }),
            // ...
        });
    });

#####Angular

    <!--TypeScript-->
    import { DxSelectBoxModule } from "devextreme-angular";
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        selectBoxData: any = {};
        constructor() {
            this.selectBoxData = new DataSource({
                store: /* A store is configured here */,
                paginate: true,
                pageSize: 10
            });
        }
    }
    @NgModule({
         imports: [
             // ...
             DxSelectBoxModule,
         ],
         // ...
     })

    <!--HTML-->
    <dx-select-box ...
        [dataSource]="selectBoxData">
    </dx-select-box>

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxSelectBox ...
            :data-source="selectBoxData"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxSelectBox } from 'devextreme-vue/select-box';
    import DataSource from "devextreme/data/data_source";

    export default {
        components: {
            DxSelectBox
        },
        data() {
            const selectBoxData = new DataSource({
                store: /* A store is configured here */,
                paginate: true,
                pageSize: 10
            }); 
            return {
                selectBoxData
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import SelectBox from 'devextreme-react/select-box';
    import DataSource from "devextreme/data/data_source";

    const selectBoxData = new DataSource({
        store: /* A store is configured here */,
        paginate: true,
        pageSize: 10
    });  

    class App extends React.Component {
        render() {
            return (
                <SelectBox ...
                    dataSource={selectBoxData}
                />
            );
        }
    }
    export default App;

#####ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().SelectBox()
        .ID("selectBox")
        .DataSource(d => d
            // Data access is configured here
        )
        .DataSourceOptions(o => o
            .Paginate(true)
            .PageSize(10)
        )
    )

---

If the entire dataset is on the client (stored in a [local array](/concepts/05%20Widgets/SelectBox/03%20Data%20Binding/05%20Simple%20Array/05%20Array%20Only.md '/Documentation/Guide/Widgets/SelectBox/Data_Binding/Simple_Array/Array_Only/') or loaded using the **CustomStore** in [raw mode](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples/3%20Custom%20Sources/1%20Load%20Data%20in%20Raw%20Mode.md '/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources/Load_Data_in_Raw_Mode')), data items are *only rendered* page by page.

If the dataset is on the server, and the server supports paging, the data items are *also loaded* by pages.

#####See Also#####
- **Data Binding**: [Web API Service](/concepts/05%20Widgets/SelectBox/03%20Data%20Binding/16%20Web%20API%20Service.md '/Documentation/Guide/Widgets/SelectBox/Data_Binding/Web_API_Service/') | [PHP Service](/concepts/05%20Widgets/SelectBox/03%20Data%20Binding/17%20PHP%20Service.md '/Documentation/Guide/Widgets/SelectBox/Data_Binding/PHP_Service/') | [MongoDB Service](/concepts/05%20Widgets/SelectBox/03%20Data%20Binding/18%20MongoDB%20Service.md '/Documentation/Guide/Widgets/SelectBox/Data_Binding/MongoDB_Service/') | [OData Service](/concepts/05%20Widgets/SelectBox/03%20Data%20Binding/15%20OData%20Service.md '/Documentation/Guide/Widgets/SelectBox/Data_Binding/OData_Service/') | [Custom Sources](/concepts/05%20Widgets/SelectBox/03%20Data%20Binding/20%20Custom%20Sources.md '/Documentation/Guide/Widgets/SelectBox/Data_Binding/Custom_Sources/') | [JavaScript Array](/concepts/05%20Widgets/SelectBox/03%20Data%20Binding/05%20Simple%20Array/05%20Array%20Only.md '/Documentation/Guide/Widgets/SelectBox/Data_Binding/Simple_Array/Array_Only/')
- [SelectBox Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/SelectBox/Overview)

[tags]selectbox, select box, paginate, page size, pageSize
