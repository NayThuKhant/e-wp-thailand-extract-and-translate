### Project to extract & translate employee information from Thailand Workpermit Website (https://e-workpermit.doe.go.th)

### REQUIREMENTS

- Node.js ^14

### INSTALLATION

- Clone the repository and cd into it
- Install dependencies `npm install`

### USAGE

- CLI

  ```bash
  node /path/to/index.js url-of-e-workpermit
  ```

- PHP
  ```php
  $output = json_decode(exec('node /path/to/index.js url-of-e-workpermit'),true)
  ```

### SAMPLE OUTPUT

```json
{
  "เลขรับที่(No.)": "WP-RN-65-0110129",
  "รหัสคนต่างด้าว": "6591000409862",
  "ชื่อคนต่างด้าว(NameofApplicant)": "Miss Saw Sin Phyo",
  "วันที่(Date)": "15 December. 2022",
  "นายทะเบียน(Register)": "Pairot Chotikasathien",
  "สถานะใบอนุญาต": "Printed work permit",
  "ชื่อภาษาไทย": "Miss Saw Sin Phyo",
  "วัน/เดือน/ปี(พ.ศ.)เกิด": "March 7, 1995",
  "สัญชาติ": "MYANMAR",
  "ชื่อ-สกุลบิดา": "-",
  "ที่อยู่อาศัย": "602/50 Soi Sathu Pradit 48, Sathu Pradit Road, Bang Phong Phang Subdistrict, Yannawa District, Bangkok 10120",
  "ออกให้ณจังหวัด": "employment office Bangkok Area 1",
  "ใบอนุญาตเลขที่": "1001644005650",
  "ชื่อภาษาอังกฤษ": "MISS. SWE ZIN PHYO",
  "อายุ": "27",
  "สถานภาพ": "-",
  "ชื่อ-สกุลมารดา": "-",
  "ผู้ติดตาม": "do not have",
  "เลขที่หนังสือเดินทาง": "MG0247",
  "สถานที่ออกหนังสือ": "BANGKOK",
  "วันที่ออกหนังสือเดินทาง": "16 September. 2022",
  "เลขที่ตรวจลงตรา": "54975/65",
  "ออกให้วันที่": "28 October. 2022",
  "ประเภทหนังสือเดินทาง": "Passport",
  "ประเทศที่ออก": "Thai",
  "วันหมดอายุ": "15 September 2027",
  "ใช้ได้ถึงวันที่": "13 February 2023",
  "เลขประจำตัวนายจ้าง": "0105524011056",
  "ชื่อนายจ้าง/สถานประกอบการ": "V.T. Garment Company Limited",
  "ประเภทกิจการ": "BT15 - Produce or sell ready-made shirts.",
  "ที่ตั้งสำนักงาน": "602/50 Soi Sathu Pradit 48, Sathu Pradit Road, Bang Phong Phang Subdistrict, Yannawa District, Bangkok 10120",
  "ทำงานในตำแหน่ง": "labor",
  "สถานที่ทำงาน": "602/50 Soi Sathu Pradit 48, Sathu Pradit Road, Bang Phong Phang Subdistrict, Yannawa District, Bangkok 10120",
  "อนุญาตให้ทำงานตั้งแต่วันที่": "14 February 2023",
  "ลักษณะงาน": "other",
  "ถึงวันที่": "13 February 2024",
  "โรงพยาบาลที่ตรวจสุขภาพ": "-",
  "ประเภทสิทธิการรักษา": "social security",
  "ระยะเวลาประกันสุขภาพ": "-",
  "โรงพยาบาล": "-",
  "วันที่หมดอายุ": "-",
  "ผู้บันทึก/แก้ไขข้อมูล": "Phongsawat Phuangdet",
  "วันที่บันทึก/แก้ไขข้อมูล": "15 December. 2022"
}
```

### SAMPLE URL

- https://alien13febrenewal.doe.go.th/workpermit_dopa?alien_key=63997b6710dd6
