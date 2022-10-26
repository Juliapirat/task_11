import { useLayoutEffect } from "react";
import mapboxgl from "mapbox-gl";

const container = "map";
const center = [0, 0];
const zoom = 2;

mapboxgl.accessToken =
  "pk.eyJ1Ijoib3RyaWNhbGEiLCJhIjoiY2tqMjFjcTNzMnp2djJ1bW05NW9zd2h6NCJ9.0w535oE4G9JjDpDxC_vVuw";

export default function useMapbox() {
  useLayoutEffect(() => {
    new mapboxgl.Map({
      container: container,
      style: "mapbox://styles/mapbox/streets-v11",
      center: center,
      zoom: zoom
    });
  }, []);
}
