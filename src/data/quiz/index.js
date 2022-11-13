const getQuiz = () =>
  new Promise((resolve) => {
    resolve([
      {
        no: 1,
        questionType: false,
        script: "",
        title:
          "หลังจากรันโค้ดต่อไปนี้ สิ่งใดจะพิมพ์ไปบน console และอธิบายตามความเข้าใจ?",
        answer: "",
        mermaid: ``,
        code: `
                    var x= 5;
                    const foo = {
                        x: 100,
                        getX() {
                            return this.x;
                        }
                    };
                    const bar = {
                        x: 20
                    };
                    bar.getX = foo.getX;
                    console.log(bar.getX());
              `,
        markdown: ` 
              `,
      },
      {
        no: 2,
        questionType: false,
        script: "",
        title:
          "หลังจากรันโค้ดต่อไปนี้ ข้อความใดจะพิมพ์บน console และอธิบายตามความเข้าใจ?",
        answer: "",
        mermaid: ``,
        code: `
                    const basket = {
                        apple: 2,
                        banana: 4,
                        orange: 6,
                        strawberry: 8
                    }
                    for (const fruit in basket) {
                        console.log(fruit);
                    }
               `,
        markdown: ` 
               `,
      },
      {
        no: 3,
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
        no: 4,
        questionType: false,
        script: "",
        title: "ค่าของ z คืออะไร และอธิบายตามความเข้าใจ?",
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
        no: 5,
        questionType: false,
        script: "",
        title: "คำสั่งใดมีผลทำให้ตัวแปร result เป็นตัวพิมพ์เล็กทั้งหมด  ?",
        answer: "",
        mermaid: ``,
        code: `
                    let result = 'Hello World';
               `,
        markdown: `
               `,
      },
      {
        no: 6,
        questionType: false,
        script: "",
        title: "คำสั่งที่ใช้สำหรับการขึ้นบรรทัดใหม่ในสตริง?[TS,JS]",
        answer: "",
        mermaid: ``,
        code: `
               `,
        markdown: `
               `,
      },
      {
        no: 7,
        questionType: false,
        script: "",
        title:
          "หลังจากรันโค้ดต่อไปนี้ ข้อความใดจะพิมพ์บน console และอธิบายตามความเข้าใจ?",
        answer: "",
        mermaid: ``,
        code: `
                    const fruits = ["apple", "banana", "strawberry"];
                    fruits
                        .map((fruit)=> "amazing " + fruit)
                        .forEach((fruit)=> {
                            console.log(fruit);
                        })
               `,
        markdown: `
               `,
      },
      {
        no: 8,
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
        no: 9,
        questionType: false,
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
        no: 10,
        questionType: false,
        script: "",
        title: "จงอธิบายการทำงานของ async , await function ของ JAVASCRIPT",
        answer: "",
        mermaid: ``,
        code: `
async function getData(){
  setTimeout(()=>{
    console.log("DATA")
  },1000);
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
        no: 11,
        questionType: false,
        script: "",
        title: "ค่าของ x และ y คืออะไร และอธิบายตามความเข้าใจ?",
        answer: "",
        mermaid: ``,
        code: `
                    let x,[y,z] = [36,1];
               `,
        markdown: `
               `,
      },
      {
        no: 12,
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
        markdown: `##### เขียน Code ด้วย JavaScript`,
      },
      {
        no: 13,
        questionType: false,
        script: "",
        title: `ช่วยอธิบายในมุมมองการสร้าง Software ให้สามารถดูแลได้ในระยะยาว`,
        answer: "",
        mermaid: ``,
        code: ``,
        markdown: `อธิบายตามความเข้าใจ`,
      },
      {
        no: 14,
        questionType: true,
        script: "",
        title: `จงเขียนโปรแกรม เพื่อนำค่า Array ให้เหลือเพียงตัวที่ไม่ซ้ำกัน เช่น จาก [1,2,3,4,5,1,12,13,14,15] จะได้ [2,3,4,5,12,13,14,15]`,
        answer: "",
        mermaid: ``,
        code: ``,
        markdown: `
          const array = [1,2,3,4,5,1,12,13,14,15]
        `,
      },
      {
        no: 15,
        questionType: true,
        script: ``,
        title: `จงเขียนโปรแกรมเพื่อให้สามารถ แสดงผลรวมของ Value ใน Linked List จากโครงสร้างตัวอย่าง และแสดงค่าออกมาทุกครั้งที่มีการ`,
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
