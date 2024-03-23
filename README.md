### Project to extract & translate employee information from Thailand Workpermit Website (https://alien13febrenewal.doe.go.th)

### REQUIREMENTS

- Node.js ^14

### INSTALLATION

```bash
npm i -g e-workpermit-thailand-extractor
```

### USAGE

- CLI

  - Global

    ```bash
    e-workpermit-thailand-extractor --help

    e-workpermit-thailand-extractor [url] [to] --string
    ```

  - Execute CLI using PHP

    ```php
    $output = json_decode(exec('e-workpermit-thailand-extractor [url] [to] --string'),true);
    $originalInformation = json_decode($output['originalInformation'], true);
    $translatedInformation = json_decode($output['translatedInformation'], true);
    ```

- Node

  ```nodejs
  const ExtractAndTranslateContent = require('./ExtractAndTranslateContent')

  const information = await new ExtractAndTranslateContent(url,to).process()
  ```

### SAMPLE OUTPUT

```json
{
  "originalInformation": "{\"Receipt number (No.):\":\"WP-RN-65-0110129\",\"Alien ID:\":\"6591000409862\",\"Name of Applicant:\":\"Miss Saw Sin Pure\",\"Date (Date):\":\"15 December. 2022\",\"Registrar (Register):\":\"Pairot Chotikasathien\",\"Permit Status:\":\"Work Permit has been printed\",\"Thai Name:\":\"Miss Saw Sin Phyo\",\"Day/Month/Year (B.E.) Birth:\": \"March 7, 1995\",\"Nationality:\":\"MYANMAR\",\"First name-Surname Father:\":\"-\",\"Residence:\":\"602/50 Soi Sathu Pradit 48, Sathu Pradit Road, Bang Phong Phang Subdistrict, Yannawa District, Bangkok Province 10120\",\"Issued at the province:\":\"Employment office Bangkok Area 1\",\"License number:\":\"1001644005650\",\"English name:\":\"MISS. SWE ZIN PHYO\",\"Age:\":\"27\",\"Status:\":\"-\",\"First Name-Surname Mother:\":\"-\",\"Follower:\":\"None\",\"Passport number:\":\"MG250247\",\"Place of issue:\":\"BANGKOK\",\"Passport issue date:\":\" 16 September 2022\",\"Visa Number:\":\"54975/65\",\"Issued Date:\":\"28 October 2022\",\"Passport Type:\":\"Passport\",\"Country of issue :\":\"Thai\",\"Expiration date:\":\"15 September. 2027\",\"Valid until:\":\"13 February. 2023\",\"Employer identification number:\":\"0105524011056\",\"Employer name /Establishment:\":\"V.T. Garment Company Limited\",\"Business Type:\":\"BT15 - Produce or sell ready-made shirts\",\"Office Location:\":\"602/50 Soi Sathu Pradit 48 Sathu Pradit Road, Bang Phong Phang Subdistrict, Yannawa District, Bangkok Province 10120\",\"Working position:\":\"Laborer\",\"Workplace:\":\"602/50 Soi Sathu Pradit 48, Sathu Pradit Road, Bang Phong Phang Subdistrict, Yannawa District, Bangkok Province 10120\",\"Allowed to work from:\":\"14 February 2023\",\"Job description:\":\"Other\",\"Up to date:\":\"13 February 2024\",\"Hospitals that were inspected Health:\":\"-\",\"Type of treatment rights:\":\"Social security\",\"Health insurance period:\":\"-\",\"Hospital:\":\"-\",\"Expiration date:\": \"-\",\"Recorder/Editor:\":\"Pongsawat Phuangdet\",\"Date recorded/edited:\":\"15 December 2022\"}",
  "translatedInformation": "{\"Receipt number (No.):\":\"WP-RN-65-0110129\",\"Alien ID:\":\"6591000409862\",\"Name of Applicant:\":\"Miss Saw Sin Pure\",\"Date (Date):\":\"15 December. 2022\",\"Registrar (Register):\":\"Pairot Chotikasathien\",\"Permit Status:\":\"Work Permit has been printed\",\"Thai Name:\":\"Miss Saw Sin Phyo\",\"Day/Month/Year (B.E.) Birth:\": \"March 7, 1995\",\"Nationality:\":\"MYANMAR\",\"First name-Surname Father:\":\"-\",\"Residence:\":\"602/50 Soi Sathu Pradit 48, Sathu Pradit Road, Bang Phong Phang Subdistrict, Yannawa District, Bangkok Province 10120\",\"Issued at the province:\":\"Employment office Bangkok Area 1\",\"License number:\":\"1001644005650\",\"English name:\":\"MISS. SWE ZIN PHYO\",\"Age:\":\"27\",\"Status:\":\"-\",\"First Name-Surname Mother:\":\"-\",\"Follower:\":\"None\",\"Passport number:\":\"MG250247\",\"Place of issue:\":\"BANGKOK\",\"Passport issue date:\":\" 16 September 2022\",\"Visa Number:\":\"54975/65\",\"Issued Date:\":\"28 October 2022\",\"Passport Type:\":\"Passport\",\"Country of issue :\":\"Thai\",\"Expiration date:\":\"15 September. 2027\",\"Valid until:\":\"13 February. 2023\",\"Employer identification number:\":\"0105524011056\",\"Employer name /Establishment:\":\"V.T. Garment Company Limited\",\"Business Type:\":\"BT15 - Produce or sell ready-made shirts\",\"Office Location:\":\"602/50 Soi Sathu Pradit 48 Sathu Pradit Road, Bang Phong Phang Subdistrict, Yannawa District, Bangkok Province 10120\",\"Working position:\":\"Laborer\",\"Workplace:\":\"602/50 Soi Sathu Pradit 48, Sathu Pradit Road, Bang Phong Phang Subdistrict, Yannawa District, Bangkok Province 10120\",\"Allowed to work from:\":\"14 February 2023\",\"Job description:\":\"Other\",\"Up to date:\":\"13 February 2024\",\"Hospitals that were inspected Health:\":\"-\",\"Type of treatment rights:\":\"Social security\",\"Health insurance period:\":\"-\",\"Hospital:\":\"-\",\"Expiration date:\": \"-\",\"Recorder/Editor:\":\"Pongsawat Phuangdet\",\"Date recorded/edited:\":\"15 December 2022\"}"
}
```

### SAMPLE URL

- https://alien13febrenewal.doe.go.th/workpermit_dopa?alien_key=xxxxxxx (Where xxxxxxx is the alien key for the workpermit) - To get this url, you will need to scan the QR code on the workpermit card
