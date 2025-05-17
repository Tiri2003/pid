"use client";

import { useState } from 'react';
import { 
  Bold, Italic, Underline, 
  AlignLeft, AlignCenter, AlignRight,
  CaseUpper, CaseLower,
  Palette, Paperclip, List
} from 'lucide-react';
import { Control, UseFormRegister, FieldErrors } from 'react-hook-form';
import { FormData } from '../types/types';

type ResponsibleSectionProps = {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  
};

export default function ResponsibleSection({
  register,
  errors,
  
}: ResponsibleSectionProps) {
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [textAlign, setTextAlign] = useState('left');
  const [textColor, setTextColor] = useState('#000000');

  const responsables = [
    "Juan Pérez",
    "María García",
    "Carlos López",
    "Ana Martínez",
    "Pedro Sánchez"
  ];

  const handleTextFormat = (format: string) => {
    switch(format) {
      case 'bold':
        setIsBold(!isBold);
        break;
      case 'italic':
        setIsItalic(!isItalic);
        break;
      case 'underline':
        setIsUnderline(!isUnderline);
        break;
      case 'uppercase':
        // Lógica para mayúsculas
        break;
      case 'lowercase':
        // Lógica para minúsculas
        break;
      case 'align-left':
        setTextAlign('left');
        break;
      case 'align-center':
        setTextAlign('center');
        break;
      case 'align-right':
        setTextAlign('right');
        break;
      case 'bullet':
        // Lógica para lista con puntos
        break;
    }
  };

  return (
    <div className="bg-white p-4 rounded-b-lg border border-t-0 border-gray-200">
      {/* Selector de responsable */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-900 mb-1">Responsable *</label>
        <select
          {...register('responsible', { required: 'Este campo es obligatorio' })}
          className={`w-full px-3 py-2 border ${errors.responsible ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-900`}
        >
          <option value="">Seleccione un responsable</option>
          {responsables.map((resp, index) => (
            <option key={index} value={resp}>{resp}</option>
          ))}
        </select>
        {errors.responsible && (
          <p className="mt-1 text-sm text-red-600">{errors.responsible.message}</p>
        )}
      </div>

      {/* Barra de herramientas */}
      <div className="flex flex-wrap gap-2 mb-4 bg-white p-2 rounded-md border border-gray-200">
        <button 
          onClick={() => handleTextFormat('bold')}
          className={`p-2 rounded ${isBold ? 'bg-purple-100 text-gray-900' : 'hover:bg-gray-100 text-gray-900'}`}
          title="Negrita"
        >
          <Bold size={18} />
        </button>
        <button 
          onClick={() => handleTextFormat('italic')}
          className={`p-2 rounded ${isItalic ? 'bg-purple-100 text-gray-900' : 'hover:bg-gray-100 text-gray-900'}`}
          title="Cursiva"
        >
          <Italic size={18} />
        </button>
        <button 
          onClick={() => handleTextFormat('underline')}
          className={`p-2 rounded ${isUnderline ? 'bg-purple-100 text-gray-900' : 'hover:bg-gray-100 text-gray-900'}`}
          title="Subrayado"
        >
          <Underline size={18} />
        </button>
        <button 
          onClick={() => handleTextFormat('uppercase')}
          className="p-2 rounded hover:bg-gray-100 text-gray-900"
          title="Mayúsculas"
        >
          <CaseUpper size={18} />
        </button>
        <button 
          onClick={() => handleTextFormat('lowercase')}
          className="p-2 rounded hover:bg-gray-100 text-gray-900"
          title="Minúsculas"
        >
          <CaseLower size={18} />
        </button>
        <div className="relative">
          <button 
            className="p-2 rounded hover:bg-gray-100 text-gray-900"
            title="Color de texto"
          >
            <Palette size={18} />
          </button>
          <input 
            type="color" 
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
            className="absolute opacity-0 w-full h-full top-0 left-0 cursor-pointer"
          />
        </div>
        <button 
          onClick={() => handleTextFormat('align-left')}
          className={`p-2 rounded ${textAlign === 'left' ? 'bg-purple-100 text-gray-900' : 'hover:bg-gray-100 text-gray-900'}`}
          title="Alinear izquierda"
        >
          <AlignLeft size={18} />
        </button>
        <button 
          onClick={() => handleTextFormat('align-center')}
          className={`p-2 rounded ${textAlign === 'center' ? 'bg-purple-100 text-gray-900' : 'hover:bg-gray-100 text-gray-900'}`}
          title="Alinear centro"
        >
          <AlignCenter size={18} />
        </button>
        <button 
          onClick={() => handleTextFormat('align-right')}
          className={`p-2 rounded ${textAlign === 'right' ? 'bg-purple-100 text-gray-900' : 'hover:bg-gray-100 text-gray-900'}`}
          title="Alinear derecha"
        >
          <AlignRight size={18} />
        </button>
        <button 
          className="p-2 rounded hover:bg-gray-100 text-gray-900"
          title="Adjuntar archivo"
        >
          <Paperclip size={18} />
        </button>
        <button 
          onClick={() => handleTextFormat('bullet')}
          className="p-2 rounded hover:bg-gray-100 text-gray-900"
          title="Lista con puntos"
        >
          <List size={18} />
        </button>
      </div>

      {/* Área de texto editable */}
      <textarea
        {...register('description', { required: 'Este campo es obligatorio' })}
        className={`w-full px-3 py-2 border ${errors.description ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-[100px] bg-white text-gray-900`}
        style={{
          fontWeight: isBold ? 'bold' : 'normal',
          fontStyle: isItalic ? 'italic' : 'normal',
          textDecoration: isUnderline ? 'underline' : 'none',
          textAlign: textAlign as 'left' | 'center' | 'right',
          color: textColor
        }}
        placeholder="Escribe aquí..."
      />
      {errors.description && (
        <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
      )}
    </div>
  );
}