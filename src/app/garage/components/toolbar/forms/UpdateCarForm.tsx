import { useUpdateCar } from '@/app/garage/hooks/useUpdateCar';
import { Button } from '@/components/ui';
import { useActions } from '@/shared/hooks/useActions';
import { useTypedSelector } from '@/shared/hooks/useTypedSelector';
import { COLOR_PRIMARY_500 } from '@/shared/styles/colors';
import { ChangeEvent, FC } from 'react';

const UpdateCarForm: FC = () => {
  const { setUpdatingCarColor, setUpdatingCarName, clearUpdatingCarStore } =
    useActions();
  const { updatingCarName, updatingCarColor, updatingCarId } = useTypedSelector(
    (state) => state.garage,
  );
  const { updateCar } = useUpdateCar();

  const handleCreateCar = async () => {
    console.log('updatingCarName: ', updatingCarName);
    console.log('updatingCarColor: ', updatingCarColor);
    console.log('updatingCarId: ', updatingCarId);

    if (!updatingCarName || !updatingCarColor || !updatingCarId) return;
    await updateCar({
      id: updatingCarId,
      carData: { color: updatingCarColor, name: updatingCarName },
    });
    clearUpdatingCarStore();
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUpdatingCarName(event.target.value);
  };

  const handleColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUpdatingCarColor(event.target.value);
  };

  return (
    <div>
      <input
        type='text'
        value={updatingCarName || ''}
        onChange={handleNameChange}
      />
      <input
        type='color'
        value={updatingCarColor}
        onChange={handleColorChange}
      />
      <Button
        size='M'
        text='update'
        onClick={handleCreateCar}
        color={COLOR_PRIMARY_500}
      />
    </div>
  );
};
export default UpdateCarForm;
