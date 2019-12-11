---
type: function(key, values)
---
---
##### shortDescription
Specifies a custom implementation of the [update(key, values)](/api-reference/30%20Data%20Layer/Store/3%20Methods/update(key_values).md '/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#updatekey_values') method.

##### param(key): Object|String|Number
The key of the data item to be updated.

##### param(values): Object
An object with new values for the data item.

##### return: Promise<any>
A Promise that is resolved after the data item is updated. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](https://api.jquery.com/Types/#Promise) when you use jQuery.

---
---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.CustomStore({
        // ...
        update: function (key, values) {
            return $.ajax({
                url: "http://mydomain.com/MyDataService/myEntity" + encodeURIComponent(key),
                method: "PUT",
                data: values
            })
        }
    });

##### Angular

    <!--TypeScript-->
    import { ..., Inject } from "@angular/core";
    import CustomStore from "devextreme/data/custom_store";
    import { HttpClient, HttpClientModule } from "@angular/common/http";
    import "rxjs/add/operator/toPromise";
    // ...
    export class AppComponent {
        store: CustomStore;
        constructor(@Inject(HttpClient) httpClient: HttpClient) {
            this.store = new CustomStore({
                // ...
                update: (key, values) => {
                    return httpClient.put("http://mydomain.com/MyDataService/myEntity" + encodeURIComponent(key), values)
                        .toPromise();
                }
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            HttpClientModule 
        ],
        // ...
    })

---