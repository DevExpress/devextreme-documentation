To make the generated application work in Internet Explorer 11, do the following:

1. **Install and enable polyfills**     

        npm install --save classlist.js core-js

    <!---->

        <!-- tab: src/polyfills.ts -->
        // ...
        import 'core-js/es/array';
        import 'classlist.js';
        // ...

1. **Include IE 11 as a supported browser**      
Open the .browserslistrc file and change `not IE 11` to  `IE 11`.

1. **Modify the `start` and `build` commands**          

        <!-- tab: package.json -->
        {
          // ...
          "scripts": {
            // ...
            // "start": "ng serve", 
            // "build": "ng build",
            "start": "node --max_old_space_size=4096 node_modules/@angular/cli/bin/ng serve --prod",
            "build": "node --max_old_space_size=4096 node_modules/@angular/cli/bin/ng build --prod",
            // ...
          }
        }

1. **Lower the target ECMAScript version**      

        <!-- tab: tsconfig.json -->
        {
          // ...
          // "target": "es2015",
          "target": "es5",
          // ...
        }
