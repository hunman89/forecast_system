module.exports = {
  client: {
    includes: ["./src/**/*.tsx"],
    tagName: "gql",
    service: {
      name: "forecast-system-backend",
      url: "http://localhost:4000/graphql",
    },
  },
};
