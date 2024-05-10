"use client";

import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import React, { useRef, useEffect, useState } from "react";
import { useTheme } from "next-themes";

mapboxgl.accessToken = 'pk.eyJ1Ijoia3Jhc25va3V0c2tpaWkiLCJhIjoiY2x1azA1Nnc3MGY0ejJrbjI3M2N6Nm0wMiJ9.-86cqwzGEDdp6x90rgzYXQ';

export default function Map({ lng, lat, zoom = 2, pitch = 25, time = null }) {
  const mapContainer = useRef(null);
  const map = useRef(null);

  const { resolvedTheme } = useTheme();
  let mapTheme;
  if (resolvedTheme === "dark") {
    mapTheme = "night";
  } else if (resolvedTheme === "light") {
    mapTheme = "light";
  }
  if (time) {
    mapTheme = time;
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
      map.current.setPadding({ left: 100 });

      const el = document.createElement("span");
      el.className = "map-marker";

      new mapboxgl.Marker({ element: el })
        .setLngLat([lng, lat])
        .addTo(map.current);
    });
  });

  return <div ref={mapContainer} className="map-container h-full w-full" />;
}