To handle an event, use a configuration option. All event handling options are given names that begin with *on*. 

    @Component({
        selector: 'my-app',
        template: '
            <dx-data-grid (onInitialized)="onInitializedEventHandler($event)"></dx-data-grid> 
            <dx-button text="Press me" (onClick)="clickHandler()"></dx-button>
        '
    })
    export class AppComponent {
        gridInstance = {};
        onInitializedEventHandler(e) {
            this.gridInstance = e.component;
        }
        clickHandler() {
            alert('Button is clicked');
        }
    }

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Button/Icons/Angular/Light/"
}

#####See Also#####
- [API Reference](/Documentation/ApiReference/).**WidgetName**.**Events**
- [DevExtreme-Angular on GitHub](https://github.com/DevExpress/devextreme-angular)

[tags]basics, angular, handle events, subscribe
