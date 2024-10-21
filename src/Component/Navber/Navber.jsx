import profile from '../../assets/profile.png'

function Navber() {
  return (
    <div className='flex justify-between items-center'>
      <h1 className='text-2xl '>Knowledge cafe</h1>
      <img src={profile} alt={`knowledge cafe ${profile}`} />
    </div>
  )
}

export default Navber
