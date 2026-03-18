import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import * as yup from 'yup';

export async function GET(request: Request) {
    const {searchParams} = new URL(request.url);
    const take = Number(searchParams.get('take') ?? '10');
    const skip = Number(searchParams.get('skip') ?? '0');

    if(isNaN(skip)) {
        throw NextResponse.json({message: 'Skip tiene que ser un numero'}, {status: 400})
    }

    if(isNaN(take)) {
        throw NextResponse.json({message: 'Take tiene que ser un numero'}, {status: 400})
    }

    const todos = await prisma.todo.findMany({
        take: take,
        skip: skip
    });

    return NextResponse.json(todos);
}

const postSchema = yup.object({
    description: yup.string().required(),
    complete: yup.boolean().optional().default(false),
})

export async function POST(request: Request) {

    try {
        // Si dejamos body, el validador al entrar en data (data:body) fallara si encuentra otro campo
        // en muchos casos yo preferiria eso, para saber si me guarda todo o no, sin tener que checar la
        // base de datos, pero si queremos que solo evalue los campos esperados, se hace como abajo.
        const {complete, description} = await postSchema.validate(await request.json());

        const todo = await prisma.todo.create({
            data: {complete, description}
        });
    
        return NextResponse.json(todo);
    } catch(error) {
        return NextResponse.json(error, {status: 400});
    }
}

export async function DELETE(request: Request) {
    try {
        await prisma.todo.deleteMany({where: {complete: true}});

        return NextResponse.json('Todos borrados');
    } catch (error) {
        return NextResponse.json(error, {status: 400})
    }
}