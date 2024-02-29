import { useEffect, useState } from "react";
export default function Sample() {
    const [sample, setSample] = useState([]);
    useEffect(() => {
        fetch("https://type.fit/api/quotes")
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            setSample(data);
            console.log(sample);
          });
      }, []);
      return (
        <div>
          <h1>Test</h1>
          <p>
            {sample.map((item, index) => (
              <li key={index}>{item.text}</li>
              
            ))}
          </p>
        </div>
      );
    }




const Home = () => {
  return <h1>HomePage</h1>;
};

export default Home;
