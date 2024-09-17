import React, { useContext } from "react";
import { MyContext } from "../Container";

export default function ConvertionButtons() {
  const [, , , , convertionDirection, setConvertionDirection] = useContext(MyContext);

  const handleChange = (event) => {
    setConvertionDirection(event.target.value);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
      <p className="font-semibold mb-3">変換方向：</p>
      <div className="flex gap-4">
        <label className="flex items-center space-x-3 cursor-pointer">
          <input
            type="radio"
            name="convertionDirection"
            value="fullToHalf"
            className="form-radio text-blue-600 h-5 w-5"
            checked={convertionDirection === "fullToHalf"}
            onChange={handleChange}
          />
          <span className="text-gray-700">全角 → 半角</span>
        </label>
        <label className="flex items-center space-x-3 cursor-pointer">
          <input
            type="radio"
            name="convertionDirection"
            value="halfToFull"
            className="form-radio text-blue-600 h-5 w-5"
            checked={convertionDirection === "halfToFull"}
            onChange={handleChange}
          />
          <span className="text-gray-700">半角 → 全角</span>
        </label>
      </div>
    </div>
  );
}
