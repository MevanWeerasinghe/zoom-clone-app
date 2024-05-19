import StreamVideoProvider from "@/providers/StreamClientProvider";
import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Eventify",
  description:
    "Eventify is a video conferencing app built with Stream Chat and Stream Video SDKs.",
  icons: {
    icon: "/icons/Logo.png",
  },
};

const Rootlayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default Rootlayout;
