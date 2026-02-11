"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type EventDetails = {
  name: string;
  posterUrl: string | null;
  posterSize: { height: number; width: number };
  description: string;
  whatsappUrl: string | null;
  websiteUrl: string | null;
  registrationUrl: string | null;
};

const EVENTS: EventDetails[] = [
  {
    name: "Mad House",
    posterUrl: "/vibrance/madhouse.jpeg",
    posterSize: { height: 543, width: 384 },
    description: `MADHOUSE is a fast-paced team event full of chaos, twists, and intense mini-challenges. Test your squad’s speed, trust, and adaptability across 4 unpredictable rounds!

🎯 What you’ll face:
* Mystery box surprises
* Blindfold & trust trials
* Speed and balance challenges
* Twisted rules and sudden tasks

📅 20th February, 2026 (Friday)
⏰ 8 AM – 3 PM
📍 Kasturba Hall, VIT Chennai
👥 2–4 members per team
💰 ₹50 per person

📞 For queries, contact:
* Prasanna – 9790970726
* Raghvendra – 9789889768
* Ilangkumaran – 8668180796
`,
    whatsappUrl: "https://chat.whatsapp.com/BLQgh9z47SQ1UEO4J03b9R?mode=gi_t",
    websiteUrl: null,
    registrationUrl:
      "https://chennaievents.vit.ac.in/vitchennai_vibrance/eventPreview",
  },
  {
    name: "Midnight Protocol",
    posterUrl: "/vibrance/midnight-protocol.jpeg",
    posterSize: { height: 543, width: 384 },
    description: `Investigators, assemble! A ₹5M Quantum Encoder Chip is stolen and “MIDNIGHT PROTOCOL” is active.
Can your squad solve the mystery before time runs out? 🕵️‍♂️

🔍 What you’ll do:
* Solve clue-based stations
* Decode evidence
* Eliminate suspects
* Face interrogation rounds

📅 18th February, 2026
🕘 9:00 AM – 2:00 PM
📍 AB3-601, VIT Chennai
👥 2–4 members per team
💸 ₹50 per person

📞 For queries:
* Adithya Aravind – 7418560907
* Vishwa – 8939132364
* Ganesh – 9342034315
`,
    whatsappUrl: "https://chat.whatsapp.com/BlXYxBXXRfDBcGoREHUPhg?mode=gi_t",
    websiteUrl: null,
    registrationUrl:
      "https://chennaievents.vit.ac.in/vitchennai_vibrance/eventPreview",
  },
  {
    name: "Playverse",
    posterUrl: "/vibrance/playverse.jpeg",
    posterSize: { height: 544, width: 384 },
    description: `PLAYVERSE is a short and exciting team event with multiple fun mini-games. Each round will test your speed, quick thinking, and teamwork through surprise challenges like reaction tasks and blindfold games.
Come with your squad and enjoy a competitive, high-energy experience!

👥 Team Size: 2–4 members
📅 Date: 20 February 2026
⏰ Time: 11:00 AM – 2:00 PM
📍 Venue: AB3-001, VIT Chennai
💸 Entry Fee: ₹50 per person

📞 For queries:
* Srinidhi – 7904234261
* Rishika – 9042046930`,
    whatsappUrl: "https://chat.whatsapp.com/LLIxnNkkVMl8SyXpEoPeKR?mode=gi_t",
    websiteUrl: null,
    registrationUrl:
      "https://chennaievents.vit.ac.in/vitchennai_vibrance/eventPreview",
  },
];

