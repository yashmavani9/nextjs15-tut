import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

import { handleSubmission } from "@/actions"
import { Submitbutton } from "@/components/general/Submitbutton"

export default function CreateBlogRoute() {

    //inline server action
    // async function handleSubmission(){
    //     'use server'
    //     //code
    // }

    //we will use external server action in actions.ts

    return (
        <Card className="max-w-lg mx-auto">
            <CardHeader>
                <CardTitle  className="mx-auto">Create Post</CardTitle>
                <CardDescription  className="mx-auto">Create a new post to share with the world</CardDescription>
                {/* <CardAction>Card Action</CardAction> */}
            </CardHeader>
            <CardContent>
                <form className="flex flex-col gap-4" action={handleSubmission}>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="">Title</Label>
                        <Input name="title" required type="text" placeholder="Title" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="">Content</Label>
                        <Textarea name="content" required placeholder="Content"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="">Image URL</Label>
                        <Input name="url" required type="url" placeholder="Image URL" />
                    </div>
                    {/* <Button>Create Post</Button> */}
                    <Submitbutton/>
                </form>
            </CardContent>
            {/* <CardFooter>
                <p>Card Footer</p>
            </CardFooter> */}
        </Card>
    )
}