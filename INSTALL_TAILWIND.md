# Instalación de TailwindCSS

Para instalar las dependencias de TailwindCSS en el contenedor Docker, ejecuta:

```bash
# Detener el contenedor actual
docker-compose down

# Reconstruir e iniciar con las nuevas dependencias
docker-compose up --build
```

O si prefieres instalar manualmente dentro del contenedor:

```bash
# Iniciar el contenedor
docker-compose up -d

# Ejecutar npm install dentro del contenedor
docker-compose exec dgbackerycakesite npm install

# Ver los logs
docker-compose logs -f
```

Las dependencias que se instalarán:
- @astrojs/tailwind: ^5.1.2
- tailwindcss: ^3.4.1

Una vez instaladas, el sitio se recargará automáticamente con los nuevos estilos de Tailwind.
