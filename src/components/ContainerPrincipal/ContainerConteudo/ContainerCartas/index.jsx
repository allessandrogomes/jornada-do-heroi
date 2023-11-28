const ContainerCartas = ({ children }) => {
    return (
        <div className="mt-[200px] bg-[#03001C] border-2 p-4 border-purple flex flex-wrap gap-6 justify-evenly w-[90%] min-h-[60vh]">
            {children}
        </div>
    )
}

export default ContainerCartas