import gql from "graphql-tag";

export const ALL_PADS = gql`
  query allPads {
    pads {
      id
      title
      lat
      long
      rent
      price
      numOfBeds
      description
      type
    }
  }
`;

export const PADS_BY = gql`
  query padsByType(
    $types: [String!]
    $price: Int
    $propertySize: Int
    $furnished: Boolean
  ) {
    pads(
      where: {
        type_in: $types
        price_lt: $price
        propertySize_lt: $propertySize
        furnished_eq: $furnished
      }
    ) {
      title
      type
      furnished
      propertySize
    }
  }
`;
