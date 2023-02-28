const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "Query to get tracks array for the homepage grid"
    tracksForHome: [Track!]!
  }

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    "The track's title"
    title: String!
    "The track's author"
    author: Author!
    "The track's illustration to be displayed(url)."
    thumbnail: String
    "The track's approximate length to complete, in min."
    length: Int
    "Number of modules this track contains"
    modulesCount: Int
  }

  "Author of a track"
  type Author {
    id: ID!
    "Name of author"
    name: String!
    "Illustration of the author(url)"
    photo: String
  }
`;

module.exports = typeDefs;
