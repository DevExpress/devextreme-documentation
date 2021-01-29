Changes in the `bindingProperty` are propagated to the **TextBox**'s **value**, but not vice versa:

    <!-- tab: app.component.html -->
    <dx-text-box [value]="bindingProperty"></dx-text-box>

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        bindingProperty: string = "Some value";
    }