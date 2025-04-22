"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ArrowLeft, Send, Paperclip, MoreVertical, Phone, Video, Calendar, Clock, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"

// Datos de ejemplo - Mensajes iniciales
const initialMessages = [
    {
        id: 1,
        sender: "lawyer",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        timestamp: "10:03",
        read: true
    },
    {
        id: 2,
        sender: "client",
        content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        timestamp: "10:15",
        read: true
    },
    {
        id: 3,
        sender: "lawyer",
        content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        timestamp: "10:18",
        read: true
    },
    {
        id: 4, 
        sender: "lawyer",
        content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        timestamp: "10:20",
        read: true
    },
    {
        id: 5,
        sender: "client",
        content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        timestamp: "10:25",
        read: true
    },
    {
        id: 6,
        sender: "lawyer",
        content: "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.",
        timestamp: "10:28",
        read: true
    },
    {
        id: 7,
        sender: "lawyer",
        content: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        timestamp: "10:30",
        read: false
    }
];

// Datos del abogado asignado
const lawyer = {
  name: "Carlos Jiménez",
  specialization: "Especialista en Accidentes de Tráfico",
  status: "online",
  avatar: "/placeholder-user.jpg"
};

export default function ChatPage() {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const [attachments, setAttachments] = useState<string[]>([]);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Función para manejar el envío de un nuevo mensaje
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg = {
        id: messages.length + 1,
        sender: "client",
        content: newMessage.trim(),
        timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
        read: false
      };
      
      setMessages([...messages, newMsg]);
      setNewMessage("");
      
      // Simular respuesta automática del abogado después de un breve retraso
      setTimeout(() => {
        const autoResponse = {
          id: messages.length + 2,
          sender: "lawyer",
          content: "Entendido. Estoy revisando la información que me ha proporcionado. Me pondré en contacto con usted pronto con más detalles sobre cómo procederemos con su caso.",
          timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
          read: false
        };
        setMessages(prev => [...prev, autoResponse]);
      }, 3000);
    }
  };

  // Manejar la carga de archivos
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const newAttachments = Array.from(files).map(file => file.name);
      setAttachments([...attachments, ...newAttachments]);
    }
  };

  // Desplazar al final cuando se envían nuevos mensajes
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-screen bg-slate-50 dark:bg-slate-900">
      {/* Cabecera */}
      <header className="border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link 
              href="/" 
              className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Volver</span>
            </Link>
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10 border border-blue-200 dark:border-blue-800">
                <AvatarImage src={lawyer.avatar} alt={lawyer.name} />
                <AvatarFallback className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  {lawyer.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="font-medium text-slate-900 dark:text-white">{lawyer.name}</h2>
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-green-500"></span>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{lawyer.specialization}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-full text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-700">
              <Phone className="h-5 w-5" />
              <span className="sr-only">Llamada</span>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-700">
              <Video className="h-5 w-5" />
              <span className="sr-only">Videollamada</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-700">
                  <MoreVertical className="h-5 w-5" />
                  <span className="sr-only">Más opciones</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>Programar cita</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Download className="mr-2 h-4 w-4" />
                  <span>Descargar conversación</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600 dark:text-red-400">
                  Reportar problema
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Área de chat */}
      <ScrollArea ref={scrollAreaRef} className="flex-1 p-4">
        <div className="flex flex-col gap-3 pb-4">
          {/* Fecha de la conversación */}
          <div className="flex justify-center">
            <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-500 dark:bg-slate-800 dark:text-slate-400">
              Hoy
            </span>
          </div>

          {/* Mensajes */}
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`flex ${message.sender === "client" ? "justify-end" : "justify-start"}`}
            >
              <div 
                className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                  message.sender === "client" 
                    ? "bg-blue-600 text-white" 
                    : "bg-white text-slate-900 dark:bg-slate-800 dark:text-white border border-slate-200 dark:border-slate-700"
                }`}
              >
                <p className="text-sm">{message.content}</p>
                <div className={`flex items-center justify-end gap-1 mt-1 text-xs ${
                  message.sender === "client" 
                    ? "text-blue-200" 
                    : "text-slate-500 dark:text-slate-400"
                }`}>
                  <span>{message.timestamp}</span>
                  {message.sender === "client" && (
                    <span>{message.read ? "✓✓" : "✓"}</span>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Mostrar archivos adjuntos si hay */}
          {attachments.length > 0 && (
            <div className="flex justify-start mt-2">
              <div className="max-w-[80%] rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">Archivos adjuntos</p>
                <div className="flex flex-col gap-2">
                  {attachments.map((file, index) => (
                    <div key={index} className="flex items-center gap-2 rounded-md bg-slate-100 p-2 dark:bg-slate-700">
                      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                        <Paperclip className="h-4 w-4" />
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <p className="truncate text-sm font-medium text-slate-700 dark:text-slate-200">{file}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Documento</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      {/* Entrada de mensaje */}
      <div className="border-t border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
        <div className="flex gap-2">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            className="hidden"
            multiple
          />
          <Button 
            variant="outline" 
            size="icon" 
            className="shrink-0 rounded-full"
            onClick={() => fileInputRef.current?.click()}
          >
            <Paperclip className="h-5 w-5 text-slate-500" />
            <span className="sr-only">Adjuntar archivo</span>
          </Button>
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Escriba su mensaje aquí..."
            className="flex-1 border-slate-300 focus-visible:ring-blue-600 dark:border-slate-600"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
          />
          <Button 
            className="shrink-0 rounded-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
            size="icon"
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
          >
            <Send className="h-5 w-5" />
            <span className="sr-only">Enviar mensaje</span>
          </Button>
        </div>
        
        {/* Información adicional */}
        <div className="mt-2 flex items-center justify-center">
          <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>Su abogado suele responder en menos de 2 horas</span>
          </p>
        </div>
      </div>
    </div>
  )
}