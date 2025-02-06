import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import alanBtn from "@alan-ai/alan-sdk-web";

const Alan = ({ user }) => {
    const alanInstance = useRef(null);
    const navigate = useNavigate();  // Initialize navigation

    useEffect(() => {
        if (!user || alanInstance.current) return; // Ensure Alan is only initialized once

        console.log("Initializing Alan AI...");

        const alanKey = '1cc1de04ce3430871b2ddce69a181a2c2e956eca572e1d8b807a3e2338fdd0dc/stage'


        alanInstance.current = alanBtn({
            key: alanKey,  // Replace with your actual Alan AI key
            host: "v1.alan.app",
            onCommand: (commandData) => {
                switch (commandData.command) {
                    case "trending":
                        console.log('trending books---');
                        navigate(`home/interactions/${commandData.command}`); // Redirect"
                        break;
                    case "authors":
                        navigate(`home/interactions/${commandData.command}`); 
                        break;
                    case "educational":
                        navigate(`home/interactions/${commandData.command}`); 
                        break;
                    case "latest":
                        navigate(`home/interactions/${commandData.command}`); 
                        break;
                    case "classic":
                        navigate(`home/interactions/${commandData.command}`); 
                        break;
                    case "genre":
                        navigate(`home/interactions/${commandData.command}`); 
                        break;
                    default:
                        console.log("Unknown command:", commandData.command);
                }
            }
        });

    }, [user]);

    return null; // This component doesn't render anything
};

export default Alan;
