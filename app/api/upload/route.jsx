import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

export async function POST(req) {
  // Create a new S3 client with the specified region and credentials
  const mys3client = new S3Client({
    region: "eu-north-1",
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    },
  });

  // Parse the incoming request data as form data
  const formData = await req.formData();
  const links = [];

  // Get the product ID from the form data
  const productId = formData.get("productId");

  // Iterate over each field in the form data
  for (const fileInfo of formData) {
    // Only process fields with the name "file"
    if (fileInfo[0] === "file") {
      const file = fileInfo[1];
      const originalName = file.name;
      // Replace spaces in the file name with underscores
      const sanitizedFileName = originalName.replace(/\s/g, "_");

      // Construct the object key using the product ID, current timestamp, and sanitized file name
      const name =
        "products/" +
        productId +
        "/" +
        Date.now().toString() +
        sanitizedFileName;
      const chunks = [];

      // Read the file data in chunks
      for await (const chunk of file.stream()) {
        chunks.push(chunk);
      }

      // Concatenate all chunks into a single buffer
      const buffer = Buffer.concat(chunks);

      // Upload the file to S3
      await mys3client.send(
        new PutObjectCommand({
          Bucket: "woffe-upload",
          Key: name,
          ACL: "public-read",
          Body: buffer,
          ContentType: file.type,
        })
      );

      // Add the URL of the uploaded file to the links array
      links.push("https://woffe-upload.s3.amazonaws.com/" + name);
    }
  }

  // Return the links of the uploaded files as the response
  return Response.json(links);
}

// export async function POST(req) {
//   const mys3client = new S3Client({
//     region: "eu-north-1",
//     credentials: {
//       accessKeyId: process.env.S3_ACCESS_KEY,
//       secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
//     },
//   });

//   const formData = await req.formData();
//   const links = [];

//   for (const fileInfo of formData) {
//     const file = fileInfo[1];
//     const originalName = file.name;
//     const sanitizedFileName = originalName.replace(/\s/g, "_"); // Replace spaces with underscores

//     const name = Date.now().toString() + sanitizedFileName;
//     const chunks = [];

//     for await (const chunk of file.stream()) {
//       chunks.push(chunk);
//     }

//     const buffer = Buffer.concat(chunks);

//     await mys3client.send(
//       new PutObjectCommand({
//         Bucket: "woffe-upload",
//         Key: name,
//         ACL: "public-read",
//         Body: buffer,
//         ContentType: file.type,
//       })
//     );

//     links.push("https://woffe-upload.s3.amazonaws.com/" + name);
//   }

//   return Response.json(links);
// }
