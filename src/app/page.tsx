"use client";

import { CreateCompanion } from "@/sendwich-client/companion";
import { sendwichClient } from "@/sendwich-client/sendwich-client";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    sendwichClient.send(new CreateCompanion());
    sendwichClient.send(new CreateCompanion());
    sendwichClient.send(new CreateCompanion());
  }, []);
  return <div>Setup</div>;
}
