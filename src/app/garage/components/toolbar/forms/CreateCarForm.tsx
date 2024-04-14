import { useCreateCar } from '@/app/garage/hooks/useCreateCar';
import { Button } from '@/components/ui';
import { useActions } from '@/shared/hooks/useActions';
import { useTypedSelector } from '@/shared/hooks/useTypedSelector';
import { COLOR_PRIMARY_500 } from '@/shared/styles/colors';
import { ChangeEvent, FC } from 'react';

const CreateCarForm: FC = () => {
  const { setCreatingCarColor, setCreatingCarName, clearCreatingCarStore } =
    useActions();
  const { creatingCarName, creatingCarColor } = useTypedSelector(
    (state) => state.garage,
  );
  const { createCar } = useCreateCar();

  const handleCreateCar = async () => {
    if (!creatingCarColor || !creatingCarName) return;
    await createCar({ color: creatingCarColor, name: creatingCarName });
    clearCreatingCarStore();
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCreatingCarName(event.target.value);
  };

  const handleColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCreatingCarColor(event.target.value);
  };

  return (
    <div>
      <input
        type='text'
        value={creatingCarName || ''}
        onChange={handleNameChange}
      />
      <input
        type='color'
        value={creatingCarColor}
        onChange={handleColorChange}
      />
      <Button
        size='M'
        text='create'
        onClick={handleCreateCar}
        color={COLOR_PRIMARY_500}
      />
    </div>
  );
};
export default CreateCarForm;
