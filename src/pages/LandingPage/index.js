import React from "react";
import { connect } from "react-redux";
import { WebHeader, WebFooter } from "../../components";

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        sds
        <WebHeader />
        <WebFooter />
        {/* <WebHeader />
        <WebHeroSec />
        <WebStatisticsSec />
        <WebProductDetailSec />
        <WebWhyKiffgo />
        <WebContactSec />
        <WebFooter /> */}
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const actions = {};

export default connect(mapStateToProps, actions)(LandingPage);
