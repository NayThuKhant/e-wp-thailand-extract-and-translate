### Project to extract & translate employee information from Thailand Workpermit Website (https://alien13febrenewal.doe.go.th)

### REQUIREMENTS

- Node.js ^18

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
  "Receipt Number(No.)": "WP-RN-65-0110129",
  "Alien Code": "6591000409862",
  "Alien Name(NameofApplicant)": "Miss Saw Sin Phyo",
  "Wan At (Date)": "15 December 2022",
  "Registrar (Register)": "Pairoj Chotikasathien",
  "Permit Status": "Work Permit has been printed",
  "Thai Name": "Miss Saw Sin Phyo",
  "Day/Month/Year(B.E.) of Birth": "March 7 . 2538",
  "Nationality": "MYANMAR",
  "Father's name-surname": "-",
  "Residence": "602/50 Soi Sathu Pradit 48, Sathu Pradit Road, Bang Phong Phang Subdistrict, Yannawa District, Bangkok Province. 10120",
  "issued in the province": "Employment Office Bangkok Area 1",
  "License number": "1001644005650",
  "English name": "MISS. SWE ZIN PHYO",
  "Age": "27",
  "Status": "-",
  "Mother's Name and Surname": "-",
  "Followers": "None",
  "Passport Number": "MG250247",
  "Place of issue": "BANGKOK",
  "Passport issue date": "16 September. 2022",
  "Visa number": "54975/65",
  "Issue date": "28 October. . 2022",
  "Passport type": "Passport",
  "Country of issue": "Thailand",
  "Expiration date": "-",
  "Valid until": "13 February 2023",
  " Employer identification number": "0105524011056",
  "Employer name/establishment": "V.T. Garment Company Limited",
  "Business type": "BT15 - Manufacture or sell ready-made shirts",
  "Location Office": "602/50 Soi Sathu Pradit 48, Sathu Pradit Road, Bang Phong Phang Subdistrict, Yannawa District, Bangkok Province 10120",
  "Working position": "Laborer",
  "Workplace": "602/50 Soi Sathu Pradit 48, Sathu Pradit Road, Bang Phong Phang Subdistrict, Yannawa District, Bangkok Province 10120",
  "Allowed to work from": "14 February 2023",
  "Job description": "Other",
  "Up to date": "13 February 2024",
  "Hospital that performs health examinations": "-",
  "Type of treatment rights": "Social security",
  "Health insurance period": "-",
  "Hospital": "-",
  "Recorder/ Edit information": "Phongsawat Phuangdet",
  "Date recorded/edited": "15 December 2022"
}
```

### SAMPLE URL

- https://alien13febrenewal.doe.go.th/workpermit_dopa?alien_key=63997b6710dd6
