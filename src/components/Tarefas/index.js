import React from "react";
import PropTypes from 'prop-types';
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import './Tarefas.css';

export default function Tarefas({ tarefas, handleEdit, handleDelete }) {
  const handleClickEdit = (e, index) => {
    handleEdit(e, index);
  };

  const handleClickDelete = (e, index) => {
    handleDelete(e, index);
  };

  return (
    <ul className="tarefas">
      {tarefas.map((tarefa, index) => (
        <li key={tarefa}>
          {tarefa}
          <span>
            <FaEdit 
              onClick={(e) => handleClickEdit(e, index)}
              className="edit" 
            />
            <FaWindowClose 
              onClick={(e) => handleClickDelete(e, index)} 
              className="delete" 
            />
          </span>
        </li>
      ))}
    </ul>
  );
}

Tarefas.propTypes = {
  tarefas: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
