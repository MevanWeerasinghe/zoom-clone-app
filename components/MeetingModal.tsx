import React, { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface MeetingModalPops {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  style?: string;
  children?: ReactNode;
  buttonText?: string;
  handleClick?: () => void;
  image?: string;
  buttonIcon?: string;
}

const MeetingModal = ({
  isOpen,
  onClose,
  title,
  style,
  children,
  buttonText,
  handleClick,
  image,
  buttonIcon,
}: MeetingModalPops) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent className="flex w-full max-w-[520px] flex-col border-none gap-6 bg-dark-1 text-white px-6 py-8">
        <div className="flex flex-col gap-6">
          {image && (
            <div className="flex justify-center">
              <Image src={image} alt={title} width={68} height={68} />
            </div>
          )}
          <h1 className={cn("text-3xl font-bold leading-[42px]", style)}>
            {title}
          </h1>
          {children}
          <Button
            onClick={handleClick}
            className="bg-blue-1 focus-visible:ring-0 focus-visible:ring-offset-0 "
          >
            {buttonIcon && (
              <Image src={buttonIcon} alt={title} width={13} height={13} />
            )}{" "}
            &nbsp;
            {buttonText || "Schedule Meeting"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingModal;
