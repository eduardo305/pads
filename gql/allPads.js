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
    $propertyTypes: [String!]
    $price: Int
    $propertySize: Int
    $furnished: Boolean
    $location: String
  ) {
    pads(
      where: {
        type_in: $propertyTypes
        price_lt: $price
        propertySize_lt: $propertySize
        furnished_eq: $furnished
        location_eq: $location
      }
    ) {
      id
      title
      type
      furnished
      propertySize
      price
      coordinates {
        latitude
        longitude
      }
      location
      images {
        id
        previewUrl
        name
        url
        width
        height
        caption
        alternativeText
        ext
        mime
        size
      }
    }
  }
`;
