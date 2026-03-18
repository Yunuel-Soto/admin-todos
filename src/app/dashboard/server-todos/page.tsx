export const dynamic = 'force-dynamic';
export const revalidate = 0;

import prisma from "@/lib/prisma"
import { NewTodo, TodosGrid } from "@/todos"

export const metadata = {
    title: 'Listado de todos',
    description: 'SEO title'
}

export default async function ServiderTodosPage() {

    const todos = await prisma.todo.findMany({
        orderBy: {
            description: 'asc'
        }
    })

    return (
        <>
            <span className="text-3xl m-10">Server Actions</span>
            <div className="">
                <NewTodo />
            </div>
            <TodosGrid todos={todos} />
        </>
    )
}
