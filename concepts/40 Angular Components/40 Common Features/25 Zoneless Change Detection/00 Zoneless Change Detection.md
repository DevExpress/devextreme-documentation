DevExtreme Angular components support zoneless change detection (the default mode in Angular 21 and later). These components need no additional configuration in zoneless applications. Zone-based applications work as before.

In zoneless applications, Angular only updates the view after a change notification. DevExtreme components send these notifications when they raise events or change their properties. Asynchronous code and callback functions do not notify Angular when they change class fields. In this code, store data in signals or call [markForCheck()](https://angular.dev/api/core/ChangeDetectorRef#markForCheck). The same applies to OnPush components in zone-based applications.

The [Angular guide on zoneless change detection](https://angular.dev/guide/zoneless) describes how to migrate an existing application.

[tags] angular
