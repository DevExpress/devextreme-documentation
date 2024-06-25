Amazon's Simple Storage Service (S3) is an essential component of many web applications. It offers high-availability, safe access to large databases and file archives. You can integrate S3 storage into your DevExtreme application to streamline CRUD operations with user files.

This article explains the key points you need to consider when you connect DevExtreme components to Amazon's S3 storage. We'll look at a back-end application that communicates with AWS, and two client-side applications — one with a `FileManager` component, and the other with a `FileUploader`.

**FileManager** application:

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-file-manager-amazon-client-side-binding/"
}

**FileUploader** application:

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-file-uploader-direct-upload-to-amazon"
}

## Table of Contents

1. **Amazon Setup**

    You need an Amazon Web Services account with an active subscription to set up an S3 bucket. The first section of this tutorial describes how to use the AWS management console to configure your S3 resources.

2. **Back-end application walkthrough**

    In this section, you'll set up a back-end .NET application that uses the Amazon SDK to query the S3 API. You can view the source code for the application on [GitHub](https://github.com/DevExpress-Examples/devextreme-file-manager-amazon-client-side-binding/tree/23.1.3%2B/Amazon_Backend).

3. **Configure multi-part upload (client-side)**

    This section describes how to configure your client-side application to support multi-part AWS uploads.

4. **File Manager**

    This section describes how to create a client-side application with an S3-bound **FileManager** component. You can view the project in its final form [on GitHub](https://github.com/DevExpress-Examples/devextreme-file-manager-amazon-client-side-binding/). The repository includes applications for all DevExtreme-supported frameworks — React, Angular, Vue, jQuery, and ASP.NET Core.

5. **File Uploader**

    This section describes how to create a client-side application with an S3-bound **FileUploader** component. You can view the project in its final form [on GitHub](https://github.com/DevExpress-Examples/devextreme-file-uploader-direct-upload-to-amazon). The repository includes applications for all DevExtreme-supported frameworks — React, Angular, Vue, jQuery, and ASP.NET Core.