const Page: React.FC = () => {
  return (
    <div className="min-h-dvh p-8">
      <div className="relative container mx-auto md:px-8">
        <h1 className="text-4xl font-bold text-white text-center mb-16">
          TechnoVIT Events
        </h1>
        <div className="grid grid-cols-[1px_1fr] md:grid-cols-[1fr_1px_1fr] gap-y-[-1px]">
          <br />
          {/* Vertical white line */}
          <div className="md:col-start-2 row-start-1 row-[span_100_/_span_100] bg-white" />

          {/* Starting horizontal line and dot for right side */}
          <div className="relative flex flex-col items-center">
            <div className="bottom-0 absolute w-[110%] h-px bg-white" />
            <div className="absolute size-4 rounded-full bottom-[-0.5rem] left-[-0.5rem] bg-white" />
          </div>

          {/* Starting horizontal line and dot for left side */}
          <div className="relative mt-96 hidden md:flex flex-col items-center">
            <div className="bottom-0 absolute w-[110%] h-px bg-white" />
            <div className="absolute size-4 rounded-full bottom-[-0.5rem] right-[-0.5rem] bg-white" />
          </div>
          {EVENTS.map(
            (
              {
                name,
                posterUrl,
                posterSize,
                description,
                whatsappUrl,
                websiteUrl,
                registrationUrl,
              },
              i,
            ) => {
              return (
                <div
                  key={name}
                  className="relative flex flex-col items-center justify-center row-span-2 p-8 md:p-12"
                >
                  <Event
                    name={name}
                    posterUrl={posterUrl}
                    posterSize={posterSize}
                    description={description}
                    whatsappUrl={whatsappUrl}
                    websiteUrl={websiteUrl}
                    registrationUrl={registrationUrl}
                  />
                  {/* Bottom horizontal line and dot */}
                  <div className="bottom-0 absolute w-[110%] h-px bg-white" />
                  <div
                    className={cn(
                      "absolute size-4 rounded-full bottom-[-0.5rem] left-[-0.5rem] bg-white",
                      i & 1
                        ? "md:right-[-0.5rem] left-[-0.5rem] md:left-auto"
                        : "md:left-[-0.5rem]",
                    )}
                  />
                </div>
              );
            },
          )}
          <div className="h-[36rem] hidden md:block" />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Page;

type EventProps = EventDetails;

const Event: React.FC<EventProps> = ({
  name,
  posterUrl,
  posterSize,
  description,
  whatsappUrl,
  websiteUrl,
  registrationUrl,
}) => {
  return (
    <div className="flex flex-col items-center">
      {posterUrl === null ? (
        <div className="w-full max-w-80 aspect-[9/12] flex items-center justify-center bg-black/5 backdrop-blur-sm mb-8 outline outline-white outline-[1px]">
          <p className="text-white text-2xl font-bold">Comming Soon!</p>
        </div>
      ) : (
        <Image
          alt={`${name} poster`}
          src={posterUrl}
          width={posterSize.width}
          height={posterSize.height}
          className="h-auto w-full max-w-80 mb-8"
        />
      )}
      <p className="text-white mb-6 md:mx-8">
        {description.split("\n").map((part, i) => {
          return (
            <React.Fragment key={i}>
              {part}
              <br />
            </React.Fragment>
          );
        })}
      </p>
      <div className="w-full flex flex-col md:flex-row justify-end gap-4">
        {whatsappUrl === null || <Button href={whatsappUrl}>Whatsapp</Button>}
        {websiteUrl === null || <Button href={websiteUrl}>More Info</Button>}
        {registrationUrl === null || (
          <Button href={registrationUrl}>Register</Button>
        )}
      </div>
    </div>
  );
};

type ButtonProps = { children: string; href: string };

const Button: React.FC<ButtonProps> = ({ children, href }) => {
  return (
    <Link
      href={href}
      className="flex flex-row gap-2 items-center text-white underline underline-offset-4"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
      >
        <path
          d="M1.33333 0C0.604625 0 0 0.604625 0 1.33333V10.6667C0 11.3954 0.604625 12 1.33333 12H10.6667C11.3954 12 12 11.3954 12 10.6667V6H10.6667V10.6667H1.33333V1.33333H6V0H1.33333ZM7.33333 0V1.33333H9.72396L3.52865 7.52865L4.47135 8.47135L10.6667 2.27604V4.66667H12V0H7.33333Z"
          fill="white"
        />
      </svg>
      <span>{children}</span>
    </Link>
  );
};
