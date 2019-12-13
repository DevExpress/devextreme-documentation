To bind the **List** to data in a JSON format, assign the data's URL to the [dataSource](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/dataSource '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/dataSource/') option.  
    
---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#listContainer").dxList({
            dataSource: "https://jsonplaceholder.typicode.com/posts",
            itemTemplate: function(data, _, element) {
                element.append(
                    $("<i>").text(data.id + " | "),
                    $("<b>").text(data.title), $("<br />"),
                    $("<p>").text(data.body).css({
                        "margin-top": 10,
                        "white-space": "normal"
                    })
                )
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-list
        dataSource="https://jsonplaceholder.typicode.com/posts">
        <div *dxTemplate="let data of 'item'">
            <i>{{data.id}}</i> | <b>{{data.title}}</b><br/>
            <p style="margin-top:10px; white-space='normal'">{{data.body}}</p> 
        </div>
    </dx-list>

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxListModule
        ],
        // ...
    })

---

Note that you can also use a JSONP callback parameter supported by <a href="http://api.jquery.com/jQuery.ajax/" target="_blank">jQuery.ajax()</a>.

---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#listContainer").dxList({
            dataSource: "http://www.example.com/dataservices/jsonpdata?callback=?",
            // ...
        });
    });

#####Angular

    <!--HTML-->
    <dx-list
        dataSource="http://www.example.com/dataservices/jsonpdata?callback=?">
    </dx-list>

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxListModule
        ],
        // ...
    })

---

If you need to process data after obtaining it, implement the [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/'). For details, see the [Custom Sources](/concepts/05%20Widgets/List/03%20Data%20Binding/20%20Custom%20Sources.md '/Documentation/Guide/Widgets/List/Data_Binding/Custom_Sources/') topic.

#####See Also#####
- [List - Access the DataSource](/concepts/05%20Widgets/List/03%20Data%20Binding/30%20Access%20the%20DataSource.md '/Documentation/Guide/Widgets/List/Data_Binding/Access_the_DataSource/')
- [List Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListEditingAndAPI)
- [List API Reference](/api-reference/10%20UI%20Widgets/dxList '/Documentation/ApiReference/UI_Widgets/dxList/')

[tags]list, data binding, provide data, json, jsonp