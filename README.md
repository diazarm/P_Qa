# 🧪 Todo App - Proyecto de Práctica QA con React + Testing Library

Este es un proyecto simple de una **Lista de Tareas (Todo App)** creado con **React**. Su propósito principal es **practicar pruebas de software (testing)** usando herramientas como:

- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest](https://jestjs.io/)
- Buenas prácticas de aseguramiento de calidad (QA)

## 🎯 Objetivos del proyecto

- Simular una funcionalidad real (agregar, completar y eliminar tareas)
- Escribir pruebas unitarias y de integración para validar el comportamiento de la aplicación
- Practicar el uso de `data-testid`, roles y matchers de accesibilidad
- Detectar y prevenir errores antes de producción

---

## 🚀 ¿Qué funcionalidades tiene?

- ✅ Agregar tareas
- ✅ Marcar tareas como completadas (line-through)
- ✅ Eliminar tareas
- ⚠️ Validación para evitar agregar tareas vacías (opcional)

---

## 📂 Estructura del proyecto

```

src/
├── App.js                # Componente principal
├── index.js              # Punto de entrada
└── **test**/
└── App.test.js       # Pruebas unitarias con Testing Library

````

---

## 🧑‍💻 Cómo ejecutarlo

1. Clona este repositorio o descarga el zip.
2. Instala las dependencias:

```bash
npm install
````

3. Corre la app:

```bash
npm start
```

4. Corre los tests:

```bash
npm test
```

---

## 🧪 ¿Qué se testea?

* Que se pueda agregar una tarea correctamente
* Que se pueda marcar como completada una tarea
* Que se pueda eliminar una tarea
* Que no se permita agregar tareas vacías (opcional)
* Que se rendericen los elementos esperados en el DOM

---

## 📌 Tecnologías usadas

* React
* React Testing Library
* Jest
* HTML y CSS básico

---

## 🧠 Pensado para...

Este proyecto fue creado para personas que están iniciándose en el mundo del testing en desarrollo web, en roles como:

* QA Engineer
* Software Tester
* Frontend Developer
* Estudiantes de bootcamp de desarrollo web

---

## 📝 Licencia

Este proyecto es de uso libre para fines educativos y de práctica. Enjoy! Marcelo.