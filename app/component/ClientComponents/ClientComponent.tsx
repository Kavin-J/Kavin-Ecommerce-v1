import React from "react";

import Container from "../Container";
import ClientSilders from "./ClientSilders";

export default async function ClientComponent() {
  return (
    <div className="flex h-[320px] w-full flex-col justify-center bg-gradient-to-b from-white to-zinc-50">
      <h1 className="animate-pulse text-center text-2xl font-bold text-text-color md:text-4xl ">
        สินค้า มากมายหลากหลายแบรนด์
      </h1>
      <div className="flex h-44 w-full overflow-hidden ">
        <Container className="h-full w-full" maxWidth="lg">
          <ClientSilders />
        </Container>
      </div>
    </div>
  );
}
