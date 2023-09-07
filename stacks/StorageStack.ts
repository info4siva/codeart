import {Bucket, StackContext, Table} from "sst/constructs";
export function StorageStack({ stack }: StackContext) { // Crea
    const bucket = new Bucket(stack, "codeart-product-collections", {
        cors: [
            {
                allowedOrigins: ["*"],
                allowedHeaders: ["*"],
                allowedMethods: ["GET", "PUT", "POST", "DELETE", "HEAD"],
            }
        ]
    });
    const table = new Table(stack, "ProductMeta", {
        fields: {
            productId: "string",
            productImg: "string",
        },
        primaryIndex: { partitionKey: "productId"}, });
    return {
        bucket,
        table,
    };
}
