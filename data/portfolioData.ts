export interface ProjectItem {
  id: string;
  weekTag: string;
  title: string;
  shortDescription: string;
  problem: string;
  objective: string;
  technologies: string[];
  solutionExplanation: string;
  results: string;
  codeSnippet: string;
  codeLanguage: string;
  images: { src: string; caption: string }[];
  repoUrl: string;
}

export const portfolioData = {
  hero: {
    fullName: "Andrea Lissette Pineda Martínez",
    role: "Estudiante de Bachillerato y ¡Supérate! · Futura Química Farmacéutica",
    tagline:
      "Combinando curiosidad científica, análisis de datos y diseño visual para construir proyectos útiles y con identidad propia.",
    avatarUrl: "/evidencias/avatar.jpg",
    githubUrl: "https://github.com/Lizzyma44/Portafolio_IT",
    linkedinUrl: "https://www.linkedin.com/in/andy-pineda-es",
    email: "andreapineda895@gmail.com",
  },

  about: {
    whoIAm:
      "Soy estudiante de 2.° año de Bachillerato y becaria del programa empresarial ¡Supérate!. Me defino como una persona creativa, observadora y metódica, con verdadera vocación por las ciencias experimentales, el diseño visual y el aprendizaje constante.",
    whatIStudy:
      "",
    interests: [
        "Química, Farmacia y Formulación Cosmética",
      "Análisis de datos aplicado a la investigación y toma de decisiones",
      "Ilustración, pintura, diseño visual y paletas cromáticas",
      "Herramientas digitales prácticas para organizar y presentar proyectos",
    ],
    goals:
      "Mi objetivo personal es seguir desarrollando mis habilidades creativas y académicas con disciplina; a nivel profesional busco graduarme en Química y Farmacia, especializarme en el área farmacéutica y cosmética, y aprovechar el manejo de datos y herramientas digitales como un complemento valioso en mi carrera científica.",
    strengths: [
      "Pensamiento analítico y resolución metódica de problemas",
      "Diseño visual con identidad propia y atención al detalle",
      "Aprendizaje autónomo y adaptabilidad tecnológica",
      "Trabajo colaborativo y liderazgo en proyectos académicos",
    ],
  },

  experience: [
    {
      period: "2026 · Período de 10 Semanas IA & Web",
      title: "Desarrolladora de Proyectos de Machine Learning y Web Full-Stack",
      organization: "Programa Empresarial ¡Supérate! – Módulo de Tecnología",
      type: "Experiencia Académica y Proyectos",
      description:
        "Diseño, entrenamiento y evaluación de modelos de aprendizaje supervisado y no supervisado en Python, culminando con el desarrollo y despliegue de un portafolio web en Next.js y Vercel.",
      achievements: [
        "Implementación de modelos de Regresión Lineal, generación de laberintos con recursividad/búsqueda, clustering K-Means y clasificación KNN.",
        "Análisis geoespacial de puntos comerciales reales en San Miguel con OpenStreetMap, K-Means, KNN y mapas interactivos en Folium.",
        "Construcción de interfaz responsive con React, TypeScript, Tailwind CSS y endpoint REST POST /api/contact.",
      ],
    },
    {
      period: "20242026",
      title: "Voluntaria de Levantamiento Comunitario",
      organization: "TECHO El Salvador",
      type: "Voluntariado",
      description:
        "Participación activa en jornadas de campo para la recolección de información socioeconómica y diagnóstico de necesidades en comunidades locales.",
      achievements: [
        "Aplicación rigurosa de encuestas de perfil comunitario y trabajo directo con familias.",
        "Fortalecimiento de habilidades de empatía, comunicación asertiva y trabajo en equipo bajo presión.",
      ],
    },
    {
      period: "2024 – 2026",
      title: "Participante en Expo de Logros y Hackathon Power Apps",
      organization: "Programa Empresarial ¡Supérate!",
      type: "Actividades Extracurriculares",
      description:
        "Desarrollo de soluciones tecnológicas aplicadas y presentación de prototipos funcionales ante evaluadores y compañeros.",
      achievements: [
        "Creación de aplicación funcional durante el Hackathon de Power Apps en primer año.",
        "Exposición estructurada de proyectos académicos y tecnológicos en Expo de Logros.",
      ],
    },
  ],

  projects: [
    {
      id: "regresion-lineal",
      weekTag: "Actividad 1 · Semana 3",
      title: "Modelo Predictivo con Regresión Lineal",
      shortDescription:
        "Modelo de regresión lineal entrenado con 30 registros de horas de estudio y score para predecir calificaciones y visualizar la recta de tendencia.",
      problem:
        "Estimar el puntaje (SCORE) esperado a partir de las horas de estudio (HORAS_ESTUDIO) y validar que las entradas del usuario estén dentro del rango observado.",
      objective:
        "Construir un modelo LinearRegression con scikit-learn, evaluar métricas como R² y MSE, permitir predicciones interactivas y graficar los datos reales junto con la predicción.",
      technologies: ["Python", "Pandas", "Matplotlib", "Scikit-learn", "LinearRegression"],
      solutionExplanation:
        "Se creó un DataFrame de 30 registros de HORAS_ESTUDIO (1 a 30) y SCORE (2 a 26), se entrenó LinearRegression para obtener pendiente e intercepto, se calcularon R² y MSE, y se añadió validación para verificar si el valor ingresado está entre el mínimo y el máximo del dataset antes de graficar.",
      results:
        "El modelo calcula pendiente, intercepto, R² y MSE, predice el score redondeado a dos decimales para entradas válidas y genera un gráfico con datos reales en azul, recta de regresión en rojo y el punto predicho en verde.",
      codeSnippet: `import pandas as pd
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score

# 1. Crear la base de datos con 30 registros
data = {
    "HORAS_ESTUDIO": [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30
    ],

    "SCORE": [
        2, 3, 4, 5, 6, 7, 7, 8, 9, 10,
        10, 11, 12, 13, 14, 14, 15, 16, 17, 18,
        18, 19, 20, 21, 22, 22, 23, 24, 25, 26
    ]
}

# 2. Convertir los datos en un DataFrame
df = pd.DataFrame(data)

print("BASE DE DATOS")
print(df)

# 3. Definir las variables
X = df[["HORAS_ESTUDIO"]]
y = df["SCORE"]

# 4. Crear y entrenar el modelo
modelo = LinearRegression()
modelo.fit(X, y)

# 5. Realizar predicciones
y_pred = modelo.predict(X)

# 6. Mostrar resultados del modelo
print("\\nRESULTADOS DEL MODELO")
print("Pendiente:", modelo.coef_[0])
print("Intercepto:", modelo.intercept_)
print("R²:", r2_score(y, y_pred))
print("MSE:", mean_squared_error(y, y_pred))

# 7. Obtener el rango de horas de estudio
minimo = df["HORAS_ESTUDIO"].min()
maximo = df["HORAS_ESTUDIO"].max()

print("\\nRANGO DISPONIBLE")
print("Horas mínimas:", minimo)
print("Horas máximas:", maximo)

# 8. Solicitar las horas de estudio al usuario
try:
    horas = float(input("\\nIngrese las horas de estudio: "))

    # 9. Validar el dato ingresado
    if horas > maximo:
        print("El dato ingresado es superior al rango disponible en la base de datos.")
    elif horas < minimo:
        print("El dato ingresado es inferior al rango disponible en la base de datos.")
    else:
        # 10. Realizar la predicción
        nuevo_dato = pd.DataFrame({
            "HORAS_ESTUDIO": [horas]
        })

        prediccion = modelo.predict(nuevo_dato)

        print("\\nRESULTADO DE LA PREDICCIÓN")
        print("Horas de estudio:", horas)
        print("Score predicho:", round(prediccion[0], 2))

        # 11. Mostrar el gráfico
        plt.scatter(X, y, color="blue", label="Datos reales")
        plt.plot(X, y_pred, color="red", label="Regresión lineal")

        # Mostrar el dato ingresado por el usuario
        plt.scatter(
            horas,
            prediccion[0],
            color="green",
            s=100,
            label="Predicción"
        )

        plt.xlabel("Horas de estudio")
        plt.ylabel("Score")
        plt.title("Regresión Lineal: Horas de Estudio y Score")
        plt.legend()
        plt.grid(True)

        plt.show()

except ValueError:
    print("Error: debe ingresar un valor numérico.")`,
      codeLanguage: "python",
      images: [
        {
          src: "/evidencias/regresion-1.png",
          caption: "Gráfico de dispersión, recta de regresión lineal y punto predicho",
        },
      ],
      repoUrl: "https://github.com/TU-USUARIO/Portafolio_IT",
    },
    {
      id: "laberinto-arboles",
      weekTag: "Actividad 2 · Semana 4",
      title: "Generación y Exploración de Laberinto en Python",
      shortDescription:
        "Generador procedural de laberintos de 21x41 con caminos aleatorios, paredes ('█'), entrada ('E') y salida ('S') usando recursividad.",
      problem:
        "Construir de forma automática un laberinto navegable y sin ciclos cerrados triviales a partir de una matriz inicial llena de muros.",
      objective:
        "Implementar un algoritmo recursivo de talla de caminos (recursive backtracker) con direcciones aleatorias y delimitar claramente la entrada y la salida.",
      technologies: ["Python", "random", "Matrices 2D", "Recursividad"],
      solutionExplanation:
        "Se inicializa una cuadrícula de 21 filas por 41 columnas rellena con '█'. La función crear_camino(x, y) marca la celda actual como espacio libre (' '), mezcla aleatoriamente los desplazamientos de paso 2 ((0, 2), (0, -2), (2, 0), (-2, 0)), verifica límites y abre la pared intermedia antes de avanzar recursivamente.",
      results:
        "Se genera un laberinto aleatorio distinto en cada ejecución con 'E' en (1, 1) y 'S' en (filas - 2, columnas - 2), impreso en consola como un mapa de caracteres.",
      codeSnippet: `import random

# Tamaño del laberinto
filas = 21
columnas = 41

# Crear el laberinto lleno de paredes
laberinto = []

for i in range(filas):
    fila = []
    for j in range(columnas):
        fila.append("█")
    laberinto.append(fila)

# Empezar a crear los caminos
def crear_camino(x, y):
    laberinto[x][y] = " "

    direcciones = [
        (0, 2),
        (0, -2),
        (2, 0),
        (-2, 0)
    ]

    random.shuffle(direcciones)

    for dx, dy in direcciones:
        nx = x + dx
        ny = y + dy

        if 0 < nx < filas - 1 and 0 < ny < columnas - 1:
            if laberinto[nx][ny] == "█":
                laberinto[x + dx // 2][y + dy // 2] = " "
                crear_camino(nx, ny)

# Crear caminos desde la primera casilla
crear_camino(1, 1)

# Colocar entrada y salida
laberinto[1][1] = "E"
laberinto[filas - 2][columnas - 2] = "S"

# Mostrar el laberinto
print("MI LABERINTO ALEATORIO")
print()

for fila in laberinto:
    print("".join(fila))`,
      codeLanguage: "python",
      images: [
        {
          src: "/evidencias/laberinto-1.png",
          caption: "Salida en consola del laberinto aleatorio con entrada 'E' y salida 'S'",
        },
      ],
      repoUrl: "https://github.com/TU-USUARIO/Portafolio_IT",
    },
    {
      id: "ai-challenge-kmeans-knn",
      weekTag: "Actividad 3 · AI Challenge",
      title: "AI Challenge: K-Means Clustering y KNN en 500 Estudiantes",
      shortDescription:
        "Simulación de 500 estudiantes con hábitos académicos para segmentar grupos mediante K-Means (K=3 y K=4) y predecir aprobación con KNN.",
      problem:
        "Agrupar perfiles estudiantiles según horas de estudio, asistencia, tareas entregadas y nota final, y clasificar si un estudiante aprueba (nota >= 70) usando vecinos cercanos.",
      objective:
        "Normalizar variables con StandardScaler, comparar exactitud de KNN para distintos valores de k (con y sin normalización) y predecir la probabilidad de aprobar de un caso nuevo.",
      technologies: ["Python", "NumPy", "Pandas", "Seaborn", "Matplotlib", "Scikit-learn (KMeans, KNN, StandardScaler)"],
      solutionExplanation:
        "Se generaron 500 registros sintéticos con HorasEstudio, Asistencia, TareasEntregadas, NotaFinal y la etiqueta binaria Aprobado. Para K-Means se escalaron las 4 variables y se entrenaron modelos con K=3 y K=4; para KNN se dividió el dataset 75%/25% y se evaluó k en [1, 3, 5, 7, 11, 15, 21] comparando datos normalizados vs. sin normalizar.",
      results:
        "Se obtuvo la dispersión de clústeres para K=3, una tabla comparativa de exactitud según k y la predicción de clase y probabilidad para un estudiante con 4 horas de estudio, 55% de asistencia y 50% de tareas usando k=5.",
      codeSnippet: `import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import seaborn as sns
from sklearn.cluster import KMeans
from sklearn.metrics import accuracy_score, classification_report
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.preprocessing import StandardScaler

# ==========================================
# 1. PREPARACIÓN DE DATOS (500 estudiantes)
# ==========================================
np.random.seed(42)
n_students = 500

# Generamos variables sintéticas realistas
horas_estudio = np.random.uniform(1, 12, n_students)
asistencia = np.random.uniform(40, 100, n_students)
tareas = np.random.uniform(20, 100, n_students)

nota = (
    (horas_estudio * 3.0) + (asistencia * 0.4) + (tareas * 0.3)
) + np.random.normal(0, 4, n_students)
nota = np.clip(nota, 0, 100)

aprobado = (nota >= 70).astype(int)

df = pd.DataFrame(
    {
        "HorasEstudio": horas_estudio,
        "Asistencia": asistencia,
        "TareasEntregadas": tareas,
        "NotaFinal": nota,
        "Aprobado": aprobado,
    }
)

print("--- Primeras filas del Dataset ---")
print(df.head())
print(f"Estudiantes aprobados: {df['Aprobado'].sum()} de {n_students}")
print("-" * 40)

# ==========================================
# 2. K-MEANS CLUSTERING (K=3 y K=4)
# ==========================================
X_cluster = df[["HorasEstudio", "Asistencia", "TareasEntregadas", "NotaFinal"]]

scaler_km = StandardScaler()
X_cluster_scaled = scaler_km.fit_transform(X_cluster)

kmeans_3 = KMeans(n_clusters=3, random_state=42, n_init=10)
df["Cluster_3"] = kmeans_3.fit_predict(X_cluster_scaled)

kmeans_4 = KMeans(n_clusters=4, random_state=42, n_init=10)
df["Cluster_4"] = kmeans_4.fit_predict(X_cluster_scaled)

plt.figure(figsize=(10, 5))
sns.scatterplot(
    x="HorasEstudio",
    y="NotaFinal",
    hue="Cluster_3",
    data=df,
    palette="Set1",
    s=60,
)
plt.title("K-Means Clustering (K=3): Horas de Estudio vs Nota Final")
plt.xlabel("Horas de Estudio Semanales")
plt.ylabel("Nota Final")
plt.show()

# ==========================================
# 3. KNN CLASSIFICATION (Entrenamiento y Experimentación)
# ==========================================
X = df[["HorasEstudio", "Asistencia", "TareasEntregadas"]]
y = df["Aprobado"]

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.25, random_state=42
)

scaler_knn = StandardScaler()
X_train_scaled = scaler_knn.fit_transform(X_train)
X_test_scaled = scaler_knn.transform(X_test)

k_values = [1, 3, 5, 7, 11, 15, 21]
acc_norm = []
acc_unnorm = []

for k in k_values:
    knn_n = KNeighborsClassifier(n_neighbors=k)
    knn_n.fit(X_train_scaled, y_train)
    acc_norm.append(accuracy_score(y_test, knn_n.predict(X_test_scaled)))

    knn_u = KNeighborsClassifier(n_neighbors=k)
    knn_u.fit(X_train, y_train)
    acc_unnorm.append(accuracy_score(y_test, knn_u.predict(X_test)))

resultados_experimentacion = pd.DataFrame(
    {
        "k": k_values,
        "Exactitud (Normalizado)": [round(a, 4) for a in acc_norm],
        "Exactitud (Sin Normalizar)": [round(a, 4) for a in acc_unnorm],
    }
)
print("\\n--- Resultados Experimentación KNN ---")
print(resultados_experimentacion)
print("-" * 40)

# ==========================================
# 4. DESAFÍO FINAL (Predicción Estudiante Específico)
# ==========================================
estudiante_nuevo = pd.DataFrame(
    [[4.0, 55.0, 50.0]], columns=["HorasEstudio", "Asistencia", "TareasEntregadas"]
)

best_k = 5
knn_final = KNeighborsClassifier(n_neighbors=best_k)
knn_final.fit(X_train_scaled, y_train)

estudiante_scaled = scaler_knn.transform(estudiante_nuevo)
prediccion = knn_final.predict(estudiante_scaled)
probabilidad = knn_final.predict_proba(estudiante_scaled)

print("\\n--- Resultado del Desafío Final ---")
print(
    f"Predicción (1 = Aprueba, 0 = Reprueba): {'Aprobará' if prediccion[0] == 1 else 'Reprobará'}"
)
print(
    f"Probabilidades -> Reprobar: {probabilidad[0][0]*100:.2f}% | Aprobar: {probabilidad[0][1]*100:.2f}%"
)`,
      codeLanguage: "python",
      images: [
        {
          src: "/evidencias/challenge-1.png",
          caption: "Gráfico de clústeres K-Means (K=3) y métricas de KNN en Colab",
        },
      ],
      repoUrl: "https://github.com/Lizzyma44/Portafolio_IT",
    },
    {
      id: "hotspots-comerciales",
      weekTag: "Actividad 4 · Hotspots Comerciales",
      title: "Hotspots Comerciales: Súper Selectos en San Miguel",
      shortDescription:
        "Prototipo en 4 fases (EDA, K-Means, KNN y mapa interactivo en Folium) sobre sucursales y zonas en San Miguel con datos de OpenStreetMap.",
      problem:
        "Analizar la distribución geográfica de puntos en San Miguel, agrupar zonas cercanas mediante K-Means y clasificar la categoría de una nueva ubicación propuesta usando distancia euclidiana con KNN.",
      objective:
        "Limpiar y exportar el dataset a CSV, evaluar K=2, 3 y 4 justificando K=3, clasificar una ubicación propuesta con k=3 vecinos y generar el mapa interactivo mapa_hotspots_san_miguel.html.",
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn (KMeans, KNN)", "Folium", "OpenStreetMap"],
      solutionExplanation:
        "En la Fase A se eliminaron duplicados/nulos por latitud y longitud, se exportó dataset_selectos_san_miguel.csv y se revisó la distribución por categoría. En la Fase B se probó K en [2, 3, 4], se eligió K=3 por los ejes operativos de San Miguel y se obtuvieron centroides. En la Fase C se entrenó KNN (k=3, distancia euclidiana) para clasificar [13.4840, -88.1765] y en la Fase D se dibujaron marcadores, centroides, ubicación propuesta y líneas de vecinos en Folium.",
      results:
        "Exportación de dataset_selectos_san_miguel.csv, cálculo de centroides e inercia para K=3, identificación de los 3 vecinos más cercanos con sus distancias y generación del mapa interactivo mapa_hotspots_san_miguel.html.",
      codeSnippet: `# =====================================================================
# PROYECTO: HOTSPOTS COMERCIALES DE EL SALVADOR
# Caso: Súper Selectos - Departamento de San Miguel
# Fases: A (Recolección/Limpieza/EDA), B (K-Means), C (KNN)
# =====================================================================

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
from sklearn.neighbors import KNeighborsClassifier

print("=== INICIANDO PROTOTIPO ACADÉMICO: SÚPER SELECTOS (SAN MIGUEL) ===\\n")

# ---------------------------------------------------------------------
# FASE A: RECOLECCIÓN, PREPARACIÓN Y ANÁLISIS EXPLORATORIO (EDA)
# ---------------------------------------------------------------------
print("--- FASE A: Recolección, Limpieza y Exploración ---")

datos_osm = {
    'name': [
        'Súper Selectos El Triángulo',
        'Súper Selectos Metrocentro San Miguel',
        'Súper Selectos Centro (Catedral)',
        'Súper Selectos Roosevelt',
        'Súper Selectos Panamericana',
        'Súper Selectos Terminal'
    ],
    'category': [
        'Zona_Comercial_Alta',
        'Zona_Comercial_Alta',
        'Zona_Centro_Historico',
        'Zona_Corredor_Vial',
        'Zona_Periferia_Industrial',
        'Zona_Centro_Historico'
    ],
    'latitude': [13.4795, 13.4912, 13.4831, 13.4855, 13.4710, 13.4810],
    'longitude': [-88.1708, -88.1852, -88.1812, -88.1780, -88.1945, -88.1835],
    'city_municipality': ['San Miguel', 'San Miguel', 'San Miguel', 'San Miguel', 'San Miguel', 'San Miguel']
}

df = pd.DataFrame(datos_osm)

filas_iniciales = len(df)
df = df.drop_duplicates(subset=['latitude', 'longitude'])
df = df.dropna(subset=['latitude', 'longitude'])
print(f"[Limpieza] Filas iniciales: {filas_iniciales} | Filas limpias finales: {len(df)}")

df.to_csv('dataset_selectos_san_miguel.csv', index=False, encoding='utf-8')
print("[Exportación] Dataset exportado exitosamente como 'dataset_selectos_san_miguel.csv'.")

print(f"\\n[EDA] Número total de puntos analizados: {len(df)}")
print("[EDA] Distribución por categorías de zona:")
print(df['category'].value_counts())
print("-" * 50)

# ---------------------------------------------------------------------
# FASE B: K-MEANS (AGRUPAMIENTO GEOGRÁFICO)
# ---------------------------------------------------------------------
print("\\n--- FASE B: K-Means (Agrupamiento Espacial) ---")

X = df[['latitude', 'longitude']]

for k_test in [2, 3, 4]:
    km_test = KMeans(n_clusters=k_test, random_state=42, n_init=10)
    km_test.fit(X)
    print(f" -> K = {k_test} evaluado. Inercia: {km_test.inertia_:.4f}")

K_elegido = 3
kmeans = KMeans(n_clusters=K_elegido, random_state=42, n_init=10)
df['cluster'] = kmeans.fit_predict(X)
centroides = kmeans.cluster_centers_

print("\\n[K-Means] Coordenadas de los Centroides obtenidos:")
for i, c in enumerate(centroides):
    print(f" - Centroide Cluster {i}: Lat {c[0]:.4f}, Lon {c[1]:.4f}")

# ---------------------------------------------------------------------
# FASE C: KNN (CLASIFICACIÓN DE UNA UBICACIÓN NUEVA)
# ---------------------------------------------------------------------
print("\\n--- FASE C: KNN (K-Nearest Neighbors) ---")

y = df['category']
k_vecinos = 3
knn = KNeighborsClassifier(n_neighbors=k_vecinos, metric='euclidean')
knn.fit(X, y)

nueva_ubicacion = pd.DataFrame({'latitude': [13.4840], 'longitude': [-88.1765]})
clase_predicha = knn.predict(nueva_ubicacion)
distancias, indices = knn.kneighbors(nueva_ubicacion)

print(f"\\n[Resultado KNN] Categoría / Clase asignada: {clase_predicha[0]}")
for dist, idx in zip(distancias[0], indices[0]):
    sucursal = df.iloc[idx]
    print(f" -> Sucursal: {sucursal['name']} | Categoría: {sucursal['category']} | Distancia: {dist:.5f}°")

# ---------------------------------------------------------------------
# FASE D: MAPA INTERACTIVO Y PROTOTIPO (FOLIUM)
# ---------------------------------------------------------------------
import folium

map_center = [df['latitude'].mean(), df['longitude'].mean()]
m = folium.Map(location=map_center, zoom_start=13, tiles='CartoDB positron')

cluster_colors = ['red', 'blue', 'green']

for idx, row in df.iterrows():
    color = cluster_colors[row['cluster']]
    folium.CircleMarker(
        location=[row['latitude'], row['longitude']],
        radius=9,
        popup=f"<b>{row['name']}</b><br>Categoría: {row['category']}<br>Cluster: {row['cluster']}",
        color=color,
        fill=True,
        fill_color=color,
        fill_opacity=0.8
    ).add_to(m)

for i, c in enumerate(centroides):
    folium.Marker(
        location=[c[0], c[1]],
        popup=f"<b>Centroide Cluster {i}</b><br>Lat: {c[0]:.4f}, Lon: {c[1]:.4f}",
        icon=folium.Icon(color='black', icon='star', prefix='fa')
    ).add_to(m)

nueva_lat = nueva_ubicacion['latitude'][0]
nueva_lon = nueva_ubicacion['longitude'][0]
folium.Marker(
    location=[nueva_lat, nueva_lon],
    popup=f"<b>Ubicación Propuesta</b><br>Clase KNN: {clase_predicha[0]}",
    icon=folium.Icon(color='orange', icon='map-marker', prefix='fa')
).add_to(m)

for dist, idx in zip(distancias[0], indices[0]):
    vecino = df.iloc[idx]
    folium.PolyLine(
        locations=[[nueva_lat, nueva_lon], [vecino['latitude'], vecino['longitude']]],
        color='purple',
        weight=2,
        opacity=0.7,
        tooltip=f"Vecino KNN - {vecino['name']} (Distancia: {dist:.4f}°)"
    ).add_to(m)

m.save('mapa_hotspots_san_miguel.html')
print("[Mapa] Mapa interactivo generado como 'mapa_hotspots_san_miguel.html'.")`,
      codeLanguage: "python",
      images: [
        {
          src: "/evidencias/hotspots-1.png",
          caption: "Mapa interactivo de hotspots comerciales y vecinos KNN en San Miguel",
        },
      ],
      repoUrl: "https://github.com/Lizzyma44/Portafolio_IT",
    },
    {
      id: "arquitectura-fullstack",
      weekTag: "Actividad 5 · Desarrollo Web & Backend",
      title: "Portafolio Digital Full-Stack & API REST en Next.js",
      shortDescription:
        "Aplicación web desarrollada con Next.js (App Router), React, TypeScript, Tailwind CSS y endpoint REST POST /api/contact con validaciones.",
      problem:
        "Centralizar los proyectos y evidencias del curso en un sitio web original, adaptable y conectado a un endpoint de servidor que valide datos y proteja variables sensibles.",
      objective:
        "Estructurar el frontend con componentes tipados, implementar la ruta POST /api/contact con respuestas JSON de éxito y error, y desplegar en Vercel desde GitHub.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "API REST", "Git & GitHub", "Vercel"],
      solutionExplanation:
        "Los datos de las 7 secciones y proyectos se centralizan en data/portfolioData.ts, la interfaz se renderiza en app/page.tsx con estilos personalizados en app/globals.css y el servidor atiende peticiones POST en app/api/contact/route.ts validando nombre, correo y mensaje antes de responder en JSON.",
      results:
        "Sitio web responsive con vista de detalle y código fuente por proyecto, validación de formulario en cliente y servidor, variables en .env.local y publicación en Vercel.",
      codeSnippet: `import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { ok: false, error: "Ingresa un nombre válido (mínimo 2 caracteres)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { ok: false, error: "Ingresa un correo electrónico válido." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { ok: false, error: "El mensaje debe tener al menos 10 caracteres." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { ok: true, message: "Mensaje enviado correctamente." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { ok: false, error: "Error interno del servidor." },
      { status: 500 }
    );
  }
}`,
      codeLanguage: "typescript",
      images: [
        {
          src: "/evidencias/arquitectura-1.png",
          caption: "Arquitectura del proyecto Next.js y prueba del endpoint POST /api/contact",
        },
      ],
      repoUrl: "https://github.com/Lizzyma44/Portafolio_IT",
    },
  ] as ProjectItem[],

  skills: {
    programmingLanguages: [
      "Python básico (análisis y gráficos en Google Colab)",
      "Fundamentos de HTML, CSS y TypeScript",
      "Lógica estructurada y pseudocódigo",
    ],
    webDevelopment: [
      "Estructuración básica de portafolio web (Next.js)",
      "Diseño visual responsivo con Tailwind CSS",
      "Integración básica de formularios",
    ],
    databasesAndData: [
      "Microsoft Excel Avanzado (Certificación MOS)",
      "Limpieza, ordenamiento y análisis básico de tablas (CSV)",
      "Interpretación de gráficos y datos geográficos",
    ],
    techTools: [
      "Google Colab y Jupyter Notebooks",
      "Visual Studio Code y GitHub (nivel usuario)",
      "Microsoft Power Apps y paquete Office",
    ],
    aiAndMachineLearning: [
      "Química, Biología y pensamiento científico",
      "Inglés intermedio (Certificación TOEIC Listening & Reading)",
      "Análisis exploratorio y modelos predictivos introductorios",
    ],
    softSkills: [
      "Rigor metodológico y precisión en cada detalle",
      "Observación crítica y curiosidad científica",
      "Ética, responsabilidad y compromiso con el bienestar",
      "Creatividad, mezcla de color y sensibilidad estética",
      "Comunicación clara, empatía y trabajo colaborativo",
    ],
  },

  education: [
    {
      institution: "Complejo Educativo República del Perú",
      degree: "2.° Año de Bachillerato",
      period: "2025 – 2026",
      details:
        "Formación académica generalen ciencias naturales, matemáticas, literatura y estudios sociales, es decir, educación media",
    },
    {
      institution: "Programa Empresarial ¡Supérate!",
      degree: "Becaria – Informática, Inglés y Valores",
      period: "2024 – 2026",
      details:
        "Formación práctica en tecnología, análisis de datos, desarrollo de aplicaciones, liderazgo, valores y dominio del inglés.",
    },
    {
      institution: "Certificaciones Internacionales",
      degree: "MOS Excel Expert & TOEIC Listening and Reading",
      period: "2026",
      details:
        "Certificación avanzada en Microsoft Excel (935 puntos) y certificación internacional TOEIC Listening & Reading (635 puntos).",
    },
  ],
};