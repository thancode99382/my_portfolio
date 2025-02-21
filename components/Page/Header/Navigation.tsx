import Link from "next/link";

export const menu = [
    {title:"Home" , path: "/#Home"},
    {title:"About" , path: "/#About"},
    {title:"Projects" , path: "/#Projects"},
    {title:"Contact" , path: "/#Contact"},
]


export const Navigation = () =>{
    return <div className = {'hidden md:block w-fit'}>
        <ul className="flex gap-16 font-medium">
                    {menu.map(((item,index)=>(
                        <li key={index}>
                               <Link href = {item.path}> 
                               <div className={"cursor-pointer block text-stone-100 hover:underline hover:text-indigo-300 transition "}>
                                        {item.title}
                               </div>
                               
                               </Link>
                        </li>
                    )))}
        </ul>
    </div>;
}