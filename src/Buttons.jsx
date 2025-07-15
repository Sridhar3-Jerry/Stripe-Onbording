function Buttons({children}){
    return(
        <div className="bg-white flex justify-center items-center w-full px-3">
                <button className="flex justify-center border h-10 w-full py-1.5 rounded-lg hover:bg-gray-30 gap-1 hover:bg-gray-100">
                  {children}
                </button>
        </div>
    )
}
export default Buttons;

