export default function taskBlock(trueOrFalse) {
    let task0 = false;
    let task1 = true;
  
    if (trueOrFalse) {
      let tempTask = true; // Use a different name inside the conditional block
      let tempTask2 = false; // Use a different name inside the conditional block
  
      // You can choose not to assign them to the original variables if you want to keep the original output.
      // task = tempTask;
      // task2 = tempTask2;
    }
  
    return [task0, task1];
  }
  