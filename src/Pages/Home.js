import { useEffect, useState } from "react";
export default function Sample() {
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




const Home = () => {
  return <h1>HomePage</h1>;
};

export default Home;
