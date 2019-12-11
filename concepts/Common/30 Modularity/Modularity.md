DevExtreme provides a set of modules. Each module contains a small portion of the DevExtreme functionality. Using modules has the following advantages in comparison with standard libraries (dx.mobile.js, dx.web.js, dx.viz.js, dx.viz-web.js, dx.all.js).  

- Less memory is allocated by your application, because only the required functionality is loaded.  

- Application loading is faster, because of the smaller size of the loaded code and the capability to load modules at runtime by demand.  

DevExtreme modules are distributed as an npm package. Install the package to the directory where you wish to store the files.  

    npm install devextreme

[note]DevExtreme modules are available only via npm.

Alternatively, you can create a custom bundle using the DevExtreme Bundler tool. For more information, see the [Create a Custom Bundle](/concepts/Common/30%20Modularity/015%20Create%20a%20Custom%20Bundle '/Documentation/Guide/Common/Modularity/#Create_a_Custom_Bundle') section of this article.

[note]You may require 3-rd party libraries and frameworks integration. For details on supported versions, see the [3rd-Party Libraries and Frameworks Integration](/concepts/Common/08%203rd-Party%20Libraries%20and%20Frameworks%20Integration '/Documentation/Guide/Common/3rd-Party_Libraries_and_Frameworks_Integration/') topic.