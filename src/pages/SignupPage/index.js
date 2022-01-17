import { css } from "aphrodite";
import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { AppStyles, Images } from "../../theme";
import styles from "./styles";
import { ROUTES } from "../../constants";

class SignupPage extends React.Component {
  render() {
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

        <div className={css(styles.formContainer)}>
          <div className={css(styles.formRow)}>
            <label className={css(styles.formFieldLabel)}>First Name*</label>
            <input className={css(styles.formField)} type="text" />
          </div>
          <div className={css(styles.formRow)}>
            <label className={css(styles.formFieldLabel)}>Last Name*</label>
            <input className={css(styles.formField)} type="text" />
          </div>
          <div className={css(styles.formRow)}>
            <label className={css(styles.formFieldLabel)}>Email*</label>
            <input className={css(styles.formField)} type="text" />
          </div>
          <div className={css(styles.formRow)}>
            <label className={css(styles.formFieldLabel)}>Phone Number*</label>
            <input className={css(styles.formField)} type="text" />
          </div>
          <label className={css(styles.checkpoints)}>
            <input className={css(styles.formChecks)} type="checkbox" />I will
            receive occational e-mail reminders and promotions.
          </label>
          <label className={css(styles.checkpoints)}>
            <input className={css(styles.formChecks)} type="checkbox" />I
            understand and accept the&nbsp;
            <a className={css(styles.formFieldLink)} href="#">
              {" "}
              Terms and Conditions
            </a>
          </label>
          <label className={css(styles.checkpoints)}>
            <input className={css(styles.formChecks)} type="checkbox" />I will
            receive introductory e-mails to learn how to best use Army of Doers.
          </label>
        </div>
        <button className={css(styles.formSubmit)}>
          Create account
          <img className={css(styles.formSubmitIcon)} src={Images.signupIcon} />
        </button>
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const actions = {};

export default connect(mapStateToProps, actions)(SignupPage);
