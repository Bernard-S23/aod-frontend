import { css } from "aphrodite";
import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { AppStyles, Images } from "../../theme";
import styles from "./styles";
import { ROUTES } from "../../constants";

class WelcomePage extends React.Component {
  render() {
    return (
      <div className={css(styles.container)}>
        <p className={css(styles.title)}>Ready to get sh*t done?</p>

        {/* Sub Container */}
        <div className={css(styles.subContainer)}>
          {/* Profie Picture */}
          <div className={css(styles.displayPicture)}>
            <img
              className={css(styles.displayPictureImg)}
              src={Images.displayPicture}
            />
          </div>

          <p className={css(styles.profileName)}>
            Marie{" "}
            <span className={css(styles.profileTitle)}>
              one of your assistants
            </span>
          </p>

          {/* Checklist */}
          <ul className={css(styles.checklistContainer)}>
            <li className={css(styles.checklistItem)}>
              Your first task is for Free
            </li>
            <li className={css(styles.checklistItem)}>
              We'll get started within 24hrs
            </li>
            <li className={css(styles.checklistItem)}>
              We'll ask you to clarify if needed
            </li>
            <li className={css(styles.checklistItem)}>
              Meanwhile you can focus on something else
            </li>
          </ul>
        </div>

        {/* Create Task Button */}
        <button className={css(styles.createTaskButton)}>
          Create Task
          <img
            className={css(styles.createTaskButtonIcon)}
            src={Images.signupIcon}
          />
        </button>
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const actions = {};

export default connect(mapStateToProps, actions)(WelcomePage);
