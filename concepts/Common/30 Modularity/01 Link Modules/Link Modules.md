Use one of the following ways to link up the required modules to your application.  

- Create a bundle using [Webpack](https://webpack.github.io/docs).  

- Load modules using the [jspm](https://jspm.io) package manager.  

- Load modules automatically using [RequireJS](https://requirejs.org).  

[note]The DevExtreme package includes about 500 modules, which can significantly decrease the application performance when loading them through RequireJS. Loading DevExtreme bundles is much faster because of a small count of HTTP requests. Thus, even if you are using only several DevExtreme components, it is more efficient to create a custom bundle using the DevExtreme Bundle Tool and load only this bundle instead of multiple modules.
