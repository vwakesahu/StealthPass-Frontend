"use client";
import { EventsBentoGrid } from "@/components/events-grid";
import HeroHeader from "@/components/hero/hero-header";
import { Button } from "@/components/ui/button";
import { useWalletContext } from "@/privy/walletContext";
import React, { useEffect, useState } from "react";

const Page = () => {
  const { address, w0 } = useWalletContext();
  const [error, setError] = useState(null);

  // console.log(w0?.chainId)
  useEffect(() => {
    const switchChain = async () => {
      try {
        await w0?.switchChain(5003);
      } catch (error) {
        console.error("Failed to switch chain:", error);
        setError("Failed to switch to the correct network");
      }
    };
    switchChain();
  }, [w0]);
  return (
    <div className="min-h-screen md:p-8 p-4 bg-[#F3F3F3]">
      <div className="md:mb-20">
        <HeroHeader />
      </div>
      {/* <Button onClick={switchChain}>Chain</Button> */}
      <EventsBentoGrid userAddress={address} />
    </div>
  );
};

export default Page;
