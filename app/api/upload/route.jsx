import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

export async function POST(req) {
  //define the client
  const mys3client = new S3Client({
    region: "eu-north-1",
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    },
  });

  const formData = await req.formData();
  const links = [];
  for (const fileInfo of formData) {
    const file = fileInfo[1];
    const name = Date.now().toString() + file.name;
    const chunks = [];
    for await (const chunk of file.stream()) {
      chunks.push(chunk);
    }
    const buffer = Buffer.concat(chunks);

    await mys3client.send(
      new PutObjectCommand({
        Bucket: "woffe-upload",
        Key: name,
        ACL: "public-read",
        Body: buffer,
        ContentType: file.type,
      })
    );
    links.push("https://woffe-upload.s3.amazonaws.com/" + name);
  }
  return Response.json(links);
}
