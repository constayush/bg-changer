export default (props)=>{

   const color = props.color

   function handleClick (){

      document.getElementById('root').style.backgroundColor = `${color}`
   }

return (<button onClick={handleClick} className="button w-[10vw] h-[10vh] m-2">{color}</button>)

}