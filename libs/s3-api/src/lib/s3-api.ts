import { S3 } from 'aws-sdk';


const s3 = new S3({
  endpoint: "eu-central-1.linodeobjects.com",
  region: 'eu-central-1',
  accessKeyId: process.env.LOS_ACCESS_KEY!,
  secretAccessKey: process.env.LOS_SECREY_KEY!
});


const bucketName = 'profile-photos';




export async function uploadProfileImage(key: string, image: Buffer) {
  await s3.upload({
    Bucket: bucketName,
    Body: image,
    Key: key
  }).promise();

  await setPolicy(key);
}

export async function setPolicy(key: string) {
  await s3.putObjectAcl({
    Bucket: bucketName,
    ACL: 'public-read',
    Key: key
  }).promise();

  await s3.putBucketAcl({
    Bucket: bucketName,
    ACL: 'public-read',
  }).promise();
}
