"use client";

import { useForm } from 'react-hook-form';
import GeneralData from '../components/GeneralData';
import ResponsibleSection from '../components/ResponsableSection';
import { FormData } from '../types/types';

export default function AddProcessoPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData, action: string) => {
    const isValid = await trigger();
    if (!isValid) {
      console.log("Formulario inválido - Campos obligatorios vacíos");
      return;
    }
    console.log(`Acción: ${action}`, data);
    // Lógica de envío según la acción
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      {/* Título principal */}
      <div className="bg-purple-100 px-6 py-4 border-b border-purple-200">
        <h1 className="text-2xl font-bold text-gray-900">Adicionar Proceso</h1>
      </div>
      
      <form>
        <div className="p-6">
          {/* Abreviatura y Denominación */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-900 mb-1">
                Abreviatura *
              </label>
              <input
                {...register('abbreviation', { required: 'Campo obligatorio' })}
                type="text"
                className={`w-full px-3 py-2 border ${errors.abbreviation ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-900`}
              />
              {errors.abbreviation && (
                <p className="mt-1 text-sm text-red-600">{errors.abbreviation.message}</p>
              )}
            </div>
            
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-900 mb-1">
                Denominación *
              </label>
              <input
                {...register('denomination', { required: 'Campo obligatorio' })}
                type="text"
                className={`w-full px-3 py-2 border ${errors.denomination ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-900`}
              />
              {errors.denomination && (
                <p className="mt-1 text-sm text-red-600">{errors.denomination.message}</p>
              )}
            </div>
          </div>

          {/* Datos generales */}
          <div className="mb-8">
            <div className="bg-purple-100 px-4 py-3 rounded-t-lg border-b border-purple-200">
              <h2 className="text-lg font-semibold text-gray-900">Datos generales</h2>
            </div>
            <GeneralData register={register} errors={errors} />
          </div>

          {/* Responsable */}
          <div className="mb-8">
            <div className="bg-purple-100 px-4 py-3 rounded-t-lg border-b border-purple-200">
              <h2 className="text-lg font-semibold text-gray-900">Responsable</h2>
            </div>
            <ResponsibleSection register={register} errors={errors} />
          </div>

          {/* Botones de acción */}
          <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={() => window.history.back()}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Cancelar
            </button>
            <button
              type="button"
              onClick={() => onSubmit({} as FormData, 'apply')}
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Aplicar
            </button>
            <button
              type="button"
              onClick={() => onSubmit({} as FormData, 'accept')}
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-purple-800 hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Aceptar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}