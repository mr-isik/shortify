"use client";

import { useEffect, useContext, useState } from "react";
import ClipBoardJS from "clipboard";
import { AppContext } from "@/providers/ContextProvider";

import { Button } from "@/components/ui/button";
import { toast } from "react-hot-toast";

import { Trash } from "@phosphor-icons/react";

const Shorten = () => {
  const { result, setResult } = useContext(AppContext);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const clipboard = new ClipBoardJS(".copy-btn");

    clipboard.on("success", () => {
      toast.success("Link copied to clipboard!");
    });

    clipboard.on("error", (e) => {
      toast.error(`Copying error: ${e.action}`);
    });

    if (result.length > 1) {
      setShow(true);
    } else {
      setShow(false);
    }

    console.log(result.length);
    console.log(show);

    return () => {
      clipboard.destroy();
    };
  }, [result]);

  return (
    <div className={`card ${show ? "flex" : "hidden"}`}>
      <p id="copy-text" className="px-3 text-lg">
        {result}
      </p>
      <div className="flex gap-2 items-center">
        <Button
          size="lg"
          className="copy-btn"
          data-clipboard-target="#copy-text"
        >
          Copy
        </Button>
        <Button variant="ghost" size="icon" onClick={() => setResult("")}>
          <Trash size={26} />
        </Button>
      </div>
    </div>
  );
};

export default Shorten;
