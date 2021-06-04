import {gql} from '@apollo/client'


export const GET_PRODUCTS = gql`
query GetProducts{
  category {
    name
    products {
      name
      inStock
      gallery
      description
      category
      attributes {
        id
        name
        type
        items {
          displayValue
          value
          id
        }
      }
  		prices {
        currency
        amount
      }
    }
  }
}

`



export const GET_CURRENCIES = gql`
  query GetCurrencies {
    currencies
  }
`