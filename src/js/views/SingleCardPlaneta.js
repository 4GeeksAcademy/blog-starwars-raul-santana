import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext';
import './SingleCardPersonaje.css';  

const SingleCardPlaneta = () => {
  const { id } = useParams();
  const { store } = useContext(Context);
  const [planeta, setPlaneta] = useState(null);

  useEffect(() => {
    const fetchPlanetDetails = async () => {
      try {
        const response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
        if (!response.ok) throw new Error("Failed to fetch planet details");
        const data = await response.json();
        const planetDetails = {
          name: data.result.properties.name,
          diameter: data.result.properties.diameter,
          rotationPeriod: data.result.properties.rotation_period,
          orbitalPeriod: data.result.properties.orbital_period,
          gravity: data.result.properties.gravity,
          population: data.result.properties.population,
          climate: data.result.properties.climate,
          terrain: data.result.properties.terrain,
          surfaceWater: data.result.properties.surface_water,
          description: "Detailed description here",
          imageUrl: data.result.properties.name === "Tatooine"
            ? 'https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357'
            : `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
        };
        setPlaneta(planetDetails);
      } catch (error) {
        console.error("Failed to fetch planet details", error);
      }
    };

    fetchPlanetDetails();
  }, [id]);

  if (!planeta) {
    return <div>Cargando...</div>;
  }

  const handleImageError = (e) => {
    e.target.src = "./assets/img/big-placeholder.jpg";
  };

  return (
    <div className="container">
      <div className="row mb-4 align-items-center">
        <div className="col-md-6">
          <img
            src={planeta.imageUrl}
            alt={planeta.name}
            className="img-fluid"
            onError={handleImageError}
          />
        </div>
        <div className="col-md-6">
          <h1 className="display-4 text-white">{planeta.name}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <table className="table table text-center">
            <thead className="thead-light text-white">
              <tr>
                <th>Nombre</th>
                <th>Diametro</th>
                <th>Periodo de Rotacion</th>
                <th>Periodo de Orbita</th>
                <th>Gravedad</th>
                <th>Poblacion</th>
                <th>Clima</th>
                <th>Terreno</th>
                <th>Aguas Superficiales</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{planeta.name}</td>
                <td>{planeta.diameter}</td>
                <td>{planeta.rotationPeriod}</td>
                <td>{planeta.orbitalPeriod}</td>
                <td>{planeta.gravity}</td>
                <td>{planeta.population}</td>
                <td>{planeta.climate}</td>
                <td>{planeta.terrain}</td>
                <td>{planeta.surfaceWater}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SingleCardPlaneta;