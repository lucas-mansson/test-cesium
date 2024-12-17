// App.tsx
import './App.css';
import { Viewer, CameraFlyTo } from "resium";
import { Terrain, Cartesian3, Math, createWorldTerrainAsync } from "cesium";
import React, { useRef } from 'react';
import { SetupViewer } from './SetupViewer.tsx';
import { TerrainTiles } from './TerrainTiles.tsx';

function App() {
  const viewerRef = useRef<any>(null); 

  SetupViewer(viewerRef);

  return (
    <Viewer ref={viewerRef} full terrain={Terrain.fromWorldTerrain()}>
      <TerrainTiles/>
      <CameraFlyTo 
        destination={Cartesian3.fromDegrees(11.96, 57.7, 100)}
        orientation={{
          heading: Math.toRadians(0.0),
          pitch: Math.toRadians(-15.0),
        }}
      />
    </Viewer>  
  );
}

export default App;
