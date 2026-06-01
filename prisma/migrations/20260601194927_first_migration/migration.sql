-- CreateTable
CREATE TABLE "Rol" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(16) NOT NULL,

    CONSTRAINT "Rol_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(16) NOT NULL,
    "email" VARCHAR(36) NOT NULL,
    "contrasena" VARCHAR(255) NOT NULL,
    "id_rol" INTEGER NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Registro" (
    "id" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "accion" VARCHAR(255) NOT NULL,

    CONSTRAINT "Registro_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Rol_name_key" ON "Rol"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_id_rol_fkey" FOREIGN KEY ("id_rol") REFERENCES "Rol"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registro" ADD CONSTRAINT "Registro_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
