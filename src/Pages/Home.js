import { useEffect, useState } from "react";
export default function Home() {
    const [randomQuote, setRandomQuote] = useState(null);
  const [quoteList, setquoteList] = useState([]);
  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setquoteList(data);
        console.log(data);
        let randomIndex = Math.floor(Math.random() * data.length);
        setRandomQuote(data[randomIndex]);
      });
  }, []);
  return (
    <div>
      <h1>HomePage</h1>

      {randomQuote && (
          <div>
            {randomQuote.text} - {randomQuote.author}
          </div>
        )}

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
