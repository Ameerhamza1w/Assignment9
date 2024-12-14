import Image from "next/image"
 function HeroSection() {
return (
        <main className="flex gap-8 mt-20 mx-44">
        <div className="w-1/2 h-full">
         <h1 className= "text-blue-900 font-extrabold text-[4rem] ">Governor Sindh</h1> 
         <h1 className="text-blue-900 font-medium text-[2.5rem] leading-3">Kamran Khan Tessori</h1> <br/> 
         <p className="text-blue-500 font-extrabold text-[3rem] leading-[50px]">Certified Cloud <br />
         Applied Generative AI  <br />
         Engineer (GenEng)
            </p>      
            <p className="text-blue-900 font-extrabold text-[1.5rem]">
            Earn up to $5,000 / month   <br />
            Now admissions are open in Hyderabad
            </p> <br />
            <div className="flex gap-10">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl">
          Apply Now
        </button>
        <p className="text-blue-700 text-lg font-bold">562,143 <br />
               Accepted Applications </p>
            </div>
                 </div>
                 
                 <div className="w-6/12 h-full mr-[-50px] justify-end">
        <Image  src="/image.png" alt="governorof sindh"
        width={1900} height={2000}
        />
        </div>

    </main>


    
    

    )
}

export default HeroSection