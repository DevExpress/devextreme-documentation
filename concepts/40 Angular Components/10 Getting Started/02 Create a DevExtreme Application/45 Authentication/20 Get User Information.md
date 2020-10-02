User information is provided by the same `AuthService`. You can use its `getUser()` method to access this information:

    <!-- tab: TypeScript -->
    import { Component } from '@angular/core';
    import { AuthService } from './shared/services';

    @Component({
        // ...
    })
    export class AppComponent  {
        constructor(private authService: AuthService) { }

        ngOnInit() {
            this.authService.getUser().then((e) => {
                if (e.data) {
                    // User is authenticated 
                    ...
                }
            });
        }
    }