// @flow
import { StyleSheet } from "aphrodite";
import { Colors, Images } from "../../theme";

export default StyleSheet.create({
  container: {
    backgroundImage: `url(${Images.welcomeBG})`,
    backgroundSize: "cover",
    backgroundPosition: "right center",
    minHeight: "100vh",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  logo: {
    width: 100,
  },
  logoH1: {
    fontSize: 25,
  },
  logoH2: {
    fontSize: 15,
  },
  checkpoints: {},
  checkpointsUL: {
    marginTop: 80,
    paddingLeft: 20,
  },
  checkpointsLI: {
    fontSize: 12,
    color: Colors.grey,
    listStyle: "none",
    margin: "10px 0",
    backgroundImage: `url(${Images.welcomeListStyleIcon})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left",
    padding: "10px 0 10px 40px",
    margin: "10px 0",
  },
  signupButton: {
    background: Colors.brand.primary,
    padding: "40px 0",
    display: "block",
    border: "none",
    width: "100%",
    fontSize: 21,
    color: Colors.white,
    margin: "50px 0 10px",
    textAlign: "center",
    textDecoration: "none",
  },
  signupButtonIcon: {
    margin: "0 10px",
  },
  alreadySigned: {
    color: Colors.black1,
    padding: 20,
    display: "block",
  },
  signIn: {
    color: Colors.black1,
    display: "block",
    textDecoration: "underline",
  },
});
