---
id: GridBase.Options.onRowRemoving
type: function(e)
default: null
EventForAction: GridBase.rowRemoving
---
---
##### shortDescription
A function that is executed before a row is removed from the data source.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.cancel): Boolean | Promise<void>
**true**, a Promise resolved with **true**, or a rejected Promise stops row removal.       
**false** or a Promise resolved with **false** or **undefined** continues row removal.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.data): Object
The data of the row that should be removed.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.key): any
The row's key.

##### field(e.model): Object
Model data. Available only if you use Knockout.

---
[note] In batch [editing mode](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/editing/mode.md '{basewidgetpath}/Configuration/editing/#mode'), this function is executed for each row individually if several rows should be removed.

The following code shows how to use the function parameter's **cancel** field to prevent or continue row removal. In this code, a Promise is assigned to this field. Row removal continues if checks on the server succeed (the Promise is resolved); otherwise, row removal is prevented (the Promise is rejected).

---
#####jQuery

    <!--JavaScript-->
    $(function(){
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            onRowRemoving: function(e) {
                var d = $.Deferred();
                $.getJSON("https://url/to/your/validation/service", JSON.stringify(e.data))
                    .then(function(result) {
                        return !result.errorText ? d.resolve() : d.reject(result.errorText)
                    })
                    .fail(function() { 
                        return d.reject(); 
                    })
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