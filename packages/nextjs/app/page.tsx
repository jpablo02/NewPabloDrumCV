"use client";

//import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
//import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5 w-full">
          <div className="flex justify-center items-center space-x-2 flex-col sm:flex-row">
            <p className="my-2 font-medium">Connected Address:</p>
            <Address address={connectedAddress} />
          </div>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: "url(/Design1.png)",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="hero-content text-neutral-content text-center flex flex-col justify-end h-full">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  <span className="text-white" style={{ textShadow: "0 0 5px black, 0 0 2px black, 0 0 2px black" }}>
                    I am
                  </span>
                  <br />
                  <span className="text-white" style={{ textShadow: "0 0 5px black, 0 0 2px black, 0 0 2px black" }}>
                    PabloDrum
                  </span>
                </h1>
                <p className="mb-5 text-white">
                  <span className="text-white" style={{ textShadow: "0 0 5px black, 0 0 5px black, 0 0 5px black" }}>
                    NFT artist & Web 3.0 Builder
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div
            className="AboutMe"
            style={{
              backgroundImage: "url(/AboutMe.png)",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "500px",
            }}
          ></div>

          {/* Aquí se eliminó el carrusel */}

          {/* <p className="text-center text-lg">
            Get started by editing{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              packages/nextjs/app/page.tsx
            </code>
          </p> */}
        </div>
      </div>
    </>
  );
};

export default Home;
