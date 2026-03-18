export const dynamic = 'force-dynamic';
export const revalidate = 0;

import prisma from "@/lib/prisma"
import { NewTodo, TodosGrid } from "@/todos"

export const metadata = {
  title: 'Listado de todos',
  description: 'SEO title'
}

export default async function RestTodosPage() {

  //Del lado del servidor
  const todos = await prisma.todo.findMany({
    orderBy: {
      description: 'asc'
    }
  })

  // del lado del cliente
  // useEffect(() => {
  //   fetch('/api/todos')
  //     .then(resp => resp.json())
  //     .then(console.log);
  // }, []);

  return (
    <div>
      <div className="">
        <NewTodo/>
      </div>
      <TodosGrid todos={todos}/>
    </div>
  )
}
