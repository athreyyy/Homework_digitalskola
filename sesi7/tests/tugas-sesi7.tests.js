import fetch from "node-fetch"
import Ajv from "ajv";

describe ("API Tests Suite", function (){
    const baseURL = "https://reqres.in";

    it("CREATE - New Books", async function() {
        const newPost = {
            book_id: "102",
            title: "Just Test",
            status: "Published"
        };

        const response = await fetch(`${baseURL}/api/users`, {
        method: "POST",
            headers:{ "Content-Type": "application/json" },
            body: JSON.stringify(newPost),
        });
        
    });

    it("READ - Get single user", async function (){
        const response = await fetch(`${baseURL}/api/users?page=2`);
    });

    const ajv = new Ajv()
    const data = await response.json();
    const cekhasil = ajv.compile(schema_newbook);
    const hasil_validasi = cekhasil(data)

    expect(hasil_validasi, 'validasi json ada yang salah').to.be.true;
});