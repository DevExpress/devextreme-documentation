---
type: template
---
---
##### shortDescription
Specifies a custom template for detail sections.

##### param(detailElement): dxElement
The detail section's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### param(detailInfo): Object
Information about the master row.

##### field(detailInfo.key): any
The master row's key.

##### field(detailInfo.data): Object
The master row's data object.

---
---
#####jQuery

    <!--JavaScript-->
    $("#dataGridContainer").dxDataGrid({
        // ...
        masterDetail: {
            enabled: true,
            template: function (container, info) {
                $('<div>').dxDataGrid({ 
                    // configure the widget here
                }).appendTo(container); 
            }
        }
    });

#####Angular

    <!--HTML-->
    <dx-data-grid  ...
        [masterDetail]="{ enabled: true, template: 'detail' }">
        <div *dxTemplate="let employee of 'detail'">
            <div class="internal-grid-container">
                <dx-data-grid ... ></dx-data-grid>
            </div>
        </div>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

---

#####See Also#####
- [Custom Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates')