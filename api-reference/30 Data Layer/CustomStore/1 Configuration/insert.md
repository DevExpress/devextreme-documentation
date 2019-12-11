---
type: function(values)
---
---
##### shortDescription
Specifies a custom implementation of the [insert(values)](/api-reference/30%20Data%20Layer/Store/3%20Methods/insert(values).md '/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#insertvalues') method.

##### param(values): Object
The data item to be inserted.

##### return: Promise<any>
A Promise that is resolved after the data item is inserted. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](https://api.jquery.com/Types/#Promise) when you use jQuery.

---
---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.CustomStore({
        // ...
        insert: function (values) {
            return $.ajax({
                url: "http://mydomain.com/MyDataService/myEntity",
                method: "POST",
                data: values
            })
        }
    });

##### Angular

    <!--TypeScript-->
    import { ..., Inject } from '@angular/core';
    import CustomStore from "devextreme/data/custom_store";
    import { Http, HttpModule } from '@angular/http';
    import 'rxjs/add/operator/toPromise';
    // ...
    export class AppComponent {
        store: CustomStore;
        constructor(@Inject(Http) http: Http) {
            this.store = new CustomStore({
                // ...
                insert: (values) => {
                    return http.post("http://mydomain.com/MyDataService/myEntity", values)
                        .toPromise();
                }
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            HttpModule 
        ],
        // ...
    })

---