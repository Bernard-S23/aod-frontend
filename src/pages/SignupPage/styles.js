// @flow
import { StyleSheet } from "aphrodite";
import { Colors, Images } from "../../theme";

export default StyleSheet.create({
  container: {},
  cancelButtonContainer: {
    textAlign: "right",
    padding: 20,
    display: "flex",
    justifyContent: "flex-end",
  },
  cancelButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    textDecoration: "none",
    color: Colors.black1,
  },
  cancelButtonIcon: {
    fontSize: "1.5em",
    marginLeft: 10,
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  logo: {
    width: 70,
  },
  formContainer: {
    width: "90%",
    maxWidth: 600,
    margin: "25px auto 0",
  },
  formRow: {
    margin: "20px 0",
  },
  formFieldLabel: {
    display: "block",
    color: Colors.grey,
    fontSize: 12,
    margin: 0,
  },
  formField: {
    border: `solid 2px ${Colors.black1Tint}`,
    margin: "5px 0",
    width: "100%",
    padding: "20px 10px",
  },
  checkpoints: {
    color: Colors.black1,
    fontSize: 12,
    display: "flex",
    alignItems: "center",
  },
  formChecks: {
    marginRight: 10,
  },
  formFieldLink: {
    color: "inherit",
    textDecoration: "underline",
  },
  formSubmit: {
    display: "block",
    background: Colors.brand.primary,
    padding: "30px 10px",
    border: "none",
    color: Colors.white,
    width: "100%",
    fontSize: 21,
    marginTop: 40,
  },
  formSubmitIcon: {
    marginLeft: 15,
  },
});
