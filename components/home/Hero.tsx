'use client'

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

/* ─── Hyper-realistic software UI card renders ─── */

const heroCards = [
  {
    /* ── Card 1: SAP GUI — Create Info Record: General Data (ME11) ── */
    id: 1,
    render: () => (
      <div className="bg-[#d4d0c8] border border-[#808080] overflow-hidden flex flex-col font-[Tahoma,Arial,sans-serif] h-full text-left text-[#000000] text-[10px]">
        {/* SAP Menu Bar */}
        <div className="bg-[#ece9d8] border-b border-[#aca899] px-1 py-[2px] flex items-center gap-0 text-[10px] text-[#000000]">
          <span className="px-1.5 hover:bg-[#c1d2ee]">Info Record</span>
          <span className="px-1.5">Edit</span>
          <span className="px-1.5">Goto</span>
          <span className="px-1.5">Extras</span>
          <span className="px-1.5">Environment</span>
          <span className="px-1.5">System</span>
          <span className="px-1.5">Help</span>
        </div>

        {/* SAP Toolbar with icons */}
        <div className="bg-[#ece9d8] border-b border-[#aca899] px-1 py-[2px] flex items-center gap-[2px]">
          <div className="w-5 h-5 bg-[#d4d0c8] border border-[#808080] flex items-center justify-center text-[8px]">✓</div>
          <div className="w-5 h-5 bg-[#d4d0c8] border border-[#808080] flex items-center justify-center text-[8px]">✕</div>
          <div className="w-px h-4 bg-[#808080] mx-1" />
          <div className="bg-white border border-[#808080] px-1 py-[1px] text-[10px] font-mono w-24">ME1M</div>
          <div className="w-5 h-5 bg-[#d4d0c8] border border-[#808080] flex items-center justify-center text-[8px]">▶</div>
        </div>

        {/* SAP Title Bar */}
        <div className="bg-[#4a6fa5] px-2 py-1 flex items-center gap-2">
          <div className="w-4 h-4 bg-[#f0c040] border border-[#b08000] flex items-center justify-center text-[7px] font-bold text-[#000]">IR</div>
          <span className="text-white font-bold text-[11px]">Create Info Record: General Data</span>
        </div>

        {/* Form Body */}
        <div className="flex-1 bg-[#d4d0c8] p-2 space-y-1 overflow-hidden">
          {/* Texts section */}
          <div className="border border-[#808080] p-1.5 bg-[#d4d0c8]">
            <div className="text-[9px] font-bold text-[#000080] mb-1 border-b border-[#808080] pb-0.5">Texts</div>
            <div className="space-y-[3px]">
              <div className="flex items-center gap-2">
                <span className="w-20 text-[9px]">Info Record</span>
                <input readOnly className="bg-[#ffffc8] border border-[#808080] px-1 text-[9px] font-mono w-20 h-4" value="" />
                <input readOnly className="bg-[#ffffc8] border border-[#808080] px-1 text-[9px] font-mono w-24 h-4" value="" />
              </div>
              <div className="flex items-center gap-2">
                <span className="w-20 text-[9px]">Vendor</span>
                <input readOnly className="bg-white border border-[#808080] px-1 text-[9px] font-mono w-20 h-4" value="1000000000" />
                <span className="text-[9px] text-[#000]">XYZ Limited</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-20 text-[9px]">Material Group</span>
                <input readOnly className="bg-white border border-[#808080] px-1 text-[9px] font-mono w-6 h-4 text-center" value="☑" />
              </div>
            </div>
          </div>

          {/* Vendor Data / Origin Data */}
          <div className="flex gap-1">
            <div className="flex-1 border border-[#808080] p-1.5 bg-[#d4d0c8]">
              <div className="text-[9px] font-bold text-[#000080] mb-1 border-b border-[#808080] pb-0.5">Vendor Data</div>
              <div className="space-y-[2px] text-[9px]">
                <div className="flex justify-between"><span>1st Rem./Exped.</span><input readOnly className="bg-white border border-[#808080] w-10 h-3.5 px-0.5 text-[8px]" /><span className="text-[8px]">Days</span></div>
                <div className="flex justify-between"><span>2nd Rem./Exped.</span><input readOnly className="bg-white border border-[#808080] w-10 h-3.5 px-0.5 text-[8px]" /><span className="text-[8px]">Days</span></div>
                <div className="flex justify-between"><span>Vendor Mat. No.</span><input readOnly className="bg-white border border-[#808080] w-16 h-3.5 px-0.5 text-[8px]" /></div>
                <div className="flex justify-between"><span>Vendor Subrange</span><input readOnly className="bg-white border border-[#808080] w-16 h-3.5 px-0.5 text-[8px]" /></div>
                <div className="flex justify-between"><span>Salesperson</span><input readOnly className="bg-white border border-[#808080] w-20 h-3.5 px-0.5 text-[8px]" /></div>
                <div className="flex justify-between"><span>Telephone</span><input readOnly className="bg-white border border-[#808080] w-20 h-3.5 px-0.5 text-[8px]" value="09123976585" /></div>
              </div>
            </div>
            <div className="flex-1 border border-[#808080] p-1.5 bg-[#d4d0c8]">
              <div className="text-[9px] font-bold text-[#000080] mb-1 border-b border-[#808080] pb-0.5">Origin Data</div>
              <div className="space-y-[2px] text-[9px]">
                <div className="flex justify-between"><span>Certif. Cat.</span><input readOnly className="bg-white border border-[#808080] w-10 h-3.5 px-0.5 text-[8px]" /></div>
                <div className="flex justify-between"><span>Certificate</span><input readOnly className="bg-white border border-[#808080] w-14 h-3.5 px-0.5 text-[8px]" /></div>
                <div className="flex justify-between"><span>Valid to</span><input readOnly className="bg-white border border-[#808080] w-14 h-3.5 px-0.5 text-[8px]" /></div>
                <div className="flex justify-between"><span>Ctry of Origin</span><input readOnly className="bg-[#ffffc8] border border-[#808080] w-6 h-3.5 px-0.5 text-[8px] font-bold" value="IN" /></div>
                <div className="flex justify-between"><span>Region</span><input readOnly className="bg-white border border-[#808080] w-6 h-3.5 px-0.5 text-[8px]" value="10" /></div>
              </div>
            </div>
          </div>

          {/* Purchase Order Unit */}
          <div className="flex gap-1">
            <div className="flex-1 border border-[#808080] p-1 bg-[#d4d0c8]">
              <div className="text-[8px] font-bold text-[#000080]">Purchase Order Unit of Measure</div>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="text-[8px]">Order Unit</span>
                <input readOnly className="bg-white border border-[#808080] w-5 h-3 px-0.5 text-[7px] text-center" value="☑" />
              </div>
            </div>
            <div className="flex-1 border border-[#808080] p-1 bg-[#d4d0c8]">
              <div className="text-[8px] font-bold text-[#000080]">Sorting</div>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="text-[8px]">Sort Term</span>
                <input readOnly className="bg-white border border-[#808080] w-5 h-3 px-0.5 text-[7px] text-center" value="☑" />
              </div>
            </div>
          </div>
        </div>

        {/* SAP Status Bar */}
        <div className="bg-[#ece9d8] border-t border-[#aca899] px-2 py-[2px] text-[9px] text-[#000] flex items-center">
          <div className="w-2 h-2 rounded-full bg-[#00aa00] mr-1" />
          <span>SAP System &bull; Client 800</span>
        </div>
      </div>
    ),
  },
  {
    /* ── Card 2: Microsoft Excel — Vendor Price List ── */
    id: 2,
    render: () => (
      <div className="border border-[#b4b4b4] overflow-hidden flex flex-col font-[Segoe_UI,Calibri,sans-serif] h-full text-left text-[#000] text-[10px] bg-white">
        {/* Title Bar */}
        <div className="bg-[#217346] text-white px-3 py-1.5 flex items-center justify-between text-[10px]">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-white/20 flex items-center justify-center text-[8px] font-bold">X</div>
            <span className="font-semibold text-[11px]">Supplier_PriceList_2026.xlsx - Excel</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 text-white/70 text-[10px] text-center leading-3">−</div>
            <div className="w-3 h-3 text-white/70 text-[10px] text-center leading-3">□</div>
            <div className="w-3 h-3 text-white/70 text-[10px] text-center leading-3">×</div>
          </div>
        </div>

        {/* Ribbon Tabs */}
        <div className="bg-[#f3f3f3] border-b border-[#d6d6d6] px-2 py-[3px] text-[10px] text-[#444] flex gap-3">
          <span className="text-[#217346] font-semibold border-b-2 border-[#217346] pb-[1px]">Home</span>
          <span>Insert</span>
          <span>Page Layout</span>
          <span>Formulas</span>
          <span>Data</span>
          <span>Review</span>
          <span>View</span>
        </div>

        {/* Name Box + Formula Bar */}
        <div className="bg-white border-b border-[#d6d6d6] flex items-center text-[10px]">
          <div className="border-r border-[#d6d6d6] px-2 py-[3px] w-14 font-mono text-[10px] text-[#000] bg-white">B2</div>
          <div className="px-1 text-[#888] text-[10px] italic border-r border-[#d6d6d6]">fx</div>
          <div className="px-2 py-[3px] flex-1 font-mono text-[10px] text-[#000]">142.50</div>
        </div>

        {/* Spreadsheet Grid */}
        <div className="flex-1 overflow-hidden bg-white">
          <table className="w-full border-collapse text-[9px] font-[Calibri,sans-serif]">
            <thead>
              <tr className="bg-[#f0f0f0] text-[#666] text-center">
                <th className="w-6 border-r border-b border-[#d6d6d6] font-normal py-[2px]"></th>
                <th className="border-r border-b border-[#d6d6d6] font-normal px-1 py-[2px] min-w-[70px]">A</th>
                <th className="border-r border-b border-[#d6d6d6] font-normal px-1 py-[2px] min-w-[55px]">B</th>
                <th className="border-r border-b border-[#d6d6d6] font-normal px-1 py-[2px] min-w-[35px]">C</th>
                <th className="border-r border-b border-[#d6d6d6] font-normal px-1 py-[2px] min-w-[55px]">D</th>
                <th className="border-r border-b border-[#d6d6d6] font-normal px-1 py-[2px] min-w-[50px]">E</th>
                <th className="border-b border-[#d6d6d6] font-normal px-1 py-[2px] min-w-[50px]">F</th>
              </tr>
            </thead>
            <tbody>
              {/* Header Row */}
              <tr className="bg-[#dce6f1] font-bold text-[#000]">
                <td className="bg-[#f0f0f0] border-r border-b border-[#d6d6d6] text-center text-[#666] font-normal">1</td>
                <td className="border-r border-b border-[#d6d6d6] px-1 py-[3px]">Material No</td>
                <td className="border-r border-b border-[#d6d6d6] px-1 py-[3px]">Net Price</td>
                <td className="border-r border-b border-[#d6d6d6] px-1 py-[3px]">UoM</td>
                <td className="border-r border-b border-[#d6d6d6] px-1 py-[3px]">Valid From</td>
                <td className="border-r border-b border-[#d6d6d6] px-1 py-[3px]">Valid To</td>
                <td className="border-b border-[#d6d6d6] px-1 py-[3px]">Vendor</td>
              </tr>
              {/* Data Row — selected cell */}
              <tr>
                <td className="bg-[#f0f0f0] border-r border-b border-[#d6d6d6] text-center text-[#666] font-normal">2</td>
                <td className="border-r border-b border-[#d6d6d6] px-1 py-[3px] font-mono">MAT-9042-X</td>
                <td className="border-r border-b border-[#217346] border-l-[2px] border-t-[2px] border-l-[#217346] border-t-[#217346] px-1 py-[3px] font-mono bg-[#e2efda]">142.50</td>
                <td className="border-r border-b border-[#d6d6d6] px-1 py-[3px] font-mono">EA</td>
                <td className="border-r border-b border-[#d6d6d6] px-1 py-[3px] font-mono">01.01.2026</td>
                <td className="border-r border-b border-[#d6d6d6] px-1 py-[3px] font-mono">31.12.2026</td>
                <td className="border-b border-[#d6d6d6] px-1 py-[3px] font-mono">V-100234</td>
              </tr>
              <tr>
                <td className="bg-[#f0f0f0] border-r border-b border-[#d6d6d6] text-center text-[#666] font-normal">3</td>
                <td className="border-r border-b border-[#d6d6d6] px-1 py-[3px] font-mono">MAT-7108-B</td>
                <td className="border-r border-b border-[#d6d6d6] px-1 py-[3px] font-mono">88.20</td>
                <td className="border-r border-b border-[#d6d6d6] px-1 py-[3px] font-mono">KG</td>
                <td className="border-r border-b border-[#d6d6d6] px-1 py-[3px] font-mono">15.03.2026</td>
                <td className="border-r border-b border-[#d6d6d6] px-1 py-[3px] font-mono">14.09.2026</td>
                <td className="border-b border-[#d6d6d6] px-1 py-[3px] font-mono">V-100234</td>
              </tr>
              <tr>
                <td className="bg-[#f0f0f0] border-r border-b border-[#d6d6d6] text-center text-[#666] font-normal">4</td>
                <td className="border-r border-b border-[#d6d6d6] px-1 py-[3px] font-mono">MAT-3341-C</td>
                <td className="border-r border-b border-[#d6d6d6] px-1 py-[3px] font-mono">310.00</td>
                <td className="border-r border-b border-[#d6d6d6] px-1 py-[3px] font-mono">PC</td>
                <td className="border-r border-b border-[#d6d6d6] px-1 py-[3px] font-mono">01.02.2026</td>
                <td className="border-r border-b border-[#d6d6d6] px-1 py-[3px] font-mono">31.07.2026</td>
                <td className="border-b border-[#d6d6d6] px-1 py-[3px] font-mono">V-100891</td>
              </tr>
              <tr>
                <td className="bg-[#f0f0f0] border-r border-b border-[#d6d6d6] text-center text-[#666] font-normal">5</td>
                <td className="border-r border-b border-[#d6d6d6] px-1 py-[3px] font-mono">MAT-5520-D</td>
                <td className="border-r border-b border-[#d6d6d6] px-1 py-[3px] font-mono">47.80</td>
                <td className="border-r border-b border-[#d6d6d6] px-1 py-[3px] font-mono">EA</td>
                <td className="border-r border-b border-[#d6d6d6] px-1 py-[3px] font-mono">10.04.2026</td>
                <td className="border-r border-b border-[#d6d6d6] px-1 py-[3px] font-mono">09.10.2026</td>
                <td className="border-b border-[#d6d6d6] px-1 py-[3px] font-mono">V-100234</td>
              </tr>
              <tr>
                <td className="bg-[#f0f0f0] border-r border-b border-[#d6d6d6] text-center text-[#666] font-normal">6</td>
                <td className="border-r border-b border-[#d6d6d6] px-1 py-[3px] font-mono">MAT-2217-E</td>
                <td className="border-r border-b border-[#d6d6d6] px-1 py-[3px] font-mono">195.00</td>
                <td className="border-r border-b border-[#d6d6d6] px-1 py-[3px] font-mono">L</td>
                <td className="border-r border-b border-[#d6d6d6] px-1 py-[3px] font-mono">01.01.2026</td>
                <td className="border-r border-b border-[#d6d6d6] px-1 py-[3px] font-mono">31.12.2026</td>
                <td className="border-b border-[#d6d6d6] px-1 py-[3px] font-mono">V-100512</td>
              </tr>
              {/* Empty rows */}
              <tr>
                <td className="bg-[#f0f0f0] border-r border-b border-[#d6d6d6] text-center text-[#666] font-normal">7</td>
                <td className="border-r border-b border-[#d6d6d6] px-1 py-[3px]"></td>
                <td className="border-r border-b border-[#d6d6d6] px-1 py-[3px]"></td>
                <td className="border-r border-b border-[#d6d6d6] px-1 py-[3px]"></td>
                <td className="border-r border-b border-[#d6d6d6] px-1 py-[3px]"></td>
                <td className="border-r border-b border-[#d6d6d6] px-1 py-[3px]"></td>
                <td className="border-b border-[#d6d6d6] px-1 py-[3px]"></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Sheet tabs + Status bar */}
        <div className="bg-[#f0f0f0] border-t border-[#d6d6d6] px-1 py-[2px] flex items-center justify-between text-[9px] text-[#444]">
          <div className="flex items-center gap-0">
            <div className="bg-white border border-[#d6d6d6] px-2 py-[1px] text-[9px] font-semibold border-b-2 border-b-[#217346]">Sheet1</div>
            <div className="bg-[#e8e8e8] border border-[#d6d6d6] px-2 py-[1px] text-[9px] text-[#888]">Sheet2</div>
            <div className="px-1 text-[10px] text-[#888]">+</div>
          </div>
          <span className="text-[8px] text-[#888]">Ready</span>
        </div>
      </div>
    ),
  },
  {
    /* ── Card 3: Power BI — Procurement Performance Dashboard ── */
    id: 3,
    render: () => (
      <div className="border border-[#e0e0e0] overflow-hidden flex flex-col font-[Segoe_UI,sans-serif] h-full text-left text-[#333] text-[9px] bg-[#f2f2f2]">
        {/* Power BI Header */}
        <div className="bg-[#f2c811] px-3 py-1.5 flex items-center justify-between">
          <span className="font-bold text-[#333] text-[10px]">Power BI</span>
          <span className="text-[9px] text-[#333]/70">Purchasing Performance</span>
        </div>

        {/* KPI Cards Row */}
        <div className="p-2 space-y-2 flex-1 bg-[#f2f2f2] overflow-hidden">
          <div className="grid grid-cols-3 gap-1.5">
            <div className="bg-white border border-[#e0e0e0] p-2">
              <div className="text-[8px] text-[#666] mb-0.5">Days Inventory Outstanding</div>
              <div className="text-[16px] font-bold text-[#333] leading-none">46 days</div>
            </div>
            <div className="bg-white border border-[#e0e0e0] p-2">
              <div className="text-[8px] text-[#666] mb-0.5">Total Costs</div>
              <div className="text-[16px] font-bold text-[#333] leading-none">$61.03M</div>
            </div>
            <div className="bg-white border border-[#e0e0e0] p-2">
              <div className="text-[8px] text-[#666] mb-0.5">Days Payable Outstanding</div>
              <div className="text-[16px] font-bold text-[#333] leading-none">20 days</div>
            </div>
          </div>

          {/* Metrics Row */}
          <div className="grid grid-cols-4 gap-1.5">
            <div className="bg-white border border-[#e0e0e0] p-1.5 text-center">
              <div className="text-[14px] font-bold text-[#333]">17.68%</div>
              <div className="text-[7px] text-[#666]">Rejection Rate</div>
            </div>
            <div className="bg-white border border-[#e0e0e0] p-1.5 text-center">
              <div className="text-[14px] font-bold text-[#333]">65.40%</div>
              <div className="text-[7px] text-[#666]">On-Time Delivery</div>
            </div>
            <div className="bg-white border border-[#e0e0e0] p-1.5 text-center">
              <div className="text-[14px] font-bold text-[#333]">$299.61M</div>
              <div className="text-[7px] text-[#666]">Total Net Sales</div>
            </div>
            <div className="bg-white border border-[#e0e0e0] p-1.5 text-center">
              <div className="text-[14px] font-bold text-[#333]">114,340</div>
              <div className="text-[7px] text-[#666]">Total Orders</div>
            </div>
          </div>

          {/* Cost Distribution Chart */}
          <div className="bg-white border border-[#e0e0e0] p-2">
            <div className="text-[9px] font-bold text-[#333] mb-1.5">Cost Distribution</div>
            {/* Stacked bars */}
            <div className="space-y-1">
              {[
                { label: 'Order Picking', vals: [60, 20, 10, 10] },
                { label: 'Quality Control', vals: [40, 25, 20, 15] },
                { label: 'Receiving', vals: [50, 15, 25, 10] },
                { label: 'Shipping', vals: [35, 30, 20, 15] },
              ].map((row) => (
                <div key={row.label} className="flex items-center gap-1">
                  <span className="text-[7px] text-[#666] w-14 text-right shrink-0">{row.label}</span>
                  <div className="flex-1 flex h-3">
                    <div className="bg-[#2ca58d]" style={{ width: `${row.vals[0]}%` }} />
                    <div className="bg-[#84d9c5]" style={{ width: `${row.vals[1]}%` }} />
                    <div className="bg-[#f0c040]" style={{ width: `${row.vals[2]}%` }} />
                    <div className="bg-[#5b9bd5]" style={{ width: `${row.vals[3]}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-2 mt-1 text-[6px] text-[#666]">
              <span className="flex items-center gap-0.5"><span className="w-1.5 h-1.5 bg-[#2ca58d] inline-block" /> Inventory</span>
              <span className="flex items-center gap-0.5"><span className="w-1.5 h-1.5 bg-[#84d9c5] inline-block" /> Transport</span>
              <span className="flex items-center gap-0.5"><span className="w-1.5 h-1.5 bg-[#f0c040] inline-block" /> Warehousing</span>
              <span className="flex items-center gap-0.5"><span className="w-1.5 h-1.5 bg-[#5b9bd5] inline-block" /> Service</span>
            </div>
          </div>

          {/* Perfect Orders by Warehouse */}
          <div className="bg-white border border-[#e0e0e0] p-2">
            <div className="text-[9px] font-bold text-[#333] mb-1">Perfect Orders by Warehouse</div>
            <div className="space-y-[3px]">
              {[
                { name: 'Warehouse 5', w: '92%' },
                { name: 'Warehouse 4', w: '88%' },
                { name: 'Warehouse 3', w: '85%' },
                { name: 'Warehouse 2', w: '80%' },
                { name: 'Warehouse 1', w: '78%' },
              ].map((wh) => (
                <div key={wh.name} className="flex items-center gap-1">
                  <span className="text-[7px] text-[#666] w-14 shrink-0">{wh.name}</span>
                  <div className="flex-1 bg-[#f0f0f0] h-2.5">
                    <div className="bg-[#2ca58d] h-full" style={{ width: wh.w }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    /* ── Card 4: SAP Business One — Purchase Order ── */
    id: 4,
    render: () => (
      <div className="bg-[#eef2f5] border border-[#b0b8c0] overflow-hidden flex flex-col font-[Segoe_UI,sans-serif] h-full text-left text-[#333] text-[10px]">
        {/* SAP B1 Menu Bar */}
        <div className="bg-[#3a5998] px-2 py-[3px] flex items-center gap-3 text-[10px] text-white">
          <span className="font-bold text-[11px]">SAP Business One</span>
          <span className="text-white/70 text-[9px]">10.0 FP 2302</span>
        </div>

        {/* Module Navigation */}
        <div className="bg-[#f8f9fa] border-b border-[#d0d5da] px-2 py-[3px] flex items-center gap-2 text-[9px] text-[#555]">
          <span className="text-[#3a5998] font-semibold">Purchasing</span>
          <span className="text-[#aaa]">&gt;</span>
          <span>Purchase Order</span>
        </div>

        {/* Title */}
        <div className="bg-white border-b border-[#d0d5da] px-2 py-1">
          <span className="font-bold text-[11px] text-[#333]">Purchase Order - 4500012847</span>
        </div>

        {/* Form Content */}
        <div className="flex-1 bg-white p-2 space-y-2 overflow-hidden">
          {/* Header Fields */}
          <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-[9px]">
            <div className="flex items-center gap-1">
              <span className="text-[#666] w-16">Vendor</span>
              <span className="font-mono text-[#333]">V-100234</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[#666] w-16">Posting Date</span>
              <span className="font-mono text-[#333]">01.07.2026</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[#666] w-16">Name</span>
              <span className="text-[#333]">XYZ Limited</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[#666] w-16">Delivery Date</span>
              <span className="font-mono text-[#333]">15.07.2026</span>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-0 border-b border-[#d0d5da] text-[9px]">
            <div className="bg-white border border-[#d0d5da] border-b-white px-2 py-[2px] font-semibold text-[#3a5998] -mb-px">Contents</div>
            <div className="px-2 py-[2px] text-[#888]">Logistics</div>
            <div className="px-2 py-[2px] text-[#888]">Accounting</div>
          </div>

          {/* Line Items Table */}
          <div className="border border-[#d0d5da]">
            <table className="w-full border-collapse text-[8px]">
              <thead>
                <tr className="bg-[#eef2f5] text-[#555]">
                  <th className="border-r border-b border-[#d0d5da] px-1 py-[2px] font-semibold text-left">#</th>
                  <th className="border-r border-b border-[#d0d5da] px-1 py-[2px] font-semibold text-left">Item No.</th>
                  <th className="border-r border-b border-[#d0d5da] px-1 py-[2px] font-semibold text-left">Description</th>
                  <th className="border-r border-b border-[#d0d5da] px-1 py-[2px] font-semibold text-right">Qty</th>
                  <th className="border-r border-b border-[#d0d5da] px-1 py-[2px] font-semibold text-right">Unit Price</th>
                  <th className="border-b border-[#d0d5da] px-1 py-[2px] font-semibold text-right">Total</th>
                </tr>
              </thead>
              <tbody className="font-mono">
                <tr className="bg-white">
                  <td className="border-r border-b border-[#e8e8e8] px-1 py-[2px]">1</td>
                  <td className="border-r border-b border-[#e8e8e8] px-1 py-[2px]">MAT-9042-X</td>
                  <td className="border-r border-b border-[#e8e8e8] px-1 py-[2px] font-sans">Hex Bolt M10x40</td>
                  <td className="border-r border-b border-[#e8e8e8] px-1 py-[2px] text-right">500</td>
                  <td className="border-r border-b border-[#e8e8e8] px-1 py-[2px] text-right">142.50</td>
                  <td className="border-b border-[#e8e8e8] px-1 py-[2px] text-right">71,250.00</td>
                </tr>
                <tr className="bg-[#fafbfc]">
                  <td className="border-r border-b border-[#e8e8e8] px-1 py-[2px]">2</td>
                  <td className="border-r border-b border-[#e8e8e8] px-1 py-[2px]">MAT-7108-B</td>
                  <td className="border-r border-b border-[#e8e8e8] px-1 py-[2px] font-sans">Copper Wire 2.5mm</td>
                  <td className="border-r border-b border-[#e8e8e8] px-1 py-[2px] text-right">250</td>
                  <td className="border-r border-b border-[#e8e8e8] px-1 py-[2px] text-right">88.20</td>
                  <td className="border-b border-[#e8e8e8] px-1 py-[2px] text-right">22,050.00</td>
                </tr>
                <tr className="bg-white">
                  <td className="border-r border-b border-[#e8e8e8] px-1 py-[2px]">3</td>
                  <td className="border-r border-b border-[#e8e8e8] px-1 py-[2px]">MAT-3341-C</td>
                  <td className="border-r border-b border-[#e8e8e8] px-1 py-[2px] font-sans">Bearing SKF 6205</td>
                  <td className="border-r border-b border-[#e8e8e8] px-1 py-[2px] text-right">100</td>
                  <td className="border-r border-b border-[#e8e8e8] px-1 py-[2px] text-right">310.00</td>
                  <td className="border-b border-[#e8e8e8] px-1 py-[2px] text-right">31,000.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Totals */}
          <div className="flex justify-end text-[9px]">
            <div className="space-y-0.5 text-right">
              <div className="flex justify-between gap-4"><span className="text-[#666]">Subtotal</span><span className="font-mono">124,300.00</span></div>
              <div className="flex justify-between gap-4"><span className="text-[#666]">Tax (18%)</span><span className="font-mono">22,374.00</span></div>
              <div className="flex justify-between gap-4 border-t border-[#333] pt-0.5 font-bold"><span>Total</span><span className="font-mono">146,674.00 USD</span></div>
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="bg-[#3a5998] text-white px-2 py-[2px] text-[8px] flex justify-between">
          <span>Status: Open</span>
          <span>SAP Business One 10.0</span>
        </div>
      </div>
    ),
  },
  {
    /* ── Card 5: Snowflake Worksheet ── */
    id: 5,
    render: () => (
      <div className="border border-[#e0e0e0] overflow-hidden flex flex-col font-[Inter,sans-serif] h-full text-left text-[#333] text-[10px] bg-white">
        {/* Snowflake Top Bar */}
        <div className="bg-[#29b5e8] px-2 py-1.5 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M12 0l2.5 4.5L19 2l-2 5h5l-4.5 2.5L22 12l-4.5 2.5L22 17h-5l2 5-4.5-2.5L12 24l-2.5-4.5L5 22l2-5H2l4.5-2.5L2 12l4.5-2.5L2 7h5L5 2l4.5 2.5z" /></svg>
            <span className="text-white font-bold text-[11px]">snowflake</span>
          </div>
          <div className="flex items-center gap-2 text-white text-[9px]">
            <span className="bg-white/20 px-1.5 py-[1px] rounded text-[8px]">ACCOUNTADMIN</span>
            <span className="bg-white/20 px-1.5 py-[1px] rounded text-[8px]">COMPUTE_WH</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-[#f8f9fa] border-b border-[#e0e0e0] px-2 py-[3px] flex items-center gap-1 text-[9px]">
          <div className="bg-white border border-[#d0d0d0] px-2 py-[2px] rounded text-[#333] font-semibold">procurement_audit.sql</div>
          <div className="px-1 text-[#aaa]">+</div>
        </div>

        {/* SQL Editor */}
        <div className="flex-1 bg-[#fafbfc] overflow-hidden">
          {/* Database context */}
          <div className="px-2 py-1 border-b border-[#e8e8e8] text-[8px] text-[#888]">
            PROCUREMENT_DB.PUBLIC &bull; Settings
          </div>

          {/* Code with line numbers */}
          <div className="flex text-[9px] font-mono leading-[18px]">
            <div className="bg-[#f0f0f0] text-[#aaa] px-2 py-1 text-right select-none border-r border-[#e0e0e0] w-7">
              <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div><div>7</div><div>8</div><div>9</div><div>10</div><div>11</div>
            </div>
            <div className="px-2 py-1 flex-1">
              <div><span className="text-[#0000ff]">SELECT</span></div>
              <div>    po.po_number,</div>
              <div>    po.vendor_id,</div>
              <div>    po.material_no,</div>
              <div>    po.net_price,</div>
              <div>    ir.info_record_price,</div>
              <div>    (po.net_price - ir.info_record_price) <span className="text-[#0000ff]">AS</span> variance</div>
              <div><span className="text-[#0000ff]">FROM</span> purchase_orders po</div>
              <div><span className="text-[#0000ff]">INNER JOIN</span> info_records ir</div>
              <div>    <span className="text-[#0000ff]">ON</span> po.material_no = ir.material_no</div>
              <div><span className="text-[#0000ff]">WHERE</span> po.net_price &lt;&gt; ir.info_record_price;</div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="border-t border-[#e0e0e0]">
            <div className="px-2 py-[3px] bg-[#f8f9fa] flex items-center gap-2 text-[9px] border-b border-[#e0e0e0]">
              <span className="text-[#29b5e8] font-semibold">Results</span>
              <span className="text-[#888]">Chart</span>
            </div>
            {/* Results table */}
            <table className="w-full text-[8px] font-mono border-collapse">
              <thead>
                <tr className="bg-[#f0f2f4] text-[#666]">
                  <th className="border-r border-b border-[#e0e0e0] px-1 py-[2px] text-left font-semibold">PO_NUMBER</th>
                  <th className="border-r border-b border-[#e0e0e0] px-1 py-[2px] text-left font-semibold">VENDOR_ID</th>
                  <th className="border-r border-b border-[#e0e0e0] px-1 py-[2px] text-right font-semibold">NET_PRICE</th>
                  <th className="border-b border-[#e0e0e0] px-1 py-[2px] text-right font-semibold">VARIANCE</th>
                </tr>
              </thead>
              <tbody className="text-[#333]">
                <tr><td className="border-r border-b border-[#e8e8e8] px-1 py-[1px]">4500012847</td><td className="border-r border-b border-[#e8e8e8] px-1 py-[1px]">V-100234</td><td className="border-r border-b border-[#e8e8e8] px-1 py-[1px] text-right">142.50</td><td className="border-b border-[#e8e8e8] px-1 py-[1px] text-right text-[#c00]">-3.20</td></tr>
                <tr className="bg-[#fafbfc]"><td className="border-r border-b border-[#e8e8e8] px-1 py-[1px]">4500012901</td><td className="border-r border-b border-[#e8e8e8] px-1 py-[1px]">V-100891</td><td className="border-r border-b border-[#e8e8e8] px-1 py-[1px] text-right">310.00</td><td className="border-b border-[#e8e8e8] px-1 py-[1px] text-right text-[#c00]">+12.00</td></tr>
                <tr><td className="border-r border-b border-[#e8e8e8] px-1 py-[1px]">4500013002</td><td className="border-r border-b border-[#e8e8e8] px-1 py-[1px]">V-100512</td><td className="border-r border-b border-[#e8e8e8] px-1 py-[1px] text-right">195.00</td><td className="border-b border-[#e8e8e8] px-1 py-[1px] text-right text-[#c00]">-7.50</td></tr>
              </tbody>
            </table>
          </div>

          {/* Query Details */}
          <div className="border-t border-[#e0e0e0] px-2 py-1 bg-[#f8f9fa] flex justify-between text-[8px] text-[#888]">
            <span>Query duration: 476ms</span>
            <span>Rows: 3</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    /* ── Card 6: Oracle SQL*Plus Terminal ── */
    id: 6,
    render: () => (
      <div className="border border-[#333] overflow-hidden flex flex-col font-mono h-full text-left text-[10px] bg-[#1a1a2e]">
        {/* Terminal Title Bar */}
        <div className="bg-[#16213e] px-2 py-1 flex items-center justify-between border-b border-[#333]">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
            <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
            <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
          </div>
          <span className="text-[#8892b0] text-[9px]">oracle@procurement-db ~ SQL*Plus</span>
        </div>

        {/* Terminal Body */}
        <div className="flex-1 p-3 space-y-1 text-[9px] leading-[16px] bg-[#1a1a2e] text-[#a9b7c6] overflow-hidden">
          <div className="text-[#8892b0]">SQL*Plus: Release 21.0.0.0 - Production on Thu Jul 01 14:22:38 2026</div>
          <div className="text-[#8892b0]">Connected to: Oracle Database 19c Enterprise Edition</div>
          <div className="text-[#8892b0] mb-2">Session altered.</div>

          <div className="text-[#c3e88d]">SQL&gt; <span className="text-[#a9b7c6]">SELECT vendor_id, material_no, contract_price,</span></div>
          <div className="text-[#a9b7c6] pl-6">po_price, (po_price - contract_price) AS delta</div>
          <div className="text-[#a9b7c6] pl-3"><span className="text-[#c792ea]">FROM</span> procurement.purchase_audit</div>
          <div className="text-[#a9b7c6] pl-3"><span className="text-[#c792ea]">WHERE</span> ABS(po_price - contract_price) &gt; 5</div>
          <div className="text-[#a9b7c6] pl-3"><span className="text-[#c792ea]">ORDER BY</span> delta <span className="text-[#c792ea]">DESC</span>;</div>

          <div className="mt-2 text-[#8892b0]" />
          <div className="text-[#e8e8e8] font-bold">VENDOR_ID  MATERIAL_NO   CNTRCT_PRC   PO_PRICE    DELTA</div>
          <div className="text-[#e8e8e8]">---------- ------------- ---------- ---------- --------</div>
          <div className="text-[#a9b7c6]">V-100891   MAT-3341-C       298.00     310.00    +12.00</div>
          <div className="text-[#a9b7c6]">V-100512   MAT-2217-E       187.50     195.00     +7.50</div>
          <div className="text-[#a9b7c6]">V-100234   MAT-5520-D        42.00      47.80     +5.80</div>
          <div className="text-[#a9b7c6]">V-100234   MAT-9042-X       148.00     142.50     -5.50</div>

          <div className="mt-1 text-[#8892b0]">4 rows selected.</div>

          <div className="mt-1 text-[#c3e88d]">SQL&gt; <span className="text-[#a9b7c6] opacity-70">_</span></div>
        </div>

        {/* Status Bar */}
        <div className="bg-[#16213e] border-t border-[#333] px-2 py-[2px] text-[8px] text-[#8892b0] flex justify-between">
          <span>oracle@procurement-db:1521/ORCL</span>
          <span>Elapsed: 00:00:00.08</span>
        </div>
      </div>
    ),
  },
]

/* ─── Arc Carousel Component ─── */

function ArcCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [scrollPos, setScrollPos] = useState(0)
  const [vpCenter, setVpCenter] = useState(700)

  const tripled = [...heroCards, ...heroCards, ...heroCards]
  const CARD_W = 340
  const GAP = 28
  const TOTAL_SET = heroCards.length * (CARD_W + GAP)

  useEffect(() => {
    setVpCenter(window.innerWidth / 2)
    const onResize = () => setVpCenter(window.innerWidth / 2)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    let raf: number
    let pos = 0
    const speed = 0.4

    const tick = () => {
      pos += speed
      if (pos >= TOTAL_SET) pos -= TOTAL_SET
      setScrollPos(pos)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div
      className="relative w-full overflow-hidden pointer-events-none select-none"
      style={{ perspective: '800px', perspectiveOrigin: '50% 50%' }}
    >
      <div
        ref={trackRef}
        className="flex items-end"
        style={{
          gap: `${GAP}px`,
          transform: `translateX(${-scrollPos}px)`,
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}
      >
        {tripled.map((card, idx) => {
          const cardCenter = idx * (CARD_W + GAP) + CARD_W / 2 - scrollPos
          const distFromCenter = cardCenter - vpCenter
          const maxDist = 700

          const norm = Math.max(-1, Math.min(1, distFromCenter / maxDist))

          const rotY = norm * -50
          const tZ = -Math.abs(norm) * 200
          const sc = 1 - Math.abs(norm) * 0.18
          const op = 1 - Math.abs(norm) * 0.5

          return (
            <div
              key={`${card.id}-${idx}`}
              className="shrink-0"
              style={{
                width: `${CARD_W}px`,
                height: '460px',
                transform: `rotateY(${rotY}deg) translateZ(${tZ}px) scale(${sc})`,
                opacity: Math.max(0.1, op),
                transformOrigin: 'center center',
                backfaceVisibility: 'hidden',
              }}
            >
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/25 border border-slate-200/60">
                {card.render()}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* ─── Hero Component ─── */

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-white pt-28 sm:pt-32 pb-0 overflow-hidden select-none">
      {/* Soft Ambient Background Glow */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 bg-blue-500/8 blur-[160px] w-[70vw] h-[50vw] max-w-[800px] max-h-[500px] rounded-full pointer-events-none z-0" />

      {/* Centered Hero Headline */}
      <div className="w-full relative z-10 text-center px-6 mb-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-extrabold tracking-tight text-slate-900 leading-[1.06] text-balance max-w-4xl mx-auto"
        >
          Flawless procurement{' '}
          <br className="hidden sm:inline" />
          data managed{' '}
          <span className="italic-accent text-blue-600 font-normal tracking-normal">
            for you.
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex justify-center"
        >
          <Link
            href="/get-started"
            id="hero-cta"
            className="group inline-flex items-center gap-3 bg-slate-900 text-white font-bold text-xs tracking-wider uppercase px-8 py-4 rounded-full hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-slate-900/15"
          >
            Get Started
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>

      {/* 3D Arc Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="w-full mt-auto relative z-10"
      >
        <ArcCarousel />
      </motion.div>
    </section>
  )
}
