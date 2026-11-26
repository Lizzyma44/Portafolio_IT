"use client";

import React, { useState } from "react";
import {
  Sparkles,
  ExternalLink,
  Mail,
  ArrowUpRight,
  Code2,
  FolderGit2,
  GraduationCap,
  Briefcase,
  User,
  Wrench,
  Send,
  X,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Menu,
  Layers,
  Award,
  Heart,
  Target,
  Lightbulb,
  Globe,
} from "lucide-react";
import { portfolioData, ProjectItem } from "../data/portfolioData";
import { RevealSection } from "./components/RevealSection";

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    text: string;
  }>({ type: "idle", text: "" });

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#sobre-mi", label: "Sobre mí" },
    { href: "#experiencia", label: "Experiencia" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#habilidades", label: "Habilidades" },
    { href: "#formacion", label: "Formación" },
    { href: "#contacto", label: "Contacto" },
  ];

  const heroData = portfolioData.hero as typeof portfolioData.hero & {
    linkedinUrl?: string;
    websiteUrl?: string;
  };

  const handleCopyCode = async (code: string) => {
    await navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", text: "Enviando mensaje..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        setStatus({
          type: "error",
          text: data.error || "No se pudo enviar el mensaje. Revisa los campos.",
        });
        return;
      }

      setStatus({
        type: "success",
        text: data.message || "¡Mensaje enviado con éxito!",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus({
        type: "error",
        text: "Error de conexión con el servidor. Intenta nuevamente.",
      });
    }
  };

  return (
    <div className="min-h-screen text-[#241633]">
      {/* BARRA DE NAVEGACIÓN SUPERIOR */}
      <header className="sticky top-0 z-40 border-b border-[#e2d2f4] bg-[#f7f3fc]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#inicio"
            className="flex items-center gap-2 font-serif text-2xl sm:text-3xl font-bold text-[#5b2e8a] tracking-wide"
          >
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#8a56ac]" />
            <span>{heroData.fullName}</span>
          </a>

          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#4a3561]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-[#6b3fa0]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
            className="lg:hidden rounded-xl border border-[#d8c4ef] bg-white p-2 text-[#5b2e8a]"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden border-t border-[#e2d2f4] bg-white px-6 py-4 flex flex-col gap-3 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-[#3a274f] hover:text-[#6b3fa0]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main className="mx-auto max-w-6xl px-6">
        {/* 1. INICIO (HERO) */}
        <section
          id="inicio"
          className="py-14 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
        >
          <div className="lg:col-span-8 space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#dcc5f4] bg-[#efe3fc] px-4 py-1.5 text-xs font-semibold text-[#5b2e8a]">
              <Sparkles className="h-3.5 w-3.5 text-[#8a56ac]" />
              <span>Portafolio Digital · 10 Semanas de Proyectos</span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl font-bold text-[#2f164c] leading-tight">
              {heroData.fullName}
            </h1>

            <p className="text-lg sm:text-xl font-semibold text-[#6b3fa0]">
              {heroData.role}
            </p>

            <p className="max-w-2xl text-base leading-relaxed text-[#48355e]">
              {heroData.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#proyectos"
                className="inline-flex items-center gap-2 rounded-xl bg-[#6b3fa0] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#562e84]"
              >
                Ver Proyectos
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <a
                href="#sobre-mi"
                className="inline-flex items-center gap-2 rounded-xl border border-[#d4bce9] bg-white px-5 py-3 text-sm font-semibold text-[#4e3669] transition hover:bg-[#f4ebfd]"
              >
                Sobre mí
              </a>

              <a
                href="#contacto"
                className="inline-flex items-center gap-2 rounded-xl border border-[#d4bce9] bg-white px-5 py-3 text-sm font-semibold text-[#4e3669] transition hover:bg-[#f4ebfd]"
              >
                Contacto
              </a>

              {heroData.githubUrl && (
                <a
                  href={heroData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#d4bce9] bg-white px-4 py-3 text-sm font-semibold text-[#4e3669] transition hover:bg-[#f4ebfd]"
                >
                  <ExternalLink className="h-4 w-4 text-[#6b3fa0]" />
                  <span>GitHub</span>
                </a>
              )}

              {heroData.linkedinUrl && (
                <a
                  href={heroData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#d4bce9] bg-white px-4 py-3 text-sm font-semibold text-[#4e3669] transition hover:bg-[#f4ebfd]"
                >
                  <ExternalLink className="h-4 w-4 text-[#6b3fa0]" />
                  <span>LinkedIn</span>
                </a>
              )}

              {heroData.websiteUrl && (
                <a
                  href={heroData.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#d4bce9] bg-white px-4 py-3 text-sm font-semibold text-[#4e3669] transition hover:bg-[#f4ebfd]"
                >
                  <Globe className="h-4 w-4 text-[#6b3fa0]" />
                  <span>Web</span>
                </a>
              )}
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="lilac-card w-72 sm:w-80 rounded-3xl p-4">
              <div className="relative h-80 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#ede0fb] to-[#f6effe]">
                <img
                  src={heroData.avatarUrl}
                  alt={heroData.fullName}
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    img.style.display = "none";
                    const fallback = img.nextElementSibling as HTMLElement | null;
                    if (fallback) fallback.style.display = "flex";
                  }}
                  className="h-full w-full object-cover object-top"
                />
                <div
                  style={{ display: "none" }}
                  className="absolute inset-0 flex-col items-center justify-center text-center p-4"
                >
                  <span className="font-serif text-6xl font-bold text-[#6b3fa0]">
                    {heroData.fullName.charAt(0)}
                  </span>
                  <span className="mt-2 text-xs font-semibold uppercase tracking-widest text-[#7b52a6]">
                    Ciencia · Datos · Diseño
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. SOBRE MÍ (ABOUT) */}
        <RevealSection id="sobre-mi" className="py-16 border-t border-[#e5d5f7]">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8a56ac]">
              Sección 02 · Perfil Personal
            </span>
            <h2 className="mt-1 font-serif text-4xl font-bold text-[#2f164c]">
              Sobre mí
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="lilac-card rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-[#6b3fa0]">
                <User className="h-4 w-4" />
                <h3>¿Quién soy y qué estudio?</h3>
              </div>
              <p className="text-sm leading-relaxed text-[#38254e]">
                {portfolioData.about.whoIAm}
              </p>
              <p className="text-sm leading-relaxed text-[#4b3861]">
                {portfolioData.about.whatIStudy}
              </p>
            </div>

            <div className="lilac-card rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-[#6b3fa0]">
                <Target className="h-4 w-4" />
                <h3>Objetivos personales y profesionales</h3>
              </div>
              <p className="text-sm leading-relaxed text-[#38254e]">
                {portfolioData.about.goals}
              </p>
            </div>

            <div className="lilac-card rounded-2xl p-6">
              <div className="flex items-center gap-2 text-sm font-bold text-[#6b3fa0] mb-3">
                <Heart className="h-4 w-4" />
                <h3>Intereses</h3>
              </div>
              <ul className="space-y-2 text-sm text-[#38254e]">
                {portfolioData.about.interests.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-[#8a56ac] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lilac-card rounded-2xl p-6">
              <div className="flex items-center gap-2 text-sm font-bold text-[#6b3fa0] mb-3">
                <Lightbulb className="h-4 w-4" />
                <h3>Fortalezas</h3>
              </div>
              <ul className="space-y-2 text-sm text-[#38254e]">
                {portfolioData.about.strengths.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-[#6b3fa0] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </RevealSection>

        {/* 3. EXPERIENCIA (EXPERIENCE) */}
        <RevealSection id="experiencia" className="py-16 border-t border-[#e5d5f7]">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8a56ac]">
              Sección 03 · Trayectoria y Participación
            </span>
            <h2 className="mt-1 font-serif text-4xl font-bold text-[#2f164c]">
              Experiencia y Actividades Extracurriculares
            </h2>
          </div>

          <div className="space-y-5">
            {portfolioData.experience.map((exp, index) => (
              <div key={index} className="lilac-card rounded-2xl p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f1e5fc] px-3 py-1 text-xs font-bold text-[#5b2e8a]">
                    <Briefcase className="h-3.5 w-3.5" />
                    {exp.type}
                  </span>
                  <span className="text-xs font-semibold text-[#755b91]">
                    {exp.period}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#2c1547]">{exp.title}</h3>
                <p className="text-xs font-semibold text-[#8a56ac] mb-2.5">
                  {exp.organization}
                </p>
                <p className="text-sm text-[#422f58] leading-relaxed mb-3">
                  {exp.description}
                </p>

                <ul className="space-y-1.5 text-sm text-[#4a3761]">
                  {exp.achievements.map((ach, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#8a56ac] flex-shrink-0" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </RevealSection>

        {/* 4. PROYECTOS (PROJECTS) */}
        <RevealSection id="proyectos" className="py-16 border-t border-[#e5d5f7]">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8a56ac]">
              Sección 04 · Evidencias de las 10 Semanas
            </span>
            <h2 className="mt-1 font-serif text-4xl font-bold text-[#2f164c]">
              Proyectos Desarrollados
            </h2>
          </div>

          <div className="space-y-6">
            {portfolioData.projects.map((project) => (
              <article key={project.id} className="lilac-card rounded-2xl p-6 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-[#ede0fb] px-3 py-1 text-xs font-bold text-[#5b2e8a]">
                      {project.weekTag}
                    </span>
                    <h3 className="text-xl font-bold text-[#2c1547]">
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-xl border border-[#d6c2ee] px-3.5 py-2 text-xs font-semibold text-[#5b2e8a] hover:bg-[#f6effe]"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        <span>Repositorio</span>
                      </a>
                    )}

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-[#6b3fa0] px-4 py-2 text-xs font-semibold text-white hover:bg-[#562e84]"
                    >
                      <FolderGit2 className="h-3.5 w-3.5" />
                      <span>Ver código y evidencias</span>
                    </button>
                  </div>
                </div>

                <p className="text-sm text-[#3c2852] leading-relaxed mb-4">
                  {project.shortDescription}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-4">
                  <div className="rounded-xl bg-[#faf6fe] border border-[#ece0fa] p-3.5">
                    <span className="block text-xs font-bold text-[#6b3fa0] mb-1">
                      Problema que busca resolver
                    </span>
                    <p className="text-[#45325b] leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#faf6fe] border border-[#ece0fa] p-3.5">
                    <span className="block text-xs font-bold text-[#6b3fa0] mb-1">
                      Objetivo de la actividad
                    </span>
                    <p className="text-[#45325b] leading-relaxed">
                      {project.objective}
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#faf6fe] border border-[#ece0fa] p-3.5">
                    <span className="block text-xs font-bold text-[#6b3fa0] mb-1">
                      Explicación de la solución implementada
                    </span>
                    <p className="text-[#45325b] leading-relaxed">
                      {project.solutionExplanation}
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#f3e8fd] border border-[#dec8f4] p-3.5">
                    <span className="block text-xs font-bold text-[#5b2e8a] mb-1">
                      Resultados obtenidos
                    </span>
                    <p className="text-[#2f164c] leading-relaxed">
                      {project.results}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-[#5b2e8a] mr-1">
                    Tecnologías utilizadas:
                  </span>
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="rounded-full border border-[#dfd0f2] bg-[#faf6fe] px-3 py-0.5 text-xs font-medium text-[#4a3561]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </RevealSection>

        {/* 5. HABILIDADES (SKILLS) */}
        <RevealSection id="habilidades" className="py-16 border-t border-[#e5d5f7]">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8a56ac]">
              Sección 05 · Competencias Técnicas y Personales
            </span>
            <h2 className="mt-1 font-serif text-4xl font-bold text-[#2f164c]">
              Habilidades
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <SkillCard
              title="Ciencias e Idiomas"
              icon={<Sparkles className="h-4 w-4 text-[#6b3fa0]" />}
              items={portfolioData.skills.aiAndMachineLearning}
            />
            <SkillCard
              title="Ofimática y Análisis de Datos"
              icon={<FolderGit2 className="h-4 w-4 text-[#6b3fa0]" />}
              items={portfolioData.skills.databasesAndData}
            />
            <SkillCard
              title="Herramientas y Plataformas"
              icon={<Wrench className="h-4 w-4 text-[#6b3fa0]" />}
              items={portfolioData.skills.techTools}
            />
            <SkillCard
              title="Programación Básica"
              icon={<Code2 className="h-4 w-4 text-[#6b3fa0]" />}
              items={portfolioData.skills.programmingLanguages}
            />
            <SkillCard
              title="Maquetación y Diseño Web"
              icon={<Layers className="h-4 w-4 text-[#6b3fa0]" />}
              items={portfolioData.skills.webDevelopment}
            />
            <SkillCard
              title="Habilidades Personales"
              icon={<User className="h-4 w-4 text-[#6b3fa0]" />}
              items={portfolioData.skills.softSkills}
            />
          </div>
        </RevealSection>

        {/* 6. FORMACIÓN ACADÉMICA (EDUCATION) */}
        <RevealSection id="formacion" className="py-16 border-t border-[#e5d5f7]">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8a56ac]">
              Sección 06 · Estudios y Certificaciones
            </span>
            <h2 className="mt-1 font-serif text-4xl font-bold text-[#2f164c]">
              Formación Académica
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioData.education.map((edu, index) => (
              <div key={index} className="lilac-card rounded-2xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="rounded-xl bg-[#f1e5fc] p-2.5 text-[#6b3fa0]">
                    {index === 2 ? (
                      <Award className="h-5 w-5" />
                    ) : (
                      <GraduationCap className="h-5 w-5" />
                    )}
                  </div>
                  <span className="text-xs font-semibold text-[#755b91]">
                    {edu.period}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#2c1547]">{edu.degree}</h3>
                <p className="mt-1 text-xs font-semibold text-[#8a56ac]">
                  {edu.institution}
                </p>
                <p className="mt-3 text-sm text-[#48355e] leading-relaxed">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </RevealSection>

        {/* 7. CONTACTO (CONTACT) */}
        <RevealSection id="contacto" className="py-16 border-t border-[#e5d5f7]">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8a56ac]">
              Sección 07 · Comunicación Directa
            </span>
            <h2 className="mt-1 font-serif text-4xl font-bold text-[#2f164c]">
              Contacto
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 lilac-card rounded-2xl p-6 space-y-4">
              <h3 className="font-serif text-2xl font-bold text-[#2f164c]">
                Datos de contacto
              </h3>
              <p className="text-sm text-[#48355e] leading-relaxed">
                Envía un mensaje mediante el formulario (validado en cliente y servidor mediante API REST en POST /api/contact) o contáctame por mis enlaces profesionales.
              </p>

              <div className="space-y-3 text-sm pt-2">
                {heroData.email && (
                  <a
                    href={`mailto:${heroData.email}`}
                    className="flex items-center gap-2.5 font-medium text-[#3a2454] hover:text-[#6b3fa0] break-all"
                  >
                    <Mail className="h-4 w-4 text-[#8a56ac] flex-shrink-0" />
                    <span>{heroData.email}</span>
                  </a>
                )}

                {heroData.githubUrl && (
                  <a
                    href={heroData.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 font-medium text-[#3a2454] hover:text-[#6b3fa0] break-all"
                  >
                    <ExternalLink className="h-4 w-4 text-[#8a56ac] flex-shrink-0" />
                    <span>{heroData.githubUrl}</span>
                  </a>
                )}

                {heroData.linkedinUrl && (
                  <a
                    href={heroData.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 font-medium text-[#3a2454] hover:text-[#6b3fa0] break-all"
                  >
                    <ExternalLink className="h-4 w-4 text-[#8a56ac] flex-shrink-0" />
                    <span>{heroData.linkedinUrl}</span>
                  </a>
                )}

                {heroData.websiteUrl && (
                  <a
                    href={heroData.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 font-medium text-[#3a2454] hover:text-[#6b3fa0] break-all"
                  >
                    <Globe className="h-4 w-4 text-[#8a56ac] flex-shrink-0" />
                    <span>{heroData.websiteUrl}</span>
                  </a>
                )}
              </div>
            </div>

            <form
              onSubmit={handleContactSubmit}
              className="lg:col-span-7 lilac-card rounded-2xl p-6 space-y-4"
            >
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#4b3861] mb-1.5">
                  Nombre
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Tu nombre"
                  className="w-full rounded-xl border border-[#d8c4ef] bg-[#fbf8fe] px-4 py-3 text-sm text-[#241633] focus:border-[#7c45b5] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#4b3861] mb-1.5">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="tu@correo.com"
                  className="w-full rounded-xl border border-[#d8c4ef] bg-[#fbf8fe] px-4 py-3 text-sm text-[#241633] focus:border-[#7c45b5] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#4b3861] mb-1.5">
                  Mensaje
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Escribe tu mensaje (mínimo 10 caracteres)..."
                  className="w-full rounded-xl border border-[#d8c4ef] bg-[#fbf8fe] px-4 py-3 text-sm text-[#241633] focus:border-[#7c45b5] focus:outline-none"
                />
              </div>

              {status.type !== "idle" && (
                <div
                  className={`flex items-center gap-2.5 rounded-xl border p-3.5 text-sm font-medium ${
                    status.type === "success"
                      ? "border-emerald-300 bg-emerald-50 text-emerald-900"
                      : status.type === "error"
                      ? "border-rose-300 bg-rose-50 text-rose-900"
                      : "border-purple-300 bg-purple-50 text-purple-900"
                  }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="h-4 w-4 flex-shrink-0" />
                  )}
                  <span>{status.text}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status.type === "loading"}
                className="inline-flex items-center gap-2 rounded-xl bg-[#6b3fa0] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#562e84] disabled:opacity-50"
              >
                <Send className="h-4 w-4" />
                <span>
                  {status.type === "loading" ? "Enviando..." : "Enviar mensaje"}
                </span>
              </button>
            </form>
          </div>
        </RevealSection>
      </main>

      <footer className="border-t border-[#e2d1f5] bg-[#f1e7fc] py-6 text-center text-xs font-medium text-[#543c70]">
        <p>
          {heroData.fullName} · Portafolio Digital con Next.js, TypeScript y Tailwind CSS
        </p>
      </footer>

      {/* MODAL PARA CÓDIGO FUENTE Y EVIDENCIAS */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#241633]/70 p-4 backdrop-blur-xs"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-[#d4bcf0] bg-[#fcf9ff] p-6 sm:p-8 text-[#241633] shadow-2xl"
          >
            <button
              onClick={() => setSelectedProject(null)}
              aria-label="Cerrar"
              className="sticky top-0 float-right rounded-full border border-[#d8c4ef] bg-white p-2 text-[#5b2e8a] hover:bg-[#f2e8fc]"
            >
              <X className="h-5 w-5" />
            </button>

            <span className="inline-block rounded-full bg-[#e9d8fa] px-3 py-1 text-xs font-bold text-[#5b2e8a]">
              {selectedProject.weekTag}
            </span>

            <h3 className="mt-3 font-serif text-3xl font-bold text-[#2d1649]">
              {selectedProject.title}
            </h3>

            {selectedProject.images.length > 0 && (
              <div className="mt-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#5b2e8a] mb-2">
                  Evidencias y capturas
                </h4>
                <div className="space-y-3">
                  {selectedProject.images.map((img, i) => (
                    <figure
                      key={i}
                      className="overflow-hidden rounded-2xl border border-[#dfd0f2] bg-white"
                    >
                      <img
                        src={img.src}
                        alt={img.caption}
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src =
                            "https://placehold.co/900x420/f3e9fd/5b2e8a?text=Guarda+tu+imagen+en+public" +
                            img.src;
                        }}
                        className="w-full max-h-80 object-contain"
                      />
                      <figcaption className="border-t border-[#efe4fb] px-4 py-2 text-xs text-[#5d4775]">
                        {img.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#5b2e8a]">
                  Código fuente ({selectedProject.codeLanguage})
                </h4>
                <button
                  onClick={() => handleCopyCode(selectedProject.codeSnippet)}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[#d5c0ee] bg-white px-3 py-1 text-xs font-semibold text-[#5b2e8a] hover:bg-[#f3e9fd]"
                >
                  {copiedCode ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-600" />
                      <span>Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="max-h-80 overflow-auto rounded-2xl border border-[#d8c4ef] bg-[#211330] p-4 text-xs text-purple-100 leading-relaxed">
                <code>{selectedProject.codeSnippet}</code>
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function SkillCard({
  title,
  icon,
  items,
}: {
  title: string;
  icon: React.ReactNode;
  items: string[];
}) {
  return (
    <div className="lilac-card rounded-2xl p-6">
      <div className="flex items-center gap-2.5 mb-3.5">
        <div className="rounded-xl bg-[#f2e7fc] p-2">{icon}</div>
        <h3 className="font-bold text-[#2f184b]">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((skill, idx) => (
          <span
            key={idx}
            className="rounded-full border border-[#dfd0f2] bg-[#faf6fe] px-3 py-1 text-xs font-medium text-[#4a3561]"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}