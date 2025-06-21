import React, { useState } from 'react';

function ColorPicker() {
  const [color, setColor] = useState('#ff6f61');

  return (
    <div className="container text-center my-5">
      <h2 className="mb-4 text-primary">🎨 Color Picker Tool</h2>

      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="form-control form-control-color mx-auto mb-4"
        title="Choose your color"
        style={{ width: "6rem", height: "3rem", cursor: "pointer" }}
      />

      <div
        className="color-preview mx-auto mb-3"
        style={{
          backgroundColor: color,
          width: "200px",
          height: "100px",
          borderRadius: "8px",
          boxShadow: "0 0 12px rgba(0,0,0,0.2)",
        }}
      />

      <h5 className="text-muted">Selected Color: <span className="text-dark fw-bold">{color}</span></h5>
    </div>
  );
}

export default ColorPicker;