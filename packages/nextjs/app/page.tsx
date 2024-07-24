"use client";

//import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
//import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();
  <div className="flex justify-center items-center space-x-2 flex-col sm:flex-row">
    <p className="my-2 font-medium">Connected Address:</p>
    <Address address={connectedAddress} />
  </div>;

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5 w-full">
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: "url(/1ajust.png)",
              backgroundSize: "cover",
              backgroundPosition: "cover",
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
              backgroundImage: "url(2ajust.png)",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "500px",
            }}
          ></div>
          <div
            className="Skills"
            style={{
              backgroundImage: "url(3ajust.png)",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "500px",
            }}
          ></div>
          <div
            className="Skills"
            style={{
              backgroundImage: "url(4ajust.png)",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "500px",
            }}
          ></div>
          <div
            className="Skills"
            style={{
              backgroundImage: "url(5ajust.png)",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "500px",
            }}
          ></div>
          <div
            className="Skills"
            style={{
              backgroundImage: "url(6ajust.png)",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "500px",
            }}
          ></div>
          <div
            className="Skills"
            style={{
              backgroundImage: "url(7ajust.png)",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "500px",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Home;
