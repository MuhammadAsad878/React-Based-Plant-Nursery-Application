import '../Landing.css'
import { Link } from 'react-router-dom';

export default function AboutUs() {
  const btnStyle ={
    margin:'20px 0px',
    padding:'15px',
    backgroundColor:'green',
    color:'white',
    fontWeight:'700',
    fontSize:'1rem',
    border:'none',
    cursor:'pointer'
  }
  return (
   
    <div className='overlay'>
    <div className='content'>
        <div className='btn_panel'>
          <h1 style={{margin:'10px',fontSize:'2.5rem',}}>Welcome to Paradise Nursery</h1>
          <h3 style={{margin:'10px'}}>Where Green Meets Serenity</h3>
          <button style={btnStyle}>
            <Link to="/products"> Get Started </Link></button>
        </div>
        <div className='aboutus_panel' style={{fontSize:'1.4rem'}}>Welcome to Paradise Plant Nursery, your green oasis and trusted partner in bringing nature closer to your home. Nestled in the heart of [Location], we are passionate about nurturing plants and helping our customers create their dream gardens.With a vast collection of lush indoor plants, vibrant flowers, ornamental shrubs, and exotic species, Paradise Plant Nursery is more than just a nursery—it&apos;s a sanctuary for plant lovers. Whether you&apos;re a seasoned gardener or a budding plant enthusiast, our knowledgeable team is here to guide you every step of the way.</div>
    </div>
  </div>
    
  );
}
