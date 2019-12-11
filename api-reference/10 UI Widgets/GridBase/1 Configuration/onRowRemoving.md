---
EventForAction: ..\4 Events\rowRemoving.md
default: null
type: function(e)
---
---
##### shortDescription
A function that is executed before a row is removed from the data source.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.data): Object
The data of the row that should be removed.

##### field(e.key): any
The row's key.

##### field(e.cancel): Boolean | Promise<void>
**true**, a Promise resolved with **true**, or a rejected Promise stops row removal.       
**false** or a Promise resolved with **false** or **undefined** continues row removal.

---
[note] In batch [editing mode](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/editing/mode.md '{basewidgetpath}/Configuration/editing/#mode'), this function is executed for each row individually if several rows should be removed.

The following code shows how to use the function parameter's **cancel** field to prevent or continue row removal. In this code, a Promise is assigned to this field. Row removal continues if checks on the server succeed (the Promise is resolved); otherwise, row removal is prevented (the Promise is rejected).

---
#####jQuery

    <!--JavaScript-->
    $(function(){
        $("#{widgetName}Container}").dx{WidgetName}({
            // ...
            onRowRemoving: function(e) {
                var d = $.Deferred();
                $.getJSON("https://url/to/your/validation/service", JSON.stringify(e.data))
                    .then((result) => !result.errorText ? d.resolve() : d.reject(result.errorText))
                    .fail(() => d.reject())
                e.cancel = d.promise();
            }
        })
    })

#####Angular

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from "devextreme-angular";
    import { HttpClient, HttpClientModule, HttpParams } from "@angular/common/http";
    import "rxjs/add/operator/toPromise";
    // ...
    export class AppComponent {
        constructor(private httpClient: HttpClient) { /*...*/}
        onRowRemoving(e) {
            let params = new HttpParams({ fromString: JSON.stringify(e.data) });
            let result = this.httpClient.get("https://url/to/your/validation/service", { params: params })
                .toPromise();
            e.cancel = new Promise((resolve, reject) => {
                result.then((validationResult) => {
                    !validationResult.errorText ? resolve() : reject(validationResult.errorText)
                })
                .catch(() => reject());
            })    
        }
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module,
            HttpClientModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-{widget-name} ... 
        (onRowRemoving)="onRowRemoving($event)">
    </dx-{widget-name}>

---