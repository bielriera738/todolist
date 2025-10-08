import React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'; // O qualsevol altra llibreria de dates (dayjs, moment...)
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { format } from 'date-fns'; // Per formatar la data
 
// Rep l'ID, la data actual i la funció d'actualització
const TaskDueDate = ({ taskId, dueDate, onUpdateTaskDate }) => {
  
  // Si dueDate existeix, la parseja com a objecte Date
  const dateValue = dueDate ? new Date(dueDate) : null; 
 
  // La funció que s'executa en seleccionar una nova data
  const handleDateChange = (newDate) => {
    onUpdateTaskDate(taskId, newDate); 
  };
  
  return (
    <div style={{ marginLeft: '10px' }}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Data Límit"
          value={dateValue}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} size="small" />} // Renderitzat amb TextField de MUI
        />
      </LocalizationProvider>
      {/* Opcionalment, mostrar la data formatada si no estem editant */}
      {dueDate && <p>Límit: {format(dateValue, 'dd/MM/yyyy')}</p>} 
    </div>
  );
};
 
// NOTA: Caldrà importar també el component TextField de @mui/material a TaskDueDate.js
import TextField from '@mui/material/TextField';
// ... (resta del codi)
export default TaskDueDate;
 


