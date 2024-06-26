
You need a Microsoft Account to set up Microsoft Azure. At the time of publication, Microsoft offers a free trial for most Azure products.

### Create a new Storage account

1. Log into the [Azure control panel](https://portal.azure.com/), and open the "Create a new resource" page.
2. Navigate to the "Storage" category and select the "Storage account" option.
3. Follow the instructions to create a new Storage account.
    * Pick an all-lowecase Storage account name.
    * Select a convenient geographic location for your primary storage.
    * Azure Blob Storage offers two performance tiers: Standard and Premium. Standard is sufficient for most use cases, including the cases described in this article.
    * Select a [redundancy policy](https://learn.microsoft.com/en-us/azure/storage/common/storage-redundancy) for your Azure storage. Azure can store copies of your data across multiple servers within the same data center, or different data centers in the same region or two different regions. You cannot manually select the secondary storage region — for maximum efficiency, the system automatically determines its location based on your primary region.

### Create a Blob Container

1. Locate the newly created Storage account in your Azure control panel.
2. Open the Storage account page and add a new Blob container.
3. Set container privacy to "Private" to prohibit anonymous storage access.
4. Click "Create" to complete the process.

### Copy Access Keys

Microsoft generates two [access keys](https://learn.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?tabs=azure-portal) for each storage account. Your application needs to use these keys to authenticate Azure requests.

To copy the keys, click the "Access Keys" link in the "Security + Networking" section of your Storage account page.

### Configure CORS (Server-side)

CORS policies give your Storage Blob an added layer of protection from unauthorized requests. Azure Storage Blobs do not have a CORS policy out of the box. Use the [service properties](https://learn.microsoft.com/en-us/rest/api/storageservices/set-blob-service-properties?tabs=microsoft-entra-id) of your blob to set its CORS policy.

If you plan to try these techniques in a development environment, we recommend that you allow requests from all origins, but limit the range of acceptable request methods.
