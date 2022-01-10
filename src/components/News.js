import React from 'react'

export default function News({icon, bgColor, amount, name}) {
    return (
        <div className="flex items-center gap-8">
            <i className={`${icon} w-20 h-20 rounded-full flex items-center justify-center bg-${bgColor}-100 text-${bgColor}-500 text-4xl cursor-pointer`}></i>
            <div className="content">
                <h3 className="font-semibold text-3xl text-gray-600">{amount}</h3>
                <p className="font-normal text-lg text-gray-500 normal-case tracking-wider">{name}</p>
            </div>
        </div>
    )
}
