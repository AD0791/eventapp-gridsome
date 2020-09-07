// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

//const nodeExternals = require("webpack-node-externals");
//const config = ('./config.js');
const axios = require("axios");
module.exports = function (api) {
  api.chainWebpack((config, {
    isServer
  }) => {
    if (isServer) {
      config.externals([
        nodeExternals({
          allowlist: [/^vuetify/],
        }),
      ]);
    }
  });

  api.loadSource(async (actions) => {
    // await axios.get("http://localhost:1337/events");
    const {
      data
    } = await axios.get(
      `${process.env.PRODUCTION_URL}/events`
    );
    // graphql layer
    const collection = actions.addCollection({
      typeName: "Event",
      path: "/events/:id",
    });

    for (const event of data) {
      collection.addNode({
        id: event.id,
        path: `/events/${event.id}`,
        title: event.title,
        description: event.description,
        price: event.price,
        date: event.date,
        duration: event.duration,
        category: event.categories[0].id,
        thumbnail: event.images[0].picture.formats.thumbnail.url,
        image: event.images[0].picture.formats.medium.url,
      });
    }
  });

  api.createPages(({
    createPage
  }) => {
    createPage({
      path: "/events/create",
      component: "./src/templates/CreateForm.vue",
    });
  });
};