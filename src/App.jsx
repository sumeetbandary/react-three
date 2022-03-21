
import ReactDOM from 'react-dom'
import { Canvas } from '@react-three/fiber'
import {OrbitControls} from "@react-three/drei"
import Box from "./components/Box"
import Model from './components/Model'

function App() {
    return (
      <Canvas>
        <OrbitControls />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Model />
      </Canvas>
    )
}

export default App
