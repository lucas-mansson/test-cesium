// GoogleTerrainTiles.tsx
import React from 'react';
import { createCesiumComponent } from 'resium';
import { createGooglePhotorealistic3DTileset } from 'cesium';

export const TerrainTiles = () => {
  const TerrainTiles = createCesiumComponent({
    name: 'googlePhotoTile',
    create(context) {
      createGooglePhotorealistic3DTileset().then((tileset) => {
        context.scene?.primitives.add(tileset);
      });
    },
  });

  return <TerrainTiles />;
};
