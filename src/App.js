import React from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import ClassComponent from "./ClassExample";
import UsingHooks from "./UsingHooks";
import UsingHooksExtended from "./UsingHooksExtended";

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <ClassComponent />
        <Divider />
        {/* <UsingHooks /> */}
        <UsingHooksExtended />
      </Container>
    </React.Fragment>
  );
}
