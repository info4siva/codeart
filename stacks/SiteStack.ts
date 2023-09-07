import {AstroSite, StackContext, use} from "sst/constructs";
import {StorageStack} from "./StorageStack";

export function Site({ stack, app }: StackContext) {
    const { bucket } = use(StorageStack);
    const site = new AstroSite(stack, "site", {
        environment: {
            PRODUCT_COLLECTIONS_BUCKET: bucket.bucketName,
            APP_REGION: app.region
        }
    });
    stack.addOutputs({
        url: site.url,
        SiteUrl: site.customDomainUrl || site.url
    });
}
