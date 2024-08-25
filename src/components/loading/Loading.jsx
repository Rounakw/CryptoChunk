import React from 'react'

function Loading() {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-[0.5px] flex justify-center items-center z-50">
            {/* <div class="flex gap-2">
                <div class="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
                <div class="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
                <div class="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
            </div> */}
            <div class="border-gray-300 h-[3rem] w-[3rem] animate-spin rounded-full border-[5px] border-t-yellow-600" />
        </div>
    )
}

export default Loading