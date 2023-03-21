const getQuiz = () =>
  new Promise((resolve) => {
    let index = 1;
    resolve([
      {
        no: index++,
        questionType: false,
        script: "",
        title: "ผลลัพธ์ของสมการด้านล่าง คืออะไรอธิบายตามหลักคณิตศาสตร์?",
        answer: "",
        language: "",
        mermaid: ``,
        code: `
                    var result =  10%5+2*2-1;
               `,
        markdown: `
               `,
      },
      {
        no: index++,
        questionType: true,
        script: "",
        title: "จงสร้าง Code ตาม Class Diagram นี้",
        answer: "",
        language: "typescript",
        mermaid: `classDiagram
                Animal <|-- Duck
                Animal <|-- Fish
                Animal <|-- Zebra
                Animal : int age
                Animal : String gender
                Animal: isMammal()
                Animal: mate()
                class Duck{
                    String beakColor
                    swim()
                    quack()
                }
                class Fish{
                    int sizeInFeet
                    canEat()
                }
                class Zebra{
                    boolean is_wild
                    run()
                }`,
        code: ``,
        markdown: `##### เขียน Code ด้วย JavaScript,TypeScript,C#,Java หรือ Python ภาษาตามที่คุณสะดวก`,
      },
      {
        no: index++,
        questionType: false,
        script: "",
        title: `ช่วยอธิบายในมุมมองการสร้าง Software ให้สามารถดูแลได้ในระยะยาว`,
        answer: "",
        language: "typescript",
        mermaid: ``,
        code: ``,
        markdown: `###อธิบายตามความเข้าใจ`,
      },
      {
        no: index++,
        questionType: false,
        script: "",
        title: `คุณเคยอ่านเอกสาร เกี่ยวกับการพัฒนา Software เรื่องอะไรล่าสุด (ระหว่างเรียนหรือหลังจากเรียนก็ได้)`,
        answer: "",
        language: "",
        mermaid: ``,
        code: ``,
        markdown: `และอธิบายตามความเข้าใจ ที่คุณได้อ่านเรื่องนั้นมาว่ามันเกี่ยวกับอะไร`,
      },
      {
        no: index++,
        questionType: true,
        script: ``,
        title: `จงเขียนโปรแกรมจากโครงสร้างตัวอย่าง โดยใช้หลักการของ Linked List ในการหาผลรวมของ value.`,
        answer: "",
        language: "typescript",
        mermaid: `graph LR;
            11-->19;
            19-->32;
            32-->64;
            64-->128;
        `,
        code: `const LinkedList = [
{
  value: '11',
  id: 1,
  next_id: 2
},          
.........
]`,
        markdown: `##### เขียน Code ด้วย JavaScript,TypeScript,C#,Java หรือ Python ภาษาตามที่คุณสะดวก`,
      },
      {
        no: index++,
        questionType: true,
        script: "",
        title: `เขียนโปรแกรมเพื่อทำงานตาม Flowchart นี้เพื่อหามูลค่าของกำนัลที่ลูกค้าควรจะได้รับ และพนักงานสามารถแจ้ง มูลค่าของ Gift Voucher และ Special Offer ได้`,
        answer: "",
        language: "typescript",
        mermaid: `flowchart TD
    A[Customer] -->|Pay_money as Number| B(Company Staff)
    B --> C{Calculate Price}
    C -->|<1000USD| D[Standard]
    C -->|>=1000<=1200USD| E[Luxury]
    C -->|>1200USD| F[Emerald]
    D -->|30USD| H[Give Voucher]
    E -->|40USD| H[Give Voucher]
    F -->|50USD| H[Give Voucher]
    D -->|30USD| G[Special Offer]
    E -->|40USD| G[Special Offer]
    F -->|50USD| G[Special Offer]
    H -->|Give Voucher| I[Result Value]
    G -->|Special Offer| I[Result Value]
  `,
        code: ``,
        markdown: `##### เขียน Code ด้วย JavaScript,TypeScript,C#,Java หรือ Python ภาษาตามที่คุณสะดวก`,
      },
      {
        no: index++,
        questionType: true,
        script: "",
        title: `จากรูปตัวอย่างด้านล่าง จงเขียน HTML และ CSS ให้เป็นตามรูปตัวอย่างโดยใช้ Flexbox หรือ Grid ในการจัดวาง`,
        answer: "",
        language: "html",
        mermaid: `flowchart TD

  `,
        code: ``,
        markdown: `![image info](https://i.ibb.co/ck2097n/image.png)`,
      },
    ]);
  });

module.exports = {
  getQuiz,
};
