"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "lhh-splash-dismissed";

function SplashScreen() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const root = document.documentElement;
    const shouldBypassSplash = pathname?.startsWith("/attractions");
    let dismissed = null;

    if (shouldBypassSplash) {
      setVisible(false);
      setClosing(false);
      try {
        window.sessionStorage.setItem(STORAGE_KEY, "true");
      } catch {}
      root.classList.remove("splash-pending");
      return () => {
        document.body.classList.remove("splash-open");
        root.classList.remove("splash-pending");
      };
    }

    try {
      dismissed = window.sessionStorage.getItem(STORAGE_KEY);
    } catch {}

    if (!dismissed) {
      setVisible(true);
      window.requestAnimationFrame(() => {
        root.classList.remove("splash-pending");
      });
    } else {
      root.classList.remove("splash-pending");
    }

    return () => {
      document.body.classList.remove("splash-open");
      root.classList.remove("splash-pending");
    };
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("splash-open", visible);

    return () => {
      document.body.classList.remove("splash-open");
    };
  }, [visible]);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return undefined;
    }

    const setStartPoint = () => {
      try {
        video.currentTime = 2;
        video.playbackRate = 0.45;
        const playAttempt = video.play();

        if (playAttempt?.catch) {
          playAttempt.catch(() => {});
        }
      } catch {}
    };

    const restartFromMarker = () => {
      try {
        video.currentTime = 2;
        video.playbackRate = 0.45;
        void video.play();
      } catch {}
    };

    if (video.readyState >= 1) {
      setStartPoint();
    }

    video.addEventListener("loadedmetadata", setStartPoint);
    video.addEventListener("ended", restartFromMarker);

    return () => {
      video.removeEventListener("loadedmetadata", setStartPoint);
      video.removeEventListener("ended", restartFromMarker);
    };
  }, [visible]);

  const closeSplash = () => {
    setClosing(true);
    try {
      window.sessionStorage.setItem(STORAGE_KEY, "true");
    } catch {}

    window.setTimeout(() => {
      setVisible(false);
      document.documentElement.classList.remove("splash-pending");
      window.dispatchEvent(new Event("lhh:splash-closed"));
    }, 350);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className={`splash-screen ${closing ? "is-closing" : ""}`} role="dialog" aria-modal="true" aria-label="Enter site">
      <div className="splash-backdrop">
        <video
          ref={videoRef}
          className="splash-video"
          muted
          playsInline
          preload="auto"
        >
          <source src="/assets/splash-intro.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="splash-shell">
        <div className="splash-topline">
          <span>Explore</span>
          <span>Events</span>
          <span>Documentary</span>
          <span>Visit</span>
        </div>

        <div className="splash-content">
          <p className="splash-kicker">Hickory, North Carolina</p>
          <Image
            className="splash-logo"
            src="/assets/logo-transparent.png"
            alt="Lake Hickory Haunts logo"
            width={2048}
            height={682}
            priority
          />
          <p className="splash-loading">Loading</p>
          <h1>
            Lake Hickory
            <br />
            Haunts 2026
          </h1>
          <p className="splash-copy">
            Enter the season. Follow the story. Step into the dark.
          </p>
          <button type="button" className="splash-button" onClick={closeSplash}>
            Enter Site
          </button>
        </div>

        <div className="splash-bottomline">
          <span>15th Year of Fear</span>
          <span>Documentary Series</span>
          <span>Live Event Experience</span>
        </div>
      </div>
    </div>
  );
}

export default SplashScreen;
export { SplashScreen };
