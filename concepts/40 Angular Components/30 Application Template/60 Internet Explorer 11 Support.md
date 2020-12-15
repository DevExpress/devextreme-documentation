For the generated application to work in Internet Explorer 11, make the following adjustments:

- .browserslistrc
change `not IE 11` to  `IE 11`

- in package.json 
**scripts**
`"start": "ng serve", 
"build": "ng build",` 
to 
`"start": "node --max_old_space_size=4096 node_modules/@angular/cli/bin/ng serve --prod",
 "build": "node --max_old_space_size=4096 node_modules/@angular/cli/bin/ng build --prod",`
**dependencies**
add `"classlist.js": "^1.1.20150312",`

OR

npm install --save classlist.js

- tsconfig.base.json
`"target": "es2015",` to `"target": "es5",`

- src/polyfills.ts
uncomment a line
`// import 'classlist.js';`

// - run `npm install`