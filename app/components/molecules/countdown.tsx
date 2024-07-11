'use client'


import Link from "next/link"
import Image from "next/image"
import image from "@/public/unilag-logo.svg"
import image1 from "@/public/2.png"
import image2 from "@/public/3.png"
import { useEffect, useState } from "react"
import { count } from "console"


export default function Countdown() {

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set the date we're counting down to
    const countDownDate = new Date("July 20, 2024 00:00:00").getTime();

    // Update the countdown every second
    const interval = setInterval(() => {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the countdown date
      const distance = countDownDate - now;

      // Calculations for days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Update the countdown state
      setCountdown({ days, hours, minutes, seconds });

      // If the countdown is over, clearInterval
      if (distance < 0) {
        clearInterval(interval);
        // Optionally take action when the countdown is finished
      }
    }, 1000); // Update every second

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col min-h-[100dvh] mt-6 bg-green-800">
      <header className="bg-primary text-primary-foreground px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center">
          {/* <MountainIcon className="h-6 w-6" /> */}
          <Image src={image} width="40" height="40" alt="UNILAG Logo" />
          <h1 className="font-semibold text-3xl ml-3 text-white">University Of Lagos</h1>
        </Link>
      </header>
      <main className="flex-1">
        <section className="w-full flex py-12 md:py-24 lg:py-32 justify-start">
          <div className="container grid items-center justify-center gap-6 px-4 md:px-6">
            <div className="grid grid-cols-4 gap-4 my-12">
              <div className="bg-muted rounded-lg border border-white p-4 flex flex-col items-center justify-center">
                <div className="text-3xl font-bold text-white">{countdown.days}</div>
                <div className="text-muted-foreground text-3xl text-wrap text-white">Days</div>
              </div>
              <div className="bg-muted rounded-lg border border-white p-4 flex flex-col items-center justify-center">
                <div className="text-3xl font-bold text-white">{countdown.hours}</div>
                <div className="text-muted-foreground text-3xl text-white">Hours</div>
              </div>
              <div className="bg-muted rounded-lg border border-white p-4 flex flex-col items-center justify-center">
                <div className="text-3xl font-bold text-white">{countdown.minutes}</div>
                <div className="text-muted-foreground text-3xl text-white">Mins</div>
              </div>
              <div className="bg-muted rounded-lg border border-white p-4 flex flex-col items-center justify-center">
                <div className="text-3xl font-bold text-white">{countdown.seconds}</div>
                <div className="text-muted-foreground text-wrap text-3xl text-white">Secs</div>
              </div>
            </div>
            <div className="flex gap-10">
              <Image
                src={image1}
                width="1000"
                height="1000"
                alt="Construction Site"
                className="mx-auto aspect-[2/1] overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <Image
                src={image2}
                width="600"
                height="300"
                alt="Construction Site"
                className="mx-auto aspect-[2/1] overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl mt-8">This Brother is under construction.</h2>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-4 w-full shrink-0 items-center px-4 md:px-6 animate-marquee whitespace-nowrap overflow-hidden">
        <p className="text-sm text-white">❤️ Salaam from MSSN UNILAG</p>
      </footer>
    </div>
  )
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}