import { useGLTF } from '@react-three/drei'


const Model = () => {
  console.log("hello three.js");
  const url = "https://cloudflare-ipfs.com/ipfs/QmbvF8D6NKTxBFFZ83PR1qQKwXYzaN8AN11aUycwkukCBR/0.glb";
  const { scene } = useGLTF(url);
  console.log(scene);
  return <primitive object={scene} />
}

export default Model