import {
  S3Client,
  ListObjectsV2Command,
  CopyObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";

export async function POST(req) {
  const jsonBody = await req.json();
  const { tempId, productId, productImages } = jsonBody;
  // console.log("tempId MOVE IMAGE:", tempId);
  // console.log("productId MOVE IMAGE:", productId);
  // console.log("productData MOVE IMAGE:", productImages);

  const s3 = new S3Client({
    region: "eu-north-1",
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    },
  });

  try {
    // List all objects in the temporary folder
    const objects = await s3.send(
      new ListObjectsV2Command({
        Bucket: "woffe-upload",
        Prefix: `products/${tempId}/`,
      })
    );

    const newImageLinks = [];

    // // For each object in the temporary folder
    // for (const object of objects.Contents) {
    //   // Construct the source and destination keys
    //   const sourceKey = object.Key;
    //   const destinationKey = sourceKey.replace(
    //     `products/${tempId}/`,
    //     `products/${productId}/`
    //   );
    // For each image URL in productImages
    for (const imageUrl of productImages) {
      // Extract the key from the image URL
      const sourceKey = imageUrl.replace(
        "https://woffe-upload.s3.amazonaws.com/",
        ""
      );

      // Construct the destination key
      const destinationKey = sourceKey.replace(
        `products/${tempId}/`,
        `products/${productId}/`
      );
      await s3.send(
        new CopyObjectCommand({
          CopySource: `woffe-upload/${sourceKey}`,
          Bucket: "woffe-upload",
          Key: destinationKey,
        })
      );
      // Copy the object to the new folder
      // await s3.send(
      //   new CopyObjectCommand({
      //     CopySource: `woffe-upload/${sourceKey}`,
      //     Bucket: "woffe-upload",
      //     Key: destinationKey,
      //   })
      // );

      newImageLinks.push(
        `https://woffe-upload.s3.amazonaws.com/${destinationKey}`
      );

      // Delete the object from the temporary folder
      await s3.send(
        new DeleteObjectCommand({ Bucket: "woffe-upload", Key: sourceKey })
      );
    }

    return new Response(JSON.stringify({ newImageLinks }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Error moving images" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
