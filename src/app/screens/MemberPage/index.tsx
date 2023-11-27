import React from "react";
import { Container } from "@mui/material";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import VisitOtherPage from "./VisitOtherPage";
import VisitMyPage from "./VisitMyPage";
import "../../../css/my_page.css";

export default function MemberPage() {
  let member = useRouteMatch();

  return (
    <Switch>
      <Route path={`${member.path}/other`}>
        <VisitOtherPage />
      </Route>
      <Route path={`${member.path}`}>
        <VisitMyPage />
      </Route>
      <Route path={`${member.path}`}>{/* <AllRestaurants /> */}</Route>
    </Switch>
  );
}
