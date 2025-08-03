const Categories = () => {
    return (
        <div className='w-full h-[100px] flex justify-center items-center px-12'>
            <div className="w-[120px] h-[30px] flex justify-start items-center bg-white rounded-sm ">
                <div className="max-w-1/4 h-full text-center items-center flex bg-green-300 px-2 rounded-bl-sm rounded-tl-sm text-2xl font-mono">#</div>
                <div className="w-auto">
                    <p className="text-left px-2 text-base">
                        Work {/*Temporal category for layout/testing purposes*/}
                    </p>                  
                </div>
            </div>
        </div>
    )
}

export default Categories