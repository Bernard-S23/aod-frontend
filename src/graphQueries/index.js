import moment from "moment";
import { gql } from "@apollo/client";

export const REQUEST_INVITATION_CODE = gql`
  mutation createInviteCodeRequest($email: String!) {
    createInviteCodeRequest(data: { Email: $email }) {
      data {
        id
      }
    }
  }
`;

export const VALIDATE_INVITATION_CODE = gql`
  query getInvitationCode($code: String!) {
    doers(filters: { InvitationCode: { eq: $code } }) {
      data {
        attributes {
          Email
        }
      }
    }
  }
`;

// $userOccationalEmail: Boolean
// $userIntroductoryEmails: Boolean
export const SIGNUP_REQUEST = gql`
  mutation createDoer(
    $userFirstName: String
    $userLastName: String
    $userPhone: Long
  ) {
    createDoer(
      data: {
        FirstName: $userFirstName
        LastName: $userLastName
        Phone: $userPhone
      }
    ) {
      data {
        id
      }
    }
  }
`;
