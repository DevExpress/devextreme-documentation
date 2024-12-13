---
id: Utils.keyConverters
module: common/data
export: keyConverters
type: any
---
---
##### shortDescription
Contains built-in OData type converters (for String, Int32, Int64, Boolean, Single, Decimal, and [Guid](/api-reference/30%20Data%20Layer/Guid '/Documentation/ApiReference/Data_Layer/Guid/')) and allows you to register a custom type converter.

---
The following code shows how to register a custom type converter:

---
##### jQuery

    <!--JavaScript-->
    DevExpress.data.utils.odata.keyConverters["MyType"] = function (value) {
        return value + "MT";
    };
    
##### Angular

    <!--TypeScript-->
    import { keyConverters } from "devextreme/data/odata/utils";
    // ...
    export class AppComponent {
        constructor () {
            keyConverters["MyType"] = value => {
                return value + "MT"
            }
        }
    }

##### Vue

    <!-- tab: App.vue -->  
    <script>
    import { keyConverters } from 'devextreme/data/odata/utils';

    export default {
        mounted() {
            keyConverters['MyType'] = value => {
                return value + 'MT';
            }
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import { keyConverters } from 'devextreme/data/odata/utils';

    class App extends React.Component {
        constructor(props) {
            super(props);
            
            keyConverters['MyType'] = value => {
                return value + 'MT';
            }
        }
        // ...
    }
    export default App;

---

#####See Also#####
- [DataSource Examples - OData Key Types](/concepts/70%20Data%20Binding/51%20Data%20Source%20Examples/2%20OData/1%20Key%20Types.md '/Documentation/Guide/Data_Binding/Data_Source_Examples/#OData/Key_Types')