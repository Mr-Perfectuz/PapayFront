import React from "react";
import { Container } from "@mui/material";
import { Route, Switch, useRouteMatch, useLocation } from "react-router-dom";
import VisitOtherPage from "./VisitOtherPage";
import VisitMyPage from "./VisitMyPage";
import "../../../css/my_page.css";
import { verifierMemberData } from "../../apiServices/vertify";

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function MemberPage(props: any) {
  let member = useRouteMatch();

  const query = useQuery();
  let chosen_mb_id: string | null = query.get("mb_id") ?? null;
  let chosen_art_id: string | null = query.get("art_id") ?? null;
  console.log("Member id:::", chosen_mb_id);

  return (
    <Switch>
      <Route path={`${member.path}/other`}>
        <VisitOtherPage
          verifierMemberData={verifierMemberData}
          chosen_mb_id={chosen_mb_id}
          chosen_art_id={chosen_art_id}
        />
      </Route>
      <Route path={`${member.path}`}>
        <VisitMyPage
          verifierMemberData={verifierMemberData}
          chosen_mb_id={chosen_mb_id}
          chosen_art_id={chosen_art_id}
        />
      </Route>
      <Route path={`${member.path}`}>{/* <AllRestaurants /> */}</Route>
    </Switch>
  );
}
