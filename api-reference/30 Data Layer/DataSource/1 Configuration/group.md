---
id: DataSource.Options.group
type: Group expression
---
---
##### shortDescription
Specifies data grouping options.

---
This option accepts one of the following:

- **String**        
The field name to group by.

- **Object**        
An object with the following fields:

    * **selector**: String    
    The field name to group by.
    * **desc**: Boolean     
    Sorts the **selector** field in descending order.

- **Array**         
An array of strings and objects described above.

- **Function**      
A function that returns the value to group by.

---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        // ...
        group: { selector: "LastName", desc: true },
        /* or as a function
        group: function(e) {
            // creates two custom groups
            return e.BirthYear < 1990 ? "Born before 1990" : "Born after 1990";
        } */
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
                group: { selector: "LastName", desc: true },
                /* or as a function
                group: function(e) {
                    // creates two custom groups
                    return e.BirthYear < 1990 ? "Born before 1990" : "Born after 1990";
                } */
            });
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import DataSource from 'devextreme/data/data_source';

    const ds = new DataSource({
        // ...
        group: { selector: 'LastName', desc: true },
        /* or as a function
        group: function(e) {
            // creates two custom groups
            return e.BirthYear < 1990 ? 'Born before 1990' : 'Born after 1990';
        } */
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
        group: { selector: 'LastName', desc: true },
        /* or as a function
        group: function(e) {
            // creates two custom groups
            return e.BirthYear < 1990 ? 'Born before 1990' : 'Born after 1990';
        } */
    });

    class App extends React.Component {
        // ...
    }
    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().WidgetName()
        .DataSourceOptions(dso => dso
            .Group("LastName", true)
            // === or as a function ===
            .Group("group_function")
        )
    )

    <script type="text/javascript">
        function group_function(e) {
            // creates two custom groups
            return e.BirthYear < 1990 ? "Born before 1990" : "Born after 1990";
        }
    </script>

---

#####See Also#####
- [Grouping](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/4%20Grouping.md '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Grouping')