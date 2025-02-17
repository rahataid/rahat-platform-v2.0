'use client';

import { useRouter } from "next/navigation";

const projects = [
    {
        name: "El Kenya",
        id: "el-kenya",
        slug: "111"
    },
    {
        name: "AA",   
        id: "aa",
        slug: "122"
    } 
]


export default function Projects(){
    const router = useRouter();

    const redirectTo = (item:any) => {
        router.push(`/projects/${item.id}/${item.slug}`)
    }
    return (
        <>
        <h1>Projects</h1>
        <ul>
            {projects.map((item) => (
                <li key={item.id} style={{cursor:"pointer"}} onClick={() => redirectTo(item)}>{item.name}</li>
            ))}
        </ul>
        </>
    )
}