import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { css } from "aphrodite/no-important";
import { ROUTES } from "../constants";
import {
  InvitationPage,
  LandingPage,
  SignupPage,
  PageNotFound,
  WelcomePage,
} from "../pages";
import LayoutWrapper from "./LayoutWrapper";
import styles from "./styles";

const NoAuthRoute = ({ ...props }) => {
  return (
    <LayoutWrapper>
      <Route {...props} />
    </LayoutWrapper>
  );
};

class Routers extends React.PureComponent {
  render() {
    const { user } = this.props;
    const repeatedProps = {
      user,
      exact: true,
      forAdminOnly: false,
    };
    return (
      <Router>
        <div className={css(styles.container)}>
          <Switch>
            <NoAuthRoute
              path={ROUTES.HOME}
              component={LandingPage}
              {...repeatedProps}
            />

            <NoAuthRoute
              path={ROUTES.INVITATION}
              component={InvitationPage}
              {...repeatedProps}
            />

            <NoAuthRoute
              path={ROUTES.SIGNUP}
              component={SignupPage}
              {...repeatedProps}
            />

            <NoAuthRoute
              path={ROUTES.WELCOME}
              component={WelcomePage}
              {...repeatedProps}
            />

            {/* Keep this in last always */}
            <NoAuthRoute path={Route.PAGE_NOT_FOUND} component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user,
});

const actions = {};

export default connect(mapStateToProps, actions)(Routers);
