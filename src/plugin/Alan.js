import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import alanBtn from "@alan-ai/alan-sdk-web";

const Alan = ({ user }) => {
  const alanInstance = useRef(null);
  const navigate = useNavigate(); // Initialize navigation

  useEffect(() => {
    if (!user || alanInstance.current) return; // Ensure Alan is only initialized once

    // console.log("Initializing Alan AI... from code");

    const alanKey = process.env.REACT_APP_ALAN_KEY;

    alanInstance.current = alanBtn({
      key: alanKey, // Replace with your actual Alan AI key
      host: "v1.alan.app",
      onCommand: (commandData) => {
        switch (commandData.command) {
          case "trending":
            navigate(`home/trending`);
            break;
          case "authors":
            navigate(`home/authors`);
            break;
          case "educational":
            navigate(`home/childrenscorner`);
            break;
          case "latest":
            navigate(`home/newReleases`);
            break;
          case "classic":
            navigate(`home/classics`);
            break;
          case "home":
            navigate("home/dashboard");
            break;
          case "library":
            navigate("home/library");
            break;
          case "discover":
            navigate("home/discover");
            break;
          case "profile":
            navigate("home/profile");
            break;
          case "back":
            navigate(-1);
            break;
          case "genre":
            navigate(`home/${commandData.command}/${commandData.genre}`);
            break;
          case "search":
            navigate(`home/${commandData.command}/${commandData.search}`);
            break;
          default:
            console.log("Unknown command:", commandData.command);
        }
      },
    });
  }, [user]);

  return null; // This component doesn't render anything
};

export default Alan;
