import React, { useState } from 'react'
import { Stethoscope, CheckCircle2, RefreshCw, Printer, Plus, Minus } from 'lucide-react'

export default function ErpBillingSimulator() {
  const sampleItems = [
    { id: 1, name: 'Paracetamol 500mg (Box 100s)', price: 120, gst: 12, category: 'Analgesic', stock: 'Rack A-04' },
    { id: 2, name: 'Amoxicillin 250mg Capsules', price: 240, gst: 12, category: 'Antibiotic', stock: 'Rack B-12' },
    { id: 3, name: 'Insulin Glargine 100IU Injection', price: 850, gst: 18, category: 'Diabetes', stock: 'Cold Storage #2' },
    { id: 4, name: 'Surgical Nitrile Gloves (Pack 50)', price: 350, gst: 18, category: 'Medical Consumables', stock: 'Rack C-01' }
  ]

  const [cart, setCart] = useState([
    { ...sampleItems[0], qty: 2 },
    { ...sampleItems[1], qty: 1 }
  ])

  const [isProcessing, setIsProcessing] = useState(false)
  const [lastInvoice, setLastInvoice] = useState(null)

  const handleUpdateQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.qty + delta
            return newQty > 0 ? { ...item, qty: newQty } : null
          }
          return item
        })
        .filter(Boolean)
    )
  }

  const handleAddItem = (item) => {
    setCart((prev) => {
      const exists = prev.find((x) => x.id === item.id)
      if (exists) {
        return prev.map((x) => (x.id === item.id ? { ...x, qty: x.qty + 1 } : x))
      }
      return [...prev, { ...item, qty: 1 }]
    })
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0)
  const totalGst = cart.reduce((sum, item) => sum + (item.price * item.qty * item.gst) / 100, 0)
  const grandTotal = subtotal + totalGst

  const handleGenerateInvoice = () => {
    setIsProcessing(true)
    setTimeout(() => {
      setIsProcessing(false)
      setLastInvoice({
        id: `INV-${Math.floor(100000 + Math.random() * 900000)}`,
        date: new Date().toLocaleTimeString(),
        total: grandTotal.toFixed(2),
        syncLatency: '11.4ms',
        status: 'PostgreSQL Ledger Sync Complete'
      })
    }, 600)
  }

  return (
    <div className="rounded-3xl p-6 sm:p-10 border border-slate-200 bg-white shadow-md space-y-8 text-slate-900">
      
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-6">
        <div>
          <div className="flex items-center gap-2 text-blue-600 font-mono text-xs uppercase tracking-wider mb-1 font-bold">
            <Stethoscope className="w-4 h-4 text-blue-600" />
            <span>INTERACTIVE LIVE PHARMACY BILLING SIMULATOR</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 font-display">Test DASA ERP Cashier &amp; Inventory Engine</h3>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-xs font-bold">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Zero-Latency Sync Ready</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Quick Add Medicine Stock Rack */}
        <div className="lg:col-span-5 space-y-4">
          <div className="text-xs font-mono text-slate-500 uppercase tracking-wider font-bold">
            Available Medicine Inventory Rack
          </div>

          <div className="space-y-2.5">
            {sampleItems.map((item) => (
              <div
                key={item.id}
                className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between hover:border-blue-400 transition duration-200"
              >
                <div>
                  <div className="font-semibold text-xs text-slate-900">{item.name}</div>
                  <div className="text-[11px] font-mono text-slate-500 mt-0.5">
                    ₹{item.price} • GST {item.gst}% • <span className="text-blue-600 font-bold">{item.stock}</span>
                  </div>
                </div>
                <button
                  onClick={() => handleAddItem(item)}
                  className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-blue-600 hover:bg-blue-600 hover:text-white text-xs font-mono transition inline-flex items-center gap-1 font-bold shadow-2xs cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Live Bill Summary & Invoice Checkout */}
        <div className="lg:col-span-7 space-y-4">
          <div className="text-xs font-mono text-slate-500 uppercase tracking-wider flex justify-between font-bold">
            <span>Current Customer Cart</span>
            <span>{cart.length} Item(s)</span>
          </div>

          <div className="rounded-2xl p-4 border border-slate-200 bg-slate-50 space-y-2.5 min-h-[180px]">
            {cart.length === 0 ? (
              <div className="text-center py-10 text-slate-400 text-xs font-mono">
                Cart is empty. Add medicine items from the inventory rack.
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between text-xs shadow-2xs">
                  <div>
                    <div className="font-semibold text-slate-900">{item.name}</div>
                    <div className="font-mono text-slate-500 text-[11px]">
                      ₹{item.price} x {item.qty} = ₹{item.price * item.qty} (+{item.gst}% GST)
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleUpdateQty(item.id, -1)}
                      className="p-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200 cursor-pointer"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="font-mono font-bold text-slate-900 px-1">{item.qty}</span>
                    <button
                      onClick={() => handleUpdateQty(item.id, 1)}
                      className="p-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200 cursor-pointer"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Calculations Summary */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2 font-mono text-xs shadow-2xs">
            <div className="flex justify-between text-slate-600">
              <span>Subtotal Amount:</span>
              <span className="text-slate-900 font-semibold">₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Calculated GST Tax:</span>
              <span className="text-slate-900 font-semibold">₹{totalGst.toFixed(2)}</span>
            </div>
            <div className="pt-2 border-t border-slate-200 flex justify-between text-sm font-bold text-slate-900">
              <span>Grand Total Invoice:</span>
              <span className="text-blue-600 text-base">₹{grandTotal.toFixed(2)}</span>
            </div>
          </div>

          {/* Generate Invoice Button */}
          <button
            onClick={handleGenerateInvoice}
            disabled={isProcessing || cart.length === 0}
            className={`w-full py-3.5 rounded-2xl font-mono font-bold text-xs shadow-sm transition duration-200 flex items-center justify-center gap-2 ${
              isProcessing || cart.length === 0
                ? 'bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 text-white cursor-pointer'
            }`}
          >
            {isProcessing ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Processing PostgreSQL ERP Transaction...</span>
              </>
            ) : (
              <>
                <Printer className="w-4 h-4" />
                <span>Generate Thermal Receipt &amp; Auto-Debit Inventory</span>
              </>
            )}
          </button>

          {/* Generated Receipt Stamp */}
          {lastInvoice && (
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1.5 font-mono text-xs text-emerald-800">
              <div className="flex items-center gap-2 font-bold text-emerald-700">
                <CheckCircle2 className="w-4 h-4" />
                <span>INVOICE GENERATED: {lastInvoice.id}</span>
              </div>
              <div>Timestamp: {lastInvoice.date} • Total Billed: ₹{lastInvoice.total}</div>
              <div className="text-[11px] text-emerald-600">✓ {lastInvoice.status} ({lastInvoice.syncLatency})</div>
            </div>
          )}

        </div>

      </div>
    </div>
  )
}

