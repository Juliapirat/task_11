import { useLayoutEffect } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1Ijoib3RyaWNhbGEiLCJhIjoiY2tqMjFjcTNzMnp2djJ1bW05NW9zd2h6NCJ9.0w535oE4G9JjDpDxC_vVuw";
export default function useMapbox(container = "map", [long, lat], zoom = 2) {
  useLayoutEffect(() => {
    new mapboxgl.Map({
      container: container,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [long, lat],
      zoom: zoom
    });
  }, [zoom, container, long, lat]);
}
