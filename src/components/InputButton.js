import { useContext } from "react";
import Button from '@mui/material/Button';
import OperationContext from "../context/OperationContext";

const InputButton = () => {
  const { HandleSubmit } = useContext(OperationContext);

  return (
  <div className="App-input__group">
    <Button variant="contained" className="btn-add" onClick={ HandleSubmit }>Agregar</Button>
  </div>
  );
}

export default InputButton;