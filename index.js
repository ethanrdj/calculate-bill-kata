const calculateBill = (price, vat, tip) => {
    const m = price + (price * vat /100) + tip;
    if (price && tip && vat !== NaN) {
        return `£${m}`; }
        else {
        return "error"
        }  
    
}; 


module.exports = calculateBill;