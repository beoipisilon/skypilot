// src/hooks/useGLTFLoader.js
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function useGLTFLoader(url) {
  const gltf = useLoader(GLTFLoader, url);
  return gltf;
}
