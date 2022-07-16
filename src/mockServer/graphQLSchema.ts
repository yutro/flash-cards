export const graphQLSchema = `
  input CardsQueryInput {
    ids: [ID!]
  }

  type Card {
    id: ID!
    content: [String!]!
    comments: [Comment!]!
  }

  type Comment {
    id: ID!
    content: String!
    card: Card!
  }

  type Query {
    cards(input: CardsQueryInput): [Card!]!
  }
`;
