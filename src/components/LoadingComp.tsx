

export function CreateLoadingComp() {
    return (
        <div>
            <div className="flex-col flex w-48 h-72 justify-center overflow-hidden rounded-lg p-2 animate-pulse">
                <div className="w-44 h-64 rounded-lg object-cover m-auto bg-gray-300 animate-pulse"></div>
                <div className="flex justify-end mt-2">
                    <div className="w-16 h-8 rounded-md bg-gray-300 animate-pulse"></div>
                </div>
                <div className="w-full h-8 rounded-md bg-gray-300 mt-2 animate-pulse"></div>
            </div>
        </div>
    );
}


function LoadingComp() {
    return (
        <>
        <div className="grid lg:grid-cols-5 md:grid-cols-3">
            <CreateLoadingComp />
            <CreateLoadingComp />
            <CreateLoadingComp />
            <CreateLoadingComp />
            <CreateLoadingComp />
            <CreateLoadingComp />
        </div>
        </>
    );
}

export default LoadingComp;
