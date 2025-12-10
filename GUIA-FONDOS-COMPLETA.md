# 📖 Guía Completa: Personalizar TODOS los Fondos del Aula Virtual

## 📂 Estructura de Archivos
```
aula-virtual/
├── public/
│   └── config-fondos-completo.json    ← ARCHIVO PRINCIPAL DE CONFIGURACIÓN
├── assets/
│   ├── images/
│   │   └── fondos/
│   │       ├── index/                 ← Fondos para página principal
│   │       ├── login/                 ← Fondos para logins
│   │       ├── dashboard/             ← Fondos para dashboards
│   │       └── cursos/                ← Fondos para páginas de cursos
│   └── videos/
│       └── fondos/                    ← Videos de fondo
```

---

## 🎨 CÓMO PERSONALIZAR FONDOS

### **EJEMPLO 1: Cambiar fondo del Hero de la Página Principal**

**Usando una IMAGEN:**

1. Copia tu imagen a: `assets/images/fondos/index/hero-bg.jpg`

2. Edita `config-fondos-completo.json`:
```json
"index": {
  "hero": {
    "type": "image",
    "gradient": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    "image": "assets/images/fondos/index/hero-bg.jpg",
    "video": ""
  }
}
```

3. Guarda y recarga (Ctrl + F5)

---

### **EJEMPLO 2: Cambiar fondo de Login a VIDEO**

1. Copia tu video MP4 a: `assets/videos/fondos/login-bg.mp4`

2. Edita el JSON:
```json
"login-estudiante": {
  "background": {
    "type": "video",
    "gradient": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    "image": "",
    "video": "assets/videos/fondos/login-bg.mp4"
  }
}
```

3. Guarda y recarga

---

### **EJEMPLO 3: Cambiar Hero de Página de Curso**

Para cambiar el hero del curso SketchUp:
```json
"curso-individual": {
  "sketchup": {
    "hero": {
      "type": "image",
      "gradient": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      "image": "assets/images/fondos/cursos/sketchup-hero.jpg",
      "video": ""
    }
  }
}
```

---

## 📍 MAPA DE CONFIGURACIÓN

### **Página Principal (index.html)**
- `index.hero` - Sección superior con título
- `index.body` - Fondo general de la página

### **Login de Estudiante**
- `login-estudiante.background` - Fondo completo

### **Login de Administrador**
- `login-admin.background` - Fondo completo

### **Selección de Usuario**
- `seleccionar-usuario.background` - Fondo completo

### **Dashboard Admin**
- `dashboard-admin.navbar` - Barra superior
- `dashboard-admin.body` - Fondo general
- `dashboard-admin.sidebar` - Menú lateral

### **Página de Cursos Disponibles**
- `cursos-disponibles.hero` - Sección superior
- `cursos-disponibles.body` - Fondo general
- `cursos-disponibles.tarjetas.sketchup` - Tarjeta de SketchUp
- ... (y así para cada curso)

### **Páginas Individuales de Cursos**
- `curso-individual.sketchup.hero` - Header del curso
- `curso-individual.sketchup.body` - Fondo general
- `curso-individual.sketchup.sidebar` - Menú de módulos

---

## 🎯 TIPOS DE FONDO DISPONIBLES

### 1. **gradient** (Gradiente)
```json
{
  "type": "gradient",
  "gradient": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
}
```

### 2. **color** (Color sólido)
```json
{
  "type": "color",
  "color": "#f5f7fa"
}
```

### 3. **image** (Imagen)
```json
{
  "type": "image",
  "image": "assets/images/fondos/mi-imagen.jpg"
}
```

### 4. **video** (Video MP4)
```json
{
  "type": "video",
  "video": "assets/videos/fondos/mi-video.mp4"
}
```

---

## 📤 CÓMO SUBIR TUS ARCHIVOS

### **Opción 1: Copiar manualmente**
1. Abre la carpeta del proyecto
2. Navega a `assets/images/fondos/`
3. Copia tus imágenes/videos ahí

### **Opción 2: Desde la terminal**
```bash
# Copiar una imagen
copy C:\ruta\a\tu\imagen.jpg assets\images\fondos\index\

# Copiar un video
copy C:\ruta\a\tu\video.mp4 assets\videos\fondos\
```

---

## ⚠️ RECOMENDACIONES

### **Imágenes:**
- Formato: JPG, PNG, WEBP
- Tamaño: Máximo 2MB
- Resolución recomendada: 1920x1080

### **Videos:**
- Formato: MP4 (H.264)
- Tamaño: Máximo 10MB
- Resolución: 1280x720
- Duración: 10-30 segundos

---

## 🔧 Solución de Problemas

### ❌ No veo los cambios
- Recarga con Ctrl + Shift + R

### ❌ La imagen no carga
- Verifica la ruta en el JSON
- Asegúrate que el archivo existe

### ❌ El video no se reproduce
- Usa formato MP4
- Comprime el video si es muy grande

---

## 💡 Ejemplos de Rutas Correctas

✅ CORRECTO:
```json
"image": "assets/images/fondos/index/hero.jpg"
```

❌ INCORRECTO:
```json
"image": "assets\\images\\fondos\\index\\hero.jpg"
"image": "/assets/images/fondos/index/hero.jpg"
```

---

¿Necesitas ayuda? Contacta al administrador del sistema.