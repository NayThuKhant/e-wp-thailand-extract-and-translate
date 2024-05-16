const versions =
  {
    version1: {
      pattern: "^https:\\/\\/alien13febrenewal\\.doe\\.go\\.th\\/workpermit_dopa\\?alien_key=[a-zA-Z0-9]+$",
      fields: [
        "ชื่อภาษาอังกฤษ",
        "เลขที่หนังสือเดินทาง",
        "ชื่อนายจ้าง/สถานประกอบการ",
        "ที่ตั้งสำนักงาน",
        "วันที่ (Date)",
        "วัน/เดือน/ปี (พ.ศ.) เกิด",
        "ที่อยู่อาศัย",
        "สถานที่ออกหนังสือ",
        "วันที่ออกหนังสือเดินทาง",
        "ออกให้วันที่",
        "อนุญาตให้ทำงานตั้งแต่วันที่",
        "สถานภาพ",
        "ใช้ได้ถึงวันที่",
        "ถึงวันที่",
        "วันหมดอายุ",
        "ชื่อนายจ้าง หรือ สถานที"
      ],
      callback: function($) {
        $('td.pe-3').each((_index, element) => {
          const key = $(element).text().trim();
          const value = $(element).next('td').text().trim();
          if (key) {
            const index = this.fields.findIndex(k => key.includes(k));
            if (index !== -1) {
              this.originalInformation[this.fields[index]] = value;
            }
          }
        });
        return this.originalInformation;
      },
    },
    version2: {
      pattern: "^https:\\/\\/e-workpermit\\.doe\\.go\\.th\\/CLMV-WEB\\/checkform\\.php\\?rid=\\d+&type=\\d+&alid=\\d+&printdate=\\d+&token=[a-f\\d]+$",
      fields: [
        "ชื่อภาษาอังกฤษ",
        "เลขที่หนังสือเดินทาง",
        "ชื่อนายจ้าง/สถานประกอบการ",
        "ที่ตั้งสำนักงาน",
        "วันที่ (Date)",
        "วัน/เดือน/ปี (พ.ศ.) เกิด",
        "ที่อยู่อาศัย",
        "สถานที่ออกหนังสือ",
        "วันที่ออกหนังสือเดินทาง",
        "ออกให้วันที่",
        "อนุญาตให้ทำงานตั้งแต่วันที่",
        "สถานภาพ",
        "ใช้ได้ถึงวันที่",
        "ถึงวันที่",
        "วันหมดอายุ",
        "ชื่อนายจ้าง หรือ สถานที"
      ],
      callback: function($) {
        $('.row').each((_index, row) => {
          const keyElement = $(row).find('.col-md-12.htitle');
          const valueElement = $(row).next('.row').find('.col-md-12');

          const key = keyElement.text().trim();
          const value = valueElement.text().trim();
          if (key) {
            const index = this.fields.findIndex(k => key.includes(k));
            if (index !== -1) {
              this.originalInformation[this.fields[index]] = value;
            }
          }

        });

        return this.originalInformation;
      }
    },
  };


module.exports = {versions}

