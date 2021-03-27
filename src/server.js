import { createServer, Model } from "miragejs"

export function makeServer() {
  let server = createServer({
    models: {
      service: Model,
    },

    seeds(server) {
      server.create("service", { id: 1, title: "sitecostructor.io", description: "Sitecostructor Description", promocode: "sitepromocode", activated: false})
      server.create("service", { id: 2, title: "appvision.com", description: "Appvision Description", promocode: "apppromocode", activated: false})
      server.create("service", { id: 3, title: "wordpress.com", description: "Wordpress Description", promocode: "wordpresspromocode", activated: false})
      server.create("service", { id: 4, title: "apple.com", description: "Apple Description", promocode: "applepromocode", activated: false})
      server.create("service", { id: 5, title: "laravel.com", description: "Laravel Description", promocode: "laravelpromocode", activated: false})
      server.create("service", { id: 6, title: "wetransfer.com", description: "Wetranfer Description", promocode: "wetpromocode", activated: false})
      server.create("service", { id: 7, title: "zira.com", description: "Zira Description", promocode: "zirapromocode", activated: false})
      server.create("service", { id: 8, title: "shopify.com", description: "Shopify Description", promocode: "shopifypromocode", activated: false})
      server.create("service", { id: 9, title: "invision.com", description: "Invision Description", promocode: "invisionpromocode", activated: false})
      server.create("service", { id: 10, title: "figma.com", description: "Figma Description", promocode: "figmapromocode", activated: false})
    },

    routes() {
      this.namespace = "api"

      this.get("/services", (schema) => {
        return schema.services.all()
      });

      this.patch("/services/:id", (schema, request) => {
        let newServices = JSON.parse(request.requestBody);
        let id = request.params.id;
        let service = schema.services.find(id);
  
        return service.update(newServices);
      });
    },
  })

  return server
}