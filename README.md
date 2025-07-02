# 🧪 Todo App - Proyecto de Práctica QA con React + Testing Library + Cypress

Este es un proyecto simple de una **Lista de Tareas (Todo App)** creado con **React**. Su propósito principal es **practicar pruebas de software (testing)** tanto a nivel de componentes como pruebas end-to-end (E2E), usando:

- ✅ React Testing Library
- ✅ Jest
- ✅ Cypress
- ✅ Buenas prácticas de aseguramiento de calidad (QA)

---

## 🎯 Objetivos del proyecto

- Simular una funcionalidad real (agregar, completar y eliminar tareas)
- Escribir pruebas unitarias y de integración
- Escribir pruebas E2E simulando la interacción real del usuario en el navegador
- Asegurar calidad desde la experiencia del usuario

---

## 🚀 Funcionalidades

- ✅ Agregar tareas
- ✅ Marcar tareas como completadas
- ✅ Eliminar tareas
- ⚠️ Validación para evitar agregar tareas vacías (opcional)

---

## 🧪 Testing con React Testing Library + Jest

Las pruebas unitarias están ubicadas en:

```

src/
└── **test**/
└── App.test.js

````

Para correr los tests:

```bash
npm test
````

---

## 🌐 Testing End-to-End (E2E) con Cypress

Las pruebas E2E están ubicadas en:

```
cypress/
└── e2e/
    └── todo.cy.js
```

### 🛠 Instalación de Cypress

```bash
npm install --save-dev cypress
```

### ▶️ Correr Cypress en modo interactivo

```bash
npx cypress open
```

Esto abrirá una interfaz donde puedes ejecutar los tests y ver cómo interactúan con la app.

### 🧠 Nota sobre `cy is not defined`

Si en tu editor (VSCode) te aparece `cy is not defined`, agregá esta línea al comienzo de tu archivo de pruebas:

```js
/// <reference types="cypress" />
```

Esto le dice al editor que `cy` es una variable global provista por Cypress.

---

## 🧑‍💻 Cómo iniciar el proyecto

```bash
npm install
npm start
```

La app estará corriendo en `http://localhost:3000`, que es la URL usada por Cypress para realizar las pruebas.

---

## 📌 Tecnologías usadas

* React
* React Testing Library
* Jest
* Cypress
* HTML + CSS

---

## 🎓 Pensado para...

* Estudiantes que estén aprendiendo QA y testing frontend
* Roles de QA Manual y QA Automation
* Desarrolladores frontend que deseen mejorar la calidad de su código
* Proyectos de bootcamp o prácticas profesionales

---

## 📝 Licencia

Este proyecto es de uso libre para fines educativos y de práctica. Enjoy! Marcelo.