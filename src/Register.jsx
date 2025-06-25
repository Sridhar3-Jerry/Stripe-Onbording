import {motion} from "framer-motion";

function Register({ inputId,type,placeholder,divId,value,onChange,error,name,label,span}){
    return(
        <>
            <div id={divId} className="p-3 w-full flex flex-col items-center">
                <div className="flex justify-between w-full"><label htmlFor={inputId} className="self-start mb-1">{label}</label>
                <span className="text-sm text-[#635bff] cursor-pointer hover:text-black">{span}</span>
                </div>
                
                <motion.input type={type}  
                placeholder={placeholder}
                id={inputId}
                value={value}
                name={name}
                onChange={onChange}
                initial={{opacity: 0,y:-50}}
                animate={{opacity: 1,y:0}}
                transition={{duration: 0.7}}
                whileHover={{scale: 1.06}}
                className=" border border-gray-150  shadow-sm rounded-md h-10 w-full hover:border-2 hover:border-indigo-600"
                />
                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>
        </>
    )
}
export default Register;