import logo from './logo.svg';
import './App.css';
import {Viewer, Entity, createCesiumComponent } from "resium";
import { Cartesian3, createGooglePhotorealistic3DTileset   } from "cesium";

//const position = Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100);
const CesiumComponent = createCesiumComponent({
  name: 'googlePhotoTile',
  create(context) {
    createGooglePhotorealistic3DTileset().then((tileset) => {
      context.scene.primitives.add(tileset)
    });
  }
})

function App() {
  return (
    <Viewer full>
      <CesiumComponent />
    </Viewer>
  );
}

export default App;
