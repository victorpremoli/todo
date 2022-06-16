import { PlusCircle } from 'phosphor-react';
import { InputHTMLAttributes } from 'react';
import styles from './NewTaskInput.module.css';

interface NewTaskInputProps extends InputHTMLAttributes<HTMLInputElement> {

}

export function NewTaskInput({...props} : NewTaskInputProps) {
  return(
    <div className={styles.form}>
      <input 
        className={styles.input}
        required
        type="text" 
        placeholder='Adicione uma nova tarefa'
        {...props}
      />
      <button type="submit" >
        Criar 
        <PlusCircle size={16} />
      </button>
    </div>
  );
}