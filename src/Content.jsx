import content from "./content.json";

function Content({h1,p}){
    return(
        <div>
            {content.map((cnt, index)=>{
                return(
                    <div key={index} className="py-4 flex gap-2 relative">
                         {/* <div className="absolute -left-[1.5px] top-1/2 w-[3px] h-8 bg-indigo-600 transform -translate-y-1/2" style={{ visibility: index === 0 ? 'visible' : 'hidden' }}></div> */}
                         <span className="block bg-indigo-500 h-4 w-1 mt-2 rounded opacity-90"></span>
                         <div>
                         <h1 className="font-semibold text-md py-1.5">{cnt.h1}</h1>
                         <p className="font-extralight text-md">{cnt.p}</p>
                         </div>
                        
                    </div>
                )
            })}
        </div>
    )
}

export default Content;