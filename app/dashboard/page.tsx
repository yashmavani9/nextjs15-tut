import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
// import { redirect } from "next/navigation";

import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { prisma } from "../utils/db";
import { BlogpostCard } from "@/components/general/BlogpostCard";

async function getData(userId: string){

    //2sec fake delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const data = await prisma.blogPost.findMany({
        where:{
            authorId: userId,
        },
        orderBy:{
            createdAt: 'desc',
        }
    });
    return data;
}

export default async function DashboardRoute(){
    
    //middleware is already protecting this route
    //but if you want to do it manually you can use the code below

    const {getUser} = getKindeServerSession();
    const user = await getUser();

    // //if there is no user found redirect to register page
    // if(!user){
    //     return redirect("/api/auth/register");
    // }


    //why each time data fetching???

    const data = await getData(user.id);


    return(
        <div>
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-medium">Your Blog Articles</h2>
                <Link href="/dashboard/create" className={buttonVariants({variant: "default"})}>
                    Create Post
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.map((item)=> (
                    // <div key={item.id}>
                    //     <h1>{item.title}</h1>
                    // </div>

                    <BlogpostCard data={item} key={item.id}/>
                ))}
            </div>
        </div>
    )
}