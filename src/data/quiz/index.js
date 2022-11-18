const getQuiz = () =>
  new Promise((resolve) => {
    resolve([
      {
        questionType: false,
        script: "",
        title: "ผลลัพธ์ของ 10%5 คืออะไร และอธิบายตามความเข้าใจ?",
        answer: "",
        mermaid: ``,
        code: `
                    var result =  10%5;
               `,
        markdown: `
               `,
      },
      {
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
        questionType: true,
        script: "",
        title:
          "คำสั่งใด ทำให้สามารถพิมพ์ชื่อและนามสกุลไปที่ console ได้ และอธิบายตามความเข้าใจ?",
        answer: "",
        mermaid: ``,
        code: `
                    let person = {
                        firstName: "Worawut",
                        lastName: "Boonton",
                        fullName: function() {
                            return this.firstName + " " + this.lastName;
                        }
                    };
                `,
        markdown: `
                `,
      },
      {
        questionType: false,
        script: "",
        title: "จงอธิบายการหลักทำงานของ async , await function ของ JAVASCRIPT",
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
        questionType: false,
        script: "",
        title: `ช่วยอธิบายในมุมมองการสร้าง Software ให้สามารถดูแลได้ในระยะยาว`,
        answer: "",
        mermaid: ``,
        code: ``,
        markdown: `###อธิบายตามความเข้าใจ`,
      },
      {
        questionType: true,
        script: "",
        title: `จงเขียนโปรแกรม เพื่อนำค่าจาก Array ให้เหลือเพียงตัวที่ไม่ซ้ำกัน โดยถ้าหากมีเลขที่ซ้ำกัน ให้นำเลขนั้นออกจากรายการ โดยข้อมูล
         จาก [1,2,13,4,15,1,12,3,14,5] จากนั้นทำการเรียงลำดับจากน้อยไปมาก [2,3,4,5,12,13,14,15]`,
        answer: "",
        mermaid: ``,
        code: `
          const array = [1,2,3,4,5,1,12,13,14,15]`,
        markdown: ``,
      },
      {
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
