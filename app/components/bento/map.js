"use client";

import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import React, { useRef, useEffect, useState } from "react";
import { useTheme } from "next-themes";

mapboxgl.accessToken = 'pk.eyJ1Ijoia3Jhc25va3V0c2tpaWkiLCJhIjoiY2x1azA1Nnc3MGY0ejJrbjI3M2N6Nm0wMiJ9.-86cqwzGEDdp6x90rgzYXQ';

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(35.1396); 
  const [lat, setLat] = useState(47.8388); 
  const [zoom, setZoom] = useState(2.5);
  const [pitch, setPitch] = useState(15);

  const { theme, resolvedTheme } = useTheme();
  let mapTheme;
  if (resolvedTheme === "dark") {
    mapTheme = "night";
  } else if (resolvedTheme === "light") {
    mapTheme = "day";
  } else {
    mapTheme = "night";
  }

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      center: [lng, lat],
      zoom: zoom,
      pitch: pitch,
      // interactive: false,
    });

    // set configproperties
    map.current.on("style.load", () => {
      map.current.setConfigProperty("basemap", "lightPreset", mapTheme);
      map.current.setPadding({ left: 150, bottom: 20 });

      const el = document.createElement("span");
      el.className = "map-marker";

      new mapboxgl.Marker({ element: el })
        .setLngLat([lng, lat])
        .addTo(map.current);
    });
  });

  return (
    <div
      ref={mapContainer}
      className="map-container h-full w-full rounded-2xl select-none"
    />
  );
}