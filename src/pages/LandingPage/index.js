import { css } from "aphrodite";
import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants";
import { Images } from "../../theme";
import styles from "./styles";

class LandingPage extends React.Component {
  render() {
    return (
      <div className={css(styles.container)}>
        {/* Logo */}
        <div className={css(styles.logoContainer)}>
          <img className={css(styles.logo)} src={Images.logo} />
          <h1 className={css(styles.logoH1)}>Army of Doers</h1>
          <h2 className={css(styles.logoH2)}>Consider it done</h2>
        </div>

        {/* Checkpoints */}
        <div className={css(styles.checkpoints)}>
          <ul className={css(styles.checkpointsUL)}>
            <li className={css(styles.checkpointsLI)}>
              Let go of those boring tasks
            </li>
            <li className={css(styles.checkpointsLI)}>
              Focus on what you enjoy doing
            </li>
            <li className={css(styles.checkpointsLI)}>Get more stuff done</li>
            <li className={css(styles.checkpointsLI)}>Action within 24 hrs</li>
          </ul>
        </div>

        {/* Signup Button */}
        <NavLink to={ROUTES.INVITATION} className={css(styles.signupButton)}>
          Sign up
          <img
            className={css(styles.signupButtonIcon)}
            src={Images.signupIcon}
          />
        </NavLink>
        <span className={css(styles.alreadySigned)}>
          Already signed up?
          <NavLink to={ROUTES.WELCOME} className={css(styles.signIn)}>
            Sign in
          </NavLink>
        </span>
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const actions = {};

export default connect(mapStateToProps, actions)(LandingPage);
