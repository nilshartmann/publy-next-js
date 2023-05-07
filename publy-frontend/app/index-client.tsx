"use client";

import React, { useEffect, useState } from "react";
import App from "@/app/App";

export default function IndexClient() {
  const [rendered, setRendered] = useState(false);

  useEffect( () => {
    setRendered(true);
  }, [])

  return rendered ? <App /> : null

}

