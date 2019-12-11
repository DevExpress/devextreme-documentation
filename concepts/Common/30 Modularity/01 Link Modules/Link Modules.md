DevExtreme provides a set of modules. Each module contains a small portion of the DevExtreme functionality. Using modules has the following advantages in comparison with standard libraries (dx.mobile.js, dx.web.js, dx.viz.js, dx.viz-web.js, dx.all.js).  

- Less memory is allocated by your application, because only the required functionality is loaded.  

- Application loading is faster, because of the smaller size of the loaded code and the capability to load modules at runtime by demand.  

DevExtreme modules are distributed as an npm package only. Install the package to the directory where you wish to store the files.  

    npm install devextreme@17.1 --save --save-exact

We recommend saving an exact version of DevExtreme to avoid unexpected updates due to DevExtreme not using Semantic Versioning. In our versioning system, the increment of the first or middle number means a major release, which may contain behavior changes.

[note]You may require 3-rd party libraries and frameworks integration. For details on supported versions, see the [3rd-Party Libraries and Frameworks Integration](/concepts/Common/08%203rd-Party%20Libraries%20and%20Frameworks%20Integration '/Documentation/Guide/Common/3rd-Party_Libraries_and_Frameworks_Integration/') topic.

Use one of the following ways to link up the required modules to your application.  

- Load modules automatically using [RequireJS](https://requirejs.org).  

- Create a bundle using [Webpack](https://webpack.github.io/docs).  

- Load modules using the [jspm](https://jspm.io) package manager.  
