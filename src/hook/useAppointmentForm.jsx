import { useState } from "react";

const useAppointmentForm = () => {
  const [visibleFormId, setVisibleFormId] = useState(null);

  const handleButtonClick = (id) => {
    setVisibleFormId(id);
  };

  const closeForm = () => {
    setVisibleFormId(null);
  };

  return { visibleFormId, handleButtonClick, closeForm };
};

export default useAppointmentForm;
