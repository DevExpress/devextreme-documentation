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

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Button/Icons/Angular/Light/" class="button orange small fix-width-155" target="_blank">View Demo</a>

#####See Also#####
- [API Reference](/Documentation/ApiReference/) | **WidgetName** | **Events**
- [DevExtreme-Angular on GitHub](https://github.com/DevExpress/devextreme-angular)

[tags]basics, angular, handle events, subscribe
