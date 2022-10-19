import "./App.css";
import { useEffect, useState } from "react";
import Box from "./components/Box";

const randomDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = Math.floor(Math.random() * 30) + 1;
  return new Date(year, month, day);
};

function App() {
    const [contributions, setContributions] = useState([
      {
        date: randomDate(),
        contributions: 10,
    },
      {
        date: randomDate(),
        contributions: 20,
    },
      {
        date: randomDate(),
        contributions: 30,
    },
      {
        date: randomDate(),
        contributions: 40,
    },
      {
        date: randomDate(),
        contributions: 20,
    },
      {
        date: randomDate(),
        contributions: 30,
    },
      {
        date: randomDate(),
        contributions: 30,
    },
    ]);
    const [month, setMonth] = useState("");
    const [monthContributions, setMonthContributions] = useState([]);
    const [totalContributions, setTotalContributions] = useState(0);

    useEffect(() => {
        const today = new Date();        
        setMonth(today.toLocaleString("default", { month: "long" }));
        

        // create an array with 31 elements and fill it with 0 except for the dates in contribution
        const monthContribution = Array(31).fill(0);

        contributions.forEach((contribution) => {

                monthContribution[contribution.date.getDate() - 1] = contribution;
                setTotalContributions(prev => prev + contribution.contributions);
        }
        );
        setMonthContributions(monthContribution);
        console.log("fire");
        console.log(monthContributions);
    }, []);






    return (
        <div className=" h-screen bg-black p-10  md:p-32  flex flex-col justify-center items-center">
            <h1 className="text-6xl text-white font-bold text-center">
                Github Graph
            </h1>

            <h2 className="text-2xl text-white mt-20 font-bold text-center">
                {month}
            </h2>
            <div className="grid grid-rows-4 justify-center mr-auto ml-auto w-fit border border-gray-600 p-10 rounded-xl  grid-flow-col mt-5 gap-2">
                {monthContributions && monthContributions.map((e, i) => {
                    return <Box key={i} contribution={e} />;
                })}
            </div>
            <h3 className="text-xl text-white mt-5 font-bold text-center">
              Total contributions : {totalContributions}
            </h3>
        </div>
    );
}

export default App;
