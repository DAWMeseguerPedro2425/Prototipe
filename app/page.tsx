"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Sun, Moon, LogIn, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState("tab1")

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const tabContent = [
    {
      id: "tab1",
      title: "Evaluación inicial del caso",
      content:
        "Realizamos una evaluación completa y detallada de su caso de accidente de patinete eléctrico. Analizamos las circunstancias, recopilamos evidencias, evaluamos lesiones y determinamos posibles responsabilidades para establecer una estrategia legal sólida.",
    },
    {
      id: "tab2",
      title: "Investigación y documentación",
      content:
        "Nuestro equipo especializado inicia una investigación exhaustiva: recopilación de informes policiales, testimonios de testigos, historiales médicos y análisis de la normativa aplicable a patinetes eléctricos en su localidad para construir un caso robusto.",
    },
    {
      id: "tab3",
      title: "Negociación con aseguradoras",
      content:
        "Gestionamos todas las comunicaciones con las compañías de seguros involucradas. Presentamos un expediente completo con pruebas y argumentos legales para negociar una compensación justa que cubra gastos médicos, pérdida de ingresos y daños morales.",
    },
    {
      id: "tab4",
      title: "Proceso judicial",
      content:
        "Si la negociación no resulta satisfactoria, nuestros abogados especialistas en accidentes de movilidad personal prepararán una demanda judicial. Le representaremos en todas las fases del proceso, defendiendo sus derechos ante el tribunal con profesionalidad y experiencia.",
    },
    {
      id: "tab5",
      title: "Resolución y compensación",
      content:
        "Trabajamos incansablemente hasta conseguir la resolución más favorable para usted. Una vez alcanzado un acuerdo o sentencia favorable, nos aseguramos de que reciba la compensación completa a la que tiene derecho y gestionamos todos los trámites necesarios.",
    },
  ]

  const currentTabContent = tabContent.find((tab) => tab.id === activeTab) || tabContent[0]

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <header className="sticky top-0 z-50 flex items-center justify-between bg-white p-4 shadow-sm dark:bg-slate-800 dark:text-white">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[250px] sm:w-[300px] dark:bg-slate-800 dark:text-white">
            <SheetHeader>
              <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-4 pt-10">
              <Link href="#inicio" className="text-lg font-medium hover:text-blue-700 dark:hover:text-blue-400">
                Inicio
              </Link>
              <Link href="#servicios" className="text-lg font-medium hover:text-blue-700 dark:hover:text-blue-400">
                Servicios
              </Link>
              <Link href="#proceso" className="text-lg font-medium hover:text-blue-700 dark:hover:text-blue-400">
                Proceso Legal
              </Link>
              <Link href="#contacto" className="text-lg font-medium hover:text-blue-700 dark:hover:text-blue-400">
                Contacto
              </Link>
              <Link href="#legal" className="text-lg font-medium hover:text-blue-700 dark:hover:text-blue-400">
                Aviso Legal
              </Link>
              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                <Link 
                  href="/login" 
                  className="flex items-center text-lg font-medium text-blue-700 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  <LogIn className="mr-2 h-5 w-5" />
                  Acceso Clientes
                </Link>
                <Link 
                  href="/chat" 
                  className="flex items-center text-lg font-medium text-blue-700 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mt-4"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Chat con abogado
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="text-xl font-bold text-blue-800 dark:text-blue-400">AsesoLegal Patinetes</div>
        <div className="flex items-center gap-2">
          <Link href="/chat">
            <Button variant="outline" size="sm" className="hidden sm:flex items-center gap-1 border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-900/30">
              <MessageSquare className="h-4 w-4" />
              <span>Chat con abogado</span>
            </Button>
          </Link>
          <Link href="/login">
            <Button variant="outline" size="sm" className="hidden sm:flex items-center gap-1 border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-900/30">
              <LogIn className="h-4 w-4" />
              <span>Acceso Clientes</span>
            </Button>
          </Link>
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-10 w-10" aria-label="Cambiar tema">
            {mounted && (
              <>
                {theme === "dark" ? (
                  <Sun className="h-5 w-5 text-yellow-400" />
                ) : (
                  <Moon className="h-5 w-5 text-slate-700" />
                )}
              </>
            )}
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <section
          id="inicio"
          className="mb-12 rounded-xl bg-gradient-to-r from-blue-700 to-blue-900 p-6 text-white shadow-md dark:from-blue-900 dark:to-blue-950"
        >
          <div className="mb-6 text-center">
            <h1 className="mb-2 text-3xl font-bold">Asesoramiento Legal para Accidentes de Patinetes</h1>
            <p className="text-lg">Expertos en reclamaciones por accidentes con vehículos de movilidad personal</p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/banner.png"
              alt="Asesoramiento legal para accidentes de patinetes"
              width={350}
              height={200}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        <section id="servicios" className="mb-12 rounded-xl bg-white p-6 shadow-md dark:bg-slate-800 dark:text-white">
          <h2 className="mb-4 text-2xl font-bold text-slate-800 dark:text-white">Nuestros Servicios</h2>
          <div className="prose max-w-none text-slate-600 dark:text-slate-300">
            <p>
              En AsesoLegal Patinetes nos especializamos en proporcionar asesoramiento jurídico integral para víctimas 
              de accidentes con patinetes eléctricos y otros vehículos de movilidad personal.
            </p>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </section>

        <section id="proceso" className="mb-12 rounded-xl bg-white p-6 shadow-md dark:bg-slate-800 dark:text-white">
          <h2 className="mb-6 text-2xl font-bold text-slate-800 dark:text-white">Proceso Legal</h2>

          <div className="w-full">
            <div className="relative mb-6">
              <div className="grid w-full grid-cols-5">
                {tabContent.map((tab, index) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative z-10 px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                      activeTab === tab.id
                        ? "text-blue-700 dark:text-blue-400"
                        : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
                    }`}
                    aria-selected={activeTab === tab.id}
                  >
                    {index + 1}
                    {activeTab === tab.id && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-700 dark:bg-blue-400"
                        layoutId="activeTab"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-slate-200 dark:bg-slate-700" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Card className="overflow-hidden border-0 shadow-md transition-shadow duration-300 hover:shadow-lg">
                  <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-750">
                    <CardTitle className="text-xl text-slate-800 dark:text-white transition-colors duration-300">
                      {currentTabContent.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-slate-600 dark:text-slate-300 transition-colors duration-300 mb-6">
                      {currentTabContent.content}
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-750">
                    <Button
                      variant="outline"
                      className="transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                      onClick={() => {
                        const tabs = tabContent.map((tab) => tab.id)
                        const currentIndex = tabs.indexOf(activeTab)
                        setActiveTab(tabs[currentIndex > 0 ? currentIndex - 1 : tabs.length - 1])
                      }}
                    >
                      Anterior
                    </Button>
                    <Button 
                      className="bg-blue-700 hover:bg-blue-800 transition-colors duration-300 dark:bg-blue-800 dark:hover:bg-blue-900"
                      onClick={() => {
                        const tabs = tabContent.map((tab) => tab.id)
                        const currentIndex = tabs.indexOf(activeTab)
                        setActiveTab(tabs[currentIndex < tabs.length - 1 ? currentIndex + 1 : 0])
                      }}
                    >
                      Siguiente
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        <section id="casos" className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-800 dark:text-white">Noticias</h2>
          <div className="grid gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="overflow-hidden rounded-xl bg-white shadow-md dark:bg-slate-800">
                <div className="relative h-48 w-full">
                  <Image
                    src={`/placeholder.svg?height=192&width=384&text=Caso ${item}`}
                    alt={`Caso de éxito ${item}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="mb-2 text-xl font-bold text-slate-800 dark:text-white">
                    Accidente de patinete en vía urbana
                  </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore 
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                    aliquip ex ea commodo consequat.
                    </p>
                  <Button variant="link" className="mt-2 p-0 text-blue-700 dark:text-blue-400">
                    Leer más
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 rounded-xl bg-white p-6 shadow-md dark:bg-slate-800">
          <h2 className="mb-4 text-2xl font-bold text-slate-800 dark:text-white">Actualidad Legal</h2>
          <div className="divide-y divide-slate-200 dark:divide-slate-700">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="py-4">
                <div className="flex items-start">
                  <div className="mr-4 h-12 w-12 flex-shrink-0 rounded-full bg-blue-100 flex items-center justify-center dark:bg-blue-900">
                    <span className="text-sm font-medium text-blue-700 dark:text-blue-300">{item}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-slate-800 dark:text-white">
                      Nueva normativa sobre patinetes eléctricos
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Se implementan nuevas regulaciones que afectan a la circulación y seguro obligatorio de vehículos de movilidad personal.
                    </p>
                    <span className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                      Hace {item} semana{item !== 1 ? "s" : ""}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contacto" className="mb-12 rounded-xl bg-white p-6 shadow-md dark:bg-slate-800">
          <h2 className="mb-6 text-2xl font-bold text-slate-800 dark:text-white">Contacto</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="nombre" className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Nombre
              </label>
              <Input id="nombre" placeholder="Su nombre" className="w-full" />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Email
              </label>
              <Input id="email" type="email" placeholder="su@email.com" className="w-full" />
            </div>
            <div>
              <label htmlFor="mensaje" className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Describa su caso
              </label>
              <Textarea id="mensaje" placeholder="Describa brevemente los detalles de su accidente..." className="min-h-[120px] w-full" />
            </div>
            <Button className="w-full bg-blue-700 hover:bg-blue-800 dark:bg-blue-800 dark:hover:bg-blue-900">
              Solicitar asesoramiento gratuito
            </Button>
          </form>
        </section>

        <section id="legal" className="mb-12 rounded-xl bg-white p-6 shadow-md dark:bg-slate-800">
          <h2 className="mb-4 text-2xl font-bold text-slate-800 dark:text-white">Información Legal</h2>
          <div className="flex flex-col space-y-2">
            <Link href="#" className="text-blue-700 hover:underline dark:text-blue-400">
              Política de Privacidad
            </Link>
            <Link href="#" className="text-blue-700 hover:underline dark:text-blue-400">
              Política de Cookies
            </Link>
            <Link href="#" className="text-blue-700 hover:underline dark:text-blue-400">
              Términos y Condiciones
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-slate-800 px-4 py-8 text-white dark:bg-slate-900">
        <div className="container mx-auto">
          <div className="mb-6 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-xl font-bold">AsesoLegal Patinetes</h3>
              <p className="text-slate-300">Expertos en reclamaciones por accidentes con vehículos de movilidad personal. Primera consulta gratuita.</p>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold">Contacto</h3>
              <div className="space-y-2 text-slate-300">
                <div className="flex items-center">
                  <Mail className="mr-2 h-5 w-5" />
                  <span>info@asesolegalpatinetes.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  <span>+34 900 123 456</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5" />
                  <span>Calle Justicia 123, Madrid</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center space-x-4 border-t border-slate-700 pt-6">
            <Link href="#" className="text-slate-300 hover:text-white">
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-slate-300 hover:text-white">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-slate-300 hover:text-white">
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-slate-300 hover:text-white">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
          <div className="mt-6 text-center text-sm text-slate-400">
            © {new Date().getFullYear()} AsesoLegal Patinetes. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}
