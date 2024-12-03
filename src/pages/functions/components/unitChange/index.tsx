import { useState } from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, InputNumber, Select } from "antd";

import "./index.css";

const unitList = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

export default function UnitChange() {
  const [unit, setUnit] = useState<any>({
    old: { name: "B", value: null },
    new: { name: "KB", value: null },
  });

  const oldSelectAfter = (
    <Select value={unit.old.name} style={{ width: 80 }}>
      {unitList.map((item) => (
        <Select.Option key={item} value={item}>
          {item}
        </Select.Option>
      ))}
    </Select>
  );
  const newSelectAfter = (
    <Select value={unit.new.name} style={{ width: 80 }}>
      {unitList.map((item) => (
        <Select.Option key={item} value={item}>
          {item}
        </Select.Option>
      ))}
    </Select>
  );

  const changeUnit = (size: number, fromUnit: string, toUnit: string, decimalPoint = 2) => {
    const fromIndex = unitList.indexOf(fromUnit);
    const toIndex = unitList.indexOf(toUnit);

    if (fromIndex === -1 || toIndex === -1) {
      throw new Error("Invalid unit");
    }
    // 计算初始单位与目标单位之间的转换系数
    const exonent = toIndex - fromIndex;
    // 计算转换后的值
    const result = size / Math.pow(1024, exonent);
    setUnit({ ...unit, new: { ...unit.new, value: result.toFixed(decimalPoint) } });
  };

  return (
    <>
      <div className="container">
        <div className="title">单位转换：</div>
        <div className="unit-converter">
          <InputNumber
            addonAfter={oldSelectAfter}
            value={unit.old.value}
            onChange={(value) => setUnit({ ...unit, old: { ...unit.old, value } })}
          />
          <ArrowRightOutlined />
          <InputNumber
            addonAfter={newSelectAfter}
            value={unit.new.value}
            disabled
            onChange={(value) => setUnit({ ...unit, new: { ...unit.new, value } })}
          />
          <Button
            onClick={() => {
              changeUnit(unit.old.value, unit.old.name, unit.new.name);
            }}
          >
            确定
          </Button>
        </div>
      </div>
    </>
  );
}
