The following code shows the [onValueChanged](/api-reference/10%20UI%20Widgets/dxSelectBox/1%20Configuration/onValueChanged.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#onValueChanged') event handler's implementation that limits the number of tags a user can select in the **TagBox**:

---
#####jQuery

    <!--JavaScript-->
    $(function(){
        var products = [
            "HD Video Player",
            "SuperHD Video Player",
            "SuperPlasma 50",
            "SuperLED 50",
            // ...
        ],
        maxItems = 2;

        $("#tagBoxContainer").dxTagBox({
            dataSource: products,
            onValueChanged: function(e) {
                if (e.value.length > maxItems) {
                    var newValue = e.value.slice(0, maxItems); 
                    e.component.option("value", newValue);
                    tooltip.show();
                }
            }
        });

        var tooltip = $("#tooltipContainer").dxTooltip({
            target: "#tagBoxContainer",
            position:"bottom", 
            hideEvent: {
                name: "mouseout",
                delay: 2000
            }  
        }).dxTooltip("instance");
    });

    <!--HTML-->
    <div id="tagBoxContainer"></div>
    <div id="tooltipContainer">Limit reached</div>

#####Angular

    <!--HTML-->
    <dx-tag-box id="tagBoxContainer"
        [dataSource]="products"
        (onValueChanged)="onValueChanged($event)">
    </dx-tag-box>
    <dx-tooltip
        target="#tagBoxContainer"
        position="bottom"
        [hideEvent]="{ name: 'mouseout', delay: 2000 }"
        [(visible)]="isVisible">
        <div *dxTemplate="let data of 'content'">
            <p>Limit reached</p>
        </div>
    </dx-tooltip>

    <!--TypeScript-->
    import { DxTagBoxModule, DxTooltipModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        isVisible: boolean = false;
        products = [
            "HD Video Player",
            "SuperHD Video Player",
            "SuperPlasma 50",
            "SuperLED 50",
            // ...
        ];
        maxItems: number = 2;
        onValueChanged (e) {
            if (e.value.length > this.maxItems) {
                let newValue = e.value.slice(0, this.maxItems); 
                e.component.option("value", newValue);
                this.isVisible = true;
            }
        }
    }
    @NgModule({
         imports: [
             // ...
             DxTagBoxModule,
             DxTooltipModule
         ],
         // ...
     })

---

