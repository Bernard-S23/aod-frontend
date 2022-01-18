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
        id
        attributes {
          Email
          SignupCompleted
        }
      }
    }
  }
`;

export const SIGNUP_REQUEST = gql`
  mutation updateDoer(
    $userID: ID!
    $userFirstName: String
    $userLastName: String
    $userPhone: Long
    $userOccationalEmail: Boolean
    $userIntroductoryEmails: Boolean
  ) {
    updateDoer(
      id: $userID
      data: {
        FirstName: $userFirstName
        LastName: $userLastName
        Phone: $userPhone
        ReceiveOccasionalEmail: $userOccationalEmail
        ReceiveIntroductoryEmails: $userIntroductoryEmails
        SignupCompleted: true
      }
    ) {
      data {
        id
      }
    }
  }
`;
