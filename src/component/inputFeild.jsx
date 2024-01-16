export default ()=> {



  const handleChange = (event) => {

    document.getElementById('root').style.backgroundColor = event.target.value
  };
    return(
        <div>

        <input className="inputFeild w-[10vw] h-[10vh] m-2" onChange={handleChange} type='color'>

        </input></div>
    )
}