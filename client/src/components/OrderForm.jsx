// OrderForm.jsx (New Component)
import React, { useState } from 'react'

const OrderForm = () => {
  const [orderItems, setOrderItems] = useState([{ description: '', quantity: '', unitPrice: '', cost: '' }])

  const addOrderItem = () => {
    setOrderItems([...orderItems, { description: '', quantity: '', unitPrice: '', cost: '' }])
  }

  const updateOrderItem = (index, field, value) => {
    const updatedItems = [...orderItems]
    updatedItems[index][field] = value
    
    // Calculate cost if quantity and unitPrice are both numbers
    if (field === 'quantity' || field === 'unitPrice') {
      const quantity = parseFloat(updatedItems[index].quantity) || 0
      const unitPrice = parseFloat(updatedItems[index].unitPrice) || 0
      updatedItems[index].cost = (quantity * unitPrice).toFixed(2)
    }
    
    setOrderItems(updatedItems)
  }

  const calculateTotal = () => {
    return orderItems.reduce((total, item) => total + (parseFloat(item.cost) || 0), 0).toFixed(2)
  }

  return (
    <div className="py-20 bg-gradient-to-b from-white to-[#E8F5E8]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-[#0D0D0D] mb-6">
            Order <span className="bg-gradient-to-r from-[#195923] to-[#AEBF2C] bg-clip-text text-transparent">Form</span>
          </h1>
          <p className="text-2xl text-[#278C2E] max-w-3xl mx-auto font-light">
            Fill out this form to place your order for our quality agricultural products
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-12">
          <form className="space-y-12">
            {/* Customer Information */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-lg font-black text-[#0D0D0D] mb-3">Date</label>
                <input type="date" className="w-full px-6 py-4 border-2 border-[#AEBF2C]/30 rounded-2xl text-lg" />
              </div>
              <div>
                <label className="block text-lg font-black text-[#0D0D0D] mb-3">Order #</label>
                <input type="text" className="w-full px-6 py-4 border-2 border-[#AEBF2C]/30 rounded-2xl text-lg" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-lg font-black text-[#0D0D0D] mb-3">Name *</label>
                <input type="text" required className="w-full px-6 py-4 border-2 border-[#AEBF2C]/30 rounded-2xl text-lg" />
              </div>
              <div>
                <label className="block text-lg font-black text-[#0D0D0D] mb-3">Email *</label>
                <input type="email" required className="w-full px-6 py-4 border-2 border-[#AEBF2C]/30 rounded-2xl text-lg" />
              </div>
            </div>

            <div>
              <label className="block text-lg font-black text-[#0D0D0D] mb-3">Address</label>
              <textarea rows="3" className="w-full px-6 py-4 border-2 border-[#AEBF2C]/30 rounded-2xl text-lg"></textarea>
            </div>

            {/* Order Items Table */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-black text-[#195923]">Order Items</h3>
                <button
                  type="button"
                  onClick={addOrderItem}
                  className="bg-gradient-to-r from-[#AEBF2C] to-[#F2B705] text-[#0D0D0D] px-6 py-3 rounded-xl font-black hover:scale-105 transition-transform duration-300"
                >
                  + Add Item
                </button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-[#195923] to-[#278C2E] text-white">
                      <th className="px-6 py-4 text-left rounded-tl-2xl">Description</th>
                      <th className="px-6 py-4 text-left">Quantity</th>
                      <th className="px-6 py-4 text-left">Unit Price (R)</th>
                      <th className="px-6 py-4 text-left rounded-tr-2xl">Cost (R)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderItems.map((item, index) => (
                      <tr key={index} className="border-b border-[#AEBF2C]/30">
                        <td className="px-6 py-4">
                          <input
                            type="text"
                            value={item.description}
                            onChange={(e) => updateOrderItem(index, 'description', e.target.value)}
                            className="w-full px-4 py-2 border border-[#AEBF2C]/30 rounded-lg"
                            placeholder="Item description"
                          />
                        </td>
                        <td className="px-6 py-4">
                          <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => updateOrderItem(index, 'quantity', e.target.value)}
                            className="w-full px-4 py-2 border border-[#AEBF2C]/30 rounded-lg"
                            placeholder="Qty"
                          />
                        </td>
                        <td className="px-6 py-4">
                          <input
                            type="number"
                            step="0.01"
                            value={item.unitPrice}
                            onChange={(e) => updateOrderItem(index, 'unitPrice', e.target.value)}
                            className="w-full px-4 py-2 border border-[#AEBF2C]/30 rounded-lg"
                            placeholder="0.00"
                          />
                        </td>
                        <td className="px-6 py-4">
                          <input
                            type="text"
                            value={item.cost}
                            readOnly
                            className="w-full px-4 py-2 border border-[#AEBF2C]/30 rounded-lg bg-gray-50"
                            placeholder="0.00"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Total and Notes */}
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <label className="block text-lg font-black text-[#0D0D0D] mb-3">Notes</label>
                <textarea rows="4" className="w-full px-6 py-4 border-2 border-[#AEBF2C]/30 rounded-2xl text-lg"></textarea>
              </div>
              
              <div className="bg-gradient-to-br from-[#195923] to-[#278C2E] rounded-2xl p-8 text-white">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl font-semibold">Subtotal:</span>
                  <span className="text-2xl font-black">R {calculateTotal()}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl font-semibold">Tax (15%):</span>
                  <span className="text-2xl font-black">R {(calculateTotal() * 0.15).toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center border-t border-white/30 pt-4">
                  <span className="text-2xl font-black">Total:</span>
                  <span className="text-3xl font-black text-[#F2B705]">
                    R {(parseFloat(calculateTotal()) * 1.15).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-[#195923] to-[#278C2E] text-white px-16 py-5 rounded-2xl font-black text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Submit Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default OrderForm