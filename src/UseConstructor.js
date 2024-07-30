import React from 'react'
import { useState } from 'react';

export default function UseConstructor(callBack = () => { }) {



  const [hasBeenCalled, setHasBeenCalled] = useState(false);
  if (hasBeenCalled) return;
  callBack();
  setHasBeenCalled(true);


}
