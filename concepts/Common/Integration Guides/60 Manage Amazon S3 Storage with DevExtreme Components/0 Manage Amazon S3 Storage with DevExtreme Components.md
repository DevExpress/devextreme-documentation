[important]

The code snippets in this article and all associated repositories are for informational purposes only. Security should be your #1 priority when using Amazon S3 storage. You should consult a security expert or apply accepted best practices to maintain the highest security posture for your DevExtreme-powered web application. Remember, a secure web app demands careful consideration/understanding of potential attack vectors, the configuration of your development environment, and security posture of third-party service providers.

[/important]

Amazon's Simple Storage Service (S3) plays a critical role in today’s enterprise. It offers high-availability and trusted access to large databases/file archives. You can integrate S3 storage into your DevExtreme-powered web application to simplify CRUD- operations against user files.

This help topic documents key considerations when connecting DevExtreme UI components to Amazon S3 storage. Specifically, it describes a back-end application designed to communicate with AWS, and two client-side applications — one with the DevExtreme [FileManager](/concepts/05%20UI%20Components/FileManager/00%20Getting%20Started%20with%20File%20Manager '/Documentation/Guide/UI_Components/FileManager/Getting_Started_with_File_Manager/') component, and the other with our [FileUploader](/concepts/05%20UI%20Components/FileUploader/00%20Overview.md '/Documentation/Guide/UI_Components/FileUploader/Overview/').

**FileManager** application:

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-file-manager-amazon-client-side-binding/"
}

**FileUploader** application:

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-file-uploader-direct-upload-to-amazon"
}

## Table of Contents

1. [Amazon Setup](/concepts/Common/Integration%20Guides/60%20Manage%20Amazon%20S3%20Storage%20with%20DevExtreme%20Components/10%20Amazon%20Setup.md '/Documentation/Guide/Common/Integration_Guides/Manage_Amazon_S3_Storage_with_DevExtreme_Components/#Amazon_Setup')

    You will need an Amazon Web Services account with an active subscription to set up an S3 bucket. The first section of this tutorial describes use of the AWS management console (to configure S3 resources).

2. [Back-end application walkthrough](/concepts/Common/Integration%20Guides/60%20Manage%20Amazon%20S3%20Storage%20with%20DevExtreme%20Components/20%20Back-End%20Application%20Walkthrough.md '/Documentation/Guide/Common/Integration_Guides/Manage_Amazon_S3_Storage_with_DevExtreme_Components/#Back-End_Application_Walkthrough')

    In this section, we’ll set up a back-end .NET application that uses the Amazon SDK to query S3 APIs. You can review source code used on [GitHub](https://github.com/DevExpress-Examples/devextreme-file-manager-amazon-client-side-binding/tree/23.1.3%2B/Amazon_Backend).

3. [Configure multi-part upload (client-side)](/concepts/Common/Integration%20Guides/60%20Manage%20Amazon%20S3%20Storage%20with%20DevExtreme%20Components/30%20Configure%20Multi-Part%20Upload%20(Client-Side).md '/Documentation/Guide/Common/Integration_Guides/Manage_Amazon_S3_Storage_with_DevExtreme_Components/#Configure_Multi-Part_Upload_Client-Side')

    This section configures your client-side application to support multi-part AWS uploads.

4. [File Manager](/concepts/Common/Integration%20Guides/60%20Manage%20Amazon%20S3%20Storage%20with%20DevExtreme%20Components/50%20FileManager.md '/Documentation/Guide/Common/Integration_Guides/Manage_Amazon_S3_Storage_with_DevExtreme_Components/#FileManager')

    This section creates a client-side application using the DevExtreme FileManager component (bound to S3). You can explore the complete project [on GitHub](https://github.com/DevExpress-Examples/devextreme-file-manager-amazon-client-side-binding/). The repository includes applications for all DevExtreme supported frameworks: React, Angular, Vue, jQuery, and ASP.NET Core.

5. [File Uploader](/concepts/Common/Integration%20Guides/60%20Manage%20Amazon%20S3%20Storage%20with%20DevExtreme%20Components/60%20FileUploader.md '/Documentation/Guide/Common/Integration_Guides/Manage_Amazon_S3_Storage_with_DevExtreme_Components/#FileUploader')

    This section creates a client-side application using the DevExtreme FileUploader component. You can explore the complete project [on GitHub](https://github.com/DevExpress-Examples/devextreme-file-uploader-direct-upload-to-amazon). The repository includes applications for all DevExtreme supported frameworks: React, Angular, Vue, jQuery, and ASP.NET Core.