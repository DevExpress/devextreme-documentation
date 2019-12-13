    <!-- tab: app.component.html -->
    <dx-vector-map>
        <dxi-layer
            [customize]="customizeLayers">
        </dxi-layer>
    </dx-vector-map>

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        customizeLayers(elements) {
            // ...
        }
    }

Callback functions are executed _outside_ the component's context. If the context is important, explicitly bind the callback function to it in the constructor.

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        myCountry: string = "USA"; // we need to access this context variable in the callback function

        constructor() {
            this.customizeLayers = this.customizeLayers.bind(this);
        }

        customizeLayers(elements) {
            let country = this.myCountry;
            // ...
        }
    }

    <!-- tab: app.component.html -->
    <dx-vector-map>
        <dxi-layer
            [customize]="customizeLayers">
        </dxi-layer>
    </dx-vector-map>

    

    