### Create a New Bucket

Buckets are virtual storage containers. Each bucket can store an unlimited number of objects [up to 5TB in size](https://aws.amazon.com/s3/faqs/). Each object can represent a file or a different data entity.

Follow the [Amazon tutorial](https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html) to create a new S3 bucket.

* Select a [DNS-compliant](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html) bucket name between 3 and 63 characters in length. The name can include numbers, hyphens, and periods. Do not use uppercase letters or underscores.
* Select a convenient geographic location for your bucket. Buckets do not offer Content Delivery Network capabilities — each bucket stores files in a single location.

[note] **Learn more**: [Amazon AWS Documentation — Creating a Bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html) 

[note] **Additional video tutorials**: [@TinyTechnicalTutorials](https://youtu.be/mDRoyPFJvlU?t=360), [@CodeWithOtabek](https://www.youtube.com/watch?v=BSZqR0SXf3g)

### Set Up User Permissions

For the bucket to be secure, you need to properly set up access permissions. Amazon calls this process IAM (Identity and Access Management). For each user, you can set granular rules that limit access to storage buckets and objects. Review the following Amazon AWS article if you are new to IAM: [Controlling access to a bucket with user policies](https://docs.aws.amazon.com/AmazonS3/latest/userguide/walkthrough1.html#walkthrough1-create-bucket).

The following Amazon AWS article explains how to create a [new IAM user](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html) for your application: [Creating an IAM user in your AWS account](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html). Amazon generates a unique [secret key](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) for each IAM user. The secret key and access ID are an integral part of the authentication process.

Use the AWS Management Console to [create a new access policy](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html) with full access to your S3 bucket. Once complete, [attach](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_change-permissions.html) this policy to the user you created earlier.

[note] **Additional Info**: [Amazon AWS Documentation — Controlling access to a bucket with user policies](https://docs.aws.amazon.com/AmazonS3/latest/userguide/walkthrough1.html)

### Configure CORS (AWS Management Console)

Last but not least, you need to configure a set of CORS (Cross-Origin Resource Sharing) policies for your bucket. To protect your bucket from unauthorized access, CORS policies limit the range of acceptable request origins and HTTP headers. Amazon references the bucket's CORS policies when it receives incoming requests.

Since a DevExtreme-powered application will not run on the same server as your bucket, you need to explicitly allow requests from third-party origins. The configuration below opens up a bucket to requests of all origins, and limits the number of allowed HTTP methods:

    [{
        "AllowedHeaders": ["*"], 
        "AllowedMethods": ["GET", "PUT", "POST"], 
        "AllowedOrigins": ["*"],
        "ExposeHeaders": ["etag"　... other tags ]
    }]

[note] **Additional Info**: [Amazon AWS Documentation — CORS Configuration](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ManageCorsUsing.html)