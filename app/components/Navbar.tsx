'use client' //in order to allow interactivity, component has to be rendered client side (as far as i know)

const Navbar = () => {

  const toHome = () => { //These need to be refactored, perhaps read the button id's and send users to the corresponding page? 
    console.log("hello");
    window.location.href = "/home";
  }

  const toDinos = () => {
    console.log("hello");
    window.location.href = "/products";
  }

  const toContact = () => {
    console.log("hello");
    window.location.href = "/contact";
  }

  return (
    <>
    <nav className='bg-slate-600 h-10'>
        <div className=''>
            <ul className='flex gap-3'>
                <li>
                  <button id='homeBtn' className='p-2 hover:bg-slate-800' onClick={toHome}>Home</button>
                </li>
                <li>
                  <button id='dinoBtn' className='p-2 hover:bg-slate-800' onClick={toDinos}>Dinos</button>
                </li>
                <li>
                  <button id='contactBtn' className='p-2 hover:bg-slate-800' onClick={toContact}>Contact</button>
                </li>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar