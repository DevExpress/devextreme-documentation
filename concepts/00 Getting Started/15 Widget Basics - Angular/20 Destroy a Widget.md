If you want a DevExtreme widget to be destroyed at some moment, use the [NgIf directive](https://angular.io/docs/ts/latest/api/common/index/NgIf-directive.html). In the following example, the **TextBox** widget is destroyed each time the `showTextBox` property is given **false**, and created again once this property is given **true**.

    @Component({
        selector: 'my-app',
        template: '
            <dx-text-box *NgIf="showTextBox"></dx-text-box>
            <dx-button text="Click me" (onClick)="clickHandler()"></dx-button>
        '
    })
    export class AppComponent {
        showTextBox: bool = true;
        clickHandler() {
            this.showTextBox = !this.showTextBox;
        }
    }

#####See Also#####
- [DevExtreme-Angular on GitHub](https://github.com/DevExpress/devextreme-angular)

[tags]basics, angular, destroy, remove, delete
