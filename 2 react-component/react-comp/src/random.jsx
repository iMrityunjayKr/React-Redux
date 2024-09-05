//creating once and using so many time. -- reusable components

function Random(){
  let number= Math.round(Math.random()*100+1)
  
  return <h4 style={{backgroundColor:"#414141", color: "#fff" }}> Random no is : {number}</h4>
}

export default Random;