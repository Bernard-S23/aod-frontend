import React, { useEffect, useState } from "react";
import _ from "lodash";
import { css } from "aphrodite";
import { NavLink, useHistory } from "react-router-dom";
import { useMutation, useQuery, useLazyQuery } from "@apollo/client";
import validator from "validator";
import { useAlert } from "react-alert";
import { AppStyles, Images } from "../../theme";
import styles from "./styles";
import { ROUTES } from "../../constants";
import { SIGNUP_REQUEST } from "../../graphQueries";

export default function SignupPage(props) {
  const history = useHistory();
  const alert = useAlert();

  const [userEmail, setUserEmail] = useState(
    props?.location?.state?.doer?.attributes?.Email
  );
  // Form Values
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userOccationalEmail, setUserOccationalEmail] = useState(false);
  const [userAcceptTNC, setUserAcceptTNC] = useState(false);
  const [userIntroductoryEmails, setUserIntroductoryEmails] = useState(false);
  // Form Errors
  const [userFirstNameError, setUserFirstNameError] = useState("");
  const [userLastNameError, setUserLastNameError] = useState("");
  const [userPhoneError, setUserPhoneError] = useState("");
  const [userOccationalEmailError, setUserOccationalEmailError] = useState("");
  const [userAcceptTNCError, setUserAcceptTNCError] = useState("");
  const [userIntroductoryEmailsError, setUserIntroductoryEmailsError] =
    useState("");

  useEffect(() => {
    const userEmail = props?.location?.state?.doer?.attributes?.Email;
    if (_.isNil(userEmail)) {
      history.replace(ROUTES.HOME);
      return;
    }
    setUserEmail(userEmail);
  }, []);

  const [
    signupRequest,
    { signupRequestData, signupRequestLoading, signupRequestError },
  ] = useMutation(SIGNUP_REQUEST, {
    onCompleted(data) {
      alert.success("Thank-you for applying. We will review your request");
    },
    onError(error) {
      alert.error(error.message);
    },
  });

  const formIsValid = () => {
    let isValid = true;

    if (validator.isAlpha(userFirstName)) {
      setUserFirstNameError("");
    } else {
      setUserFirstNameError("Please enter a valid name");
      isValid = false;
    }

    if (validator.isAlpha(userLastName)) {
      setUserLastNameError("");
    } else {
      setUserLastNameError("Please enter a valid name");
      isValid = false;
    }

    if (validator.isNumeric(userPhone)) {
      setUserPhoneError("");
    } else {
      setUserPhoneError("Please enter a valid phone number");
      isValid = false;
    }

    if (userAcceptTNC) {
      setUserAcceptTNCError("");
    } else {
      setUserAcceptTNCError("Please accept Terms & Conditions");
      isValid = false;
    }

    return isValid;
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (formIsValid()) {
      signupRequest({
        variables: {
          userFirstName,
          userLastName,
          userPhone,
          userOccationalEmail,
          userIntroductoryEmails,
        },
      });
    }
  };

  return (
    <form onSubmit={submitForm} className={css(styles.container)}>
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

      <div className={css(styles.formContainer)}>
        <div className={css(styles.formRow)}>
          <label className={css(styles.formFieldLabel)}>First Name*</label>
          <input
            className={css(styles.formField)}
            type="text"
            value={userFirstName}
            onChange={(e) => setUserFirstName(e.target.value)}
          />
          <span className={css(styles.validationError)}>
            {userFirstNameError}
          </span>
        </div>
        <div className={css(styles.formRow)}>
          <label className={css(styles.formFieldLabel)}>Last Name*</label>
          <input
            className={css(styles.formField)}
            type="text"
            value={userLastName}
            onChange={(e) => setUserLastName(e.target.value)}
          />
          <span className={css(styles.validationError)}>
            {userLastNameError}
          </span>
        </div>
        <div className={css(styles.formRow)}>
          <label className={css(styles.formFieldLabel)}>Email*</label>
          <input
            className={css(styles.formField)}
            type="email"
            value={userEmail}
            disabled
          />
        </div>
        <div className={css(styles.formRow)}>
          <label className={css(styles.formFieldLabel)}>Phone Number*</label>
          <input
            className={css(styles.formField)}
            type="text"
            value={userPhone}
            onChange={(e) => setUserPhone(e.target.value)}
          />
          <span className={css(styles.validationError)}>{userPhoneError}</span>
        </div>
        <label className={css(styles.checkpoints)}>
          <input
            className={css(styles.formChecks)}
            type="checkbox"
            checked={userOccationalEmail}
            onChange={() => setUserOccationalEmail(!userOccationalEmail)}
          />
          I will receive occational e-mail reminders and promotions.
        </label>
        <label className={css(styles.checkpoints)}>
          <input
            className={css(styles.formChecks)}
            type="checkbox"
            checked={userAcceptTNC}
            onChange={() => setUserAcceptTNC(!userAcceptTNC)}
          />
          I understand and accept the&nbsp;
          <a className={css(styles.formFieldLink)} href="#">
            {" "}
            Terms and Conditions
          </a>
        </label>
        <span className={css(styles.validationError)}>
          {userAcceptTNCError}
        </span>
        <label className={css(styles.checkpoints)}>
          <input
            className={css(styles.formChecks)}
            type="checkbox"
            checked={userIntroductoryEmails}
            onChange={() => setUserIntroductoryEmails(!userIntroductoryEmails)}
          />
          I will receive introductory e-mails to learn how to best use Army of
          Doers.
        </label>
      </div>
      <button type="submit" className={css(styles.formSubmit)}>
        Create account
        <img className={css(styles.formSubmitIcon)} src={Images.signupIcon} />
      </button>
    </form>
  );
}
