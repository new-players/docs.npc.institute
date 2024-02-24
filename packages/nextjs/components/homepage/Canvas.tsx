import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { 
    Environment, 
    Center,
    OrthographicCamera
  } from '@react-three/drei'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'
import { state } from './store'
import useSpline from '@splinetool/r3f-spline'

export const BackgroundCanvas = ({ position = [0, 0, 2.5], fov = 25 }) => (
  <Canvas camera={{ position, fov }}>
    <Environment preset="sunset" background blur={0.5} />
        <CameraRig>
      <Center>
        <Logo />
      </Center>
    </CameraRig>
  </Canvas>
)


function CameraRig({ children }) {
  const group = useRef()
  const snap = useSnapshot(state)
  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [snap.intro ? -state.viewport.width / 4 : 0, 0, 2], 0.25, delta)
    easing.dampE(group.current.rotation, [state.pointer.y / 10, -state.pointer.x / 5, 0], 0.25, delta)
  })
  return <group ref={group}>{children}</group>
}

function Logo(props) {
  const snap = useSnapshot(state)
  const { nodes, materials } = useSpline('https://prod.spline.design/aKz6O7SBXK-8RqFC/scene.splinecode')
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.y -= delta * 0.5
  })

  return (
    

      <group {...props} dispose={null}>
        <scene name="Scene 1">
          <group ref={ref} name="Group 3" rotation={[0.5,-0.4, 0]} scale={2}>
            <group name="Group 2" position={[-4.1, 1.21, -40.93]} rotation={[-0.06, -0.18, -0.92]} scale={0.89}>
              <mesh
                name="Sphere"
                geometry={nodes.Sphere.geometry}
                material={materials['Sphere Material']}
                castShadow
                receiveShadow
                position={[23.05, -24.01, -10.04]}
                rotation={[-1.61, 0.52, -2.06]}
                scale={0.78}
              />
              <mesh
                name="Cube"
                geometry={nodes.Cube.geometry}
                material={materials['Cube Material']}
                castShadow
                receiveShadow
                position={[-10.92, 19.69, 109.42]}
                rotation={[-0.37, 0.12, -2.54]}
                scale={1}
              />
              <mesh
                name="Sphere1"
                geometry={nodes.Sphere1.geometry}
                material={materials['Sphere1 Material']}
                castShadow
                receiveShadow
                position={[-43.22, 13.2, 1.68]}
                rotation={[-2.5, 1.34, -0.99]}
                scale={0.78}
              />
              <mesh
                name="Path"
                geometry={nodes.Path.geometry}
                material={materials['Path Material']}
                castShadow
                receiveShadow
                position={[-41.31, 48.84, -12.62]}
                rotation={[-2.5, 1.34, -1]}
                scale={1}
              />
            </group>
            <group name="Group" position={[25.69, -1.52, -3.31]} rotation={[-0.4, 0, 0]}>
              <mesh
                name="Ellipse"
                geometry={nodes.Ellipse.geometry}
                material={materials['Ellipse Material']}
                castShadow
                receiveShadow
                position={[2.75, -29.87, 78.24]}
                rotation={[-2.67, -0.14, -Math.PI / 2]}
                scale={1.08}
              />
              <mesh
                name="Sphere2"
                geometry={nodes.Sphere2.geometry}
                material={materials['Sphere2 Material']}
                castShadow
                receiveShadow
                position={[54.85, 2.03, -6.94]}
                rotation={[Math.PI, 0, -Math.PI / 2]}
                scale={1.42}
              />
              <mesh
                name="Ellipse1"
                geometry={nodes.Ellipse1.geometry}
                material={materials['Ellipse1 Material']}
                castShadow
                receiveShadow
                position={[31.63, -7.23, 75.7]}
                rotation={[0.09, 0.38, -Math.PI / 2]}
                scale={[1.22, 1.25, 0.59]}
              />
              <mesh
                name="Sphere3"
                geometry={nodes.Sphere3.geometry}
                material={materials['Sphere3 Material']}
                castShadow
                receiveShadow
                position={[-0.99, 0.11, -0.07]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={1}
              />
            </group>
            <group name="Group 21" position={[-37.4, 8.68, 65.1]} rotation={[-0.4, 0, 0]}>
              <mesh
                name="Sphere4"
                geometry={nodes.Sphere4.geometry}
                material={materials['Sphere4 Material']}
                castShadow
                receiveShadow
                position={[-14.05, 15.25, 8.77]}
                rotation={[1.78, -0.16, 0.25]}
                scale={0.75}
              />
              <mesh
                name="Sphere 2"
                geometry={nodes['Sphere 2'].geometry}
                material={materials['Sphere 2 Material']}
                castShadow
                receiveShadow
                position={[-43.14, 19.37, -73.9]}
                rotation={[1.99, 0, Math.PI / 2]}
                scale={1.42}
              />
              <mesh
                name="Ellipse 3"
                geometry={nodes['Ellipse 3'].geometry}
                material={materials['Ellipse 3 Material']}
                castShadow
                receiveShadow
                position={[9.91, -9.45, 4.22]}
                rotation={[Math.PI / 10, 0, Math.PI / 2]}
                scale={1.08}
              />
              <mesh
                name="Sphere 21"
                geometry={nodes['Sphere 21'].geometry}
                material={materials['Sphere 21 Material']}
                castShadow
                receiveShadow
                position={[11.74, 17.45, -67.02]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
                scale={1}
              />
            </group>
          </group>
          <directionalLight
            name="Directional Light"
            castShadow
            intensity={0.7}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={-10000}
            shadow-camera-far={100000}
            shadow-camera-left={-1000}
            shadow-camera-right={1000}
            shadow-camera-top={1000}
            shadow-camera-bottom={-1000}
            position={[200, 300, 300]}
          />
          <OrthographicCamera name="1" makeDefault={true} far={10000} near={-50000} />
          <hemisphereLight name="Default Ambient Light" intensity={0.5} color="#eaeaea" />
        </scene>
      </group>      
  )
}