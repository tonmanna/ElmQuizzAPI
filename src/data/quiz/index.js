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
        questionType: false,
        script: "",
        title:
          "หลังจากรันคำสั่งด่านล่างนี้ค่าของ z มีค่าเป็นอะไรและอธิบายตามความเข้าใจของสิ่งที่เกิดขึ้น?",
        answer: "",
        mermaid: ``,
        code: `

                let p = +"30"+12;
                console.log(p)
                let x = 1 + "2";
                let y = +"30"+0;
                let z = x + y;
                console.log(z);
               `,
        markdown: `
              `,
      },
      {
        no: index++,
        questionType: true,
        script: "",
        title:
          "เขียนโปรแกรมที่คิดว่า ซับซ้อนที่สุด ที่จะทำให้ตัวแปร result เป็นตัวพิมพ์เล็กทั้งหมด?",
        answer: "",
        mermaid: ``,
        code: `
                    let result = 'Hello World';
               `,
        markdown: `
               `,
      },
      {
        no: index++,
        questionType: false,
        script: "",
        title:
          "หลังจากรันโค้ดต่อไปนี้ ข้อความใดจะพิมพ์บน console และอธิบายตามความเข้าใจ?",
        answer: "",
        mermaid: ``,
        code: `
                    const fruits = ["apple", "banana", "strawberry"];
                    fruits
                        .filter((fruit)=> fruit.length > 5)
                        .forEach((fruit)=> {
                            console.log(fruit);
                        })
               `,
        markdown: `
               `,
      },
      {
        no: index++,
        questionType: false,
        script: "",
        title:
          "จงอธิบายการหลักทำงานของ async , await function ของ JAVASCRIPT ว่าทำงานอย่างไร?",
        answer: "",
        mermaid: ``,
        code: `
async function getData(){
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve("DATA");
    },1000);
  });
}        
async function asyncJob() {
    console.log("Fetching");
    await getData();
    console.log("Fetched");
}
await asyncJob();
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
        markdown: `##### เขียน Code ด้วย JavaScript,C#,Java หรือ Python ตามที่คุณสะดวก`,
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
        markdown: `และอธิบายตามความเข้าใจ ที่คุณได้อ่านเรื่องนั้นมาว่ามันเกี่ยวกับอะไรแ`,
      },
      {
        no: index++,
        questionType: true,
        script: "",
        title: `จงเขียนโปรแกรม เพื่อนำเลขฐาน  10 มาแปลงเป็น ฐาน 5 หลังจาก เรียกคำสั่งนี้ผลลัพธ์จะเป็น ตามสมการนี้ (getBase5Number(13) === 23) === true`,
        answer: "",

        mermaid: ``,
        code: `
        function getBase5Number(number) {
          // Write your code here
        }
        if(getBase5Number(13) === 23){
          console.log("SUCCESS");
        }else{
          console.log("FAILED");
        }
        `,
        markdown: `อาจแสดงการทดสอบผ่าน console.log ได้ และทดสอบกำเลขฐาน 10 อื่นๆ ได้`,
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
{
  value: '19',
  id: 2,
  next_id: 3
},
{
  value: '32',
  id: 3,
  next_id: 4
},            
.........
]`,
        markdown: `
          
        `,
      },
    ]);
  });

module.exports = {
  getQuiz,
};
