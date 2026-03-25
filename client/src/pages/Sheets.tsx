import { useState } from "react";
import {
  ChevronDown,
  Plus,
  Bold,
  Italic,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Undo2,
  Redo2,
  Share2,
  BarChart3,
  Filter,
  Sigma,
  DollarSign,
  Percent,
} from "lucide-react";

type CellCoord = { row: number; col: number };
type MenuKey = "File" | "Edit" | "View" | "Insert" | "Format" | "Data" | "Tools" | null;

const COLS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

interface SalesRow {
  region: string;
  product: string;
  q1: number;
  q2: number;
  growth: number;
}

const SALES_DATA: SalesRow[] = [
  { region: "Riyadh",    product: "Haala Email",  q1: 245000, q2: 318000, growth: 29.8 },
  { region: "Riyadh",    product: "Haala Chat",   q1: 187000, q2: 241000, growth: 28.9 },
  { region: "Jeddah",    product: "Haala Docs",   q1: 132000, q2: 198000, growth: 50.0 },
  { region: "Jeddah",    product: "Haala Sheets", q1:  98000, q2: 134000, growth: 36.7 },
  { region: "Dubai",     product: "Haala Email",  q1: 389000, q2: 521000, growth: 33.9 },
  { region: "Dubai",     product: "Haala Chat",   q1: 312000, q2: 445000, growth: 42.6 },
  { region: "Abu Dhabi", product: "Murshid AI",   q1: 156000, q2: 267000, growth: 71.2 },
  { region: "Abu Dhabi", product: "Haala Docs",   q1: 203000, q2: 278000, growth: 37.0 },
  { region: "Kuwait",    product: "Haala Email",  q1: 118000, q2: 163000, growth: 38.1 },
  { region: "Kuwait",    product: "Haala Chat",   q1:  92000, q2: 128000, growth: 39.1 },
  { region: "Doha",      product: "Murshid AI",   q1:  78000, q2: 145000, growth: 85.9 },
  { region: "Doha",      product: "Haala Sheets", q1:  67000, q2:  94000, growth: 40.3 },
  { region: "Karachi",   product: "Haala Email",  q1: 341000, q2: 412000, growth: 20.8 },
  { region: "Lahore",    product: "Haala Chat",   q1: 278000, q2: 367000, growth: 32.0 },
  { region: "Lahore",    product: "Murshid AI",   q1: 124000, q2: 219000, growth: 76.6 },
];

const HEADERS = ["Region", "Product", "Q1 Sales (SAR)", "Q2 Sales (SAR)", "Growth %", "", "", "", "", ""];

function formatSAR(val: number): string {
  return val.toLocaleString("en-SA");
}

function getCellValue(rowIdx: number, colIdx: number): string {
  if (rowIdx === 0) return HEADERS[colIdx];
  const row = SALES_DATA[rowIdx - 1];
  if (!row) return "";
  switch (colIdx) {
    case 0: return row.region;
    case 1: return row.product;
    case 2: return formatSAR(row.q1);
    case 3: return formatSAR(row.q2);
    case 4: return `${row.growth.toFixed(1)}%`;
    default: return "";
  }
}

function getCellFormula(rowIdx: number, colIdx: number): string {
  if (rowIdx === 0) return "";
  const row = SALES_DATA[rowIdx - 1];
  if (!row) return "";
  if (colIdx === 4) {
    return `=((D${rowIdx + 1}-C${rowIdx + 1})/C${rowIdx + 1})*100`;
  }
  return getCellValue(rowIdx, colIdx);
}

function colLabel(rowIdx: number, colIdx: number): string {
  return `${COLS[colIdx]}${rowIdx + 1}`;
}

