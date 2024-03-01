import { useEffect, useState } from "react";
import JobCard from "./../components/JobCard";
//import { json } from "react-router-dom";


export default function Home() {
  const [randomQuote, setRandomQuote] = useState(null);
  const [quoteList, setquoteList] = useState([]);
  useEffect(() => {

    const jobList =JSON.parse(localStorage.getItem("jobData"))
    console.log(jobList)
    fetch("https://type.fit/api/quotes")
    //useffect fetches the data once
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setquoteList(data);
        console.log(data);
        let randomIndex = Math.floor(Math.random() * data.length);
        //  setRandomQuote(data[randomIndex]);
        let quote = data[randomIndex];
        quote.author = quote.author.replace(", type.fit", " ");
        setRandomQuote(quote);
      });
  }, []);
  return ( 
    <div>
      <h1>HomePage</h1>
      <JobCard />;
      {randomQuote && (
        <div className="text-primary"> 
          {randomQuote.text} - {randomQuote.author}
        </div>
      )}

{/* map through the local strorage
for each item we pass it as a prop throught the job card */}

      {/* <p>
        {sample.map((item, index) => (
          <li key={index}>{item.text}</li>
        ))}
      </p> */}
    </div>
  );
}

// const Home = () => {
//   return <h1>HomePage</h1>;
// };

//module.exports = Sample();

//export default Home;
