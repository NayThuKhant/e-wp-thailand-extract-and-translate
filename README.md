#### Project to extract & translate employee information from Thailand Workpermit Website (https://alien13febrenewal.doe.go.th)

##### REQUIREMENTS

Node.js ^14

##### INSTALLATION

```bash
npm i -g e-workpermit-thailand-extractor
```

##### USAGE

- CLI

  ```bash
  e-workpermit-thailand-extractor --help

  e-workpermit-thailand-extractor [url] [to] --string
  ```

- Execute CLI using programming Languages (Sample PHP Code)

  ```php
  $output = json_decode(exec('e-workpermit-thailand-extractor [url] [to] --string'),true);

  $originalInformation = json_decode($output['originalInformation'], true);

  $translatedInformation = json_decode($output['translatedInformation'], true);
  ```

- Node

  ```
  const ExtractAndTranslateContent = require('./ExtractAndTranslateContent')

  const information = await new ExtractAndTranslateContent(url,to).process()
  ```

##### SAMPLE OUTPUT IN JS OBJECT

```javascript
{
  originalInformation: {
    "เลขรับที่ (No.)": "xxxxx",
    "รหัสคนต่างด้าว": "xxxxx",
    "ชื่อคนต่างด้าว (Name of Applicant)": "xxxxx",
    "วันที่ (Date)": "xxxxx",
    "นายทะเบียน (Register)": "xxxxx",
    "สถานะใบอนุญาต": "xxxxx",
    "ชื่อภาษาไทย": "xxxxx",
    "วัน/เดือน/ปี (พ.ศ.) เกิด": "xxxxx",
    "สัญชาติ": "xxxxx",
    "ชื่อ-สกุล บิดา": "xxxxx",
    "ที่อยู่อาศัย": "xxxxx",
    "ออกให้ ณ จังหวัด": "xxxxx",
    "ใบอนุญาตเลขที่": "xxxxx",
    "ชื่อภาษาอังกฤษ": "xxxxx",
    "อายุ": "xxxxx",
    "สถานภาพ": "xxxxx",
    "ชื่อ-สกุล มารดา": "xxxxx",
    "ผู้ติดตาม": "xxxxx",
    "เลขที่หนังสือเดินทาง": "xxxxx",
    "สถานที่ออกหนังสือ": "xxxxx",
    "วันที่ออกหนังสือเดินทาง": "xxxxx",
    "เลขที่ตรวจลงตรา": "xxxxx",
    "ออกให้วันที่": "xxxxx",
    "ประเภทหนังสือเดินทาง": "xxxxx",
    "ประเทศที่ออก": "xxxxx",
    "วันหมดอายุ": "xxxxx",
    "ใช้ได้ถึงวันที่": "xxxxx",
    "เลขประจำตัวนายจ้าง": "xxxxx",
    "ชื่อนายจ้าง/สถานประกอบการ": "xxxxx",
    "ประเภทกิจการ": "xxxxx",
    "ที่ตั้งสำนักงาน": "xxxxx",
    "ทำงานในตำแหน่ง": "xxxxx",
    "สถานที่ทำงาน": "xxxxx",
    "อนุญาตให้ทำงานตั้งแต่วันที่": "xxxxx",
    "ลักษณะงาน": "xxxxx",
    "ถึงวันที่": "xxxxx",
    "โรงพยาบาลที่ตรวจสุขภาพ": "xxxxx",
    "ประเภทสิทธิการรักษา": "xxxxx",
    "ระยะเวลาประกันสุขภาพ": "xxxxx",
    "โรงพยาบาล": "xxxxx",
    "วันที่หมดอายุ": "xxxxx",
    "ผู้บันทึก/แก้ไขข้อมูล": "xxxxx",
    "วันที่บันทึก/แก้ไขข้อมูล": "xxxxx"
  },
  translatedInformation: {
    "Receipt number (No.)": "xxxxx",
    "Alien ID": "xxxxx",
    "Name of Applicant": "xxxxx",
    "Date (Date)": "xxxxx",
    "Registrar (Register)": "xxxxx",
    "Permit Status": "xxxxx",
    "Thai Name": "xxxxx",
    "Day/Month/Year (B.E.) Birth": "xxxxx",
    "Nationality": "xxxxx",
    "First name-Surname Father": "xxxxx",
    "Residence": "xxxxx",
    "Issued at the province": "xxxxx",
    "License number": "xxxxx",
    "English name": "xxxxx",
    "Age": "xxxxx",
    "Status": "xxxxx",
    "First Name-Surname Mother": "xxxxx",
    "Follower": "xxxxx",
    "Passport number": "xxxxx",
    "Place of issue": "xxxxx",
    "Passport issue date": "xxxxx",
    "Visa Number": "xxxxx",
    "Issued Date": "xxxxx",
    "Passport Type": "xxxxx",
    "Country of issue ": "xxxxx",
    "Expiration date": "xxxxx",
    "Valid until": "xxxxx",
    "Employer identification number": "xxxxx",
    "Employer name /Establishment": "xxxxx",
    "Business Type": "xxxxx",
    "Office Location": "xxxxx",
    "Working position": "xxxxx",
    "Workplace": "xxxxx",
    "Allowed to work from": "xxxxx",
    "Job description": "xxxxx",
    "Up to date": "xxxxx",
    "Hospitals that were inspected Health": "xxxxx",
    "Type of treatment rights": "xxxxx",
    "Health insurance period": "xxxxx",
    "Hospital": "xxxxx",
    "Recorder/Editor": "xxxxx",
    "Date recorded/edited": "xxxxx"
  }
}
```

##### SAMPLE URL

- https://alien13febrenewal.doe.go.th/workpermit_dopa?alien_key=xxxxxxx (Where xxxxxxx is the alien key for the workpermit) - To get this url, you will need to scan the QR code on the workpermit card
