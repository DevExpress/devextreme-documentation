---
id: DataSource.Options.select
type: Select expression
---
---
##### shortDescription
Specifies the fields to select from data objects.

---
This option accepts one of the following:

- **String**        
A field name to select.

- **Array of strings**         
Several field names to select.

- **Function**      
A function implementing custom selection logic.

---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        // ...
        select: ["firstName", "lastName", "birthDate"] 
    });

##### Angular

    <!--TypeScript-->
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        ds: DataSource;
        constructor() {
            this.ds = new DataSource({
                // ...
                select: ["firstName", "lastName", "birthDate"] 
            });
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import DataSource from 'devextreme/data/data_source';

    const ds = new DataSource({
        // ...
        select: ['firstName', 'lastName', 'birthDate']
    });

    export default {
        // ...
        data() {
            return {
                ds
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import DataSource from 'devextreme/data/data_source';

    const ds = new DataSource({
        // ...
        select: ['firstName', 'lastName', 'birthDate']
    });

    class App extends React.Component {
        // ...
    }
    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().WidgetName()
        .DataSourceOptions(dso => dso
            .Select("firstName", "lastName", "birthDate")
        )
    )

---

#####See Also#####
- [Select Expressions](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/3%20Data%20Transformation/0%20Select%20Expressions.md '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Data_Transformation/Select_Expressions')