import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import d1NextTagCache from "@opennextjs/cloudflare/overrides/tag-cache/d1-next-tag-cache";

export default defineCloudflareConfig({
  // Uncomment to enable R2 cache,
  // It should be imported as:
  // `import r2IncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache";`
  // See https://opennext.js.org/cloudflare/caching for more details
  // incrementalCache: r2IncrementalCache,
  // This is only required if you use On-demand revalidation
  tagCache: d1NextTagCache,
  //If you don't use `revalidatePath`, you can also filter internal soft tags using the `softTagFilter`
  // tagCache: withFilter({
  //   tagCache: d1NextTagCache,
  //   filterFn: softTagFilter,
  // }),
  // Disable this if you want to use PPR
  enableCacheInterception: true,
});
