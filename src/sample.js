import { useEffect, useState } from "react";
export default function Sample() {
//  const [sample, setSample] = useState([]);
  index1 = Math.floor(Math.random() * 15);
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
