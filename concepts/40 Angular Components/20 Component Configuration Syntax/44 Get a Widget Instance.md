You can access a widget instance in the component as described in [Call Methods](/concepts/40%20Angular%20Components/20%20Component%20Configuration%20Syntax/42%20Call%20Methods.md '/Documentation/Guide/Angular_Components/Component_Configuration_Syntax/#Call_Methods').

You can also use <a href="https://angular.io/guide/template-syntax#template-reference-variables--var-" target="_blank">template reference variables</a> to access a widget instance in the markup:

    <!--HTML-->
    <dx-select-box #targetSelectBox [items]="items"></dx-select-box>
    {{targetSelectBox.value}}
