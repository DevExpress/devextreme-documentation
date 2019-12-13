External templates are created using the <a href="https://angular.io/guide/structural-directives#the-ng-template" target="_blank">`ng-template`</a> element. The following code replicates the example above, but here the **itemTemplate** is the external template. The **groupTemplate** is omitted.

The <a href="https://angular.io/api/common/NgTemplateOutlet" target="_blank">`ngTemplateOutlet`</a> directive uses a <a href="https://angular.io/guide/template-syntax#template-reference-variables--var-" target="_blank">template reference variable</a> to reference the external template. The `ngTemplateOutletContext` directive specifies variables that are accessible in the template.

    <!-- tab: custom-list.component.html -->
    <dx-list [items]="items" itemTemplate="listItem">
        <div *dxTemplate="let itemData of 'listItem'; let itemIndex = index">
            <ng-template 
                [ngTemplateOutlet]="customItemTemplate" 
                [ngTemplateOutletContext]="{ itemData: itemData, itemIndex: itemIndex }">
            </ng-template>
        </div>
    </dx-list>

    <ng-template #customItemTemplate let-data="itemData" let-index="itemIndex">
        {{index}} - {{data.itemProperty}}
    </ng-template>

In the previous code, the external template is used in the same component in which it is declared. The following code illustrates the case when the external template is declared in another component. The `ngTemplateOutlet` directive should be set to an <a href="https://angular.io/guide/template-syntax#input-and-output-properties" target="_blank">input property</a> in this case:

    <!-- tab: parent.component.html -->
    <ng-template #customItemTemplate let-data="itemData" let-index="itemIndex">
        {{index}} - {{data.itemProperty}}
    </ng-template>

    <custom-list
        [externalItemTemplate]="customItemTemplate"> 
    </custom-list>

    <!-- tab: custom-list.component.html -->
    <dx-list ...
        itemTemplate="listItem">
        <div *dxTemplate="let itemData of 'listItem'; let itemIndex = index">
            <ng-template 
                [ngTemplateOutlet]="externalItemTemplate" 
                [ngTemplateOutletContext]="{ itemData: itemData, itemIndex: itemIndex }">
            </ng-template>
        </div>
    </dx-list>

    <!-- tab: custom-list.component.ts -->
    import { Component, Input, TemplateRef } from '@angular/core';
    @Component({
        selector: 'custom-list',
        templateUrl: './custom-list.component.html'
    })
    export class CustomListComponent {
        @Input() externalItemTemplate: TemplateRef<any>
        // ...
    }
