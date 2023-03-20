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
        markdown: `##### เขียน Code ด้วย JavaScript,C#,Java หรือ Python ภาษาตามที่คุณสะดวก`,
      },
      {
        no: index++,
        questionType: false,
        script: "",
        title: `ช่วยอธิบายในมุมมองการสร้าง Software ให้สามารถดูแลได้ในระยะยาว`,
        answer: "",
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
        markdown: `
          
        `,
      },
      {
        no: index++,
        questionType: true,
        script: "",
        title: `เขียนโปรแกรมเพื่อทำงานตาม Flowchart นี้`,
        answer: "",
        mermaid: `flowchart TD
    A[Customer] -->|Pay_money as Number| B(Company Staff)
    B --> C{Calculate Price}
    C -->|<1000USD| D[Laptop]
    C -->|=1000USD| E[iPhone]
    C -->|>1000USD| F[fa:fa-car Car]
    D -->|30USD Fixed cost| H[Packaging]
    E -->|40USD Fixed cost| H[Packaging]
    F -->|50USD Fixed cost| H[Packaging]
    D -->|30USD Fixed cost| G[Shipping]
    E -->|40USD Fixed cost| G[Shipping]
    F -->|50USD Fixed cost| G[Shipping]
    H -->|Packaging Cost| I[Result Cost]
    G -->|Logistic Cost| I[Result Cost]
  `,
        code: ``,
        markdown: ``,
      },
    ]);
  });

module.exports = {
  getQuiz,
};
