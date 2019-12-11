---
type: function()
---
---
##### shortDescription
Specifies a function that is executed when the **ODataContext** throws an error.

---
This function accepts a JavaScript [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) object as the parameter.

---
#####jQuery

    <!--JavaScript-->
    var context = new DevExpress.data.ODataContext({
        // ...
        errorHandler: function (error) {
            console.log(error.message);
        }
    });

#####Angular

    <!--TypeScript-->
    import ODataContext from "devextreme/data/odata/context";
    // ...
    export class AppComponent {
        context: ODataContext;
        constructor() {
            this.context = new ODataContext({
                // ...
                errorHandler: function (error) {
                    console.log(error.message);
                }
            })
        }
    }

---