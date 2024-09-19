import React from "react";

export default function ReplacementInput() {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
      <p className="font-semibold">置換設定：</p>
      <small className="text-gray-400">※文字削除の場合は「置換後」の欄を空白にします。</small>

      <div className="mt-4 flex gap-1 items-center w-full">
        <input
          type="text"
          // value={fromText}
          // onChange={handleFromChange}
          placeholder="対象文字"
          className="w-2/4 border border-gray-300 rounded"
        />
        <span className="text-gray-500">→</span>
        <input
          type="text"
          // value={toText}
          // onChange={handleToChange}
          placeholder="変換後"
          className="w-2/4 border border-gray-300 rounded"
        />
      </div>

      <div className="mt-2 flex gap-1 items-center w-full">
        <input
          type="text"
          // value={fromText}
          // onChange={handleFromChange}
          placeholder="対象文字"
          className="w-2/4 border border-gray-300 rounded"
        />
        <span className="text-gray-500">→</span>
        <input
          type="text"
          // value={toText}
          // onChange={handleToChange}
          placeholder="変換後"
          className="w-2/4 border border-gray-300 rounded"
        />
      </div>

      <div className="mt-2 flex gap-1 items-center w-full">
        <input
          type="text"
          // value={fromText}
          // onChange={handleFromChange}
          placeholder="対象文字"
          className="w-2/4 border border-gray-300 rounded"
        />
        <span className="text-gray-500">→</span>
        <input
          type="text"
          // value={toText}
          // onChange={handleToChange}
          placeholder="変換後"
          className="w-2/4 border border-gray-300 rounded"
        />
      </div>
    </div>
  );
}
