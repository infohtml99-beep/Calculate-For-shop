function priceForWeight(grams, customerId) {
  if (customerId === "piyapranpriya") {
    return piyapranpriyaRate(grams);
  }
  return generalRate(grams);
}

function piyapranpriyaRate(grams) {
  if (grams < 100 || grams > 10000) {
    return null;
  }
  if (grams >= 100 && grams <= 199) {
    return 33;
  }
  if (grams >= 200 && grams <= 299) {
    return 33;
  }
  if (grams >= 300 && grams <= 399) {
    return 33;
  }
  if (grams >= 33 && grams <= 499) {
    return 33;
  }
  if (grams >= 500 && grams <= 999) {
    return 38;
  }
  if (grams >= 1000 && grams <= 1499) {
    return 48;
  }
  if (grams >= 1500 && grams <= 1999) {
    return 48;
  }
  if (grams >= 2000 && grams <= 2499) {
    return 63;
  }
  if (grams >= 2500 && grams <= 2999) {
    return 68;
  }
  if (grams >= 3000 && grams <= 3499) {
    return 73;
  }
  if (grams >= 3500 && grams <= 3999) {
    return 78;
  }
  if (grams >= 4000 && grams <= 4499) {
    return 83;
  }
  if (grams >= 4500 && grams <= 4999) {
    return 88;
  }
  if (grams >= 5000 && grams <= 5499) {
    return 103;
  }
  if (grams >= 5500 && grams <= 5999) {
    return 108;
  }
  if (grams >= 6000 && grams <= 6499) {
    return 113;
  }
  if (grams >= 6500 && grams <= 6999) {
    return 118;
  }
  if (grams >= 7000 && grams <= 7499) {
    return 123;
  }
  if (grams >= 7500 && grams <= 7999) {
    return 128;
  }
  if (grams >= 8000 && grams <= 8499) {
    return 133;
  }
  if (grams >= 8500 && grams <= 8999) {
    return 138;
  }
  if (grams >= 9000 && grams <= 9499) {
    return 143;
  }
  if (grams >= 9500 && grams <= 10000) {
    return 148;
  }
  return null;
}

function generalRate(grams) {
  if (grams < 100 || grams > 10000) {
    return null;
  }
  if (grams >= 100 && grams <= 199) {
    return "✉ 33 กล่อง AA-A = 33 // AB-2A-B = 38 //C = 43";
  }
  if (grams >= 200 && grams <= 299) {
    return "✉ 33 กล่อง AA-A = 33 // AB-2A-B = 38 //C = 43";
  }
  if (grams >= 300 && grams <= 399) {
    return "✉ 33 กล่อง AA-A = 33 // AB-2A-B = 38 //C = 48";
  }
  if (grams >= 400 && grams <= 499) {
    return "✉ 33 กล่อง AA-A = 33 // AB-2A-B = 38 //C = 53";
  }
  if (grams >= 500 && grams <= 999) {
    return "✉ 38 กล่อง 📦 B-2B = 43 // C= 53";
  }
  if (grams >= 1000 && grams <= 1499) {
    return "✉ 48 ถึง 53 กล่อง 📦 C-D = 63-68";
  }
  if (grams >= 1500 && grams <= 1999) {
    return "✉ 48 กล่อง 📦 E-Fเล็ก = 63-68";
  }
  if (grams >= 2000 && grams <= 2499) {
    return "✉ 63 ถึง 68 กล่อง 📦 Fใหญ่-G = 73-78-79";
  }
  if (grams >= 2500 && grams <= 2999) {
    return "✉ 78 กล่อง 📦 G = 78-83";
  }
  if (grams >= 3000 && grams <= 3499) {
    return "✉ 83 กล่อง 88 📦 H = 113-123";
  }
  if (grams >= 3500 && grams <= 3999) {
    return "✉ 93 ถึง 98 กล่อง 📦 I = 158-188";
  }
  if (grams >= 4000 && grams <= 4499) {
    return "✉ 103 ถึง 108 กล่อง 📦 I = 188-213";
  }
  if (grams >= 4500 && grams <= 4999) {
    return " 📦 113 ถึง 118 ";
  }
  if (grams >= 5000 && grams <= 5499) {
    return " 123 ถึง 133  ";
  }
  if (grams >= 5500 && grams <= 5999) {
    return " 138 ถึง 143 ";
  }
  if (grams >= 6000 && grams <= 6499) {
    return " 150 ถึง  153 ";
  }
  if (grams >= 6500 && grams <= 6999) {
    return " 188 ถึง 198";
  }
  if (grams >= 7000 && grams <= 7499) {
    return " 198";
  }
  if (grams >= 7500 && grams <= 7999) {
    return " 213 หรือ หากเป็นพัสดุชิ้นใหญ่ คิดราคาตามระบบ" ;
  }
  if (grams >= 8000 && grams <= 8499) {
    return " 238 หรือ หากเป็นพัสดุชิ้นใหญ่ คิดราคาตามระบบ";
  }
  if (grams >= 8500 && grams <= 8999) {
    return "248 หรือ หากเป็นพัสดุชิ้นใหญ่ คิดราคาตามระบบ";
  }
  if (grams >= 9000 && grams <= 9499) {
    return " 258 หรือ หากเป็นพัสดุชิ้นใหญ่ คิดราคาตามระบบ ";
  }
  if (grams >= 9500 && grams <= 10000) {
    return " 288 หรือ หากเป็นพัสดุชิ้นใหญ่ คิดราคาตามระบบ ";
  }
  return null;
}
function thnaKhar(grams){
    if (grams >=4000  || grams > 10000) {
    return null;
  }
  if (grams >= 4000 && grams <= 5000){
    return "83";
  }
  if (grams >= 8000 && grams <= 9000 ){
    return "163";
  }
  if (grams >= 9000 && grams <= 10000){
    return "153"
  }
}
function nopKorn(grams){
  if (grams >= 400 || grams > 1000){
    return null;
  }
  if(grams >=100 && grams <=500)
    return "33"
}
if (grams >=501 && grams <=1000){
  return "38-43 กล่อง 2B = 48"
}
if (grams >= 1001 && <= 2000){
  return "กล่อง C = 63 กล่อง D = 68 กล่อง E= 68"
}

