"use client";

import { useGetCalls } from "@/hooks/useGetCalls";
import { Call, CallRecording } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import MeetingCard from "./MeetingCard";
import Loader from "./Loader";
import { useToast } from "./ui/use-toast";

const Calllist = ({ type }: { type: "upcoming" | "ended" | "recording" }) => {
  const { upcomingCalls, endedCalls, callRecordings, isLoading } =
    useGetCalls();
  const router = useRouter();
  const [recordings, setRecordings] = useState<CallRecording[]>([]);
  const { toast } = useToast();

  const getCalls = () => {
    switch (type) {
      case "upcoming":
        return upcomingCalls;
      case "ended":
        return endedCalls;
      case "recording":
        return recordings;
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

  // const callData = await Promise.all(callRecordings.map(async (meeting) => {
  // return await meeting.queryRecordings();

  useEffect(() => {
    const fetchRecordings = async () => {
      try {
        const callData = await Promise.all(
          callRecordings.map((meeting) => {
            return meeting.queryRecordings();
          })
        );
        const recordingss = callData
          .filter((call) => call.recordings.length > 0)
          .flatMap((call) => call.recordings);

        setRecordings(recordingss);
      } catch (error) {
        toast({
          title: "try again later",
        });
      }
    };

    if (type === "recording") {
      fetchRecordings();
    }
  }, [type, callRecordings]);

  const calls = getCalls();
  const noCallsMessage = getNoCallsMessages();

  if (isLoading) return <Loader />;

  return (
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
      {calls && calls.length > 0 ? (
        calls.map((meeting: Call | CallRecording) => {
          return (
            <MeetingCard
              key={(meeting as Call).id}
              title={
                (meeting as Call).state?.custom.description.substring(0, 25) ||
                (meeting as CallRecording).filename.substring(0, 25) ||
                "No description"
              }
              date={
                (meeting as Call).state?.startsAt?.toLocaleString() ||
                (meeting as CallRecording).start_time.toLocaleString()
              }
              icon={
                type === "ended"
                  ? "/icons/previous.svg"
                  : type === "upcoming"
                  ? "/icons/upcoming.svg"
                  : "/icons/recordings.svg"
              }
              isPreviousMeeting={type === "ended"}
              buttonIcon1={type === "recording" ? "/icons/play.svg" : undefined}
              buttonText={type === "recording" ? "Play" : "Start"}
              handleClick={
                type === "recording"
                  ? () => {
                      router.push(`${(meeting as CallRecording).url}`);
                    }
                  : () => {
                      router.push(`/meeting/${(meeting as Call).id}`);
                    }
              }
              link={
                type === "recording"
                  ? (meeting as CallRecording).url
                  : `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${
                      (meeting as Call).id
                    }`
              }
            />
          );
        })
      ) : (
        <p>{noCallsMessage}</p>
      )}
    </div>
  );
};

export default Calllist;
