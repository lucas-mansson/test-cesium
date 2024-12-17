// useViewerSetup.ts
import { useEffect } from 'react';
import {Viewer as CesiumViewer } from 'cesium';

export const SetupViewer = (viewerRef: React.RefObject<any>) => {
  useEffect(() => {
    if (viewerRef.current) {
      const viewer = viewerRef.current.cesiumElement as CesiumViewer;

      if (viewer && viewer.camera) {
        viewer.camera.frustum.far = 1000; // Set render distance
      }

    
      // Disable interactions
      
      
    }
  }, [viewerRef]);
};
