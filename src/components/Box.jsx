import React,{useState,useEffect} from "react";
import {
    Tooltip,
} from "@material-tailwind/react";

const Box = ({ contribution }) => {
    console.log(contribution);
    const [level, setLevel] = useState();

    useEffect(() => {
      setLevel(getLevel(contribution.contributions));
    }, [])
    



    const getLevel = (contributions) => {
      if (contributions >= 1 && contributions <= 4) {
          return "bg-green-200";
      } else if (contributions >= 1 && contributions <= 4) {
          return "bg-green-400";
      } else if (contributions >= 5 && contributions <= 9) {
          return "bg-green-500";
      } else if (contributions >= 10 && contributions <= 19) {
          return "bg-green-600";
      }else if (contributions >= 19 && contributions <= 29) {
          return "bg-green-700";
      } else if (contributions >= 30 ) {
          return "bg-green-900";
      }
  };

    return (
        <>
            {contribution && contribution !== 0 ? (
                <Tooltip
                    content={`${contribution.contributions} Contributions on ${contribution.date.toLocaleString("default", {day:'numeric',month: "long"})}` }
                    placement="top"
                    className="
                bg-gray-800
            "
                >
                    <button
                        data-tooltip-target="tooltip-default"
                        type="button"
                        className={`${level} h-6 w-6 md:h-8 md:w-8 rounded-lg transition-all hover:bg-gray-500`}
                    ></button>
                </Tooltip>
            ) : (
                <Tooltip
                    content={`No contributions`}
                    placement="top"
                    className="
                bg-gray-800
            "
                >
                    <button
                        data-tooltip-target="tooltip-default"
                        type="button"
                        className="bg-gray-400 h-6 w-6 md:h-8 md:w-8 rounded-lg transition-all hover:bg-gray-500"
                    ></button>
                </Tooltip>
            )}
        </>
    );
};

export default Box;
