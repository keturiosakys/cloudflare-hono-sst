/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "cloudflare-hono-sst",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "cloudflare",
    };
  },
  async run() {
    const hono = new sst.cloudflare.Worker("Hono", {
      url: true,
      handler: "src/index.ts",
    });

    return {
      api: hono.url,
    };
  }
});
