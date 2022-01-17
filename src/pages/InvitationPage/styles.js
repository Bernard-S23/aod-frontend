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
    width: 200,
  },
  logoDesc: {
    fontSize: 15,
    textAlign: "center",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "50px 0 25px",
  },
  formDesc: {},
  formField: {
    display: "block",
    borderColor: Colors.black1Tint,
    padding: 10,
    width: "90%",
    maxWidth: 600,
  },
  formButton: {
    border: `solid 2px ${Colors.brand.primaryTint}`,
    background: "none",
    padding: "7px 30px",
    margin: 10,
    fontSize: 18,
  },
});
