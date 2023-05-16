---
id: DataSource.Options.langParams
type: LangParams
inheritsType: LangParams
---
---
##### shortDescription
Specifies parameters for language-specific sorting and filtering.

---
Use this property to include language-specific parameters into sorting and filtering operations. For example, you can use **langParams** to make DataSource ignore letters with diacritic symbols. Specify locale and collator options as in example below:

---
##### jQuery  

    <!--JavaScript-->
    const dataSource = new DevExpress.data.DataSource({
        // ...
        langParams: {
            locale: 'fr',
            collatorOptions: {
                sensitivity: 'accent',
                caseFirst: 'upper'
            }
        }
    });

##### Angular  

    <!--TypeScript-->
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        dataSource: DataSource;
        constructor () {
            this.dataSource = new DataSource({
                // ...
                langParams: {
                    locale: 'fr',
                    collatorOptions: {
                        sensitivity: 'accent',
                        caseFirst: 'upper'
                    }
                }
            });
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import DataSource from 'devextreme/data/data_source';

    const dataSource = new DataSource({
        // ...
        langParams: {
            locale: 'fr',
            collatorOptions: {
                sensitivity: 'accent',
                caseFirst: 'upper'
            }
        }
    });

    export default {
        data() {
            return {
                dataSource
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import DataSource from 'devextreme/data/data_source';

    const dataSource = new DataSource({
        // ...
        langParams: {
            locale: 'fr',
            collatorOptions: {
                sensitivity: 'accent',
                caseFirst: 'upper'
            }
        }
    });

    function App() {
        // ...
    }
    export default App;

---