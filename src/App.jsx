import { useState } from "react"

function App() {
   const [color,setcolor] = useState("blue")
  return (
    <>
    <div className="w-[100vw] h-[100vh] flex items-center" style={{backgroundColor:color}}>
    <div className="fixed w-[100vw] h-[4vw] flex flex-wrap gap-4 justify-center">
    <div className=" h-[100%] px-[31.3px] flex items-center rounded-full cursor-pointer text-[1.3vw]" onClick={()=>setcolor("red")} style={{backgroundColor:"red"}}>red</div>
    <div className=" h-[100%] px-[31.3px] flex items-center rounded-full cursor-pointer text-[1.3vw]" onClick={()=>setcolor("pink")} style={{backgroundColor:"pink"}}>pink</div>
    <div className=" h-[100%] px-[31.3px] flex items-center rounded-full cursor-pointer text-[1.3vw]" onClick={()=>setcolor("violet")} style={{backgroundColor:"violet"}}>violet</div>
    <div className=" h-[100%] px-[31.3px] flex items-center rounded-full cursor-pointer text-[1.3vw]" onClick={()=>setcolor("green")} style={{backgroundColor:"green"}}>green</div>
    <div className=" h-[100%] px-[31.3px] flex items-center rounded-full cursor-pointer text-[1.3vw]" onClick={()=>setcolor("orange")} style={{backgroundColor:"orange"}}>orange</div>
    <div className=" h-[100%] px-[31.3px] flex items-center rounded-full cursor-pointer text-[1.3vw]" onClick={()=>setcolor("yellow")} style={{backgroundColor:"yellow"}}>yellow</div>

    </div>
    </div>
    
    </>
  )
}

export default App
