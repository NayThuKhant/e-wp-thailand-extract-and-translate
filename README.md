### Project to extract & translate employee information from Thailand Workpermit Website (https://e-workpermit.doe.go.th)

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

```
[
    "ET-67-642750",
    "01",
    "BT.50",
    "6651360418348",
    "6651360418348",
    "1300656436864",
    "Pathum Thani Provincial Employment Office",
    "Mrs Tin Mo Mit",
    "MRS. TIN MOE MYINT",
    "49",
    "Myanmar",
    "Favorite",
    "62/35 Village No. 9, Khlong Nueng Subdistrict Khlong Luang District Pathum Thani Province 12120",
    "Jiufu Company Limited",
    "62/35 Village No. 9, Khlong Nueng Subdistrict Khlong Luang District Pathum Thani Province 12120",
    "Laborers (handling goods by land, water, warehouse)",
  ]

```

### SAMPLE URL

https://e-workpermit.doe.go.th/CLMV-WEB/checkform.php\?rid\=4976301\&type\=1\&alid\=4176492\&printdate\=11022024224710\&token\=8ff3fb1fb1
