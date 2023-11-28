const ContainerConteudo = ({ children }) => {
    return (
        <div className="flex w-full h-full flex-col items-center gap-8">
            {children}
        </div>
    )
}

export default ContainerConteudo