DevExtreme Angular components like [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/), [FileUploader](/Documentation/ApiReference/UI_Components/dxFileUploader/), and [Map](/Documentation/ApiReference/UI_Components/dxMap/) require additional `DxHttpModule` import to intercept requests with Angular [HttpInterceptor](https://angular.io/api/common/http/HttpInterceptor).

---
##### Angular

    <!-- tab: app.component.ts -->
    import DataSource from 'devextreme/data/data_source';
    import { DxHttpModule } from 'devextreme-angular/http';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
        providers: [],
        imports: [DxHttpModule],
    })

    export class AppComponent {
        dataSource = new DataSource({
            // DataSource configuration
        });

        constructor() {
            // ...
        }
    }

---