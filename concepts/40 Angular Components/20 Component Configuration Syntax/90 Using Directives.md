To change attributes of all components of one type in an app, use [defaultOptions](/Documentation/ApiReference/UI_Components/dxTextBox/Methods/#defaultOptionsrule). To change attributes of multiple components, use directives.

When working with [custom directives](https://angular.dev/guide/directives/attribute-directives), follow these steps:

1. Import required components in the `.directive.ts` file. For example, `import { DxButtonComponent } from 'devextreme-angular';`.
2. Define the components in the constructor. Use the [`@Host`](https://angular.dev/api/core/Host?tab=usage-notes) decorator to access the instance of hosting components. Use the [`@Optional`](https://angular.dev/api/core/Optional?tab=usage-notes) decorator when specifying multiple components.
3. Use the `ngOnViewInit()` hook to ensure component initialization.

The following code snippet creates a directive that changes the style and switches "apple" to "banana" in the TextArea and TextBox components:

    <!-- tab: replace.directive.ts -->
    import { Directive, Host, Optional } from '@angular/core';
    import { DxTextBoxComponent, DxTextAreaComponent } from 'devextreme-angular';
    import { DxTextAreaTypes } from 'devextreme-angular/ui/text-area';
    import { DxTextBoxTypes } from 'devextreme-angular/ui/text-box';

    @Directive({
        selector: '[appReplace]',
        standalone: true,
    })
    export class ReplaceDirective {
        component: any;

        constructor(
            @Optional() @Host() textBox: DxTextBoxComponent,
            @Optional() @Host() textArea: DxTextAreaComponent
        ) {
            this.component = textBox || textArea;
        }

        replaceApple(e: DxTextAreaTypes.FocusOutEvent & DxTextBoxTypes.FocusOutEvent) {
            const value = e.component.option('value');
            e.component.option('value', value?.replace(/apple/g, 'banana'));
        }  

        ngAfterViewInit() {
            this.component.instance.option('stylingMode', 'filled');
            this.component.instance.on('focusOut', this.replaceApple);
        }

        ngOnDestroy() {
            this.component.instance.off('focusOut', this.replaceApple);
        }
    }

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { DxTextBoxModule, DxTextAreaModule } from 'devextreme-angular';
    import { ReplaceDirective } from './replace.directive';

    @Component({
        selector: 'app-root',
        standalone: true,
        imports: [DxTextBoxModule, DxTextAreaModule, ReplaceDirective],
        templateUrl: './app.component.html',
        styleUrl: './app.component.css'
    })
    export class AppComponent { }

    <!-- tab: app.component.html -->
    <dx-text-area appReplace></dx-text-area>
    <dx-text-box appReplace></dx-text-box>