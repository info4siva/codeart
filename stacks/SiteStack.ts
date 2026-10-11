// Ion: `sst` is a global provided by the SST CLI across sst.config.ts and
// every file it imports — no import needed.
export function SiteStack({
  bucket,
  table,
}: {
  bucket: sst.aws.Bucket;
  table: sst.aws.Dynamo;
}) {
  const site = new sst.aws.Astro("Site", {
    link: [bucket, table],
  });

  return { site };
}
