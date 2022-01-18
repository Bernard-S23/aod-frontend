import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { css } from "aphrodite/no-important";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import { GRAPHQL_URI, ROUTES } from "../constants";
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

const httpLink = createHttpLink({
  uri: GRAPHQL_URI,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("jwt");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      // authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
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
        <ApolloProvider client={client}>
          <AlertProvider template={AlertTemplate} {...options}>
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
                <NoAuthRoute
                  path={Route.PAGE_NOT_FOUND}
                  component={PageNotFound}
                />
              </Switch>
            </div>
          </AlertProvider>
        </ApolloProvider>
      </Router>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user,
});

const actions = {};

export default connect(mapStateToProps, actions)(Routers);
