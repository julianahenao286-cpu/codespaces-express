import prisma from "../prisma.js"

export const crearRegistro =(registroData)=> {
    return prisma.registro.create({data: registroData});
}

export const leerRegistro =()=> {
    return prisma.registro.findMany();
}

export const actualizarRegistro =(registroId, registroData)=> {
    return prisma.registro.update({
        where: { id: registroId },
        data: registroData
    });
}

export const eliminarRegistro =()=>{
    return prisma.registro.delete({
        where: { id: registroId}
    })
}