import React from 'react'



export const Header = ({ title }) => {
return (
<div className="md:w-1/2 flex flex-col justify-start items-start px-6 py-6 relative" >
   
    <div className="text-[#6E6D6D] text-xl mb-2 text-left w-full">Welcome to JaMoveo</div>
    <div className="font-bold text-2xl md:text-3xl mb-0 text-[#937100] text-left w-full">
        { title  }
    </div>
   
</div>
);
}
