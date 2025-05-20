import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Particles from './component/Particles'
import GooeyNav from './component/GooeyNav'
import img from './Thusi.png';


function App() {
  const [count, setCount] = useState(0)

  const items = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];


  return (
    <>

    <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
       <div className='Navbar'>
          <div style={{ height: '600px', position: 'relative' }}>
            <GooeyNav
              items={items}
              particleCount={15}
              particleDistances={[90, 10]}
              particleR={100}
              initialActiveIndex={0}
              animationTime={600}
              timeVariance={300}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
          </div>
       </div>
       <div className='home-content'>
          <div className='home-text'>
              <h1>Hello</h1>
              <h1>I'm Thusikaran</h1>
              <h1> Software Engineer</h1>
            </div>
          <div className='home-image'><img src={img} alt="Profile" /></div>
       </div>
    </>
  )
}

export default App
