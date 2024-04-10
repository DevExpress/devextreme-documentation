---
id: dxTemplate
type: Object
module: core/templates/template
export: dxTemplate
---
---
##### shortDescription
A custom template's markup.

##### lib
dx.web.js, dx.all.js

---
The dxTemplate markup component specifies a custom template for a container UI component or a collection UI component's items in Angular apps. Place this template within the UI component's element, specify the template [name](/api-reference/10%20UI%20Components/Markup%20Components/dxTemplate/1%20Configuration/name.md '/Documentation/ApiReference/UI_Components/Markup_Components/dxTemplate/Configuration/#name') and assign it to the corresponding **xxxTemplate** property (for example, **itemTemplate**, **containerTemplate**). You can omit specifying the **xxxTemplate** property if you use the default template name, for instance, *item* for the **itemTemplate**, *content* for the **contentTemplate**. 

Commonly, the dxTemplate is in the component's binding context, but it can differ depending on the UI component element you specify the template for. See the corresponding **xxxTemplate** property description for more information on a specific template's binding context.

---

#####Angular

    <!--HTML-->
    <dx-popup
        [width]="300"
        [height]="250"
        contentTemplate="info"
        [visible]="true">
        <div *dxTemplate="let data of 'info'">
            <p>
                Full Name:
                <span>{{employee.FirstName}}</span>
                <span>{{employee.LastName}}</span>
            </p>
            <p>Birth Date: <span>{{employee.BirthDate}}</span></p>
            <p>Address: <span>{{employee.Address}}</span></p>
        </div>
    </dx-popup>

    <!--TypeScript-->
    import { DxPopupModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        employee = {
            FirstName: "Sandra",
            LastName: "Johnson",
            BirthDate: "1974/11/15",
            Address: "4600 N Virginia Rd."
        };
    }
    @NgModule({
        imports: [
            // ...
            DxPopupModule
        ],
        // ...
    })

---

An item object extends the standard binding context. Use the input variable that is declared via the `let` keyword. In all Angular apps, you can also bind a template element to the rendered item's index using the `index` keyword. 

---

#####Angular

    <!--HTML-->
    <dx-list [dataSource]="fruits">
        <div *dxTemplate="let fruit of 'item'; let i = index">
            <span>[{{i}}] </span>
            <b>{{fruit.name}}</b><br />
            <p>{{fruit.count}}</p>
        </div>
    </dx-list>

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        fruits = [
            { name: "Apples", count: 10 },
            { name: "Oranges", count: 12 },
            { name: "Lemons", count: 15 },
            { name: "Pears", count: 20 },
            { name: "Pineapples", count: 3 }
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxListModule
        ],
        // ...
    })

---

#####See Also#####
- [Templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates '/Documentation/Guide/UI_Components/Common/Templates/')

[tags] angular