export default function SheetsPage() {
  const [selectedCell, setSelectedCell] = useState<CellCoord>({ row: 1, col: 0 });
  const [activeSheet, setActiveSheet] = useState("Sheet1");
  const [sheets, setSheets] = useState(["Sheet1", "Sheet2"]);
  const [activeMenu, setActiveMenu] = useState<MenuKey>(null);

  const totalRows = 20;

  const isCellSelected = (r: number, c: number) =>
    selectedCell.row === r && selectedCell.col === c;

  const isColSelected = (c: number) => selectedCell.col === c;
  const isRowSelected = (r: number) => selectedCell.row === r;

  const formulaBarValue =
    selectedCell.row === 0
      ? HEADERS[selectedCell.col]
      : getCellFormula(selectedCell.row, selectedCell.col);

  const menuItems: Record<string, string[]> = {
    File: ["New", "Open", "Import", "Make a copy", "Download", "Share", "Print"],
    Edit: ["Undo", "Redo", "Cut", "Copy", "Paste", "Find and replace", "Delete values"],
    View: ["Freeze", "Show row numbers", "Show formula bar", "Zoom"],
    Insert: ["Rows above", "Rows below", "Columns left", "Columns right", "Chart", "Function"],
    Format: ["Number", "Bold", "Italic", "Strikethrough", "Theme", "Conditional formatting"],
    Data: ["Sort range", "Filter", "Named ranges", "Validate data", "Pivot table"],
    Tools: ["Formulas", "Macros", "Script editor", "Murshid AI", "Spelling"],
  };

  const toggleMenu = (m: MenuKey) => setActiveMenu((prev) => (prev === m ? null : m));

  const addSheet = () => {
    const newName = `Sheet${sheets.length + 1}`;
    setSheets([...sheets, newName]);
    setActiveSheet(newName);
  };

  return (
    <div
      className="flex flex-col overflow-hidden bg-white"
      style={{ fontFamily: "'Google Sans', sans-serif", height: "calc(100vh - 64px)" }}
      onClick={() => setActiveMenu(null)}
    >
      {/* Top toolbar */}
      <div className="border-b border-gray-200 flex-shrink-0">
        {/* Title & share row */}
        <div className="flex items-center px-4 py-2 gap-3">
          <div className="w-8 h-10 flex-shrink-0 rounded-sm flex items-center justify-center" style={{ backgroundColor: "#0F9D58" }}>
            <span className="text-white text-xs font-bold">S</span>
          </div>
          <div>
            <div className="text-base font-medium text-gray-900">Regional Sales Report — Q1/Q2 2026</div>
            <div className="flex items-center gap-3 mt-0.5">
              <span className="text-xs text-gray-500">All changes saved</span>
            </div>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-1.5 rounded-full text-white text-sm font-medium" style={{ backgroundColor: "#1A73E8" }}>
              <Share2 size={14} />
              Share
            </button>
          </div>
        </div>

        {/* Menu bar */}
        <div className="flex items-center px-4 gap-1" onClick={(e) => e.stopPropagation()}>
          {(Object.keys(menuItems) as MenuKey[]).map((menu) => (
            <div key={menu as string} className="relative">
              <button
                onClick={() => toggleMenu(menu)}
                className={`px-3 py-1.5 text-sm rounded transition-colors ${
                  activeMenu === menu ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {menu as string}
              </button>
              {activeMenu === menu && (
                <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-44 py-1">
                  {menuItems[menu as string].map((item) => (
                    <button
                      key={item}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      onClick={() => setActiveMenu(null)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Formatting toolbar */}
        <div className="flex items-center gap-1 px-4 py-1.5 border-t border-gray-100">
          <button className="p-1.5 hover:bg-gray-100 rounded transition-colors">
            <Undo2 size={15} className="text-gray-600" />
          </button>
          <button className="p-1.5 hover:bg-gray-100 rounded transition-colors">
            <Redo2 size={15} className="text-gray-600" />
          </button>
          <div className="w-px h-5 bg-gray-200 mx-1" />

          <button className="flex items-center gap-1 px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded border border-gray-200 transition-colors">
            100%
            <ChevronDown size={12} />
          </button>
          <div className="w-px h-5 bg-gray-200 mx-1" />

          <button className="p-1.5 hover:bg-gray-100 rounded transition-colors">
            <Bold size={15} className="text-gray-600" />
          </button>
          <button className="p-1.5 hover:bg-gray-100 rounded transition-colors">
            <Italic size={15} className="text-gray-600" />
          </button>
          <div className="w-px h-5 bg-gray-200 mx-1" />

          <button className="p-1.5 hover:bg-gray-100 rounded transition-colors" title="Currency">
            <DollarSign size={15} className="text-gray-600" />
          </button>
          <button className="p-1.5 hover:bg-gray-100 rounded transition-colors" title="Percent">
            <Percent size={15} className="text-gray-600" />
          </button>
          <div className="w-px h-5 bg-gray-200 mx-1" />

          <button className="p-1.5 hover:bg-gray-100 rounded transition-colors">
            <AlignLeft size={15} className="text-gray-600" />
          </button>
          <button className="p-1.5 hover:bg-gray-100 rounded transition-colors">
            <AlignCenter size={15} className="text-gray-600" />
          </button>
          <button className="p-1.5 hover:bg-gray-100 rounded transition-colors">
            <AlignRight size={15} className="text-gray-600" />
          </button>
          <div className="w-px h-5 bg-gray-200 mx-1" />

          <button className="p-1.5 hover:bg-gray-100 rounded transition-colors" title="Filter">
            <Filter size={15} className="text-gray-600" />
          </button>
          <button className="p-1.5 hover:bg-gray-100 rounded transition-colors" title="Chart">
            <BarChart3 size={15} className="text-gray-600" />
          </button>
          <button className="p-1.5 hover:bg-gray-100 rounded transition-colors" title="Sum">
            <Sigma size={15} className="text-gray-600" />
          </button>
        </div>

        {/* Formula bar */}
        <div className="flex items-center gap-2 px-4 py-1.5 border-t border-gray-100 bg-white">
          <div className="flex items-center justify-center w-16 h-7 border border-gray-300 rounded text-xs font-mono text-gray-700 bg-gray-50 px-2 flex-shrink-0">
            {colLabel(selectedCell.row, selectedCell.col)}
          </div>
          <div className="w-px h-5 bg-gray-200" />
          <div className="flex-1 flex items-center gap-2 border border-gray-200 rounded px-3 h-7 bg-white">
            <span className="text-xs text-gray-400 font-mono">fx</span>
            <span className="text-xs font-mono text-gray-700 truncate">{formulaBarValue}</span>
          </div>
        </div>
      </div>

      {/* Grid area */}
      <div className="flex-1 overflow-auto">
        <table className="border-collapse" style={{ tableLayout: "fixed", minWidth: "100%" }}>
          <colgroup>
            <col style={{ width: "40px" }} />
            {COLS.map((c) => (
              <col key={c} style={{ width: c === "A" ? "110px" : c === "B" ? "130px" : c === "C" || c === "D" ? "130px" : c === "E" ? "90px" : "80px" }} />
            ))}
          </colgroup>
          <thead className="sticky top-0 z-10">
            <tr>
              {/* Corner cell */}
              <th className="border border-gray-300 bg-gray-100 text-xs text-gray-500" style={{ minWidth: 40, height: 24 }} />
              {COLS.map((col, ci) => (
                <th
                  key={col}
                  className={`border border-gray-300 text-xs font-medium text-gray-600 text-center select-none cursor-pointer ${
                    isColSelected(ci) ? "bg-blue-100 text-blue-800" : "bg-gray-100 hover:bg-gray-200"
                  }`}
                  style={{ height: 24 }}
                  onClick={() => setSelectedCell({ row: selectedCell.row, col: ci })}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: totalRows }).map((_, ri) => {
              const rowNum = ri + 1;
              const isHeader = ri === 0;
              return (
                <tr key={ri} className={isHeader ? "bg-gray-50" : "bg-white hover:bg-blue-50/30"}>
                  {/* Row number */}
                  <td
                    className={`border border-gray-300 text-xs text-center text-gray-500 select-none cursor-pointer font-medium ${
                      isRowSelected(ri) ? "bg-blue-100 text-blue-800" : "bg-gray-100 hover:bg-gray-200"
                    }`}
                    style={{ height: 22 }}
                    onClick={() => setSelectedCell({ row: ri, col: selectedCell.col })}
                  >
                    {rowNum}
                  </td>
                  {COLS.map((_, ci) => {
                    const val = getCellValue(ri, ci);
                    const selected = isCellSelected(ri, ci);
                    const isGrowthCol = ci === 4 && ri > 0;
                    const growthVal = ri > 0 && SALES_DATA[ri - 1] ? SALES_DATA[ri - 1].growth : 0;
                    const isHighGrowth = isGrowthCol && growthVal >= 50;
                    const isMidGrowth = isGrowthCol && growthVal >= 30 && growthVal < 50;

                    return (
                      <td
                        key={ci}
                        onClick={() => setSelectedCell({ row: ri, col: ci })}
                        className={`border text-xs cursor-cell select-none overflow-hidden whitespace-nowrap px-2 ${
                          selected
                            ? "bg-blue-500 text-white border-blue-600"
                            : isHeader
                            ? "bg-gray-50 font-semibold text-gray-700 border-gray-300"
                            : "text-gray-700 border-gray-200"
                        } ${
                          !selected && isHighGrowth ? "text-green-700 font-semibold" : ""
                        } ${
                          !selected && isMidGrowth ? "text-blue-700" : ""
                        }`}
                        style={{ height: 22, textAlign: ci >= 2 && ci <= 4 ? "right" : "left" }}
                      >
                        {val}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Sheet tabs */}
      <div className="flex items-center border-t border-gray-200 bg-white flex-shrink-0 px-2 py-1 gap-1">
        <button className="p-1 hover:bg-gray-100 rounded transition-colors" onClick={addSheet}>
          <Plus size={14} className="text-gray-500" />
        </button>
        <div className="w-px h-4 bg-gray-200 mx-1" />
        {sheets.map((sheet) => (
          <button
            key={sheet}
            onClick={() => setActiveSheet(sheet)}
            className={`px-4 py-1 text-xs rounded transition-colors font-medium ${
              activeSheet === sheet
                ? "bg-white border border-gray-300 text-blue-600 border-b-white shadow-sm"
                : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            }`}
          >
            {sheet}
          </button>
        ))}
        <div className="ml-auto flex items-center gap-4 pr-2">
          <span className="text-xs text-gray-400">
            SUM:{" "}
            <span className="font-medium text-gray-600">
              {selectedCell.col === 2
                ? `SAR ${SALES_DATA.reduce((a, r) => a + r.q1, 0).toLocaleString()}`
                : selectedCell.col === 3
                ? `SAR ${SALES_DATA.reduce((a, r) => a + r.q2, 0).toLocaleString()}`
                : "—"}
            </span>
          </span>
          <span className="text-xs text-gray-400">
            COUNT: <span className="font-medium text-gray-600">15</span>
          </span>
        </div>
      </div>
    </div>
  );
}