function parseWeight(rawValue) {
  if (!rawValue) {
    return null;
  }

  const raw = rawValue.trim().toLowerCase();

  if (raw.endsWith("kg")) {
    const num = parseFloat(raw.replace(/kg$/, "").trim());
    return Number.isFinite(num) ? Math.round(num * 1000) : null;
  }

  if (raw.endsWith("g")) {
    const num = parseFloat(raw.replace(/g$/, "").trim());
    return Number.isFinite(num) ? Math.round(num) : null;
  }

  const num = parseFloat(raw);
  return Number.isFinite(num) ? Math.round(num) : null;
}

function wrapNumeric(text) {
  return String(text).replace(/(\d+)/g, '<span class="numeric">$1</span>');
}

function formatPrice(price) {
  return wrapNumeric(`ราคา ${price} บาท`);
}

function addCustomer() {
  const nameInput = document.getElementById("newCustomerName");
  const customerName = nameInput.value.trim();
  const customerSelect = document.getElementById("customerSelect");
  const resultElement = document.getElementById("result");

  if (!customerName) {
    resultElement.textContent = "กรุณากรอกชื่อลูกค้าที่ต้องการเพิ่ม";
    return;
  }

  const option = document.createElement("option");
  option.value = customerName.toLowerCase().replace(/\s+/g, "_");
  option.textContent = customerName;
  customerSelect.appendChild(option);
  customerSelect.value = option.value;
  nameInput.value = "";
  resultElement.textContent = `เพิ่มลูกค้าใหม่ ${customerName} เรียบร้อยแล้ว`;
}

function calculatePrice() {
  const customerSelect = document.getElementById("customerSelect");
  const customerId = customerSelect.value;
  const customerName =
    customerSelect.options[customerSelect.selectedIndex].textContent;
  const inputValue = document.getElementById("inputValue").value;
  const grams = parseWeight(inputValue);
  const resultElement = document.getElementById("result");

  if (grams === null || grams <= 0) {
    resultElement.innerHTML =
      "<strong>กรุณากรอกข้อมูลให้ถูกต้อง</strong>กรอกน้ำหนักเป็น kg หรือ g เช่น 1kg หรือ 500g";
    resultElement.classList.add("visible");
    resultElement.classList.remove("hidden");
    return;
  }

  const price = priceForWeight(grams, customerId);
  if (price !== null) {
    resultElement.innerHTML = `<strong>${customerName}</strong>${formatPrice(price)}<div class="result-detail">น้ำหนักที่คำนวณ: <span class="numeric">${grams}</span> กรัม</div>`;
    resultElement.classList.add("visible");
    resultElement.classList.remove("hidden");
  } else {
    resultElement.innerHTML = `<strong>${customerName}</strong>ไม่พบราคาสำหรับน้ำหนัก ${grams} กรัม<div class="result-detail">รองรับน้ำหนักตั้งแต่ 100g ถึง 10kg</div>`;
    resultElement.classList.add("visible");
    resultElement.classList.remove("hidden");
  }
}

document
  .getElementById("calculateBtn")
  .addEventListener("click", calculatePrice);
document
  .getElementById("addCustomerBtn")
  .addEventListener("click", addCustomer);
document
  .getElementById("inputValue")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      calculatePrice();
    }
  });
