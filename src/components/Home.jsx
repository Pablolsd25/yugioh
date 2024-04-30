import React from "react";

const Home = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPNokWIloeCF7daFUWwlCT2BI3BWmHBvOJ8ZLvf50trA&s"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Busca tu carta</h1>
          <p className="py-6">
            Encuentra tu carta favorita dentro de una gran biblioteca de cartas{" "}
            <br />
            con más de 5000 cartas en nuestra base de datos.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
