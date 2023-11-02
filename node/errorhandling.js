function divide(x, y) {
    if (y === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return x / y;
  }
  
  try {
    const result = divide(10, 0); // Attempting division by zero
    console.log("Result:", result);
  } catch (error) {
    console.error("Error:", error.message);
  }
  