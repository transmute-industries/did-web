import React from "react";
import PropTypes from "prop-types";

import Typography from "@material-ui/core/Typography";

import BasePage from "../BasePage/BasePage";

import Resolver from '../../components/Resolver'

const HomePage = ({ tmui, setTmuiProp }) => (
  <BasePage tmui={tmui} setTmuiProp={setTmuiProp}>

    <Typography variant={'h5'} gutterBottom>
      Transmute DID Web
    </Typography>

    <Typography paragraph>
      DID Web is a lightweight Decentralized Identifier thats easy to use and ideal for online use cases. 
    </Typography>

    <Resolver/>

  </BasePage>
);

HomePage.propTypes = {
  tmui: PropTypes.object,
  setTmuiProp: PropTypes.func
};

export default HomePage;
