import { FC } from 'react';
import { useCarForms } from '../hooks/useCarForms';
import CarForm from '@/components/ui/car-form/CarForm';

const CarForms: FC = () => {
  const {
    creatingCarName,
    creatingCarColor,
    setCreatingCarName,
    setCreatingCarColor,
    updatingCarName,
    updatingCarColor,
    setUpdatingCarName,
    setUpdatingCarColor,
    handleCreateCar,
    handleUpdateCar,
  } = useCarForms();

  return (
    <>
      <CarForm
        buttonText='create'
        textInputValue={creatingCarName}
        colorInputValue={creatingCarColor}
        setTextValueChange={setCreatingCarName}
        setColorValueChange={setCreatingCarColor}
        onSubmit={handleCreateCar}
      />
      <CarForm
        buttonText='update'
        textInputValue={updatingCarName}
        colorInputValue={updatingCarColor}
        setTextValueChange={setUpdatingCarName}
        setColorValueChange={setUpdatingCarColor}
        onSubmit={handleUpdateCar}
      />
    </>
  );
};
export default CarForms;
