"use server";

import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request){
    try{
        const body = await req.json();
        console.log(body);
        const {username, about, gender, items, type, phone, dob} = body;
        const newUser = await prisma.user.create({
            data: {
                username: username,
                about: about,
                gender: gender,
                options: items,
                plan: type,
                phone: phone,
                dob: new Date(dob),
            }
        });
        return NextResponse.json(newUser);
    } catch (error){
        console.error(error);
        return NextResponse.json({error: "An error occurred while trying to save new user."}, {status: 500});
    }
}