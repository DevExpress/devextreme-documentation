DevExtreme components cannot interact with the S3 API directly. You need to create a back-end application that uses the [AWS SDK](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingAWSSDK.html#sdk-general-information-section) to communicate with Amazon servers.

For the purposes of this tutorial, we created a .NET application. You can view its source code on GitHub. Both the [FileManager](https://github.com/DevExpress-Examples/devextreme-file-manager-amazon-client-side-binding/tree/23.1.3%2B/Amazon_Backend) repository and the [FileUploader](https://github.com/DevExpress-Examples/devextreme-file-uploader-direct-upload-to-amazon/tree/23.1.3%2B/Amazon_Backend) repository include the source code for the back-end application (in the `Amazon_Backend` folder).

### Install the SDK

Amazon maintains [AWS Software Development Kits](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingAWSSDK.html#sdk-general-information-section) for popular languages and frameworks. SDKs include the tools necessary to handle AWS authentication, sign requests, and parse S3 server responses.

Since we want to create a .NET application, we need to install the .NET SDK package [from Nuget](https://www.nuget.org/packages/AWSSDK.S3):

    dotnet add AWSSDK.S3 --version 3.7.308.2

### Configure CORS (server-side)

The back-end application needs a CORS setup of its own. You need to enable the following headers:

* The `ETag` header helps the application handle multi-part uploads without [mid-air collisions](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag#avoiding_mid-air_collisions).
* The `Content-Type` header is necessary to handle file downloads.

Example:

    <!--tab: program.cs-->
    public static void Main(string[] args) {
        var builder = WebApplication.CreateBuilder(args);
        builder.Services.AddCors(options => options.AddPolicy("CorsPolicy", builder => {
            builder
                .AllowAnyMethod()
                .AllowAnyHeader()
                .SetIsOriginAllowed(_ => true)
                .AllowCredentials() // Required to expose Content-Disposition and ETag headers
                .WithExposedHeaders(new string[] { "Content-Disposition", "ETag"});
        }));
        var app = builder.Build();
        app.UseCors("CorsPolicy");
    }

### Signature Configuration

For security reasons, most AWS regions require you to activate the [UseSignatureVersion4](https://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-authenticating-requests.html) configuration option. This option ensures that your application uses the fourth version of Amazon's authentication signature standard (to sign S3 requests). Unlike earlier standards, version 4 signatures may include a payload, and allow multiple header requests.

Add the following line to your `program.cs` file:

    <!--tab: program.cs-->
    AWSConfigsS3.UseSignatureVersion4 = true; 

[note] **Additional Info**: [Amazon AWS Documentation — Specifying the Signature Version in Request Authentication](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingAWSSDK.html#specify-signature-version)

### Configure Object Access

S3 buckets do not expose a traditional file system to the end user. They store data in object-key pairs. To simulate a file hierarchy, you can use the key to store the file path, and the object to store file content.

    <!--tab: AmazonS3Provier.cs-->
    public async Task<IEnumerable<FileSystemItem>> GetItemsAsync(string? path)
    {
        List<FileSystemItem> result = new List<FileSystemItem>(); ListObjectsV2Request request = new ListObjectsV2Request {
    ... };
        ListObjectsV2Response response; do
    
            response = await Client.ListObjectsV2Async(request);
            var directories = await GetDirectoriesFromCommonPrefixes(response.CommonPrefixes);
            ...
            request.ContinuationToken = response.NextContinuationToken;
        } while (response.IsTruncated);
        return result;
    }
    ...
    public async Task<List<FileSystemItem>> GetDirectoriesFromCommonPrefixes(List<string> prefixes) {
        var result = new List<FileSystemItem>();
        foreach (var item in prefixes) {
            result.Add(new FileSystemItem() {
                Name = GetDirectoryNameFromKey(item),
                Key = item,
                Size = 0,
                IsDirectory = true,
                DateModified = DateTime.UtcNow,
                HasSubDirectories = await HasDirectorySubDirectoriesAsync(item),
            });
        }
        return result;
    }

    return result; }

Review our `AmazonS3Provider.cs` file for guidance.

[note] **Additional Info**: [Amazon AWS Documentation — Uploading, downloading, and working with objects in Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/uploading-downloading-objects.html)

### Enable Pre-Signed URLs

App performance may suffer if every request includes an authentication signature. To address this issue, S3 can generate **presigned** URLs. You can request authorization for a file action and receive a time-limited URL that does not require an authentication signature. The default validity period for the URL is **15 minutes**. Attempts to access an expired URL will fail. You can use the Expired property to modify the duration of the validity period.

    <!--tab: AmazonS3Provider.cs -->
    public async Task<string> GetPresignedUrlAsync(string uploadId, string key, int partNumber) {
                GetPreSignedUrlRequest request = new GetPreSignedUrlRequest {
                    BucketName = BucketName,
                    Key = key,
                    Verb = HttpVerb.PUT,
                    UploadId = uploadId,
                    /* Uncomment the next line to set a 5-minute URL validity period:
                    Expires = DateTime.UtcNow.AddSeconds(300), */
                    PartNumber = partNumber + 1
                };

                return await Client.GetPreSignedURLAsync(request);
            }

View the [Code Examples section](https://docs.aws.amazon.com/AmazonS3/latest/userguide/service_code_examples.html) of the Amazon S3 user guide for additional information on AWS APIs.

[note] **Additional Info**: [Amazon AWS Documentation — Working with Presigned URLs](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-presigned-url.html)