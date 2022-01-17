import { css } from "aphrodite";
import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { AppStyles, Images } from "../../theme";
import styles from "./styles";
import { ROUTES } from "../../constants";

class InvitationPage extends React.Component {
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

        <p className={css(styles.logoDesc)}>We are in Invite Only.</p>

        {/* Invitation Code */}
        <div className={css(styles.formContainer)}>
          <p className={css(styles.formDesc)}>Have a code? Skip the line.</p>
          <input type="text" className={css(styles.formField)} />
          <button className={css(styles.formButton)}>
            I am a selected few
          </button>
        </div>

        {/* Get Invitation */}
        <div className={css(styles.formContainer)}>
          <p className={css(styles.formDesc)}>
            Need an invitation? Please stand in line.
          </p>
          <input type="text" className={css(styles.formField)} />
          <button className={css(styles.formButton)}>Give me a chance</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const actions = {};

export default connect(mapStateToProps, actions)(InvitationPage);
