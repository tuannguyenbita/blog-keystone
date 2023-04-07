import { config } from "@keystone-6/core";
import { lists } from "./schema";
import { withAuth, session } from "./auth";

const baseUrl = "http://localhost:3000";
export default withAuth(
  config({
    db: {
      provider: "sqlite",
      url: "file:./keystone.db",
    },
    lists,
    session,
    storage: {
      my_local_images: {
        kind: "local",
        type: "image",
        generateUrl: (path) => `${baseUrl}/images${path}`,
        serverRoute: {
          path: "/images",
        },
        storagePath: "public/images",
      },
    },
  })
);
