const getQuiz = () =>
  new Promise((resolve) => {
    let index = 1;
    resolve([
      {
        no: index++,
        questionType: false,
        script: "",
        title: "จุดประสงค์ของการทำการ Manual Testing คืออะไร",
        answer: "",
        language: "",
        mermaid: ``,
        code: ``,
        markdown: `
               `,
      },
      {
        no: index++,
        questionType: false,
        script: "",
        title:
          "หากเทียบกันแล้วการทดสอบ Manual Testing และ Automation Testing มีข้อดีข้อเสียอย่างไรบ้าง",
        answer: "",
        language: "",
        mermaid: ``,
        code: ``,
        markdown: `
               `,
      },
      {
        no: index++,
        questionType: false,
        script: "",
        title: "ทำไมเราต้องออกแบบการทดสอบจึงเป็นสิ่งสำคัญ (Test Plan)",
        answer: "",
        language: "",
        mermaid: ``,
        code: ``,
        markdown: `
               `,
      },
      {
        no: index++,
        questionType: false,
        script: "",
        title:
          "ลองจินตนาการว่าคุณกำลังทดสอบแอปพลิเคชันซอฟต์แวร์ที่มีปัญหาและมีบัคจำนวนมากและบ่อยครั้ง คุณจะใช้ขั้นตอนใดในการแก้ปัญหา และแยกแยะปัญหา",
        answer: "",
        language: "",
        mermaid: ``,
        code: ``,
        markdown: `
               `,
      },
      {
        no: index++,
        questionType: false,
        script: "",
        title:
          "ช่วยอธิบายเวลาที่คุณพบจุดบกพร่อง ที่ยากต่อการทำซ้ำ (Hard to Reproduce) คุณจะดำเนินการตรวจสอบปัญหาอย่างไร และคุณใช้ขั้นตอนใดในการค้นหาต้นตอของปัญหา",
        answer: "",
        language: "",
        mermaid: ``,
        code: ``,
        markdown: `
               `,
      },
      {
        no: index++,
        questionType: false,
        script: "",
        title:
          "สำหรับคุณแล้วอะไรสำคัญที่สุดในการจัดทำเอสารในการทำ Manual Testing",
        answer: "",
        language: "",
        mermaid: ``,
        code: ``,
        markdown: `
               `,
      },
      {
        no: index++,
        questionType: false,
        script: "",
        title:
          "คุณจะรับมือกับ ผู้ใช้และทีมงานที่มีส่วนได้ส่วนเสียกับระบบ ที่ไม่พอใจกับผลการทดสอบของคุณ จะใช้อะไรเพื่อจัดการกับข้อกังวลของพวกเขา",
        answer: "",
        language: "",
        mermaid: ``,
        code: ``,
        markdown: `
               `,
      },
      {
        no: index++,
        questionType: false,
        script: "",
        title:
          "หากคุณต้องทำการทดสอบ Application ในโครงการใหม่ๆ ที่คุณไม่เคยเห็นมาก่อน คุณจะจัดการกับงานที่ได้รับมอบหมายยังไง",
        answer: "",
        language: "",
        mermaid: ``,
        code: ``,
        markdown: `
               `,
      },
    ]);
  });

module.exports = {
  getQuiz,
};
