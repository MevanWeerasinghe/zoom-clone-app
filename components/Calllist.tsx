"use client";

import { useGetCalls } from "@/hooks/useGetCalls";
import { Call, CallRecording } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import MeetingCard from "./MeetingCard";

const Calllist = ({ type }: { type: "upcoming" | "ended" | "recording" }) => {
  const { upcomingCalls, endedCalls, callRecordings, isLoading } =
    useGetCalls();
  const router = useRouter();
  const [recording, setRecording] = useState<CallRecording[]>([]);

  const getCalls = () => {
    switch (type) {
      case "upcoming":
        return upcomingCalls;
      case "ended":
        return endedCalls;
      case "recording":
        return callRecordings;
      default:
        return [];
    }
  };

  const getNoCallsMessages = () => {
    switch (type) {
      case "upcoming":
        return "No upcoming calls";
      case "ended":
        return "No ended calls";
      case "recording":
        return "No recordings";
      default:
        return "";
    }
  };

  const calls = getCalls();
  const noCallsMessage = getNoCallsMessages();

  return (
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
      {calls && calls.length > 0 ? (
        calls.map((meeting: Call | CallRecording) => {
          return <div></div>; //<MeetingCard />;
        })
      ) : (
        <p>{noCallsMessage}</p>
      )}
    </div>
  );
};

export default Calllist;
