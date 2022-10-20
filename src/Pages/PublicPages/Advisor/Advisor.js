import React from "react";
import { useDispatch } from "react-redux";
import NavScrollExample from "../HeaderAdmin/HeaderAdmin";
import HeaderAdmin from "../HeaderAdmin/HeaderAdmin";
import TabswitchAdvisor from "./TabswitchAdvisor/TabswitchAdvisor.tsx";

function Advisor() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("heloooooo");
    // dispatch(getAdviserList());
  }, []);
  return (
    <div className="col-sm-12   pl-0 pr-0">
      <NavScrollExample />
      <TabswitchAdvisor />
    </div>
  );
}

export default Advisor;
