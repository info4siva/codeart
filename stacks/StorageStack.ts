// Ion: `sst` is a global provided by the SST CLI across sst.config.ts and
// every file it imports — no import needed.
export function StorageStack() {
  const bucket = new sst.aws.Bucket("codeart-product-collections", {
    cors: {
      allowOrigins: ["*"],
      allowHeaders: ["*"],
      allowMethods: ["GET", "PUT", "POST", "DELETE", "HEAD"],
    },
  });

  const table = new sst.aws.Dynamo("ProductMeta", {
    fields: {
      productId: "string",
      productImg: "string",
    },
    primaryIndex: { hashKey: "productId" },
  });

  return { bucket, table };
}
