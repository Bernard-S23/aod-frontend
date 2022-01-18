import { css } from "aphrodite";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import { useMutation, useQuery, useLazyQuery } from "@apollo/client";
import validator from "validator";
import { useAlert } from "react-alert";
import { AppStyles, Images } from "../../theme";
import styles from "./styles";
import { ROUTES } from "../../constants";
import {
  REQUEST_INVITATION_CODE,
  VALIDATE_INVITATION_CODE,
} from "../../graphQueries";

export default function InvitationPage(props) {
  const alert = useAlert();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [invitationCode, setInvitationCode] = useState("");

  const [
    requestInvitationCode,
    { codeRequestData, codeRequestLoading, codeRequestError },
  ] = useMutation(REQUEST_INVITATION_CODE, {
    onCompleted({ login }) {
      setEmail("");
      alert.success("Thank-you for applying. We will review your request");
    },
    onError(error) {
      alert.error(
        error.message === "This attribute must be unique"
          ? "An invitation to this email has been already sent."
          : error.message
      );
    },
  });

  const [
    validateInvitationCode,
    {
      validateInvitationCodeLoading,
      validateInvitationCodeError,
      validateInvitationCodeData,
    },
  ] = useLazyQuery(VALIDATE_INVITATION_CODE, {
    onCompleted({ doers }) {
      if (doers.data.length > 0) {
        if (doers.data[0].attributes.SignupCompleted) {
          alert.error("This token has been used already");
          return;
        }
        history.push({
          pathname: ROUTES.SIGNUP,
          state: { doer: doers.data[0] },
        });
      } else {
        alert.error("This is not a valid token");
      }
    },
    onError(error) {
      alert.error(error.message);
    },
  });

  const submitEmail = (e) => {
    e.preventDefault();

    if (validator.isEmail(email)) {
      requestInvitationCode({
        variables: {
          email,
        },
      });
    } else {
      alert.error("Please enter a valid email");
    }
  };

  const submitInvitationCode = (e) => {
    e.preventDefault();

    if (!validator.isEmpty(invitationCode)) {
      validateInvitationCode({ variables: { code: invitationCode } });
    } else {
      alert.error("Please enter an Invitation Code");
    }
  };

  return (
    <div className={css(styles.container)}>
      {/* Cancel Container */}
      <div className={css(styles.cancelButtonContainer)}>
        <NavLink to={ROUTES.HOME} className={css(styles.cancelButton)}>
          Cancel
          <span className={css(styles.cancelButtonIcon)}> &#10005;</span>
        </NavLink>
      </div>

      {/* Logo */}
      <div className={css(styles.logoContainer)}>
        <img className={css(styles.logo)} src={Images.logo} />
      </div>

      <p className={css(styles.logoDesc)}>We are in Invite Only.</p>

      {/* Invitation Code */}
      <form
        onSubmit={submitInvitationCode}
        className={css(styles.formContainer)}
      >
        <p className={css(styles.formDesc)}>Have a code? Skip the line.</p>
        <input
          type="text"
          value={invitationCode}
          onChange={(e) => setInvitationCode(e.target.value)}
          className={css(styles.formField)}
        />
        <button type="submit" className={css(styles.formButton)}>
          I am a selected few
        </button>
      </form>

      {/* Get Invitation */}
      <form onSubmit={submitEmail} className={css(styles.formContainer)}>
        <p className={css(styles.formDesc)}>
          Need an invitation? Please stand in line.
        </p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={css(styles.formField)}
        />
        <button type="submit" className={css(styles.formButton)}>
          Give me a chance
        </button>
      </form>
    </div>
  );
}
