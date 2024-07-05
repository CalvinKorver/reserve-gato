"use client";
import { useEffect, useState } from "react";

const myState = history.state;//store the state variable outside the component

export default function Result() {
  const [routeState, setRouteState] = useState({});

  useEffect(() => {
    setRouteState(myState);
  }, []);

  return <h1>{routeState.email}</h1>;
}
