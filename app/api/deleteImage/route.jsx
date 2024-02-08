import {
  S3Client,
  ListObjectsV2Command,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";

export async function DELETE(request) {
  const jsonBody = await request.json();
  const { link, id } = jsonBody;

  // Create the S3 client
  const mys3client = new S3Client({
    region: "eu-north-1",
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    },
  });

  try {
    if (link) {
      // Extract the object key from the link
      const objectKey = link.replace(
        "https://woffe-upload.s3.amazonaws.com/",
        ""
      );

      // Delete the object from the S3 bucket
      await mys3client.send(
        new DeleteObjectCommand({
          Bucket: "woffe-upload",
          Key: objectKey,
        })
      );
    } else if (id) {
      // List all objects in the product's folder
      const objects = await mys3client.send(
        new ListObjectsV2Command({
          Bucket: "woffe-upload",
          Prefix: `products/${id}/`,
        })
      );

      // Delete each object
      for (const object of objects.Contents) {
        await mys3client.send(
          new DeleteObjectCommand({ Bucket: "woffe-upload", Key: object.Key })
        );
      }
    }

    return Response.json({ message: "Images deleted successfully" });
  } catch (error) {
    console.error("Error deleting images:", error);
    return Response.status(500).json({ error: "Error deleting images" });
  }
}

// import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3";

// export async function DELETE(request) {
//   const jsonBody = await request.json();
//   const { link } = jsonBody;

//   // Extract the object key from the link
//   const objectKey = link.replace("https://woffe-upload.s3.amazonaws.com/", "");

//   // Create the S3 client
//   const mys3client = new S3Client({
//     region: "eu-north-1",
//     credentials: {
//       accessKeyId: process.env.S3_ACCESS_KEY,
//       secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
//     },
//   });

//   try {
//     // Delete the object from the S3 bucket
//     await mys3client.send(
//       new DeleteObjectCommand({
//         Bucket: "woffe-upload",
//         Key: objectKey,
//       })
//     );

//     return Response.json({ message: "Image deleted successfully" });
//   } catch (error) {
//     console.error("Error deleting image:", error);
//     return Response.status(500).json({ error: "Error deleting image" });
//   }
// }
