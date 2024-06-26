import React from "react";
//import Link from "next/link";
//import { hardhat } from "viem/chains";
//import { CurrencyDollarIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
//import { HeartIcon } from "@heroicons/react/24/outline";
//import { SwitchTheme } from "~~/components/SwitchTheme";
import { BuidlGuidlLogo } from "~~/components/assets/BuidlGuidlLogo";

//import { Faucet } from "~~/components/scaffold-eth";
//import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";
//import { useGlobalState } from "~~/services/store/store";

/**
 * Site footer
 */
export const Footer = () => {
  // const nativeCurrencyPrice = useGlobalState(state => state.nativeCurrency.price);
  // const { targetNetwork } = useTargetNetwork();
  // const isLocalNetwork = targetNetwork.id === hardhat.id;

  return (
    <div className="min-h-0 py-5 px-1 mb-11 lg:mb-0">
      <div>
        <div className="fixed flex justify-between items-center w-full z-10 p-4 bottom-0 left-0 pointer-events-none">
          {/* <div className="flex flex-col md:flex-row gap-2 pointer-events-auto">
            {nativeCurrencyPrice > 0 && <div></div>}
          </div> */}
          {/* <SwitchTheme className={`pointer-events-auto ${isLocalNetwork ? "self-end md:self-auto" : ""}`} /> */}
        </div>
      </div>
      <footer className="footer bg-base-200 text-base-content p-10">
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
      <div className="w-full">
        <ul className="menu menu-horizontal w-full">
          <div className="flex justify-center items-center gap-2 text-sm w-full">
            <div className="flex justify-center items-center gap-2">
              {/* <p className="m-0 text-center">
                Why PabloDrum's name? <HeartIcon className="inline-block h-4 w-4" /> at
              </p> */}
              <a
                className="flex justify-center items-center gap-1"
                href="https://youtu.be/u4G95vf4Uzo?t=43"
                target="_blank"
                rel="noreferrer"
              >
                <BuidlGuidlLogo className="w-3 h-5 pb-1" />
                <span className="link">Why PabloDrum name?</span>
              </a>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};
