    <!-- tab: app.component.html -->
    <dx-vector-map>
        <dxi-vector-map-layer
            [customize]="customizeLayers">
        </dxi-vector-map-layer>
    </dx-vector-map>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { DxVectorMapModule, type DxVectorMapTypes } from 'devextreme-angular/ui/vector-map';

    @Component({
        // ...
        standalone: true,
        imports: [DxVectorMapModule]
    })
    export class AppComponent {
        customizeLayers(elements: DxVectorMapTypes.MapLayerElement[]) {
            // ...
        }
    }

Callback functions are executed _outside_ the component's context. If the context is important, explicitly bind the callback function to it in the constructor.

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { DxVectorMapModule, type DxVectorMapTypes } from 'devextreme-angular/ui/vector-map';

    @Component({
        // ...
        standalone: true,
        imports: [DxVectorMapModule]
    })
    export class AppComponent {
        myCountry: string = 'USA'; // we need to access this context variable in the callback function

        constructor() {
            this.customizeLayers = this.customizeLayers.bind(this);
        }

        customizeLayers(elements: DxVectorMapTypes.MapLayerElement[]) {
            let country = this.myCountry;
            // ...
        }
    }

    <!-- tab: app.component.html -->
    <dx-vector-map>
        <dxi-vector-map-layer
            [customize]="customizeLayers">
        </dxi-vector-map-layer>
    </dx-vector-map>