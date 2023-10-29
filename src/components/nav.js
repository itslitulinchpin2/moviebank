import React from 'react'
import "./nav.css" 
import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
const Nav = () => {

    const[show,setShow]=useState(false);
    const[searchValue,setSearchValue]=useState("")
    const navigate=useNavigate();

    const handleChange = (e) =>{
        setSearchValue(e.target.value);
        navigate(`/search?q=${e.target.value}`)
    }
    

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            
            if(window.scrollY>50){
                setShow(true)
            } else {
                setShow(false)
            }
        })
        return ()=> {
            window.removeEventListener("scroll",()=>{})
        }

    },[])


  return (
    <nav className={`nav ${show&&"nav_black"}`}>
        <img
        alt="Netflix logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
        className='nav_logo'
        onClick={()=>window.location.reload()}
        ></img>

        <input 
        value={searchValue}
        onChange={handleChange}
        className="nav__input"
        type="text"
        placeholder='영화를 검색하세요'/>


        <img
        alt="User logged"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Qou3wNk2Qfs7AN49-mULhwGRomERYXuu_fO3qYsTVkrON8-S67AMUwOTlccNYZhYyvU&usqp=CAU"
        className="nav_avatar"
        >
        
        </img>
    </nav>
  )
}

export default Nav
