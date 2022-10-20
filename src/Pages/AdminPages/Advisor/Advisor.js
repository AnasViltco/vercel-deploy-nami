import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  adviserStatus,
  deleteAdviser,
  getAdviserList,
} from "../../../Store/Adviser/actions";
import NavScrollExample from "../HeaderAdmin/HeaderAdmin";
import HeaderAdmin from "../HeaderAdmin/HeaderAdmin";
import TabswitchAdvisor from "./TabswitchAdvisor/TabswitchAdvisor.js";

function Advisor() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("heloooooo");
    dispatch(getAdviserList());
    dispatch(deleteAdviser(2));
    dispatch(adviserStatus(2));
  }, []);
  return (
    <div className="col-sm-12 pl-0 pr-0">
      <NavScrollExample />
      <TabswitchAdvisor />
    </div>
  );
}

export default Advisor;
