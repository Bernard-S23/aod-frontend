// @flow
import { StyleSheet } from "aphrodite";
import { Colors, Images } from "../../theme";

export default StyleSheet.create({
  container: {},

  title: {
    color: Colors.black1,
    fontSize: 22,
    textAlign: "center",
    margin: "50px 0 20px",
  },

  subContainer: {
    background: Colors.grey2,
    marginTop: 130,
    paddingBottom: 50,
  },
  displayPicture: {
    display: "block",
    margin: "auto",
    textAlign: "center",
  },
  displayPictureImg: {
    width: 200,
    height: 200,
    marginTop: -100,
    objectFit: "cover",
  },
  profileName: {
    fontSize: 15,
    color: Colors.black1,
    textAlign: "center",
    marginTop: 10,
  },
  profileTitle: {
    fontSize: 14,
    color: Colors.grey,
    display: "block",
  },
  checklistContainer: {
    margin: "30px auto",
    padding: 0,
    width: "90%",
    maxWidth: 600,
  },
  checklistItem: {
    listStyle: "none",
    margin: "10px 0",
    padding: "0 0 0 35px",
    fontSize: 15,
    color: Colors.grey,
    background: `url(${Images.check}) no-repeat left center`,
    backgroundSize: 20,
  },

  createTaskButton: {
    display: "block",
    background: Colors.brand.primary,
    padding: "30px 10px",
    border: "none",
    color: Colors.white,
    width: "100%",
    fontSize: 21,
  },
  createTaskButtonIcon: {
    marginLeft: 15,
  },
});
