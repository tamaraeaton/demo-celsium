import { useEffect } from 'react'
import { Viewer, Entity, PointGraphics, EntityDescription } from 'resium';
import { Cartesian3 } from 'cesium';
import fetchMap from './api/fetchmap';
import Header from './components/Header/Header'
// import Somewhere from './components/Somewhere'
import Footer from './components/Footer/Footer'
import './App.css'


const App = () => {

  useEffect(() => {
    fetchMap()
  }, [])

  const position = Cartesian3.fromDegrees(-88.325884, 36.302282, 100);
  const pointGraphics = { pixelSize: 10 };


  return (
    <>
      <Header />
      {/* <div className="theMap" > */}
      <Viewer full>
        <Entity position={position} name='Paris, TN'>
          <PointGraphics pixelSize={10} />
          <EntityDescription>
            <h1 className='description' style={{ color: 'red' }}>Hello there Chris!</h1>
          </EntityDescription>
        </Entity>
      </Viewer>
      {/* </div> */}
      <Footer />

    </>
  )
}

export default App