"use client";

import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { FormData } from '../types/types';

type GeneralDataProps = {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
};

export default function GeneralData({ register, errors }: GeneralDataProps) {
  return (
    <div className="bg-white p-4 rounded-b-lg border border-t-0 border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1">
            Fecha inicio *
          </label>
          <input
            {...register('startDate', { required: 'Este campo es obligatorio' })}
            type="date"
            className={`w-full px-3 py-2 border ${errors.startDate ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-900`}
            defaultValue="2025-01-01"
          />
          {errors.startDate && (
            <p className="mt-1 text-sm text-red-600">{errors.startDate.message}</p>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1">
            Fecha fin *
          </label>
          <input
            {...register('endDate', { required: 'Este campo es obligatorio' })}
            type="date"
            className={`w-full px-3 py-2 border ${errors.endDate ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-900`}
            defaultValue="2025-12-31"
          />
          {errors.endDate && (
            <p className="mt-1 text-sm text-red-600">{errors.endDate.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}