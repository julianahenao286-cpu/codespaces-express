import prisma from "../prisma.js"

export const crearRol =(rolData)=> {
    return prisma.rol.create({data: rolData});
}

export const leerRol =(id)=> {
    return prisma.rol.findMany();
}

export const actualizarRol =()=> {
    return prisma.rol.update({
        where: { id: rolId },
        data: rolData
    });
}

export const eliminarRol =()=>{
    return prisma.rol.delete({
        where: { id: rolId}
    })
}